import styles from "../index.css";
import { menus } from "../items";
import { SearchNormal, HambergerMenu, CloseCircle } from "iconsax-react";
import { useState } from "react";
import Logo from "../assets/logo.svg";

const Search = () => {
  const [toggle, setToggle] = useState(false);
  const handleClick = () => {
    setToggle((prev) => !prev);
  };

  return (
    <>
      <div className="flex items-center  justify-between  ">
        <span onClick={handleClick} className="z-30 lg:hidden ">
          {toggle ? <CloseCircle color="#fff" /> : <HambergerMenu color="#fff" />}
        </span>
        <img src={Logo} alt="Logo" />
        <div>
          <SearchNormal color="#fff" size="1rem" />
        </div>
      </div>
      <div
        className={` ${
          toggle ? "flex " : "  hidden "
        } leading-10 bg-darkGlass backdrop-blur-lg h-[100%] w-[100%] left-0  top-0 absolute z-20  flex-col items-start mx-auto justify-center sidebar`}>
        {menus.map((menu) => (
          <div className="flex ml-[30%] py-8" key={menu.key}>
            <img src={menu.title} className="w-[30px] h-[30px]" alt="menu" />{" "}
            <h3 className="pl-4 font-extralight text-lg ">{menu.text} </h3>
          </div>
        ))}
      </div>
      <div className=" hidden lg:flex items-center  bg-darker  w-[30%] px-3 mt-1 ml-20 lg:relative lg:top-[-40px] rounded-3xl  border-0   py-3">
        <input
          placeholder="Search artists"
          className=" placeholder-dimWhite bg-transparent caret-white  outline-none ml-2 "></input>
      </div>
    </>
  );
};

export default Search;

// import styles from "../index.css";
// import { SearchNormal } from "iconsax-react";

// const Search = () => {
//   return (
//     <div className=" flex items-center  bg-darker  w-[30%] px-3 mt-7 ml-20  rounded-3xl  border-0  py-3">
//       <div>
//         <SearchNormal color="#EFEEE040" size="1rem" />
//       </div>{" "}
//       <input
//         placeholder="Search artists"
//         className=" placeholder-dimWhite bg-transparent caret-white  outline-none ml-2 "></input>
//     </div>
//   );
// };

// export default Search;
