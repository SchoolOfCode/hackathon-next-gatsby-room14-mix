import React, { useState, useEffect } from "react";
import Layout from "../components/layout.js";
import { StaticImage } from "gatsby-plugin-image";

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
      <p>
        We are room 14 and this is for the week 10 School of Code Hackathon.
      </p>
      <StaticImage
        alt="Clifford, a reddish-brown pitbull, posing on a couch and looking stoically at the camera"
        src="https://cdn2.thedogapi.com/images/w1Cal_vrT.jpg"
      />
    </Layout>
  );
};

export default IndexPage;
