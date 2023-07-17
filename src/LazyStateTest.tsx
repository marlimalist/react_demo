import { Fragment, useState } from "react";

export function LazyStateTest() {
  const [show, setShow] = useState(false);

  return (
    <Fragment>
      <input
        type="button"
        onClick={() => {
          setShow(!show);
        }}
        value="Toggle"
      ></input>

      {show && <LazyState></LazyState>}
      {!show && <p>Komponente ausgeblendet</p>}
    </Fragment>
  );
}

function LazyState() {
  const [count, setCount] = useState(1);

  const [data, setData] = useState([
    { name: "N1", age: 41 },
    { name: "N2", age: 42 },
    { name: "N3", age: 43 },
    { name: "N4", age: 44 },
  ]);

  return (
    <Fragment>
      <p>Konsole öffnen, um Ausgabe zu sehen</p>
      {data &&
        data.map((each) => {
          return (
            <>
              {" "}
              <p>
                <span>{each.name}</span>
                <span>{each.age}</span>
              </p>
            </>
          );
        })}
    </Fragment>
  );
}
