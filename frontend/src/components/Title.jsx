import React from "react";

const Title = ({title1, title2, titleStyles, title1Styles, paraStyles }) => {
  return (
    <div className={`${paraStyles} pb-1`}>
      <h2 className={`${title1Styles} h2`}>
        {title1}
        <span className="text-secondary !font-light underline">{title2}</span>
      </h2>
      <p className={`${paraStyles} hidden`}>
        Discover the best deals on top-quality products, Crafted to <br /> elevate your
        everyday experience.
      </p>
    </div>
  );
};

export default Title;
