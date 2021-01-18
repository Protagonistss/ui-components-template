import { shallowMount } from "@vue/test-utils";
import * as Input from "../src/input.vue";

describe("input.vue", () => {
  it("foo value", async () => {
    const wrapper = shallowMount(Input);
    console.log("wrapper.props", wrapper.props);
  });
});
