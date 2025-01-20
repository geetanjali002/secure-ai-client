import React from 'react'

const About = () => {
  return (
    <div className="max-w-3xl mx-auto px-4  min-h-screen mt-16">
      <h1 className="text-xl lg:text-2xl text-center py-4 font-bold  underline">
        About Us
      </h1>
      <div className="text-gray-800 text-lg lg:text-xl text-start">
        <p>
          Welcome to <span className="font-bold text-[#5CC2BC]">SecureAI</span>, where AI meets innovation to elevate your
          security needs to the next level. We specialize in cutting-edge AI
          solutions designed to ensure the safety and peace of mind of our
          customers. At SecureAI, we understand the importance of advanced
          security measures in today's world. Our expertise lies in harnessing
          the power of artificial intelligence to create intuitive and effective
          security systems. Whether you're looking to protect your home, office,
          or any other space, our solutions are tailored to meet your specific
          requirements. Key features of our AI-driven security systems include: <br />
          <span className="font-bold text-[#5CC2BC]">* Person Detection:</span>  Our AI technology accurately identifies and
          distinguishes individuals within the monitored area, providing
          real-time alerts when a person is detected. - *Alarm Activation*: Upon
          detecting a person, our systems trigger an immediate alarm to notify
          you of potential threats, ensuring prompt action can be taken. <br />
          <span className="font-bold text-[#5CC2BC]">* Video Recording:</span> Automatically records a 30-second video clip when a
          person is detected, capturing crucial moments for later review and
          analysis. <br /><span className="font-bold text-[#5CC2BC]">* Surrounding Photo Capture:</span>  In addition to video, our
          systems capture surrounding photos to provide a comprehensive view of
          the environment during the incident. We take pride in delivering
          solutions that not only meet but exceed industry standards for
          security and reliability.
        </p>
      </div>
    </div>
  );
}

export default About
