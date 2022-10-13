import { images } from "../assets/avatars/pics";
import string from "../assets/string.svg";
import model from "../assets/model.png";
import { Heart } from "iconsax-react";

const Hero = () => {
  return (
    //<-------------------------------------- Hero section---------------------------------------------------------------->
    <div className=" overflow-hidden flex h-auto background relative bg-[#609EAF] w-[100%]   rounded-[40px] top-6 px-6 py-4">
      <div>
        <h5 className="pl-[20px] pt-[10px] font-extralight text-xs">Currated playlist</h5>
        <div className="  mt-[300px] pl-[20px]">
          <h1 className="text-[35px] font-bold">R & B Hits</h1>
          <p className="max-w-[15rem] text-sm font-extralight">
            All mine, Lie again, Petty call me everyday, Out of time, No love, Bad habit, and so
            much more
          </p>
          <div className="   flex items-center pt-[40px] pb-[20px]">
            {images.map((image) => (
              <img
                className="ml-[-12px]"
                src={image.img}
                alt="avater"
                key={image.id}
                width={image.size}
                height={image.size}
              />
            ))}
            <span className="pl-2">&nbsp;</span>
            {<Heart variant="Bold" size="20px" />}
            <h3 className="pl-[2px] ">33k Likes</h3>
          </div>
        </div>
      </div>
      <span>
        <img
          className=" hidden absolute w-[230px] h-[380px] left-[420px] bottom-[0px] z-10"
          src={model}></img>
        <img
          src={string}
          className=" h-[230px] absolute left-[150px]  right-[0] bottom-[400px] rotate-90"></img>
      </span>
    </div>
  );
};

export default Hero;

// import { images } from "../assets/avatars/pics";
// import string from "../assets/string.svg";
// import model from "../assets/model.png";
// import { Heart } from "iconsax-react";

// const Hero = () => {
//   return (
//     <div className=" overflow-hidden flex h-auto background relative bg-[#609EAF] w-[686px]   rounded-[40px] top-6 px-6 py-4">
//       <div>
//         <h5 className="pl-[20px] pt-[38px] font-extralight text-xs">Currated playlist</h5>
//         <div className="  mt-[85px] pl-[20px]">
//           <h1 className="text-[35px] font-bold">R & B Hits</h1>
//           <p className="max-w-[15rem] text-xs font-extralight">
//             All mine, Lie again, Petty call me everyday, Out of time, No love, Bad habit, and so
//             much more
//           </p>
//           <div className="   flex items-center pt-[40px] pb-[20px]">
//             {images.map((image) => (
//               <img
//                 className="ml-[-12px]"
//                 src={image.img}
//                 alt="avater"
//                 key={image.id}
//                 width={image.size}
//                 height={image.size}
//               />
//             ))}
//             <span className="pl-5">&nbsp;</span>
//             {<Heart variant="Bold" size="20px" />}
//             <h3 className="pl-1 ">33k Likes</h3>
//           </div>
//         </div>
//       </div>
//       <span>
//         <img
//           className="absolute w-[230px] h-[380px] left-[420px] bottom-[0px] z-10"
//           src={model}></img>
//         <img src={string} className=" h-[430px] absolute right-[0px]  bottom-[0px] top-[0px]"></img>
//       </span>
//     </div>
//   );
// };

// export default Hero;
