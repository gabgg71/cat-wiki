export const CatSearch = () => {
  return (
    <>
      <div className="mainCat">
        <img
          src="https://cdn.pixabay.com/photo/2016/07/10/11/55/cat-1507600_960_720.jpg"
          className="mainImage"
        ></img>
        <h3>Catwiki</h3>
        <div className="limite">
          <p className="white">Get to know more about your cat breed</p>
          <input placeholder=" Enter your breed "></input>
        </div>
      </div>
      <div className="discover">
        <p className="ord">Most Searched Breeds</p>
        <div className="fl">
        <b>66+ Breeds For you to discover</b>
        <a
          href="https://devchallenges.io/challenges/f4NJ53rcfgrP6sBMD2jt"
          className="more"
        >
          SEE MORE
          <i class="material-icons">arrow_right_alt</i>
        </a>
        </div>
        </div>
        <div className="flex">
          <div className="fav">
            <img src="https://cdn.pixabay.com/photo/2016/07/10/11/55/cat-1507600_960_720.jpg"></img>
            <a>Bengal </a>
          </div>
          <div className="fav">
            <img src="https://cdn.pixabay.com/photo/2016/07/10/11/55/cat-1507600_960_720.jpg"></img>
            <a>Bengal </a>
          </div>
          <div className="fav">
            <img src="https://cdn.pixabay.com/photo/2016/07/10/11/55/cat-1507600_960_720.jpg"></img>
            <a>Bengal </a>
          </div>
          <div className="fav">
            <img src="https://cdn.pixabay.com/photo/2016/07/10/11/55/cat-1507600_960_720.jpg"></img>
            <a>Bengal </a>
          </div>
        
      </div>
    </>
  );
};
