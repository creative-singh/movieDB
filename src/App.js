import React, { Fragment, useState } from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Details from "./components/Details";
import axios from "axios";

const App = () => {
  const [response, setResponse] = useState([]);
  const [loading, setLoading] = useState(true);
  const submitHandler = async (e) => {
    e.preventDefault();
    const fetchResult = await axios(
      `${process.env.REACT_APP_BASE_URL}search/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&query=woman&page=1&include_adult=false`
    );

    setResponse(fetchResult.data.results);
  };

  return (
    <Fragment>
      <Navbar handleSubmit={submitHandler} />
      <div className="d-flex">
        <div>
          <Sidebar response={response} loading={loading} />
        </div>
        <div className="white container shadow-lg">
          <Details />
        </div>
      </div>
    </Fragment>
  );
};

export default App;
