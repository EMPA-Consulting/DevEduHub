import React from "react";
import '../App.css';

export default function ExperimentalHooks() {
  return (
    <>
      <h1>Experimental Hooks</h1>
      <section>
        <h2>useEffectEvent</h2>
        <p>
          useEffectEvent hook simplifies working with effects. It allows you to use data in your effect without listing it as a dependency, preventing the effect from re-running when this data changes. This is useful when an effect depends on certain data but also uses other data that shouldn't trigger the effect to run again.
          <br />
          <a href="https://react.dev/learn/separating-events-from-effects#declaring-an-effect-event" className="link">
            Learn more about useEffectEvent
          </a>
        </p>
      </section>

      <section>
        <h2>use</h2>
        <p>
          use hook in React simplifies handling asynchronous operations. It can be used in conditions or loops, and works with promises.
          When used with a promise, it either returns the data or throws an error. This reduces the need for multiple useState and useEffect hooks.
          React Suspense and Error Boundaries are used with the use hook to handle loading and error states respectively.
          <br />
          <a href="https://react.dev/reference/react/use#noun-labs-1201738-(2)"
            className="link">
            Learn more about use
          </a>
        </p>
      </section>

      <section>
        <h2>useFormStatus</h2>
        <p>
          useFormStatus provides status information about the last form submission. It returns an object with properties like pending (if the form is submitting), data (the data being submitted), method (the HTTP method used), and action (the function passed to the form's action prop). This hook must be used within a component rendered inside a form.
          <br />
          <a href="https://react.dev/reference/react-dom/hooks/useFormStatus#noun-labs-1201738-(2)"
            className="link">
            Learn more about useFormStatus
          </a>
        </p>
      </section>

      <section>
        <h2>useOptimistic</h2>
        <p>
          useOptimistic hook allows for immediate UI updates before an asynchronous action completes, enhancing perceived responsiveness. It takes an initial state and an update function as parameters, and returns the current optimistic state and a dispatch function. This hook is particularly useful in forms to reflect submissions instantly, even before server response.
          <br />
          <a href="https://react.dev/reference/react/useOptimistic#noun-labs-1201738-(2)"
            className="link">
            Learn more about useOptimistic
          </a>
        </p>
      </section>

    </>
  )
}

