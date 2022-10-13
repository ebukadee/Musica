import { data } from "../data/fetch";
import { Heart } from "iconsax-react";
import "../index.css";

const TopChart = () => {
  return (
    <div className={`flex flex-row  scroll overflow-auto w-auto`}>
      <div className="flex">
        {data.map((song) => (
          <div
            className={` bg-darker w-[80vw]  px-3 py-3 ${
              data[0] !== song ? "ml-3" : "ml-0"
            } rounded-xl `}>
            <div className="flex justify-between">
              <img className="w-[100px] h-[100px]" src={song.link} alt="" />
              <Heart />
            </div>
            <h3 className="  font-extralight pt-3">{song.name}</h3>
            <h5 className="text-dimWhite text-xs font-extralight pt-1">{song.artist}</h5>
            <p className="  font-extralight pt-3">{song.length}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopChart;
