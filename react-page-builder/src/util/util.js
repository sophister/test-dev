/**
 *
 * Created by Jess on 2018/7/4.
 */

'use strict';

let index = 1;
function generateComponentId(){
  return `c-${Date.now()}-${index++}`;
}




export {
  generateComponentId,
};