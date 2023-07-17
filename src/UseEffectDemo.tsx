import { Fragment, useEffect, useState } from "react";

export function UseEffectLifeCycle() {
  console.log("-- UseEffectLifeCycle");

  const [count, setCount] = useState(0);
  const [secondCount, setSecondCount] = useState(0);

  const handleClick = () => {
    console.log("-- UseEffectLifeCycle - handleClick");
    setCount(count + 1);
  };

  const handleClickSecond = () => {
    console.log("-- UseEffectLifeCycle - handleClickSecond");
    setSecondCount(secondCount + 1);
  };

  useEffect(() => {
    console.log("-- UseEffectLifeCycle - useEffect");
  });

  useEffect(() => {
    console.log("-- UseEffectLifeCycle - useEffect []");
  }, []);

  useEffect(() => {
    console.log("-- UseEffectLifeCycle - useEffect [ count ]");
  }, [count]);

  return (
    <Fragment>
      <div>
        <p>UseEffectDemo</p>
      </div>
      <p>
        Zähler: {count} - Zweiter Zähler: {secondCount}
      </p>
      <input
        type="button"
        value="1 Count hochzählen"
        onClick={handleClick}
      ></input>
      <input
        type="button"
        value="2 Keine Änderung der Abhängigkeiten"
        onClick={handleClickSecond}
      ></input>
    </Fragment>
  );
}
