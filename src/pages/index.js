import React, { useState, useEffect } from "react";
import Layout from "../components/layout/layout.js";
import Image from "../components/image/index.js";

const IndexPage = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    async function getApi() {
      const response = await fetch(
        "https://api.thedogapi.com/v1/images/search?size=med&mime_types=jpg&format=json&has_breeds=true&order=RANDOM&page=0&limit=1"
      );
      const api = await response.json();
      console.log(api);
      setData(api);
    }

    getApi();
  }, []);

  return (
    <Layout pageTitle="Home Page">
      <p>{data ? data[0].breeds[0].name : "a name"}</p>
      {data && (
        <Image
          alt="Clifford, a reddish-brown pitbull, posing on a couch and looking stoically at the camera"
          src={data[0].url}
        />
      )}
    </Layout>
  );
};

export default IndexPage;
