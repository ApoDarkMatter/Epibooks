import React from "react";
import { Books } from "../components/LatestRelease/LatestRelease";
import MainLayout from "../Layouts/MainLayout";

const HomePage = () => {

  return (
    <>
        <MainLayout>
          <Books />
        </MainLayout>
    </>
  );
};

export default HomePage;
