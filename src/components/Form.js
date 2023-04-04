import React from "react";

const Form = (props) => {
  const { handleChange, handleSubmit, ekip } = props;
  return (
    <form onSubmit={handleSubmit}>
      <label id="a">İsim Soyisim</label>
      <input
        id="a"
        type="text"
        name="name"
        onChange={handleChange}
        value={ekip.name}
      />
      <label id="b">Email</label>
      <input
        id="b"
        type="text"
        name="email"
        onChange={handleChange}
        value={ekip.email}
      />
      <label id="c">Rolünüz</label>
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
