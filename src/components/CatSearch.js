import { useContext } from "react";
import { useState } from "react/cjs/react.development";
import { userContext } from "../hooks/userContext";

export const CatSearch = () => {
  const { breed } = useContext(userContext);
  const searched = breed.slice(0, 4);
  const [show, setShow] = useState(false);
  let list;

  const look = (e) => {
    if (e.target.value.length === 0) {
      setShow(false);
      return false;
    }
    setShow(true);

    list = document.querySelector("ul");

    if (list !== null) {
      let filtrado = breed.filter((b) =>
        b.name.toLowerCase().startsWith(e.target.value.toLowerCase())
      );
      let algo = filtrado.map((el) => `<li>${el.name}</li>`);
      algo.length > 0
        ? (list.innerHTML = algo.reduce(
            (previous, current) => previous + current
          ))
        : (list.innerHTML = `<li>0 coincidences</li>`);
    }
  };

  return (
    <>
      <div className="mainCat">
        <img
          src="https://github.com/gabgg71/cat-wiki/blob/main/public/HeroImagemd.png?raw=true"
          className="mainImage"
          alt="mainImage"
        ></img>
        <div className="limite">
          <img
            src="https://raw.githubusercontent.com/gabgg71/cat-wiki/8d15e17e89d7c38cee38465cd337fafe2d17cfde/public/CatwikiLogo.svg"
            alt="logo"
            className="l-white"
          ></img>
          <p className="white">Get to know more about your cat breed</p>
          <input placeholder=" Enter your breed " onInput={look}></input>
          {show && <ul></ul>}
        </div>
      </div>
      <div className="discover">
        <p className="ord">Most Searched Breeds</p>
        <div className="fl">
          <b className="big">66+ Breeds For you to discover</b>
          <a href="/searched" className="more">
            SEE MORE
          </a>
        </div>
      </div>
      <div className="flex">
        {searched.map((s, i) => (
          <div className="fav" key={s.id}>
            <img src={"https://cdn2.thecatapi.com/images/"+s.reference_image_id+".jpg"} alt={s.id + i}></img>
            
            <p>{s.name} </p>
          </div>
        ))}
      </div>
    </>
  );
};