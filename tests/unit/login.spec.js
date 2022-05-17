import { mount } from "@vue/test-utils";
import { createTestingPinia } from '@pinia/testing'
import * as routerMock from '../routerMock'
import Login from "@/pages/Login";

beforeEach(() => {
    jest.resetAllMocks();
    routerMock.injectRouter();
});

const mountComponent = () => {
  return mount(Login, {
    global: {
      plugins: [createTestingPinia()]
    }})
}

describe("Login Suite", () => {
    it("should redirect to home page after login", () => {
      // 🧗🏻‍♂️ Mount the Login component 
      const wrapper = mountComponent()
      // 🚨 Simulate login button clicked
      wrapper.find('#btn-login').trigger('click');
      expect(wrapper.vm.$router.push).toHaveBeenCalledWith('/');
    });
});