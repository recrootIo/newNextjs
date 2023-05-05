import React from "react";

const Container = ({ Children, ...other }) => {
  return <div {...other}>{Children}</div>;
};

export default Container;
