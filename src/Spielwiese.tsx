import { Fragment, useState } from "react";

export function Spielwiese() {
  const [data, setData] = useState({ name: "Name", age: 42 });

  const data2 = { name: "Yes", age: 33 };

  return (
    <Fragment>
      <div>{data.name + data.age}</div>;
      <div>
        <button
          onClick={() => {
            setData({ ...data2 });
          }}
        >
          Click me for data2
        </button>
      </div>
      <div>
        <button
          onClick={() => {
            setData({ ...data, name: "YUPP" });
          }}
        >
          Click me for ...data
        </button>
      </div>
    </Fragment>
  );
}
