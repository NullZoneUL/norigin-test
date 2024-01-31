import React, { useRef } from "react";
import DateBar from "./dateBar";
import EPGContainer from "./epg";

const Home = () => {
  const date = useRef(new Date());

  return (
    <>
      <DateBar date={date.current} />
      <EPGContainer date={date.current} />
    </>
  );
};

export default Home;
