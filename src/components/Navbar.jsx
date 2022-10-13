import { Home, MusicPlaylist, Radio, Video, User, Logout } from "iconsax-react";

const Navbar = () => {
  return (
    <nav className=" hidden fixed  flex-col items-start top-12 ">
      {" "}
      <ul className="mt-10 bg-darker rounded-3xl px-3 pt-2 pb-4">
        <li className="mt-5">
          <Home color="#EFEEE040" variant="Bold" />
        </li>
        <li className="mt-5">
          <MusicPlaylist color="#EFEEE040" variant="Bold" />
        </li>
        <li className="mt-5">
          <Radio color="#EFEEE040" variant="Bold" />
        </li>
        <li className="mt-5">
          <Video color="#EFEEE040" variant="Bold" />
        </li>
      </ul>
      <ul className="mt-10 bg-darker rounded-3xl px-3 pt-2 pb-4">
        <li className="mt-5">
          <User color="#EFEEE040" variant="Bold" />
        </li>
        <li className="mt-5">
          <Logout color="#EFEEE040" variant="Bold" />
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

// import { Home, MusicPlaylist, Radio, FolderFavorite, User, Logout } from "iconsax-react";
// import Logo from "../assets/logo.svg";

// const Navbar = () => {
//   return (
//     <nav className=" fixed flex flex-col items-start top-12 ">
//       {" "}
//       <img src={Logo} alt="Logo" />
//       <ul className="mt-10 bg-darker rounded-3xl px-3 pt-2 pb-4">
//         <li className="mt-5">
//           <Home color="#EFEEE040" variant="Bold" />
//         </li>
//         <li className="mt-5">
//           <MusicPlaylist color="#EFEEE040" variant="Bold" />
//         </li>
//         <li className="mt-5">
//           <Radio color="#EFEEE040" variant="Bold" />
//         </li>
//         <li className="mt-5">
//           <FolderFavorite color="#EFEEE040" variant="Bold" />
//         </li>
//       </ul>
//       <ul className="mt-10 bg-darker rounded-3xl px-3 pt-2 pb-4">
//         <li className="mt-5">
//           <User color="#EFEEE040" variant="Bold" />
//         </li>
//         <li className="mt-5">
//           <Logout color="#EFEEE040" variant="Bold" />
//         </li>
//       </ul>
//     </nav>
//   );
// };

// export default Navbar;
