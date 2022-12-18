import React from "react";
import { useAppContext } from "../AppContext";
import { colors } from "../data";
const ColorPallette = ({ openPalette, id }) => {
  const { changeColor} = useAppContext();
  return (
    <div className={`colorPalette ${openPalette ? "show" : ""}`}>
      {colors.map((clr, index) => {
        return (
          <span
            className="palette-color"
            style={{
              background: clr,
            }}
            key={index}
            onClick={() => changeColor(clr, id)}
          ></span>
        );
      })}
    </div>
  );
};

export default ColorPallette;
