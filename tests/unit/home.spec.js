import { mount } from "@vue/test-utils";
import { createTestingPinia } from '@pinia/testing'
import * as routerMock from '../routerMock'
import Home from "@/pages/Home";

beforeEach(() => {
    jest.resetAllMocks();
    routerMock.injectRouter();
});

const mountComponent = () => {
  return mount(Home, {
    global: {
      plugins: [createTestingPinia()]
    }})
}

describe("Home Suite", () => {
    it("should redirect to login page after logout", () => {
      // 🧗🏻‍♂️ Mount the Home component 
      const wrapper = mountComponent()
      // 🚨 Simulate logout button clicked
      wrapper.find('#btn-logout').trigger('click');
      expect(wrapper.vm.$router.push).toHaveBeenCalledWith('/login');
    });
});