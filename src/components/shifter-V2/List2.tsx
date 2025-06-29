import { useState } from "react";
import ListItem from "./ListItem";

export interface IListItem {
  userName: string;
  profession: string;
  imgUrl: string;
}

const List2 = () => {
  const [myItems, setMyItems] = useState<IListItem[]>([
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
  const itemLength = myItems.length;

  const moveUp = (itemIndex: number) => {
    if (itemIndex <= 0) {
      return;
    }

    const temp = myItems[itemIndex];
    myItems[itemIndex] = myItems[itemIndex - 1];
    myItems[itemIndex - 1] = temp;
    setMyItems([...myItems]);
  };
  const moveDown = (itemIndex: number) => {
    // console.log("Move down function called");

    if (itemIndex >= itemLength - 1) {
      return;
    }
    const temp = myItems[itemIndex];
    myItems[itemIndex] = myItems[itemIndex + 1];
    myItems[itemIndex + 1] = temp;
    setMyItems([...myItems]);
  };
  return (
    <div className="flex justify-center align-middle p-20">
      <ul className="w-full">
        {myItems.map((item, index) => {
          return (
            <ListItem
              key={item.userName + index}
              index={index}
              item={item}
              moveDown={moveDown}
              moveUp={moveUp}
              listSize={itemLength}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default List2;
