import React from "react";
import Social from "../components/socials/page";
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
        <Social />
      </section>
      <section>
        <Ribon />
      </section>
      <section>
      </section>
      <section>
        <Footer/>
      </section>
    </div>
  );
}
