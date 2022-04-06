import SignupForm from "components/auth/SignupForm";
import { mount, shallow } from "enzyme";
import toJson from "enzyme-to-json";
import { BrowserRouter as Router } from "react-router-dom";

it("renders without crashing", () => {
  shallow(
    <Router>
      <SignupForm />
    </Router>
  );
});

it("should render two paragraphs", () => {
  const wrapper = mount(
    <Router>
      <SignupForm />
    </Router>
  );
  expect(wrapper.find("p").length).toEqual(5);
});

it("should render two anchor tag", () => {
  const wrapper = mount(
    <Router>
      <SignupForm />
    </Router>
  );
  expect(wrapper.find("a").length).toEqual(2);
});

it("renders correctly", () => {
  const tree = shallow(
    <Router>
      <SignupForm />
    </Router>
  );
  expect(toJson(tree)).toMatchSnapshot();
});
