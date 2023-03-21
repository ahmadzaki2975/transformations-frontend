import { useEffect, useState } from "react";

function Form({ index, n }) {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  useEffect(() => {
    localStorage.setItem(`x${index}`, x);
    localStorage.setItem(`y${index}`, y);
  }, []);

  return (
    <div
      className={"bg-yellow-400 p-5 rounded-xl " + (index >= n ? "hidden" : "")}
    >
      <h1 className="font-bold text-center mb-2">Coordinate {index + 1}</h1>
      <div className="flex gap-1">
        <div className="flex flex-col">
          <label className="text-center font-semibold">X Coordinate</label>
          <input
            className="w-full text-center rounded-full"
            type="number"
            value={x}
            onChange={(e) => {
              setX(e.target.value);
              localStorage.setItem(`x${index}`, e.target.value);
            }}
          />
        </div>
        <div className="flex flex-col">
          <label className="text-center font-semibold">Y Coordinate</label>
          <input
            className="w-full text-center rounded-full"
            type="number"
            value={y}
            onChange={(e) => {
              setY(e.target.value);
              localStorage.setItem(`y${index}`, e.target.value);
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default function CoordinateForm({ n }) {
  const dummyArray = [];

  for (let i = 0; i < 10; i++) {
    dummyArray.push(i);
  }

  return (
    <div className="flex flex-col gap-3">
      {dummyArray.map((item, index) => (
        <Form key={index} n={n} index={index} />
      ))}
    </div>
  );
}
