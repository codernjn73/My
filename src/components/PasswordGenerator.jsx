import { useCallback, useEffect, useState, useRef } from "react";

function PasswordGenerator() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [characterAllowed, setCharacterAllowed] = useState(false);
  const [password, setPassword] = useState("");

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numberAllowed) str += "0123456789";
    if (characterAllowed) str += "`~!@#$%^&*-_+=:;',./?";

    for (let i = 0; i < length; i++) {
      const char = Math.floor(Math.random() * str.length + 1);

      pass += str.charAt(char);
    }

    setPassword(pass);
  }, [length, numberAllowed, characterAllowed, setPassword]);

  const copyToClipBoard = useCallback(()=>{
    window.navigator.clipboard.writeText(password);
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0,8);
  }, [password])

  useEffect(() => {
    passwordGenerator();
  }, [length, numberAllowed, characterAllowed, passwordGenerator]);

  const passwordRef = useRef(null);

  return (
    <>
      <div className="bg-transparent h-auto w-full flex justify-center mt-36">
        <div className=" bg-slate-500 h-auto w-auto text-center rounded-xl">
          <h1 className="text-2xl m-4">Password Generator</h1>
          <div className="flex justify-center mx-12 my-4">
            <input
              type="text"
              className="rounded-l-md h-8 w-96 p-2"
              value={password}
              onChange={setPassword}
              readOnly
              ref={passwordRef}
            />
            <button className="bg-black text-white rounded-r-md px-4"
            onClick={copyToClipBoard}>
              Copy
            </button>
          </div>

          <div className="flex items-center mx-12 my-2">
            <div className="mx-4 flex items-center">
              <input
                type="range"
                min={8}
                max={100}
                value={length}
                className="cursor-pointer"
                onChange={(e) => {
                  setLength(e.target.value);
                }}
              />
              <label className="ml-2">Length: {length}</label>
            </div>

            <div className="mx-4 flex items-center">
              <input
                type="checkbox"
                defaultChecked={numberAllowed}
                onChange={() => {
                  setNumberAllowed((prev) => !prev);
                }}
              />
              <label className="ml-2">Numbers</label>
            </div>

            <div className="mx-4 flex items-center">
              <input
                type="checkbox"
                defaultChecked={characterAllowed}
                onChange={() => {
                  setCharacterAllowed((prev) => !prev);
                }}
              />
              <label className="ml-2">Characters</label>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PasswordGenerator;