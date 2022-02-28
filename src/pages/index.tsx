import React from "react";

import Helmet from "../components/atoms/Helmet";
import App from "../components/top";

const Index: React.VFC = () => {
  const meta = {
    title: "box press release",
    description: "",
    url: "https://box-press-release.netlify.app",
  };
  return (
    <div>
      <Helmet {...meta} />
      <App />
    </div>
  );
};

export default Index;
