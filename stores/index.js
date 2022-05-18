/**
 * 💾 Create a script file like this "index.js" inside the "stores" folder
 * for each store you want to use. This one is intended to be used as a "main"
 * store to manage the general application state, for example: user session, theme, etc.
 */
import { defineStore } from 'pinia'
export const useStore = defineStore('store', {
    state: () => 
    { 
      return {
        session: {
          userIsLoggedIn: false
        }
      }
    },
    /**
     * 💪 This is needed to PERSIST your store values. 
     * Otherwise they will be lost when you refresh the page.
     * */ 
    persist: {
      enabled: true,
      strategies: [
      {
        key: 'store',
        storage: localStorage, // or sessionStorage
      },
      ],
    },
    getters: {
      userIsLoggedIn(state) {
        return state.session.userIsLoggedIn
      }
    },
    actions: {
      setUserLoggedIn() {
        this.session.userIsLoggedIn = true;
      },
      setUserLoggedOut() {
        this.session.userIsLoggedIn = false;
      }
    }
})