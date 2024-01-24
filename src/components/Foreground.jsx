import React from "react";
import Card from "./Card";
import { useRef } from "react";
function Foreground() {
  const ref = useRef(null);
  // const data = [
  //   description , filesize , close or download , tagDetails
  // ]
  const data = [
    {
      description: "Lorem, ipsum dolor sit amet consectetur adipisicing.",
      filesize: "0.9mb",
      close: false,
      tag: {
        isOpen: true,
        tagTitle: "Download Now",
        tagColor: "green",
      },
    },
    {
      description: "Lorem, ipsum dolor sit amet consectetur adipisicing.",
      filesize: "0.9mb",
      close: true,
      tag: {
        isOpen: true,
        tagTitle: "Upload",
        tagColor: "blue",
      },
    },
    {
      description: "Lorem, ipsum dolor sit amet consectetur adipisicing.",
      filesize: "0.9mb",
      close: false,
      tag: {
        isOpen: false,
        tagTitle: "Download Now",
        tagColor: "green",
      },
    },
  ];
  return (
    <div
      ref={ref}
      className="fixed top-0 left-0 z-[3] w-full h-full p-5 flex gap-10 flex-wrap"
    >
      {data.map((item, index) => (
        <Card data={item} reference={ref} />
      ))}
    </div>
  );
}

export default Foreground;
