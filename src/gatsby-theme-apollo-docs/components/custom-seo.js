import PropTypes from "prop-types";
import React from "react";
import { SEO } from "gatsby-theme-apollo-core";
import { withPrefix } from "gatsby";

export default function CustomSEO({ image, baseUrl, twitterHandle, ...props }) {
  const imagePath = `${baseUrl}${withPrefix("/social-card.png")}`;
  return (
    <SEO {...props} favicon={"/favicon.png"} twitterCard="summary_large_image">
      <meta property="og:image" content={imagePath} />
      {baseUrl && <meta name="twitter:image" content={imagePath} />}
      {twitterHandle && (
        <meta name="twitter:site" content={`@${twitterHandle}`} />
      )}
    </SEO>
  );
}

CustomSEO.propTypes = {
  baseUrl: PropTypes.string,
  image: PropTypes.string.isRequired,
  twitterHandle: PropTypes.string,
};
