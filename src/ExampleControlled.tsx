import { Fragment, useState } from "react";

interface Props {
  description: string;
  age: number;
}

export function ControlledFormular() {
  const [data, setData] = useState<Props>({ description: "", age: 32 });

  return (
    <Fragment>
      <input
        type="text"
        name="description"
        value={data?.description}
        placeholder="test"
        onChange={(e) => setData({ ...data, description: e.target.value })}
      ></input>
      <p>{data?.description}</p>
    </Fragment>
  );
}
