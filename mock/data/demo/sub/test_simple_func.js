/**
 * 演示，直接 export 一个 function 的示例
 * Created by Jess on 2018/3/28.
 */

'use strict';



module.exports = function(req, res, next){
  res.json({
    status: 0,
    message: 'ok',
    data: {
      hi: '演示export纯函数的示例',
      num: 76
    }
  });
};


