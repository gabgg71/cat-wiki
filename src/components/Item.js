import { useState } from "react";
export const Item = ({ item, i, value }) => {
  let [check] = useState(false);
  if (i > 2) {
    check = true;
  }
  return (
    <div className="needed">
      <div className="item">
        <p>
          <b>{item}: </b>
          {!check && value}
        </p>
      </div>
      <div className="level">
        {check &&
          [1, 2, 3, 4, 5].map((lev, i) =>
            i < value ? (
              <div className="circle brown"></div>
            ) : (
              <div className="circle grey"></div>
            )
          )}
      </div>
    </div>
  );
};
