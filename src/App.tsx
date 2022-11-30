import * as React from "react";
import { Form } from "./components/Form";
import { Todos } from "./components/Todos";

export const App = () => {
  return (
    <div style={{ padding: "10px" }}>
      <Form />
      <Todos />
    </div>
  );
};
