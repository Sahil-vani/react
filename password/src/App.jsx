import { useCallback, useEffect, useState, useRef } from "react";

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [CharAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  //useRef
  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numberAllowed) str += "1234567890";
    if (CharAllowed) str += "~!@#$%^&*()_+-=[];.{}";
    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [length, numberAllowed, CharAllowed, setPassword]);

  const copyPassword = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 50);
    window.navigator.clipboard.writeText(password);
  }, [password]);

  useEffect(() => {
    passwordGenerator();
  }, [length, numberAllowed, CharAllowed, passwordGenerator]);

  return (
    <div className="flex justify-center bg-purple-600 items-center w-100 h-screen flex-col">
      <h1 className="text-4xl text-white m-4">Password Generator</h1>

      <div className="w-full max-w-md h-auto shadow-md rounded-lg px-4 my-8 text-white bg-gray-600">
        <div className="rounded-md overflow-hidden flex my-4">
          <input
            type="text"
            value={password}
            className="outline-none w-full font-medium py-1 px-3 text-black"
            placeholder="password"
            readOnly
            ref={passwordRef}
          />
          <button
            className="outline-none text-white px-3 py-0.5 shrink-0 bg-purple-600"
            onClick={copyPassword}
          >
            copy
          </button>
        </div>

        <div className="flex items-center gap-x-3 text-sm my-4">
          <div className="flex items-center gap-x-1 text-sm text-white">
            <input
              type="range"
              className="cursor-pointer m-3"
              min={6}
              max={50}
              value={length}
              onChange={(e) => {
                setLength(e.target.value);
              }}
            />
            <label>Length: {length}</label>
          </div>

          <div className="flex items-center gap-x-1 text-sm text-white">
            <input
              type="checkbox"
              defaultValue={numberAllowed}
              id="numberInput"
              className="cursor-pointer m-1"
              onChange={() => {
                setNumberAllowed((prev) => !prev);
              }}
            />
            <label>Number</label>
          </div>

          <div className="flex items-center gap-x-1 text-sm text-white">
            <input
              type="checkbox"
              defaultValue={CharAllowed}
              id="charInput"
              className="cursor-pointer m-1"
              onChange={() => {
                setCharAllowed((prev) => !prev);
              }}
            />
            <label>Character</label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
