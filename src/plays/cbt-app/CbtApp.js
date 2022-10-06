import PlayHeader from "common/playlists/PlayHeader";
import { useLocation, useNavigate } from "react-router-dom";
import Button from "./components/Button";

const CbtApp = (props) => {
  const navigate = useNavigate();
  const location = useLocation().pathname;
  return (
    <>
      <div className="play-details">
        <PlayHeader play={props} />
        <div className="play-details-body">
          <p>
            <Button
              color="primary"
              name="Set Questions"
              handleClick={() => navigate(`${location}/set-question`)}
            />
          </p>
          <p>
            <Button
              color="primary"
              name="Take Exam"
              handleClick={() => navigate(`${location}/exam`)}
            />
          </p>
        </div>
      </div>
    </>
  );
};

export default CbtApp;
