/**
 * 本地数据mock的server端入口，主要遍历 data 目录下的JS文件，构造 app.get/post 方法
 * Created by Jess on 2018/3/28.
 */

'use strict';

const path = require('path');
const fs = require('fs');


/**
 * 遍历某个目录，收集所有的mock数据
 * @param dirPath {string} 当前遍历的目录绝对路径
 * @param pathPrefix {string} URL中的path前缀
 * @returns {Array}
 */
function walk(dirPath, pathPrefix){
  let arr = [];

  let files = fs.readdirSync(dirPath);

  files.forEach( (file) => {
    const filePath = path.join(dirPath, file);
    const stat = fs.statSync(filePath);
    const pathInfo = path.parse(filePath);
    const fileName = pathInfo.name;
    if(stat.isFile() && /\.js$/.test(file) ){
      //处理JS文件
      let route = path.join(pathPrefix, fileName);
      let method = 'get';
      let fn = null;
      const obj = require(filePath);
      if( typeof obj === 'object' && ! obj.hasOwnProperty('$fn')){
        //简单的JSON对象
        fn = obj;
      }else if( typeof obj === 'function'){
        //暴露了一个函数
        fn = obj;
      }else{
        //复杂配置，可能自定义了 http方法、路由
        method = ( obj.$method || 'get').toLowerCase();
        route = obj.$route || route;
        fn = obj.$fn;
      }
      if( typeof fn !== 'function' ){
        //针对暴露出来的直接是JSON的情况
        fn = function(data){
          return function(req, res, next){
            res.json(data);
          };
        }(fn);
      }
      arr.push({
        $method: method,
        $route: route,
        $fn: fn
      });
    }else if( stat.isDirectory()){
      //递归目录
      arr = arr.concat( walk( path.join(dirPath, file), `${pathPrefix}/${fileName}`) );
    }
  });

  return arr;
}

const dataRootDir = path.resolve(__dirname, './data');
const mockList = walk(dataRootDir, '/');

console.log(`================== 当前找到的mock数据集为： ==================`);
console.log(mockList);


function mockMiddleware(app){
  app.get('/test/b4', function(req, res, next){
    res.json({
      status: 0,
      message: 'ok from mock server entry'
    });
  });

  /**
   * 递归的遍历 data 目录下的所有 .js 文件，根据 目录层次结构和最终的JS文件名，生成  /dir/path/to/jsFileName 的默认路由
   * 也可以修改默认路由，在 export.$route 中，返回当前JS文件要匹配的路由规则，可以覆盖默认的路由
   * 默认挂在 所有的http 方法，也可以在对应的JS文件中，明确 export.$method 指明要绑定的http方法
   *
   * JS文件 export 的内容，可以是以下几种情况：
   *
   * 1. 简单的JSON对象，会直接作为response返回的浏览器
   * 2. 返回一个function，在请求时，会直接调用 function(req, res, next) ，用户自己在内部response
   * 3. 返回一个 object，{ $method: [GET/POST], $route: '自定义路由规则', $fn: function(req, res, next){} } ，这个算是高级配置，允许自定义http 方法、自定义路由
   */

  mockList.forEach( (obj) => {
    app[obj.$method](obj.$route, obj.$fn);
  });
}


module.exports = mockMiddleware;

