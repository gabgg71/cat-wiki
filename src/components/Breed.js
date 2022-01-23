import { useState } from "react";
import { fetchSinToken } from "../helpers/fetch";
import { Item } from "./Item";
import { useParams } from "react-router-dom";

export const Breed = () => {
  const [selected, setSelected] = useState({
    name: "",
    description: "",
    temperament: "",
    origin: "",
    life_span: "",
    adaptability: 0,
    affection_level: 0,
    child_friendly: 0,
    grooming: 0,
    intelligence: 0,
    health_issues: 0,
    social_needs: 0,
    stranger_friendly: 0,
  });
  const [imageU, setImageU] = useState("");
  const [otherPhotos, setPhotos] = useState([]);
  let id = useParams().breedId;
  let items = [
    "Temperament",
    "Origin",
    "Life-Span",
    "Adaptability",
    "Affection level",
    "Child-friendly",
    "Grooming",
    "Intelligence",
    "Health issue",
    "Social needs",
    "Stranger friendly",
  ];
  let data = [
    selected.temperament,
    selected.origin,
    selected.life_span,
    selected.adaptability,
    selected.affection_level,
    selected.child_friendly,
    selected.grooming,
    selected.intelligence,
    selected.health_issues,
    selected.social_needs,
    selected.stranger_friendly,
  ];

  window.addEventListener("load", async () => {
    const resp = await fetchSinToken(
      `https://api.thecatapi.com/v1/images/search?breed_ids=${id}`,
      {}
    );
    const body = await resp.json();
    setSelected(body[0].breeds[0]);
    let image_id = body[0].breeds[0].reference_image_id;
    const resImage = await fetchSinToken(
      `https://api.thecatapi.com/v1/images/${image_id}`,
      {}
    );
    const image = await resImage.json();
    setImageU(image.url);
    const resPhotos = await fetchSinToken(
      `https://api.thecatapi.com/v1/images/search?breed_id=${id}&limit=8`,
      {}
    );
    const otherP = await resPhotos.json();
    image_id = otherP.map((ph) => ph.url);
    setPhotos(image_id);
  });
  return (
    <>
      <div className="description">
        <div className="fav photo">
          <img src={imageU} alt="mainImage"></img>
        </div>
        <div className="text">
          <h1>{selected.name}</h1>
          <p>{selected.description}</p>

          {items.map((item, i) => (
            <Item item={item} i={i} value={data[i]} key={i} />
          ))}
        </div>
      </div>
      <div>
        <h1 className="other">Other photos</h1>
        <div className="otherP other">
          {otherPhotos.map((op, i) => (
            <div className="fav" key={i+op}>
              <img src={op} alt={i}></img>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
