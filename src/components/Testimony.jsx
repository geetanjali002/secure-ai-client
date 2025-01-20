import React from 'react'

const Testimony = () => {
  return (
    <div className='px-6 lg:px-20'>
      <section className="text-gray-600 body-font mb-10">
        {/* main  */}
        <div className="container px-5 py-10 mx-auto">
          {/* Heading  */}
          <h1 className=" text-center text-3xl font-bold text-black">
            Testimonial
          </h1>
          {/* para  */}
          <h2 className=" text-center text-2xl font-semibold mb-10">
            What our <span className=" text-[#fd607f] font-bold">customers</span> are
            saying
          </h2>

          <div className="flex flex-wrap  ">
            {/* Testimonial 1 */}
            <div className="lg:w-1/3 lg:mb-0 mb-6 p-4 shadow-lg hover:shadow-2xl rounded-3xl cursor-pointer">
              <div className="h-full text-center">
                <img
                  alt="testimonial"
                  className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
                  src="https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745"
                />
                <p className="leading-relaxed">
                Thanks to Secure AI for their cutting-edge technology, our security system alerted us instantly when an intruder was detected. I feel safe knowing they have our back
                </p>
                <span className="inline-block h-1 w-10 rounded bg-[#fd607f] mt-6 mb-4" />
                <h2 className="text-gray-500 font-medium title-font tracking-wider text-sm uppercase">
                  Janvi Gupta
                </h2>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="lg:w-1/3 lg:mb-0 mb-6 p-4 shadow-lg hover:shadow-2xl rounded-3xl cursor-pointer">
              <div className="h-full text-center">
                <img
                  alt="testimonial"
                  className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
                  src="https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745"
                />
                <p className="leading-relaxed">
                Peace of mind knowing our property is protected by a system that detects intruders instantly. Highly satisfied!
                </p>
                <span className="inline-block h-1 w-10 rounded bg-[#fd607f] mt-6 mb-4" />
                <h2 className="text-gray-500 font-medium title-font tracking-wider text-sm uppercase">
                  Ritanshu 
                </h2>
              </div>
            </div>

            {/* Testimonial 3 */}
            <div className="lg:w-1/3 lg:mb-0 p-4 shadow-lg hover:shadow-2xl rounded-3xl cursor-pointer">
              <div className="h-full text-center">
                <img
                  alt="testimonial"
                  className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
                  src="https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745"
                />
                <p className="leading-relaxed">
                Impressed with how quickly their security system notifies us of any suspicious activity. Highly recommend!
                </p>
                <span className="inline-block h-1 w-10 rounded bg-[#fd607f] mt-6 mb-4" />
                <h2 className="text-gray-500 font-medium title-font tracking-wider text-sm uppercase">
                  Rohit Sharma
                </h2>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Testimony
