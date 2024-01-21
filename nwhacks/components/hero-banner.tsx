import Image from "next/image";
import React from "react";

export const HeroBanner: React.FC = () => {
  const logo = "https://cdn.auth0.com/blog/developer-hub/nextjs-logo.svg";

  return (
    <div className="hero-banner hero-banner--pink-yellow">
      <h1 className="hero-banner__headline">Welcome!</h1>
    </div>
  );
};
