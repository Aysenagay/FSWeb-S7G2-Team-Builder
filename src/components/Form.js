import React from "react";

const Form = (props) => {
  const { handleChange, handleSubmit, ekip } = props;
  return (
    <form onSubmit={handleSubmit}>
      <label id="a">İSİM</label>
      <input
        id="a"
        type="text"
        name="name"
        onChange={handleChange}
        value={ekip.name}
      />
      <label id="b">EMAİL</label>
      <input
        id="b"
        type="text"
        name="email"
        onChange={handleChange}
        value={ekip.email}
      />
      <label id="c">ROL</label>
      <input
        id="c"
        type="text"
        name="rol"
        onChange={handleChange}
        value={ekip.rol}
      />
      <input type="submit" name="submit" />
    </form>
  );
};
export default Form;
