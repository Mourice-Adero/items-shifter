import { useState } from "react";
import { BiChevronDown, BiChevronUp } from "react-icons/bi";

interface IListItem {
  userName: string;
  profession: string;
  imgUrl: string;
}

const List = () => {
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
type ListItemPropsType = {
  item: IListItem;
  index: number;
  moveUp: (index: number) => void;
  moveDown: (index: number) => void;
  listSize: number;
};
const ListItem = ({
  item,
  index,
  moveDown,
  moveUp,
  listSize,
}: ListItemPropsType) => {
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
              className={index >= listSize - 1 ? "hidden" : "block"}
            />
          </div>
        </div>
      </div>
    </li>
  );
};

export default List;
