/**
 * 🥷🏻 This script is used to mock the Vuex Router on the Vue instance while
 *    testing. 
 *    How to use: Call routerMock.injectRouter() in your spec beforeEach() zone.
 */

import { config } from "@vue/test-utils"
const {
    VueRouterMock,
    createRouterMock,
    injectRouterMock,
  } = require('vue-router-mock')


config.plugins.VueWrapper.install(VueRouterMock)

const injectRouter = () => {
    const router = createRouterMock()
    injectRouterMock(router)
}

export { injectRouter }



