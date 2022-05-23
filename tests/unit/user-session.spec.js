import { mount, flushPromises, createLocalVue } from "@vue/test-utils"
import { setActivePinia, createPinia } from "pinia"
import { useStore } from "@stores/index"
import * as routerMock from "../routerMock"
import UserSessionLink from "@components/UserSessionLink"

beforeEach(() => {
  jest.resetAllMocks()
  setActivePinia(createPinia())
  routerMock.injectRouter()
})

const mountComponent = () => {
  return mount(UserSessionLink)
}

describe("User Session Suite", () => {
  it("should expect a logged out store state", () => {
    // 🥷🏻 Setup
    const store = useStore()
    // ✨ Assert
    expect(store.session.userIsLoggedIn).toBe(false)
  })

  it("should expect a logged in store state", () => {
    // 🥷🏻 Setup
    const store = useStore()
    store.setUserLoggedIn(true)
    // ✨ Assert
    expect(store.session.userIsLoggedIn).toBe(true)
  })

  it("should redirect to home page after login", () => {
    // 🧗🏻‍♂️ Mount the Login component
    const wrapper = mountComponent()
    // 🚨 Trigger login button clicked
    wrapper.find("#btn-login").trigger("click")
    // ✨ Assert
    expect(wrapper.vm.$router.push).toHaveBeenCalledWith("/")
  })

  it("should redirect to login after logout", async() => {
    // 🥷🏻 Setup
    const store = useStore()
    store.setUserLoggedIn(true)
    // 🧗🏻‍♂️ Mount the Login component
    const wrapper = mountComponent()
    // 🚨 Trigger login button clicked
    wrapper.find("#btn-login").trigger("click")
    await flushPromises()
    // ✨ Assert
    expect(wrapper.vm.$router.push).toHaveBeenCalledWith("/login")
  })
})
