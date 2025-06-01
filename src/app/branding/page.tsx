import React from "react";
import Brand from "../components/branding/page1";
import Brand2 from "../components/branding/page2";
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
        <Brand />
      </section>
      <section>
        <Ribon />
      </section>
      <section>
        <Brand2 />
      </section>
      <section>
        <Footer/>
      </section>
    </div>
  );
}
