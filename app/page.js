// import Inputs from "@components/inputs";

import ReusableInputComponent from "@components/inputs/reusableinputcomponent";

const Home = () => {
  return (
    <>
      {/* <Inputs /> */}
      <ReusableInputComponent
        type="range"
        min="0"
        max="1000"
        step="50"
        list="marker"
        label="range input"
        id="range"
      />
      <ReusableInputComponent
        type="search"
        placeholder="search..."
        id="search"
      />
    </>
  );
};

export default Home;
