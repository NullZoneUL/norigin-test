import React, { useState } from "react";
import DateBar from "./dateBar";

const Home = () => {
  const [date, setDate] = useState(new Date());

  return (
    <>
      <DateBar date={date} />
    </>
  );
};

export default Home;
