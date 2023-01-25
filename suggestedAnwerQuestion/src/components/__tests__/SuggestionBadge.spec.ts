import { mount, VueWrapper } from "@vue/test-utils";
import { beforeEach, describe, expect, it } from "vitest";
import SuggestionBadge from "../../components/SuggestionBadge.vue";
import CheckMark from "../../assets/CheckMark.vue";
import CrossMark from "../../assets/CrossMark.vue";

describe("SuggestionBadge", () => {
  let wrapper: VueWrapper;
  beforeEach(() => {
    wrapper = mount(SuggestionBadge, {
      props: {
        suggestion: {
          status: true,
          name: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam",
        },
      },
    });
  });

  it("should render correctly", () => {
    expect(wrapper.exists()).toBe(true);
  });

  it("should be awaiting the correct value of suggestion text", async () => {
    await wrapper.setProps({
      suggestion: {
        name: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam.",
      },
    });
    expect(wrapper.find("p").text()).toContain("Lorem ipsum dolor sit amet");
  });

  it("should be awaiting the checkMark component when prop have a boolean value true", async () => {
    await wrapper.setProps({
      suggestion: {
        status: true,
      },
    });
    expect(wrapper.findComponent(CheckMark).exists()).toBe(true);
  });

  it("should be awaiting the crossMark component when prop have a boolean value false", async () => {
    await wrapper.setProps({
      suggestion: {
        status: false,
        name: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam.",
      },
    });
    expect(wrapper.findComponent(CrossMark).exists()).toBe(true);
    expect(wrapper.find("p").text()).toContain(
      "Lorem ipsum dolor sit amet, consectetur"
    );
  });
});
