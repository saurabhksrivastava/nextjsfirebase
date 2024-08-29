'use client';
function DesiredFuture() {
  return (
    <div className="my-10 ">
      <div className="relative w-full">
        <div className="relative isolate z-0 bg-white px-6  lg:px-8">
          <div className="relative mx-auto max-w-4xl">
            <div className="absolute inset-x-0 -top-[4rem] -z-10 transform-gpu overflow-hidden blur-3xl md:-top-[10rem]">
              <svg
                className="relative left-[calc(50%-11rem)] -z-10 h-[21.1875rem] max-w-none -translate-x-1/2 rotate-[30deg] sm:left-[calc(50%-30rem)] sm:h-[42.375rem]"
                viewBox="0 0 1155 678"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill="url(#45de2b6b-92d5-4d68-a6a0-9b9b2abad533)"
                  fillOpacity=".3"
                  d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"
                />
                <defs>
                  <linearGradient
                    id="45de2b6b-92d5-4d68-a6a0-9b9b2abad533"
                    x1="1155.49"
                    x2="-78.208"
                    y1=".177"
                    y2="474.645"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#9089FC" />
                    <stop offset={1} stopColor="#FF80B5" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </div>
        </div>
      </div>

      <h2 className="font-black text-3xl text-center my-8">
        Your Desired Future
      </h2>

      <p>
        Imagine this: Your personal brand is not just well-known, but it&apos;s
        trusted and respected in your industry. You’re regularly invited to
        speak at top conferences, your content is shared widely, and your name
        is synonymous with thought leadership
      </p>
      <div
        className={
          "flex min-h-[50px] w-full flex-col gap-4 lg:min-h-[50px] lg:flex-row mt-5"
        }
      >
        <div
          className="shadow-xl border-2 p-3 lg:p-5"
          style={{ backgroundColor: "#edbb74" }}
        >
          You’re recognized as an authority in your field, and your opinions
          shape the conversation. When you speak, people listen—and they act on
          your recommendations.
        </div>
        <div
          className="shadow-xl border-2 p-3 lg:p-5"
          style={{ backgroundColor: "#edbb74" }}
        >
          Opportunities come to you effortlessly—whether it’s high-paying
          consulting gigs, lucrative partnerships, or exclusive speaking
          engagements. Your expertise is in demand.
        </div>
        <div
          className="shadow-xl border-2 p-3 lg:p-5"
          style={{ backgroundColor: "#edbb74" }}
        >
          You’ve successfully monetized your personal brand, creating multiple
          streams of income that work for you even when you’re not actively
          engaged.
        </div>
      </div>
      <div
        className={
          "flex min-h-[50px] w-full flex-col gap-4 lg:min-h-[50px] lg:flex-row mt-5"
        }
      >
        <div
          className="shadow-xl border-2 p-3 lg:p-5"
          style={{ backgroundColor: "#edbb74" }}
        >
          You’re not just keeping up with industry changes—you’re leading the
          charge. Your personal brand evolves with the times, ensuring your
          continued relevance and success.
        </div>
        <div
          className="shadow-xl border-2 p-3 lg:p-5"
          style={{ backgroundColor: "#edbb74" }}
        >
          With a well-established personal brand, you can achieve a better
          work-life balance. You’re working smarter, not harder, and enjoying
          the freedom that comes with it.
        </div>
      </div>
    </div>
  );
}

export default DesiredFuture;
