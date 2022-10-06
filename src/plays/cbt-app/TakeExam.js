import React, { Fragment, useEffect, useState } from "react";
import axios from "axios";
import Options from "./components/Options";
import Question from "./components/Question";
import Button from "./components/Button";

const TakeExam = () => {
  const url = "";
  const [questions, setQuestions] = useState([]);
  const [i, setI] = useState(0);
  const [error, setError] = useState(false);
  const [isloading, setIsloading] = useState(true);
  const [disablePrevious, setDisablePrevious] = useState(false);
  const [disableNext, setDisableNext] = useState(false);

  useEffect(() => {
    setError(false);
    axios
      .get(url)
      .then((res) => {
        setIsloading(false);
        if (res.data.status === 200) {
          setQuestions(res.data.message);
        } else {
          setError(res.data.message);
        }
      })
      .catch((err) => {
        setError(err.message);
      });
  }, []);

  useEffect(() => {
    if (i === 0) {
      setDisablePrevious(true);
    }
    if (i === questions.length - 1) {
      setDisableNext(true);
    }
  });

  const previous = () => {
    setI(i - 1);
  };

  const next = () => {
    setI(i + 1);
  };

  return (
    <>
      {error && <div className="alert alert-danger text-danger">{error}</div>}
      {isloading ? (
        <div className="spinner-border"></div>
      ) : (
        <Fragment>
          <Question question={questions[i]} i={i + 1} />
          <Options allOptions={questions[i]} />
          <Button
            name="Previous"
            color="primary"
            disabled={disablePrevious}
            handleClick={previous}
          />
          <Button
            name="Next"
            color="primary"
            disabled={disableNext}
            handleClick={next}
          />
        </Fragment>
      )}
    </>
  );
};

export default TakeExam;
