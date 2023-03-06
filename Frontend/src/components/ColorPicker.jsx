import { useState } from "react";
import { BsCheck } from "react-icons/bs";

export default function ColorPicker({ colors, style, setFilterValue }) {
  const [selectedColor, setSelectedColor] = useState(colors ? colors[0] : "");

  function handleClick(e, color) {
    setSelectedColor(color);
    if (setFilterValue != undefined) {
      setFilterValue(e);
    }
  }

  const ColorSquare = ({ color, selected }) => {
    if (color == "all") {
      return (
        <button
          className={`flex justify-center items-center cursor-pointer text-gray-900 ${
            selected ? "text-orange-500" : "text-gray-900"
          }`}
          name="color"
          value={color}
          onClick={(e) => handleClick(e, color)}
        >
          All
        </button>
      );
    }
    return (
      <button
        className={`w-6 h-6 rounded-full border shadow-2xl cursor-pointer relative ${
          selected ? "opacity-100" : "opacity-70"
        }`}
        name="color"
        value={color}
        style={{
          backgroundColor: color,
        }}
        onClick={(e) => handleClick(e, color)}
      >
        {selected && (
          <div
            className={`absolute top-0 left-0 text-lg bottom-0 right-0 ${
              color === "#ffffff" ? "text-black" : "text-white"
            }  flex justify-center items-center`}
          >
            <BsCheck />
          </div>
        )}
      </button>
    );
  };
  return (
    <div className={!style ? "flex items-center gap-6" : "space-y-3"}>
      <p className="font-light">Select a color:</p>
      <div className="flex gap-6 flex-wrap items-center">
        {colors?.map((color, idx) => (
          <ColorSquare
            key={idx}
            color={color}
            selected={selectedColor === color}
          />
        ))}
      </div>
    </div>
  );
}
