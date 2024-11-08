import { useState } from "react";

function CaculatorApp() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");

  function handleSetInput(label) {
    if (label === "Clear") {
      setInput(""); // Clear the input
      setResult(""); // Clear the result as well
    } else if (label === "Delete") {
      setInput(input.slice(0, -1)); // Remove last character
    } else if (label === "=") {
      try {
        const newResult = eval(input);
        setResult(newResult); // Calculate result (use eval carefully)
      } catch {
        setResult("Error");
      }
    } else {
      setInput((prevInput) => prevInput + label); // Append clicked label to input
    }
  }

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
            <InPutScreen input={input} />
            <OutPutScreen result={result} />
          </div>
          <div className="button-row grid grid-cols-4">
            <Button label={"Clear"} onClick={handleSetInput} />
            <Button label={"Delete"} onClick={handleSetInput} />
            <Button label={"."} onClick={handleSetInput} />
            <Button label={"/"} onClick={handleSetInput} />
          </div>
          <div className="button-row grid grid-cols-4">
            <Button label={"7"} onClick={handleSetInput} />
            <Button label={"8"} onClick={handleSetInput} />
            <Button label={"9"} onClick={handleSetInput} />
            <Button label={"*"} onClick={handleSetInput} />
          </div>
          <div className="button-row grid grid-cols-4">
            <Button label={"4"} onClick={handleSetInput} />
            <Button label={"5"} onClick={handleSetInput} />
            <Button label={"6"} onClick={handleSetInput} />
            <Button label={"-"} onClick={handleSetInput} />
          </div>
          <div className="button-row grid grid-cols-4">
            <Button label={"1"} onClick={handleSetInput} />
            <Button label={"2"} onClick={handleSetInput} />
            <Button label={"3"} onClick={handleSetInput} />
            <Button label={"+"} onClick={handleSetInput} />
          </div>
          <div className="button-row grid grid-cols-2">
            <Button label={"0"} onClick={handleSetInput} />
            <Button label={"="} onClick={handleSetInput} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CaculatorApp;

function OutPutScreen({ result }) {
  return (
    <input
      type="text"
      value={result}
      readOnly
      className="border text-violet-500 font-bold text-2xl border-gray-400 w-full px-2 py-3"
    />
  );
}
function InPutScreen({ input }) {
  return (
    <input
      type="text"
      value={input}
      readOnly
      className="border text-violet-500 font-bold text-2xl border-gray-400 w-full px-2 py-3"
    />
  );
}

function Button({ label, onClick }) {
  return (
    <input
      onClick={(e) => onClick(e.target.value)}
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
