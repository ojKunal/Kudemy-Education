import React from "react";
import Layout from "../Layout/Layout";

const CourseDetails = () => {
  return (
    <Layout>
      <section className="py-5 lg:py-16 font-poppins  mx-auto">
        <div className="lg:flex lg:gap-[40%] gap-[20%]">
          <div className="w-full px-4 mb-8 md:w-1/2 md:mb-0">
            <div className="h-full w-[70%]">
              <img
                className="w-full lg:h-[20em] rounded-lg"
                src="https://images.unsplash.com/photo-1532618500676-2e0cbf7ba8b8?q=80&w=1420&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
              />
            </div>
          </div>
           <div className="w-full md:w-1/2">
              <div>
                 hiii
              </div>
           </div>
          
        </div>
      </section>
    </Layout>
  );
};

export default CourseDetails;
