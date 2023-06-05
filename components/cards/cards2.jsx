/** @format */

import React from "react";
import Image from "next/image";

const Cards2 = () => {
  const data2 = [
    {
      img: "/assets/images/11.jpg",
      title: "testimonials",
      text: " Mnis magnam impedit hic totam repudiandae reiciendis voluptate inventore nisi quidem Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab eius molestias, quasi",
    },
  ];

  <div className=" grid lg:grid-cols-3  drop-shadow-lg">
    <div className="flex flex-items center justify-center mt-22rem">
      {data2.map((cards2) => {
        return (
          <div className="flex flex-col">
            <Image src={cards2.img} alt={cards2.text} width={100} height={80} />
          </div>
        );
      })}
    </div>
  </div>;
};
export default Cards2;
