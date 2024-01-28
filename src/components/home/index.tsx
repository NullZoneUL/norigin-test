import React, { useState } from "react";
import DateBar from "./dateBar";
import EPGContainer from "./epg";

const Home = () => {
  const [date, setDate] = useState(new Date());

  return (
    <>
      <DateBar date={date} />
      <EPGContainer />
    </>
  );
};

export default Home;
