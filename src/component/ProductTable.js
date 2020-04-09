import React from "react";
import PropTypes from "prop-types";
import "../App.css";
export default function ProductTable(props) {
  return (
    <div className="container-fluid row">
      <div className="col-4"></div>
      <table className="col-4">
        <tr className="form">
          <th className="tableau">Name</th>
          <th className="tableau">Category</th>
          <th className="tableau">Price</th>
        </tr>
        {props.product.map((el, i) => {
          return (
            <tr className="form" key={i}>
              <td className="tableau">{el.name ? el.name : ""}</td>
              <td className="tableau">
                {el.category === "Electronics"
                  ? el.category
                  : el.category === "Clothes" && el.category}
              </td>
              <td className="tableau">{el.price ? el.price : ""}</td>
            </tr>
          );
        })}
      </table>
      <div className="col-4"></div>
    </div>
  );
}
ProductTable.propTypes = {
  product: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)),
};
