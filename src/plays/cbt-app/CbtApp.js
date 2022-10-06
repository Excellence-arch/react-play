import { useState } from "react";
import PlayHeader from "common/playlists/PlayHeader";
import { useLocation, useNavigate } from "react-router-dom";
import Button from "./components/Button";
import Login from "./Login";

const CbtApp = (props) => {
  const navigate = useNavigate();
  const location = useLocation().pathname;
  const [loggedIn, setLoggedIn] = useState(false);
  return (
    <>
      <div className="play-details">
        <PlayHeader play={props} />
        <div className="play-details-body">
          <p>
            <Button
              color="primary"
              name="Set Questions"
              handleClick={() => {
                if (loggedIn) {
                  navigate(`${location}/set-question`);
                } else {
                  navigate(`${location}/login`);
                }
              }}
            />
          </p>
          <p>
            <Button
              color="primary"
              name="Take Exam"
              handleClick={() => {
                if (loggedIn) {
                  navigate(`${location}/exam`);
                } else {
                  navigate(`${location}/login`);
                }
              }}
            />
          </p>
        </div>
        <Login setLoggedIn={setLoggedIn} />
      </div>
    </>
  );
};

export default CbtApp;
