/** @format */

import React from "react";
import Image from "next/image";

const Cards = () => {
  const data = [
    {
      img: "/assets/images/1.jpg",
      title: "Front-End-Developer",
      text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab eius molestias, quasi, quam omnis magnam impedit hic totam repudiandae reiciendis voluptate inventore nisi quidem.",
    },
    {
      img: "/assets/images/2.jpg",
      title: "Back-End-Developer",
      text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab eius molestias, quasi, quam omnis magnam impedit hic totam repudiandae reiciendis voluptate inventore nisi quidem.",
    },
    {
      img: "/assets/images/3.jpg",
      title: "Full stack developer",
      text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab eius molestias, quasi, quam omnis magnam impedit hic totam repudiandae reiciendis voluptate inventore nisi quidem.",
    },
    {
      img: "/assets/images/4.jpg",
      title: "Testing",
      text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab eius molestias, quasi, quam omnis magnam impedit hic totam repudiandae reiciendis voluptate inventore nisi quidem.",
    },
    {
      img: "/assets/images/5.jpg",
      title: "next.js",
      text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab eius molestias, quasi, quam omnis magnam impedit hic totam repudiandae reiciendis voluptate inventore nisi quidem.",
    },
    {
      img: "/assets/images/6.jpg",
      title: "PhP Developer",
      text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab eius molestias, quasi, quam omnis magnam impedit hic totam repudiandae reiciendis voluptate inventore nisi quidem.",
    },
    {
      img: "/assets/images/7.jpg",
      title: "Word press",
      text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab eius molestias, quasi, quam omnis magnam impedit hic totam repudiandae reiciendis voluptate inventore nisi quidem.",
    },
    {
      img: "/assets/images/8.jpg",
      title: " Tailwind CSS",
      text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab eius molestias, quasi, quam omnis magnam impedit hic totam repudiandae reiciendis voluptate inventore nisi quidem.",
    },
    {
      img: "/assets/images/9.jpg",
      title: " ReactJS",
      text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab eius molestias, quasi, quam omnis magnam impedit hic totam repudiandae reiciendis voluptate inventore nisi quidem.",
    },
  ];

  // const data1 = [
  //   {
  //     img: "/assets/images/10.jpg",
  //     title: "testimonials",
  //     text: " Mnis magnam impedit hic totam repudiandae reiciendis voluptate inventore nisi quidem Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab eius molestias, quasi",
  //   },
  //   {
  //     img: "/assets/images/10.jpg",
  //     title: "testimonials",
  //     text: " Mnis magnam impedit hic totam repudiandae reiciendis voluptate inventore nisi quidem Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab eius molestias, quasi",
  //   },
  //   {
  //     img: "/assets/images/10.jpg",
  //     title: "testimonials",
  //     text: " Mnis magnam impedit hic totam repudiandae reiciendis voluptate inventore nisi quidem Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab eius molestias, quasi",
  //   },
  // ];

  return (
    <div className=" flex items-center justify-center ">
      <div className=" grid lg:grid-cols-3 gap-8">
        {data.map((cards) => {
          return (
            <div className="bg-gray-50 shadow-xl w-[300px] mx-12 my-4 rounded-lg ">
              <Image
                src={cards.img}
                alt={cards.text}
                width={300}
                height={280}
                className="rounded-t-lg"
              />
              <h3 className="font-semibold mt-2 p-2">{cards.title}</h3>
              <p className="font-thin text-center p-4">{cards.text}</p>
            </div>
          );
        })}

        {/* <div className=" grid lg:grid-cols-3 p-10 gap-60 w-max  drop-shadow-lg bg-black-100">
          {data1.map((cards1) => {
            return (
              <div className="bg-indigo-950 flex flex-col justify-center w-[295px] p-6 items-center rounded-lg">
                <Image
                  src={cards1.img}
                  alt={cards1.text}
                  width={100}
                  height={80}
                  className="rounded-full h-24 mx-auto"
                />
                <h3 className="font-semibold mt-2 p-2 text-center uppercase text-slate-300">
                  {cards1.title}
                </h3>
                <p className="text-center text-slate-300 font-light leading-6 opacity-50">
                  {cards1.text}
                </p>
                <button className="bg-indigo-100 hover:bg-indigo-200 rounded-full mt-4 py-2 px-4 font-medium cursor-pointer">
                  Get in touch
                </button>
              </div>
            );
          })}
        </div> */}
      </div>
    </div>
  );
};

export default Cards;
