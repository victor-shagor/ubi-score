import LeftPanel from "components/auth/leftPanel";
import { mount, shallow } from "enzyme";
import toJson from "enzyme-to-json";

const mockProp = { name: "Name", role: "Role", text: "text" };

it("renders without crashing", () => {
  shallow(<LeftPanel />);
});

it("should render span", () => {
  const wrapper = mount(<LeftPanel name="Name" role="role" />);
  const value = wrapper.find("span").text();
  expect(value).toEqual("role");
});

it("should render two paragraphs", () => {
  const wrapper = mount(<LeftPanel {...mockProp} />);
  expect(wrapper.find("p").length).toEqual(2);
});

it("should render header", () => {
  const wrapper = shallow(<LeftPanel {...mockProp} />);
  expect(wrapper.contains(<p className="makeStyles-name-4">Name</p>)).toEqual(
    true
  );
});

it("should accept props", () => {
  const wrapper = mount(<LeftPanel name="Name" />);
  expect(wrapper.props().name).toEqual("Name");
});

it("renders correctly", () => {
  const tree = shallow(<LeftPanel {...mockProp} />);
  expect(toJson(tree)).toMatchSnapshot();
});
