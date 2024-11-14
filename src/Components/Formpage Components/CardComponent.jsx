import React, { useEffect } from "react";

function CardComponent({
  title,
  cardI,
  updating,
  editFnc,
  deleteCardFnc,
  editIndex,
}) {
  useEffect(() => {
    console.log(title, editIndex, updating, cardI);
  });
  return (
    <div className="card" key={`card${cardI}`}>
      <div className="detailPart">
        {["name", "email", "username", "gender"].map((e) => {
          return <p>{title[e]}</p>;
        })}
        {/* <p>{e.name}</p>
        <p>{e.email}</p>
        <p>{e.username}</p>
        <p>{e.gender}</p> */}
        <p>Hobbies :</p>
        <ul>
          {title.hobbyL.map((e) => {
            return <li>{e}</li>;
          })}
        </ul>
        <p>Language :</p>
        <ul>
          {title.language.map((e) => {
            return <li>{e}</li>;
          })}
        </ul>
      </div>
      {updating && editIndex === cardI ? (
        <>
          <span>Editing in progress</span>
        </>
      ) : (
        <div className="cardButtons">
          <h1 className="deleteBtn" onClick={() => deleteCardFnc(title, cardI)}>
            delete
          </h1>
          <h1 className="editBtn" onClick={() => editFnc(title, cardI)}>
            edit
          </h1>
        </div>
      )}
    </div>
  );
}

export default CardComponent;
