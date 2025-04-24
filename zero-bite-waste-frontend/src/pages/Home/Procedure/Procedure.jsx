import React from "react";
import LayoutWrapper from "../../../layout/LayoutWrapper";

const Procedure = () => {
  return (
    <section>
      <>
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          How it Works
        </h2>
        <div className="grid lg:grid-cols-3 grid-cols-1 gap-4 ">
          <div className="card shadow-sm outline-yellow-600">
            <figure>
              <img
                src="/how it works 1.png"
                alt="Step 1"
                // className=" w-1/3"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title text-center">1</h2>
              <span className="step-line w-12 h-1 bg-green-600"></span>
              <p>Click the button to listen on Spotiwhy app.</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Listen</button>
              </div>
            </div>
          </div>
          <div className="card lg:card-side bg-base-100 shadow-sm">
            <figure>
              <img
                src="/how it works 2.png"
                alt="Step 2"
                className="step-icon mb-4"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">New album is released!</h2>
              <p>Click the button to listen on Spotiwhy app.</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Listen</button>
              </div>
            </div>
          </div>
          <div className="card lg:card-side bg-base-100 shadow-sm">
            <figure>
              <img
                src="/how it works 3.png"
                alt="Step 3"
                className="step-icon mb-4"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">New album is released!</h2>
              <p>Click the button to listen on Spotiwhy app.</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Listen</button>
              </div>
            </div>
          </div>
        </div>
      </>
    </section>
  );
};

export default Procedure;
