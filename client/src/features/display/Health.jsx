import React from "react";
import { useSelector } from "react-redux";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";
import SickSharpIcon from "@mui/icons-material/SickSharp";
import { selectCurrentHealth, selectTotalHealth } from "./displaySlice";

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
            color: "green",
            height: 48,
          }}
        />
      );
    }
    return (
      <SickSharpIcon
        key={index}
        className={"health-bar health-bar-unhealthy"}
        sx={{
          color: "red",
          height: 48,
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
