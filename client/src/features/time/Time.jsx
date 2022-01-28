import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { selectWin } from "../selectors";
import { setTime } from "./timeSlice";

function Time () {
  const win = useSelector(selectWin);
  const dispatch = useDispatch();
  const [time, setTimeState] = useState(0);
  const [timerSet, setTimerSet] = useState(false);

  useEffect(() => {
    if (win && !timerSet) {
      setTimerSet(true);
      dispatch(setTime(time));
    }
  }, [win, dispatch, time, timerSet]);

  useEffect(() => {
    if (!win) {
      const timer  = setInterval(() => {
        setTimeState(time + 1);
      }, 1000);
      return () => clearInterval(timer);
    }
  }, [win, time]);

  return (
    <div className="time">
      Time: {time}
    </div>
  );
};

export default Time;
