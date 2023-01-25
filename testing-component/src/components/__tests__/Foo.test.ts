import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import Foo from "./components/Foo.vue";

describe("Foo", () => {
  it("should render properly", () => {
    const wrapper = mount(Foo);
    expect(wrapper.find("h1").exists()).toBe(true);
    expect(wrapper.find('input[type="text"]').exists()).toBe(true);
    expect(wrapper.find("button").exists()).toBe(true);
  });
  it("should change message", async () => {
    const wrapper = mount(Foo);
    await wrapper.find('input[type="text"]').setValue("learnVue");
    await wrapper.find("button").trigger("click");
    expect(wrapper.find("h1").text()).toEqual("learnVue");
  });
});
