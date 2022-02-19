import React from "react";
import { Helmet } from "react-helmet";

type props = {
  title?: string;
  description?: string;
  url?: string;
};

const Meta: React.FC<props> = ({ title, description, url }) => (
  <Helmet>
    <title>{title}</title>
    <html lang="ja" />
    <meta name="description" content={description} />
    <meta charSet="utf-8" />
    <meta property="og:url" content={url} />
    <meta property="og:title" content={title} />
    <meta property="og:description" content={description} />
  </Helmet>
);

export default Meta;
