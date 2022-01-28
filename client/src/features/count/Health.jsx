import React from "react";
import { useSelector } from "react-redux";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";
import SickSharpIcon from "@mui/icons-material/SickSharp";
import { green, red } from "@mui/material/colors";

import { selectCurrentHealth, selectTotalHealth } from "../selectors";

function Health(props) {
  const currentHealth = useSelector(selectCurrentHealth);
  const totalHealth = useSelector(selectTotalHealth);

  const healthMap = new Array(totalHealth).fill(null).map((_, index) => {
    if (index < currentHealth) {
      return (
        <EmojiEmotionsIcon
          key={index}
          className={"health-bar health-bar-healthy"}
          sx={{
            color: green[500],
            height: 48,
            stroke: green[900],
            strokeWidth: .2,
          }}
        />
      );
    }
    return (
      <SickSharpIcon
        key={index}
        className={"health-bar health-bar-unhealthy"}
        sx={{
          color: red[500],
          height: 48,
          stroke: red[900],
          strokeWidth: .2,
        }}
      />
    );
  });

  return (
    <div className="health">
      Health:
      {healthMap}
    </div>
  );
}

export default Health;
