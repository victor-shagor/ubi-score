import { mount, shallow } from "enzyme";
import toJson from "enzyme-to-json";
import ThankYou from "components/auth/ThankYou";

it("renders without crashing", () => {
  shallow(<ThankYou />);
});

it("should render two paragraphs", () => {
  const wrapper = mount(<ThankYou />);
  expect(wrapper.find("p").length).toEqual(3);
});

it("should render two paragraphs", () => {
  const wrapper = mount(<ThankYou />);
  expect(wrapper.find("a").length).toEqual(1);
});

it("renders correctly", () => {
  const tree = shallow(<ThankYou />);
  expect(toJson(tree)).toMatchSnapshot();
});
