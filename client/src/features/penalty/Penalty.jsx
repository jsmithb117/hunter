import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  selectLockdown,
  selectVirus,
  setLockdownFalse,
  setVirusFalse,
  setPenalty,
  lockdownPenalty,
  virusPenalty,
  selectPenalty,
} from "./penaltySlice";

const Penalty = () => {
  const isLockdownActive = useSelector(selectLockdown);
  const isVirusActive = useSelector(selectVirus);
  const penalty = useSelector(selectPenalty);
  const dispatch = useDispatch();
  const [showLockdownPenalty, setShowLockdownPenalty] = useState(false);
  const [showVirusPenalty, setShowVirusPenalty] = useState(false);

  useEffect(() => {
    if (isLockdownActive) {
      dispatch(setPenalty(penalty + lockdownPenalty));
      dispatch(setLockdownFalse());
      setShowLockdownPenalty(true);
      setTimeout(() => {
        setShowLockdownPenalty(false);
      }, 3000);
    }
  }, [isLockdownActive, dispatch, penalty]);

  useEffect(() => {
    if (isVirusActive) {
      dispatch(setPenalty(penalty + virusPenalty));
      dispatch(setVirusFalse());
      setShowVirusPenalty(true);
      setTimeout(() => {
        setShowVirusPenalty(false);
      }, 3000);
    }
  }, [isVirusActive, dispatch, penalty]);

  return (
    <div className="penalty">
      Total penalties: {penalty}
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
