import { Fragment, useState } from "react";

interface Props {
  name: string;
  age: number;
}

function initData2(): number {
  return 0;
}

export function Spielwiese() {
  const [data, setData] = useState<Props>({ name: "Name", age: 42 });
  const [data3, setData3] = useState(() => initData2());
  const [toggle, setToggle] = useState(false);
  const arrBla = [1, 2, 3];

  const data2 = { name: "Yes", age: 33 };

  return (
    <Fragment>
      <div>
        <p>Spielwiese</p>
      </div>
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
      {data3}
      <button onClick={() => setToggle(!toggle)}>Blick to toggle</button>
      {toggle && (
        <div>
          {arrBla.map((each) => {
            return (
              <ul>
                <li>{each}</li>
              </ul>
            );
          })}
        </div>
      )}
    </Fragment>
  );
}
