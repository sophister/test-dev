/**
 * 这个demo，给出export一个纯JSON的简单示例
 * Created by Jess on 2018/3/28.
 */

'use strict';



module.exports = {
  status: 0,
  message: 'ok',
  data: {
    plainObject: true,
    simpleCase: 'yes',
    obj: {
      name: 'testName',
      age: 99
    }
  }
};

