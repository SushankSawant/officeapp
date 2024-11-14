import React, { useRef } from "react";
import { useEffect } from "react";
import { useState, useContext } from "react";
import InputComponent from "./Formpage Components/InputComponent";
import RadioComponent from "./Formpage Components/RadioComponent";
import CheckboxComponent from "./Formpage Components/CheckboxComponent";
import CardComponent from "./Formpage Components/CardComponent";
import { ThemeProvider } from "../Context/ThemeContext";
import Navbar from "./Navbar";
// import { ThemeContext } from "../App";
function Formpage() {
  // const theme = useContext(ThemeContext);
  const [detail, setDetail] = useState({
    name: "",
    email: "",
    username: "",
    gender: "",
    hobbyL: [],
    language: [],
  });
  // const data =
  const firstTab = useRef(null);
  const hobbyInpRef = useRef(null);
  const [hobby, setHobby] = useState("");
  // const [hobbyList, setHobbylist] = useState([]);
  const [card, setCard] = useState([]);
  const [updating, setUpdating] = useState(false);
  const [editIndex, setIndex] = useState(null);

  /*  useEffect(() => {
    firstTab.current.focus();
  }, []); */

  useEffect(() => {
    console.log(detail, "DETAILS");
    // console.log(theme);
  }, [detail]);

  function handleChange(e) {
    const { name, value } = e.target;

    console.log(value);
    setDetail((prev) => ({
      ...prev,
      [name]: value.toLowerCase(),
    }));
  }

  function handleLanguage(e) {
    const { id, checked, value } = e.target;
    console.log(id, checked, value);
    let langExists = detail.language.includes(id); /* true / false */
    // console.log(langExists);
    // let index = detail.language.indexOf(id);
    if (!langExists) {
      setDetail((prev) => ({ ...prev, language: [...prev.language, id] }));
    } else {
      let filteredArray = detail.language;
      filteredArray.splice(filteredArray.indexOf(id), 1);
      setDetail((prev) => ({
        ...prev,
        language: [...filteredArray],
        /* let detail1 = detail;
      detail1.language.splice(index, 1);
      setDetail(detail1); */
        /* .filter((_, i, arr) => {
          return i !== arr.indexOf(id);
        }) */
      }));
    }
    /*  if (checked) {
      setDetail(detail["language"].push(id));
    } else if (!checked) {
      setDetail(detail["language"].splice(detail.language.indexOf(id), 1));
      // holdLang(newLangArr);
    } */
  }

  function toCheck() {
    let message = "";
    let usernameIndex = card
      .filter((element, index) => {
        return index !== editIndex;
      })
      .findIndex((cardDetail) => {
        return cardDetail["username"] === detail["username"];
      });
    let emailIndex = card
      .filter((element, index) => {
        return index !== editIndex;
      })
      .findIndex((cardDetail) => {
        return cardDetail["email"] === detail["email"];
      });
    if (usernameIndex >= 0 && emailIndex >= 0) {
      message = "Email and Username already exists.";
    } else if (usernameIndex >= 0) {
      message = "Username already exists";
    } else if (emailIndex >= 0) {
      message = "Email already exists";
    }
    return message;
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (updating) {
      let exists = toCheck();
      // console.log(exists, ";;;;;;;;;;;;");
      if (exists) {
        alert(exists);
      } else {
        let updatedCardArray = card.map((e, i) => {
          return editIndex === i ? detail : e;
        });
        setCard([...updatedCardArray]);

        setDetail({
          name: "",
          email: "",
          username: "",
          hobbyL: [],
          language: [],
          gender: "",
        });
        setUpdating(false);
      }
    } else {
      let exists = toCheck();
      console.log(exists, "asdwwwwww");
      /*  card.find((cardDetail) => {
        return cardDetail.username === detail.username;
      }); */

      if (exists) {
        alert(exists);
      } else {
        setCard([...card, detail]);
        setDetail({
          name: "",
          email: "",
          username: "",
          hobbyL: [],
          language: [],
          gender: "",
        });
      }
      // setHobbylist([]);
      // setUpdating(false);
    }
    /* const exists = card.find((cardDetail) => {
      return cardDetail.username === detail.username;
    });
    if (exists) {
      alert("username already exists");
    } else {
      setCard([...card, detail]);

      setDetail({
        name: "",
        email: "",
        username: "",
        hobbyL: [],
        language: [],
        gender: "",
      });
      // setHobbylist([]);
      setUpdating(false);
    } */
  }

  function handleHobby() {
    if (detail.hobbyL.includes(hobby.toLowerCase())) {
      alert("Hobby already exists");
    } else if (hobby === "") {
      alert("No value entered");
    } else {
      setDetail((prev) => ({ ...prev, hobbyL: [...prev.hobbyL, hobby] }));
      // setDetail((prev) => ({ ...prev, language: [...prev.language, id] }));
      // setHobbylist([...hobbyList, hobby.toLowerCase()]);

      setHobby("");
      // hobbyInpRef.current.focus();
    }
  }

  function deleteCardFnc(ele, ind) {
    let newArray = [...card];
    newArray.splice(newArray.indexOf(ele), 1);
    /*  const newArray = card.filter((e, i, arr) => {
      return i !== ind;
    }); */
    setCard(newArray);
  }

  /*   document
    .getElementById("hobbybar")
    .addEventListener("keydown", function (event) {
      if (event.keyCode === "13") {
        handleHobby();
      }
    }); */

  /* function enterHobby(e) {
    if (e.keyCode === "enter") {
      handleHobby();
      console.log(e.keyCode);
    }
  } */

  function editFnc(data, ind) {
    setDetail(data);
    setUpdating(true);
    setIndex(ind);
    // const newCard = card;
    // newCard[ind] = { name: "editing" };
    // deleteCardFnc(ind);

    // setHobbylist(data.hobbyL);
    // setCard([...card, (card[ind] = newCard)]);
  }

  function deleteHobby(ind) {
    let newArr = detail.hobbyL;
    newArr.splice(ind, 1);
    setDetail((prev) => ({
      ...prev,
      hobbyL: [...newArr],
    }));
    // let hobbyListA = detail.hobbyL;
    // console.log(hobbyListA);
    /*  let newHobbyList = detail.hobbyL.filter((e, i) => {
      return i !== ind;
    });
    // detail.hobbyL(newHobbyList);
    setDetail({ ...detail, hobbyL: newHobbyList }); */
  }

  return (
    <>
      <Navbar></Navbar>
      <div className="task2">
        {console.log(card, "======================")}
        <div className="leftSection">
          <div className="hobbyDisplay">
            <div className="hobbyInp">
              {/* <InputComponent /> */}
              <InputComponent
                name={"Hobby"}
                detail={detail}
                text={hobby}
                typeInp={"text"}
                sendText={(e) => {
                  setHobby(e.target.value);
                }}
                keyPress={(e) => (e.key == "Enter" ? handleHobby() : "")}
              />
              {/* <input
              type="text"
              ref={hobbyInpRef}
              name="hobby"
              id="hobbybar"
              placeholder="HOBBY"
              value={hobby}
              onChange={(e) => {
                setHobby(e.target.value);
              }}
              onKeyDown={(e) => (e.key == "Enter" ? handleHobby() : "")}
            /> */}
              <h1 onClick={handleHobby} /* onKeyDown={enterHobby} */>+</h1>
              {/* <span>Click on hobby to delete</span> */}
            </div>
            <div className="hobby">
              {detail.hobbyL.map((e, i) => {
                return (
                  <div key={`hobby${i}`}>
                    <h1 onClick={() => deleteHobby(i)}>{e}</h1>
                  </div>
                );
              })}
            </div>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="textInputs">
              {["name", "email", "username"].map((e, i) => {
                return (
                  <InputComponent
                    ind={i}
                    name={e}
                    detail={detail}
                    typeInp={e === "email" ? "email" : "text"}
                    text={detail[e]}
                    sendText={handleChange}
                    // required
                  />
                );
              })}
              {/* <InputComponent
              name={"name"}
              typInp={"text"}
              detail={detail}
              text={detail.name}
              sendText={handleChange}
              required
            />
            <InputComponent
              name={"email"}
              typInp={"email"}
              detail={detail}
              text={detail.email}
              sendText={handleChange}
              required
            />
            <InputComponent
              name={"username"}
              detail={detail}
              typeInp={"text"}
              text={detail.username}
              sendText={handleChange}
              required
            /> */}

              {/*
            <input
              type="text"
              name="username"
              id=""
              placeholder="USERNAME"
              value={detail.username}
              onChange={handleChange}
              required
            /> */}
              {/* <br /> */}
            </div>

            <div className="genderSelection">
              {/* <label htmlFor="male">male</label> */}
              {console.log(detail)}

              {["male", "female"].map((e) => {
                return (
                  <RadioComponent
                    name={e}
                    checked={detail.gender === e}
                    radioChange={(event) => {
                      setDetail((prev) => ({
                        ...prev,
                        gender: event.target.id,
                      }));
                    }}
                  />
                );
              })}
              {/* <RadioComponent
              name={"male"}
              checked={detail.gender === "male"}
              radioChange={(e) => {
                setDetail((prev) => ({ ...prev, gender: e.target.id }));
              }}
            />
            <RadioComponent
              name={"female"}
              checked={detail.gender === "female"}
              radioChange={(e) => {
                setDetail((prev) => ({ ...prev, gender: e.target.id }));
              }}
            /> */}
              {/* <input
              type="radio"
              name="male"
              id="male"
              // value={detail.gender.includes("male")}
              checked={detail.gender === "male"}
              onChange={(e) => {
                setDetail((prev) => ({ ...prev, gender: e.target.id }));
              }}
              // required
            /> */}

              {/* {console.log(detail)} */}
              {/* <label htmlFor="female">female</label>
            <input
              type="radio"
              name="male"
              id="female"
              // value={detail.gender.includes("female")}
              checked={detail.gender === "female"}
              onChange={(e) => {
                setDetail((prev) => ({ ...prev, gender: e.target.id }));
              }}
              //required
            /> */}
            </div>
            <hr />

            <div className="languageSelection">
              {["Java", "Javascript", "C++", "C"].map((e, i) => {
                return (
                  <div className="one" key={`language${i}`}>
                    <CheckboxComponent
                      name={e}
                      checked={detail.language.includes(e)}
                      handleLanguage={handleLanguage}
                    />
                  </div>
                );
              })}
            </div>
            <button>Post</button>
          </form>
        </div>
        <div className="cardDisplay">
          {card.map((e, i) => {
            return (
              <CardComponent
                title={e}
                cardI={i}
                updating={updating}
                editFnc={editFnc}
                deleteCardFnc={deleteCardFnc}
                editIndex={editIndex}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Formpage;
