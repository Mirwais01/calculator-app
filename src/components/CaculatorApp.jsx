import { useState } from "react";

function CaculatorApp() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");

  return (
    <div className="h-lvh w-full flex items-center justify-center">
      <div className="w-1/3 h-3/4 space-y-6 px-6 py-6 border border-black">
        {/* title   */}
        <div className="text-center">
          <h1 className="font-black text-3xl text-violet-700">
            Calculator App
          </h1>
        </div>
        <div className="calculator grid items-center mx-2 border border-gray-400">
          <div className="mb-6">
            <OutPutScreen />
            <OutPutScreen />
          </div>
          <div className="button-row grid grid-cols-4">
            <Button label={"Clear"} />
            <Button label={"Delete"} />
            <Button label={"."} />
            <Button label={"/"} />
          </div>
          <div className="button-row grid grid-cols-4">
            <Button label={"7"} />
            <Button label={"8"} />
            <Button label={"9"} />
            <Button label={"*"} />
          </div>
          <div className="button-row grid grid-cols-4">
            <Button label={"4"} />
            <Button label={"5"} />
            <Button label={"6"} />
            <Button label={"-"} />
          </div>
          <div className="button-row grid grid-cols-4">
            <Button label={"1"} />
            <Button label={"2"} />
            <Button label={"3"} />
            <Button label={"+"} />
          </div>
          <div className="button-row grid grid-cols-2">
            <Button label={"0"} />
            <Button label={"="} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CaculatorApp;

function OutPutScreen() {
  return (
    <input
      type="text"
      readOnly
      className="border border-gray-400 w-full py-3"
    />
  );
}

function Button({ label }) {
  return (
    <input
      type="button"
      className={`${
        label === "Clear"
          ? "bg-red-500 hover:bg-red-400 "
          : label === "="
          ? "bg-green-500 hover:bg-green-400 "
          : ""
      }border-x-2 border-y-0 bg-violet-500 hover:bg-violet-400 text-white font-bold border-b-4 border-violet-100 hover:violet-blue-500 px-6 py-3`}
      value={label}
    />
  );
}
