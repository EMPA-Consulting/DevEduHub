import React from "react";
import UseLocalStorage from "./UseLocalStorage";
import UseUpdateLogger from "./UseUpdateLogger";

export default function CustomHook() {
    // Using the custom hook UseLocalStorage to store the name in local storage
    // The "use" prefix in the custom hook name is a convention in React. It helps to identify functions that use hooks.
    const [name, setName] = UseLocalStorage("name", "");

    // Using the custom hook UseUpdateLogger to log the updated value of name
    UseUpdateLogger(name);

    return (
        <div>
            <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
            ></input>
            <p>
                For more custom hooks, check out this {' '}
                <a href="https://github.com/WebDevSimplified/useful-custom-react-hooks">
                    GitHub repository
                </a>
            </p>
        </div>
    );
}

