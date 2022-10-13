import { data } from "../data/fetch";
import { Heart } from "iconsax-react";
import "../index.css";

const NewReleases = () => {
  return (
    // each image card set to flex
    <div className="flex scroll  overflow-x-auto ">
      <div className="flex">
        {/* // Mapping the Object brought in from the fetch component */}
        {data.map((song) => (
          <div className={`w-[200px] ${data[0] !== song ? "pl-5" : "pl-0"}`}>
            {/* // The image brought in from the fetch data */}
            <img src={song.link} width="500px" height='500px' className="rounded-xl" />
            {/* //text brought in from the data */}
            <h6 className="text-xs pt-3 pl-3">{song.name}</h6>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewReleases;
