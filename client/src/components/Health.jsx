import React from "react";

import { withStyles } from "@mui/styles";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";
import SickSharpIcon from "@mui/icons-material/SickSharp";

import {
  selectTotalHealth,
  selectCurrentHealth,
} from "../features/user/userSlice";

const styles = {
  icon: {
    border: 0,
    borderRadius: 5,
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
    color: "white",
    height: 48,
    marginLeft: "10px",
    marginTop: "5px",
  },
  healthy: {
    background: "green",
  },
  sick: {
    background: "red",
  },
};

function Health(props) {
  const { classes } = props;
  const totalHealth = selectTotalHealth();
  const currentHealth = selectCurrentHealth();

  const healthMap = new Array(totalHealth).fill(null).map((_, index) => {
    if (index < currentHealth) {
      return (
        <EmojiEmotionsIcon
          key={index}
          className={`${classes.icon} ${classes.healthy}`}
        />
      );
    }
    return (
      <SickSharpIcon
        key={index}
        className={`${classes.icon} ${classes.sick}`}
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

export default withStyles(styles)(Health);
