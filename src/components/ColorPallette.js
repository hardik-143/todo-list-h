import React from "react";
import { useAppContext } from "../AppContext";
import { colors } from "../data";
import { BiBlock } from "react-icons/bi";
const ColorPallette = ({ openPalette, id }) => {
  const { changeColor } = useAppContext();
  return (
    <div className={`colorPalette ${openPalette ? "show" : ""}`}>
      <span
        className="palette-color no-color"
        style={{
          background: "#fff",
        }}
        onClick={() => changeColor({ background: "#fff", color: "#000" }, id)}
      >
        <BiBlock/>
      </span>
      {colors.map((clr, index) => {
        return (
          <span
            className="palette-color"
            style={{
              background: clr.background,
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
