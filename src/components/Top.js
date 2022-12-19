import { useContext } from "react";
import { userContext } from "../hooks/userContext";

export const Top = () => {
  const { breed } = useContext(userContext);
  const searched = breed.slice(0, 10);
  return (
    <>
      <h1 className="other">Top 10 most searched breeds</h1>
      {searched.map((s, i) => (
          <div className="flexi">
            <div className="fav">
              <img src={"https://cdn2.thecatapi.com/images/"+s.reference_image_id+".jpg"} alt={s.name}></img>
            </div>
            <div className="about">
              <b className="big">{i + 1}. </b>
              <b className="big">{s.name}</b>
              <p>{s.description}</p>
            </div>
          </div>
      ))}
    </>
  );
};
