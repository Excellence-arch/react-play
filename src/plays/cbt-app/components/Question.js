import React from "react";

const Question = ({ question, i }) => {
  return (
    <>
      <p>{i}</p>
      <p>{question.question}</p>
    </>
  );
};

export default Question;
