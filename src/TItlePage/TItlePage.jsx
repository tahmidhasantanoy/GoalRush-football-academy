import React from "react";
import { Helmet } from "react-helmet";

const TitlePage = ({ title }) => {
  return (
    <Helmet>
      <title>{title + " | GoalRush"}</title>
    </Helmet>
  );
};

export default TitlePage;
