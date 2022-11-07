// import { data } from "../data/fetch";
import fetchData from "./fetch";
import { Heart } from "iconsax-react";
import "../index.css";
import { useQuery } from "react-query";

const TopChart = () => {
  const { data, error, isError, isLoading } = useQuery("users", fetchData);

  if (isLoading) {
    console.log("Loading...");
  }
  if (isError) {
    console.log({ error });
  }
  console.log(data);

  //   return (
  //     <div className="lg:flex lg:flex-col lg:ml-10">
  //       <h2 className="pt-[50px] pb-[20px] lg:pb-[0px]">Top Charts</h2>

  //       <div className={`flex flex-row  scroll overflow-auto w-auto`}>
  //         <div className="flex lg:flex-col ">
  //           {data.map((song) => (
  //             <div
  //               className={` bg-darker lg:w-[30vw] w-[80vw] mt-7 lg:mt-3 px-3 py-3 flex lg:flex  lg:items-center justify-between lg:justify-between ${
  //                 data[0] !== song ? "ml-3 lg:ml-0" : "ml-0"
  //               } rounded-xl ${data.indexOf(song) >= 3 ? "lg:hidden" : "lg:block"}`}>
  //               <div className="lg:flex justify-between lg:justify-start lg:items ">
  //                 <img
  //                   className="lg:w-[70px] lg:h-[70px] w-[100px] h-[100px]"
  //                   src={song.link}
  //                   alt=""
  //                 />
  //                 <div className="lg:ml-5">
  //                   <h3 className="  font-extralight pt-3">{song.name}</h3>
  //                   <h5 className="text-dimWhite text-xs font-extralight pt-1">{song.artist}</h5>
  //                   <p className="  font-extralight pt-3">{song.length}</p>
  //                 </div>
  //               </div>
  //               <Heart className="mr-3 mt-3" />
  //             </div>
  //           ))}
  //         </div>
  //       </div>
  //     </div>
  //   );
};

export default TopChart;
