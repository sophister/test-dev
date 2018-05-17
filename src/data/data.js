/**
 *
 * Created by Jess on 2018/5/15.
 */

'use strict';

import NebPay from 'nebpay.js';


let contractAddress = 'n1jdGw5xciE4nUuJRgxsCcEHGe8syBDPEeL';

if( process.env.NODE_ENV !== 'production'){
  contractAddress = 'n1nYaGnyaer5GqAHXkRf86e7KEXAczh3KeW';
}

console.log(`contract addr: ${contractAddress}`);

const nebPay = new NebPay();

export function simulateCall(data){
  const callFunction = data.funcName;
  const callArgs = JSON.stringify(data.args || []);
  return new Promise( (resolve, reject) => {
    //使用nebpay的simulateCall接口去执行get查询, 模拟执行.不发送交易,不上链
    nebPay.simulateCall(contractAddress, '0', callFunction, callArgs, {
      listener: function(out){
        console.log(`simulateCall [${callFunction}] 返回结果：`, out);
        if(out.result){
          resolve( JSON.parse(out.result) );
        }else{
          reject(out);
        }
      }
    });
  });
}

export function call(data){
  const callFunction = data.funcName;
  const callArgs = JSON.stringify(data.args || []);
  return new Promise( (resolve, reject) => {
    //使用nebpay的simulateCall接口去执行get查询, 模拟执行.不发送交易,不上链
    nebPay.call(contractAddress, '0', callFunction, callArgs, {
      listener: function(out){
        console.log(`call [${callFunction}] 返回结果：`, out);

        if( typeof out === 'string' && out.indexOf('Error:') === 0){
          reject( new Error(out));
        }else{
          resolve(out);
        }
        // if(out.result){
        //   resolve(out.result);
        // }else{
        //   reject(out);
        // }
      }
    });
  });
}



