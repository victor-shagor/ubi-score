import LeftPanel from "components/auth/leftPanel";
import SignupForm from "components/auth/SignupForm";
import React from "react";

const Signup = () => {
  return (
    <div style={{ display: "flex" }}>
      <LeftPanel
        name="Jerome Bell"
        role="Product Designer"
        text="“Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit”"
      />
      <SignupForm />
    </div>
  );
};

export default Signup;
