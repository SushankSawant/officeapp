import React from "react";

function InputComponent({
  name,
  detail,
  sendText,
  text,
  keyPress,
  typeInp,
  ind,
}) {
  /* function handleChange() {
    getData();
  } */
  return (
    <div className="singleInput">
      <label htmlFor={name}>{name}</label>
      <input
        type={typeInp}
        name={name}
        id={name}
        placeholder={"Please Enter Text"}
        value={text}
        onChange={sendText}
        onKeyDown={keyPress}
        required
      />
    </div>
  );
}

export default InputComponent;
/* <div className="card" key={`card${i}`}>
              <p>{e.name}</p>
              <p>{e.email}</p>
              <p>{e.username}</p>
              <p>{e.gender}</p>
              <p>Hobbies :</p>
              <ul>
                {e.hobbyL.map((e) => {
                  return <li>{e}</li>;
                })}
              </ul>
              <p>Language :</p>
              <ul>
                {e.language.map((e) => {
                  return <li>{e}</li>;
                })}
              </ul>
              {updating && editIndex === i ? (
                <>
                  <span>Editing in progress</span>
                </>
              ) : (
                <div className="cardButtons">
                  <h1 className="deleteBtn" onClick={() => deleteCardFnc(i)}>
                    delete
                  </h1>
                  <h1 className="editBtn" onClick={() => editFnc(e, i)}>
                    edit
                  </h1>
                </div>
              )}
            </div> */
