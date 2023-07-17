import React, { Fragment } from "react";
import { Converter } from "./ExampleConverter";
import { JsxLoop } from "./ExampleLoop";
import { ConditionTernaer } from "./ExampleCondition";
import { CounterComponent } from "./ExampleCounter";
import { Spielwiese } from "./Spielwiese";
import { LazyStateTest } from "./LazyStateTest";
import { UseEffectLifeCycle } from "./UseEffectDemo";
import { ControlledFormular } from "./ExampleControlled";
import { Formular } from "./FormularValidierung";
import { ApiTest } from "./ApiTest";
import "./App.css";
import { HashRouter as Router, Route, Routes, Link } from "react-router-dom";

export default Overview;

function Overview() {
  return (
    <Fragment>
      <Router>
        <p>
          <Link to="/">Zurück zur Übersicht</Link>
        </p>
        <p>
          <Link to="formular">Formular</Link>
        </p>
        <p>
          <Link to="api">Api</Link>
        </p>
        <Routes>
          <Route path="formular" element={<Formular></Formular>}></Route>
          <Route path="api" element={<ApiTest></ApiTest>}></Route>
        </Routes>
      </Router>
    </Fragment>
  );
}
