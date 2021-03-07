import pouchProxy from './proxy'
import pouchMixin from './mixin'

const install = function (app, { defaultDB = "", constructor = ""} = {} ) {
  if (defaultDB) pouchProxy.defaultDB = defaultDB
  if (constructor) pouchProxy.Constructor = constructor;

  app.provide('$pouch', pouchProxy)

  //probably don't have this right - 
  //ref https://github.com/craigrileyuk/vue3-mq/blob/main/src/index.js

  app.mixin({
    pouchMixin
  })
}

export default {
  install
}

// export default {
//   install: (Vue, defaultDB, constructor) => {
//     if (defaultDB) pouchProxy.defaultDB = defaultDB
//     if (constructor) pouchProxy.Constructor = constructor;

//     Vue.prototype.$pouch = pouchProxy;
//     Vue.mixin(pouchMixin);
//   }
// }

