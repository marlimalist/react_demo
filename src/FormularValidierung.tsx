import {
  ChangeEvent,
  Fragment,
  InputHTMLAttributes,
  useEffect,
  useState,
} from "react";

interface Props {
  vorname: string;
  nachname: string;
}

export function Formular() {
  const [data, setData] = useState<Props>({ vorname: "", nachname: "" });

  const [valide, setValide] = useState(false);

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    console.log(event);

    setData({ ...data, [event.target.name]: event.target.value });
  };

  useEffect(() => {
    console.log(data);

    if (data.vorname !== "" && data.nachname !== "") {
      setValide(true);
    } else {
      setValide(false);
    }
  }, [data]);

  return (
    <Fragment>
      <div>
        <label>Bitte Vorname eingeben</label>
        <input
          name="vorname"
          type="text"
          placeholder="Name eingeben"
          onChange={(e) => {
            handleInputChange(e);
          }}
        ></input>
      </div>
      <div>
        <label>Bitte Nachname eingeben</label>
        <input
          name="nachname"
          type="text"
          placeholder="Name eingeben"
          onChange={(e) => {
            handleInputChange(e);
          }}
        ></input>
      </div>
      <div>
        <input type="submit" value="Click me" disabled={!valide}></input>
      </div>
    </Fragment>
  );
}
