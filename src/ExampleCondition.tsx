import React, { useState } from "react";

export function ConditionTernaer() {
  const [isGood, setIsGood] = useState(true);

  const toggleIsGood = () => setIsGood(!isGood);

  let element = isGood ? <li>YEEAH</li> : <li>NOO</li>;
  const button = <button onClick={toggleIsGood}>Click Me</button>;

  return (
    <ul>
      {" "}
      {element} {button}{" "}
    </ul>
  );
}
