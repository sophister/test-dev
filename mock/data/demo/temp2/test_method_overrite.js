/**
 * 测试覆盖默认的 http 方法
 * Created by Jess on 2018/3/28.
 */

'use strict';



module.exports = {

  $method: 'post',

  $fn: {
    status: 0,
    message: 'should only respond to POST request',
    data: {
      submit: true,
      data: {
        insertId: 7625,
        context: {
          hehe: 'sfasfas'
        }
      }
    }
  }
};
