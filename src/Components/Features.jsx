import React from "react";

const Features = () => {
  return (
    <section id="features" className="bg-black" >
      <h1 className="text-2xl text-center pt-10  text-[#5CC2BC] lg:text-3xl font-extrabold"> Features </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  gap-6 px-6 lg:px-20 py-10">
        <div className="p-4 border-2 border-[#5CC2BC] rounded-3xl hover:border-[#fd607f]  cursor-pointer shadow-xl px-10 text-center hover:scale-105 transition-all">
          <p className="font-bold text-white pb-2 text-center">Video Record</p>
          <p className="text-white">
            Records a 30-second video automatically upon detecting motion,
            providing comprehensive coverage of events in real-time.
          </p>
        </div>
        <div className="p-4 border-2 border-[#5CC2BC] rounded-3xl hover:border-[#fd607f]  cursor-pointer shadow-xl px-10 text-center hover:scale-105 transition-all">
          <p className="font-bold text-white pb-2 text-center">Download</p>
          <p className="text-white" >
            Enables seamless downloading of recorded videos and pictures onto
            the local system for easy access and review.
          </p>
        </div>
        <div  className="p-4 border-2 border-[#5CC2BC] rounded-3xl hover:border-[#fd607f]  cursor-pointer shadow-xl px-10 text-center hover:scale-105 transition-all">
          <p className="font-bold text-white pb-2 text-center">Alarm</p>
          <p className="text-white" >
            Triggers an immediate alarm in response to detected motion, alerting
            users to potential security breaches instantly.
          </p>
        </div>
        <div  className="p-4 border-2 border-[#5CC2BC] rounded-3xl hover:border-[#fd607f]  cursor-pointer shadow-xl px-10 text-center hover:scale-105 transition-all">
          <p className="font-bold text-white pb-2 text-center">TensorFlow Object Detection</p>
          <p className="text-white">
            Utilizes a TensorFlow-trained AI model for advanced object
            detection, enhancing security by accurately identifying and tracking
            objects.
          </p>
        </div>
        <div className="p-4 border-2 border-[#5CC2BC] rounded-3xl hover:border-[#fd607f]  cursor-pointer shadow-xl px-10 text-center hover:scale-105 transition-all">
          <p className="font-bold text-white pb-2 text-center">Photo Click</p>
          <p className="text-white">
            Allows users to manually capture photos, ensuring important moments
            are documented at their discretion.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Features;
