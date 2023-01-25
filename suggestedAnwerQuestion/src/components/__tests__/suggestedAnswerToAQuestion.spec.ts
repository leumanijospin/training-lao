import { mount, VueWrapper } from "@vue/test-utils";
import { beforeEach, describe, expect, it } from "vitest";
import SuggestedAnswerToAQuestion from "../SuggestedAnswerToAQuestion.vue";

describe("SuggestedAnswerToAQuestion", () => {
  let wrapper: VueWrapper;
  beforeEach(() => {
    wrapper = mount(SuggestedAnswerToAQuestion, {
      props: {
        answer: {
          title:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus porttitor?",
        },
      },
    });
  });
  it("should render correctly", () => {
    expect(wrapper.exists()).toBe(true);
  });

  it("should display the correct value for show the answers of question", async () => {
    expect(wrapper.find("span").text()).toBe("+");
    expect(wrapper.find("p").text()).toContain(
      "Lorem ipsum dolor sit amet, consectetur"
    );
  });

  it("should display the correct value for hide the answers of question", async () => {
    await wrapper.find("div").trigger("click");
    expect(wrapper.find("span").text()).toBe("-");
  });
});
