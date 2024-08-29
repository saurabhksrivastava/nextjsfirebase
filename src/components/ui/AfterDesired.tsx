'use client'
import Image from "next/image";

function AfterDesired() {
  return (
    <>
      <div className="flex mt-5 flex-col items-center gap-5 list md:flex-row">
        <div>
          <p className="mt-7 text-left">
            This is all possible when you take the right steps to build and
            monetize your personal brand effectively. And that’s exactly what{" "}
            <strong>
              &lsquo; The Busy Leader&apos;s Guide to Build and Make Money From Their
              Personal Brands &rsquo;
            </strong>{" "}
            will help you achieve.
          </p>

          <p className="mt-3 text-left">
            If these challenges resonate with you, you’re at the right place.
          </p>
          <br />
          <p className="mt-3 text-left">
            I’m Priyanka Rakshit, the founder of Platform 10x—a holistic
            personal branding agency dedicated to helping leaders like you build
            powerful personal brands through organic content. In my 4+ years of
            journey, I have worked with more than 60+ industry leaders (worked
            with leaders from Prestige, AWS, PayU, Eureka Stock, QuickAds,
            MyNextHire etc.) and helped them to build their Personal Brand.
          </p>

          <p className="mt-3 text-left">
            My experience in guiding professionals to achieve their goals faster
            by attracting multiple opportunities has led me to create &lsquo;The Busy
            Leader&apos;s Guide to Build and Make Money From Your Personal Brand.&rsquo;
          </p>
          <p className="mt-3 text-left">
            This exclusive video guide is designed to help you overcome these
            obstacles and capitalize on the opportunities a strong personal
            brand can provide. Alongside the guide, I’m including 7 essential
            tools and templates to ensure you have everything you need to build
            and monetize your personal brand effectively.
          </p>
        </div>
        <div>
          <Image
            src="https://res.cloudinary.com/saurabhksrivastava/image/upload/v1724855339/PriyankaRakshit-min_n8mj4d.jpg"
            alt="Priyanka Rakshit - Platform10X"
            className="max-w-sm flex-grow flex-1 justify-self-center self-center"
          />
        </div>
      </div>
    </>
  );
}

export default AfterDesired;
