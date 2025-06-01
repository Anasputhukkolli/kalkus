import React from "react";
import Website from "../components/website";
import Websiteone from "../components/websiteo";
import Header from "../components/header"; // Assuming you have a Header component
import Footer from "../components/footer"; // Assuming you have a Header component
import Ribon from "../components/ribon"; // Assuming you have a Ribon component
export default function page() {
  return (
    <div>
      <section>
        <Header />
      </section>
      <section>
        <Website />
      </section>
      <section>
        <Ribon />
      </section>
      <section>
        <Websiteone />
      </section>
      <section>
        <Footer/>
      </section>
    </div>
  );
}
