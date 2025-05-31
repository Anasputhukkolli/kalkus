import React from "react";
import Card from "./card";
function landing() {
  return (
    <section className="">
      <div className="firstsection">
        <h1>Helloooooo</h1>
      </div>
      {/* <div className="secondsection">
        <Card />
      </div> */}
      <style jsx>{`
        .firstsection {
          height: 100vh;
          background-color: #000000;
        }

        .secondsection {
          height: 100vh;
          background-color: #0000;
        }
      `}</style>
    </section>
  );
}

export default landing;
