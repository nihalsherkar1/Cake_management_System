import React from "react";
import Footer from "./Footer";
import BootstrapCarousel from "./BootstrapCarousel";
import Features from "./fearures";
import Banner from "./Banner";
import Navbar from "./navbar";
import Header from "./Header";

class Home extends React.Component {
  render() {
    return (
      <body>
        <Navbar />
        {/* <Header /> */}

        {/* <BootstrapCarousel /> */}
        <Banner />
        <br />
        <Features />
        <br />
        <Footer />
      </body>
    );
  }
}
export default Home;
