import React from "react";
import Input from "../Input/Input";

import "./Form.scss";

const Form = props => {
  return (
    <div className="form-container">
      <header className="form-header">
        <h1>Today's workout</h1>
      </header>
      <section className="form-section">
        <Input></Input>
      </section>
      <footer className="form-footer">
        <button className="form-add-btn">Add exercise</button>
      </footer>
    </div>
  );
};

export default Form;
