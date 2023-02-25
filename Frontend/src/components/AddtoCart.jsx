import { useState } from "react";
import { BsCheck } from "react-icons/bs";

export default function AddtoCart({ product }) {
  if (Object.keys(product).length == 0) {
    return;
  }

  const { id, colors, stock } = product;
  const [selectedColor, setSelectedColor] = useState(null);

  function handleColorClick(color) {
    setSelectedColor(color);
  }

  const ColorSquare = ({ color, selected }) => (
    <div
      className={`w-6 h-6 rounded-full cursor-pointer relative ${
        selected ? "opacity-100" : "opacity-70"
      }`}
      style={{
        backgroundColor: color,
      }}
      onClick={() => handleColorClick(color)}
    >
      {selected && (
        <div className="absolute top-0 left-0 bottom-0 right-0 text-white flex justify-center items-center">
          <BsCheck />
        </div>
      )}
    </div>
  );

  return (
    <div className="flex items-center gap-6">
      <p className="font-light">Select a color:</p>
      <div className="flex gap-4">
        {colors.map((color) => (
          <div key={id}>
            <ColorSquare color={color} selected={selectedColor === color} />
          </div>
        ))}
      </div>
    </div>
  );
}
