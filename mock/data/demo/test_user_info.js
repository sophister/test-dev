/**
 * 模拟对外暴露自定义response函数，同时可以明确指定要要绑定的http 方法（GET/POST）默认是GET
 * Created by Jess on 2018/3/28.
 */

'use strict';


function userInfo(req, res, next){
  res.json({
    status: 0,
    message: 'ok',
    data: {
      user: {
        name: 'huaxia',
        id: 2,
        gender: 'male'
      },
      location: {
        city: 'Beijing'
      }
    }
  });
}


module.exports = {
  //可以通过对外暴露明确的method，来指定监听的http 方法
  $method: 'get',
  //实际执行的函数
  $fn: userInfo
};
