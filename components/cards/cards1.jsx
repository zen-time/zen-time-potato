/** @format */
"use client";
import React from "react";
import Image from "next/image";

const Testimonial = () => {
  const dataOne = [
    {
      img: "/assets/images/10.jpg",
      title: "testimonials",
      text: " Mnis magnam impedit hic totam repudiandae reiciendis voluptate inventore nisi quidem Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab eius molestias, quasi",
    },
    {
      img: "/assets/images/10.jpg",
      title: "testimonials",
      text: " Mnis magnam impedit hic totam repudiandae reiciendis voluptate inventore nisi quidem Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab eius molestias, quasi",
    },
    {
      img: "/assets/images/10.jpg",
      title: "testimonials",
      text: " Mnis magnam impedit hic totam repudiandae reiciendis voluptate inventore nisi quidem Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab eius molestias, quasi",
    },
  ];
  return (
    <div className=" grid lg:grid-cols-3 p-10 gap-60 w-max  drop-shadow-lg bg-black-100">
      {/* {dataOne.map((card) => {
        <div
          key={Math.random()}
          className="bg-indigo-950 flex flex-col justify-center w-[295px] p-6 items-center rounded-lg">
          <Image
            src={card.img}
            alt={card.text}
            width={100}
            height={80}
            className="rounded-full h-24 mx-auto"
          />
          <h3 className="font-semibold mt-2 p-2 text-center uppercase text-slate-300">
            {card.title}
          </h3>
          <p className="text-center text-slate-300 font-light leading-6 opacity-50">
            {card.text}
          </p>
          <button className="bg-indigo-100 hover:bg-indigo-200 rounded-full mt-4 py-2 px-4 font-medium cursor-pointer">
            Get in touch
          </button>
        </div>;
      })} */}
      {dataOne.map((card) => {
        return (
          <div className="bg-indigo-950 flex flex-col justify-center w-[295px] p-6 items-center rounded-lg">
            <Image
              src={card.img}
              alt={card.text}
              width={100}
              height={80}
              className="rounded-full h-24 mx-auto"
            />
            <h3 className="font-semibold mt-2 p-2 text-center uppercase text-slate-300">
              {card.title}
            </h3>
            <p className="text-center text-slate-300 font-light leading-6 opacity-50">
              {card.text}
            </p>
            <button className="bg-indigo-100 hover:bg-indigo-200 rounded-full mt-4 py-2 px-4 font-medium cursor-pointer">
              Get in touch
            </button>
          </div>
        );
      })}
    </div>
  );
};
export default Testimonial;
