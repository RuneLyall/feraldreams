import { useCallback, useRef, useState, useEffect } from "react";

export default function Password() {
    const [length, setLength] = useState(12);
    const [numAllowed, setNumAllowed] = useState(false);
    const [charAllowed, setCharAllowed] = useState(false);
    const [password, setPassword] = useState("");
    const timerRef = useRef<number | null>(null);

    //useRef goes here.. I think
    const passwordRef = useRef<HTMLInputElement | null>(null);
    const passwordGen = useCallback(() => {
        let pass = "";
        let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

        if (numAllowed) str += "0123456789";
        if (charAllowed) str += "`!@#$%^&*(){}[]`";

        for (let i = 0; i < length; i++) {
            let char = Math.floor(Math.random() * str.length + 1);
            pass += str.charAt(char);
        }
        if (timerRef.current) clearTimeout(timerRef.current);

        setPassword(pass);

        timerRef.current = setTimeout(() => {
            setPassword("");
        }, 15000);
    }, [length, numAllowed, charAllowed]);

    useEffect(() => {
        return () => {
            if (timerRef.current) clearTimeout(timerRef.current);
        };
    }, []);
    const copyToClip = useCallback(() => {
        passwordRef.current?.select();
        passwordRef.current?.setSelectionRange(0, password.length);
        window.navigator.clipboard.writeText(password);
    }, [password]);

    return (
        <>
            <div className="w-full max-w-md mx-auto rounded-lg px-8 ly-8 my-8 text-cyan-400 bg-gray-600 mt-50">
                <h1 className="text-amber-300 text-center text-2xl my-3">
                    Generator
                </h1>
                <div className="flex rounded-lg overflow-hidden mb-5">
                    <input
                        type="text"
                        value={password}
                        className="outline-none w-full py-2 px-2 rounded-md text-black"
                        placeholder="Password"
                        readOnly
                        ref={passwordRef}
                    />
                    <button
                        onClick={passwordGen}
                        className="bg-gray-700 px-2 py-2 rounded-lg text-amber-400 mx-2">
                        Generate
                    </button>
                    <button
                        onClick={copyToClip}
                        className="px-2 py-1 bg-blue-600 text-amber-600 max-2 rounded-md shrink-0 ">
                        Copy Password
                    </button>
                </div>
                <div className="flex text-sm gap-x-2">
                    <div className="flex items-center gap-x-1 ">
                        <input
                            type="number"
                            min={6}
                            max={100}
                            value={length}
                            className="cursor-pointer"
                            onChange={(e) => {
                                setLength(Number(e.target.value));
                            }}
                        />
                    </div>
                    <div className="flex items-center gap-x-1">
                        <input
                            type="checkbox"
                            defaultChecked={numAllowed}
                            id="wantNumbers"
                            onChange={() => {
                                setNumAllowed((prev) => !prev);
                            }}
                        />
                        <label htmlFor="wantNumbers">Numbers?</label>
                    </div>
                    <div className="flex items-center gap-x-1 ">
                        <input
                            type="checkbox"
                            checked={charAllowed}
                            id="wantCharacters"
                            onChange={() => {
                                setCharAllowed((prev) => !prev);
                            }}
                        />
                        <label htmlFor="wantCharacters">
                            Special Characters?
                        </label>
                    </div>
                </div>
            </div>
        </>
    );
}
