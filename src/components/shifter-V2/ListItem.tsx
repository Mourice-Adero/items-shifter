import { BiChevronDown, BiChevronUp } from "react-icons/bi";
import type { IListItem } from "./List2";

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
export default ListItem;
