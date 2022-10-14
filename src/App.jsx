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
        <div className="lg:flex  lg:relative lg:left-20">
          <Hero />
          <TopChart />
        </div>
        <h2 className=" pl-20 mt-20  pb-[10px]">New Releases</h2>
        <NewReleases />
        <NewReleases />
        <NewReleases />
        <NewReleases />
        <NewReleases />
        <NewReleases />
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
