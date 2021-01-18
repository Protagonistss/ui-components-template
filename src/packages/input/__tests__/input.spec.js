import { shallowMount } from "@vue/test-utils";
import Input from "../src/input.vue";

describe("input.vue", () => {
  it("foo value", async () => {
    const wrapper = shallowMount(Input);
    expect(wrapper.vm.foo).toBe("foo");
  });
});
