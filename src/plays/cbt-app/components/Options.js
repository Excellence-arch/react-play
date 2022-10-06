import React from "react";
import Radio from "./Radio";

const Options = ({ allOptions }) => {
  return (
    <>
      <Radio name={allOptions._id} value={`${allOptions.optionA}`} />
      <Radio name={allOptions._id} value={`${allOptions.optionB}`} />
      <Radio name={allOptions._id} value={`${allOptions.optionC}`} />
      <Radio name={allOptions._id} value={`${allOptions.optionD}`} />
    </>
  );
};

export default Options;
