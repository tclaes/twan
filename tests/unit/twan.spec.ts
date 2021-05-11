import { mount } from "@vue/test-utils";
import Twan from "@/elements/Twan.vue";

describe("Splash Test", () => {
  it("should contain components", async () => {
    // render the component
    const wrapper = mount(Twan);

    expect(wrapper.exists()).toBe(true);
    expect(wrapper.attributes().id).toBe("twan");

    const h1 = wrapper.find("h1");
    expect(h1.exists()).toBe(true);
    expect(h1.classes("uppercase")).toBe(true);

    const h2 = wrapper.find("h2");
    expect(h2.exists()).toBe(true);
    expect(h2.classes("uppercase")).toBe(true);
  });
});
