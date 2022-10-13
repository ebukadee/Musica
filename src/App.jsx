import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import NewReleases from "./components/NewReleases";
import Playing from "./components/Playing";
import Popular from "./components/Popular";
import Search from "./components/Search";
import TopChart from "./components/TopCharts";

const App = () => {
  return (
    <>
      <header className="bg-dark h-[100vh] overflow-x-hidden  p-5 ">
        <Navbar />
        <Search />
        <Hero />
        <h2 className="pt-[50px] pb-[20px] ">Top Charts</h2>
        <TopChart />
        <h2 className="py-[20px]">New Releases</h2>
        <NewReleases />
      </header>
      <Playing />
    </>
  );
};

export default App;

// import styles from "./index.css";
// import Hero from "./components/Hero";
// import Navbar from "./components/Navbar";
// import NewReleases from "./components/NewReleases";
// import Playing from "./components/Playing";
// import Popular from "./components/Popular";
// import Search from "./components/Search";
// import TopChart from "./components/TopCharts";

// const App = () => {
//   return (
//     <header className="bg-dark   p-5 ">
//       <Navbar />
//       <div className=" relative flex flex-col items-start  ">
//         <Search />
//         <Hero />
//         <NewReleases />
//       </div>
//     </header>
//   );
// };

// export default App;
