import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import {
  setLockdownFalse,
  setVirusFalse,
  setPenalty,
  lockdownPenalty,
  virusPenalty,
} from "./penaltySlice";
import { selectLockdown, selectVirus, selectPenalty } from "../selectors";

const Penalty = () => {
  const isLockdownActive = useSelector(selectLockdown);
  const isVirusActive = useSelector(selectVirus);
  const penaltyCount = useSelector(selectPenalty);
  const dispatch = useDispatch();
  const [showLockdownPenalty, setShowLockdownPenalty] = useState(false);
  const [showVirusPenalty, setShowVirusPenalty] = useState(false);

  const showAndDelayHide = (showFunc, delay) => {
    showFunc(true);
    setTimeout(() => showFunc(false), delay);
  };

  useEffect(() => {
    if (isLockdownActive) {
      dispatch(setPenalty(penaltyCount + lockdownPenalty));
      dispatch(setLockdownFalse());
      showAndDelayHide(setShowLockdownPenalty, 3000);
    }
  }, [isLockdownActive, dispatch, penaltyCount]);

  useEffect(() => {
    if (isVirusActive) {
      dispatch(setPenalty(penaltyCount + virusPenalty));
      dispatch(setVirusFalse());
      showAndDelayHide(setShowVirusPenalty, 3000);
    }
  }, [isVirusActive, dispatch, penaltyCount]);

  return (
    <div className="penalty">
      Total penalties: {penaltyCount}
      {showLockdownPenalty && (
        <mark className={"lockdown-penalty"}>
          {`+${lockdownPenalty} seconds lockdown penalty`}
        </mark>
      )}
      {showVirusPenalty && (
        <mark className={"virus-penalty"}>
          {`+${virusPenalty} seconds virus penalty`}
        </mark>
      )}
    </div>
  );
};

export default Penalty;
