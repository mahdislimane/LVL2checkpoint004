import React from "react";
import PropTypes from "prop-types";
import "../App.css";
export default function ProductTable(props) {
  return (
    <div>
      <div className="form">
        <h3 className="tableau">Name</h3>
        <h3 className="tableau">Category</h3>
        <h3 className="tableau">Price</h3>
      </div>
      {props.product.map((el, i) => {
        return (
          <div className="form" key={i}>
            <h3 className="tableau">{el.name ? el.name : ""}</h3>
            <h3 className="tableau">
              {el.category === "Electronics"
                ? el.category
                : el.category === "Clothes" && el.category}
            </h3>
            <h3 className="tableau">{el.price ? el.price : ""}</h3>
          </div>
        );
      })}
    </div>
  );
}
ProductTable.propTypes = {
  product: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string))
};
