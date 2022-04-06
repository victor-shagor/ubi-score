import React from "react";
import LeftPanel from "components/auth/leftPanel";
import RightPanel from "components/auth/ThankYou";

const ThankYou = () => {
  return (
    <div style={{ display: "flex" }}>
      <LeftPanel
        name="Jerome Bell"
        role="Product Designer"
        text="“Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit”"
      />
      <RightPanel />
    </div>
  );
};

export default ThankYou;
