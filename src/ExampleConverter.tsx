import React, { useState } from "react";
import "./App.css";

export function Converter() {
  const [name, setName] = useState("");
  const [exchange, setExchange] = useState(1.0);
  const [coins, setCoins] = useState(1.0);
  const [result, setResult] = useState(0);

  const convert = (): void => {
    const newValue = coins * exchange;
    setResult(newValue);
  };

  return (
    <React.Fragment>
      {" "}
      <div className="Converter">
        <label>Crypto-Name:</label>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        ></input>

        <label>aktueller Wechselkurs:</label>
        <input
          type="number"
          placeholder="Wechselkurs"
          value={exchange}
          onChange={(e) => setExchange(parseFloat(e.target.value))}
        ></input>

        <label>Anzahl Coins:</label>
        <input
          type="number"
          placeholder="Anzahl"
          value={coins}
          onChange={(e) => setCoins(parseFloat(e.target.value))}
        ></input>
        <div className="actionButton">
          <button onClick={() => convert()}>Berechne</button>
        </div>
        <p>
          Mit einem Wechselkurs von {exchange} und der Anzahl von {coins} {name}{" "}
          hast du {result}€{" "}
        </p>
      </div>
    </React.Fragment>
  );
}
