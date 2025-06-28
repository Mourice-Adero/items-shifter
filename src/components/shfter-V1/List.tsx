import { useState } from "react";
import { BiChevronDown, BiChevronUp } from "react-icons/bi";

const List = () => {
  const [myItems, setMyItems] = useState([
    {
      userName: "John Doe",
      profession: "Web Developer ",
      imgUrl:
        "https://loremipsum.imgix.net/gPyHKDGI0md4NkRDjs4k8/36be1e73008a0181c1980f727f29d002/avatar-placeholder-generator-500x500.jpg?w=1280&q=60&auto=format,compress",
    },
    {
      userName: "Jane Doe",
      profession: "Data Analyst",
      imgUrl:
        "https://loremipsum.imgix.net/gPyHKDGI0md4NkRDjs4k8/36be1e73008a0181c1980f727f29d002/avatar-placeholder-generator-500x500.jpg?w=1280&q=60&auto=format,compress",
    },
    {
      userName: "Peter J.",
      profession: "Data Analyst",
      imgUrl:
        "https://loremipsum.imgix.net/gPyHKDGI0md4NkRDjs4k8/36be1e73008a0181c1980f727f29d002/avatar-placeholder-generator-500x500.jpg?w=1280&q=60&auto=format,compress",
    },
    {
      userName: "Tim B.",
      profession: "Data Analyst",
      imgUrl:
        "https://loremipsum.imgix.net/gPyHKDGI0md4NkRDjs4k8/36be1e73008a0181c1980f727f29d002/avatar-placeholder-generator-500x500.jpg?w=1280&q=60&auto=format,compress",
    },
  ]);

  const moveUp = (i: number) => {
    if (i <= 0) {
      return;
    }

    const temp = myItems[i];
    myItems[i] = myItems[i - 1];
    myItems[i - 1] = temp;
    setMyItems([...myItems]);
  };
  const moveDown = (i: number) => {
    if (i >= myItems.length - 1) {
      return;
    }
    const temp = myItems[i];
    myItems[i] = myItems[i + 1];
    myItems[i + 1] = temp;
    setMyItems([...myItems]);
  };
  return (
    <ul className="w-full">
      {myItems.map((item, index) => {
        return (
          <li key={index}>
            <div className="shadow-xs shadow-black rounded  p-5 mb-3 flex justify-between">
              <div className="flex">
                <div>
                  <img
                    src={item.imgUrl}
                    alt="profile image"
                    className="rounded-full p-2"
                    width={100}
                  />
                </div>
                <div>
                  <p>Position: {item.userName}</p>
                  <p>Name: {item.profession}</p>
                </div>
              </div>
              <div>
                <div className="text-3xl">
                  <BiChevronUp
                    onClick={() => moveUp(index)}
                    className={index <= 0 ? "hidden" : "block"}
                  />

                  <BiChevronDown
                    onClick={() => moveDown(index)}
                    className={index >= myItems.length - 1 ? "hidden" : "block"}
                  />
                </div>
              </div>
            </div>
          </li>
        );
      })}
    </ul>
  );
};

export default List;
