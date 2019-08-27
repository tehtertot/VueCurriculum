import { shallowMount } from "@vue/test-utils";
import Counter from "@/components/Counter.vue";

describe("Counter.vue", () => {
  it("displays the correct data in the header", () => {
    const wrapper = shallowMount(Counter);
    const header = wrapper.find("h1");
    expect(header.text()).toBe("0");
  });

  describe("increment button", () => {});
  describe("reset button", () => {});
});
