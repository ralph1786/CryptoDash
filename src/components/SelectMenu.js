import React from "react";

const SelectMenu = props => {
  const { value, handleChange } = props;
  return (
    <div style={styles}>
      <span>Price Last: </span>
      <select value={value} onChange={handleChange}>
        <option value="5">5</option>
        <option value="10">10</option>
        <option value="15">15</option>
        <option value="20">20</option>
        <option value="25">25</option>
        <option value="30">30</option>
      </select>
      <span> Days</span>
    </div>
  );
};

const styles = {
  gridColumn: "1/3",
  gridRow: "4/5",
  justifySelf: "center",
  marginTop: "5%"
};

export default SelectMenu;
