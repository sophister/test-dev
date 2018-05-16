/**
 * 覆盖默认的 路由 规则，自定义路由
 * Created by Jess on 2018/3/28.
 */

'use strict';



module.exports = {

  $route: '/this/is/bad/:name',

  $fn: function(req, res, next){
    res.json({
      status: -1,
      message: '这是覆盖了默认的route规则，**不建议** 这样做',
      data: {
        requestName: req.params.name,
        obj: {
          age: 90,
          number: 11,
          test: {
            b: true,
            c: 'hello mock for vue-cli'
          }
        }
      }
    });
  }
};
