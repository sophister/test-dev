/**
 *
 * Created by Jess on 2018/7/4.
 */

'use strict';

import BuilderStore from './BuilderStore.js';
import componentFactory from './ComponentFactory.js';


const builderStore = new BuilderStore();


export default {
  builderStore,
  componentFactory,
};