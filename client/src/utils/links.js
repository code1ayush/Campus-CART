import { BsFillCartPlusFill } from "react-icons/bs";
import { AiOutlineHeart } from "react-icons/ai";
import { MdSell } from "react-icons/md";
import { ImBooks } from "react-icons/im";

const links = [
  {
    id: 1,
    text: "Buy",
    path: "/",
    icon: <ImBooks />,
  },
  {
    id: 2,
    text: "Sell",
    path: "sell",
    icon: <MdSell />,
  },
  {
    id: 3,
    text: "Cart",
    path: "Cart",
    icon: <BsFillCartPlusFill />,
  },
  {
    id: 4,
    text: "WishList",
    path: "WishList",
    icon: <AiOutlineHeart />,
  },
  {
    id: 5,
    text: "Contact",
    path: "contact",
    icon: <AiOutlineHeart />,
  },
];

export default links;
