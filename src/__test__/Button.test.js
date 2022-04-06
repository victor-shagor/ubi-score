import Button from "components/Button";
import { shallow, mount } from "enzyme";
import toJson from "enzyme-to-json";

const mockProp = { text: "Name", width: "50px", bgColor: "blue" };

it("renders without crashing", () => {
  shallow(<Button />);
});

it("should render span", () => {
  const wrapper = mount(<Button {...mockProp} />);
  const value = wrapper.find("button").text();
  expect(value).toEqual("Name");
});

it("renders correctly", () => {
  const tree = shallow(<Button {...mockProp} />);
  expect(toJson(tree)).toMatchSnapshot();
});
