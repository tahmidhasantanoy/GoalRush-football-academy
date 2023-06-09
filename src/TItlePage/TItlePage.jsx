import React from "react";
import { Helmet } from "react-helmet";

const TItlePage = ({ title }) => {
  return (
    <Helmet>
      <title>{title+" | GoalRush"}</title>
    </Helmet>
  );
};

export default TItlePage;
