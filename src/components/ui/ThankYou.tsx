'use client';

function ThankYou() {
  return (
    <>
      <div className="mt-12 text-center">
        <h1 className="text-2xl font-semibold tracking-wide">
          Thank You for Signing Up
        </h1>
        <p className="mt-4 text-lg">
          You’re one step closer to building and monetizing your personal brand.
        </p>
      </div>

      <div className="mt-8 flex justify-center">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/Echt8UzQ6_8?si=17vgWWNlLVd8aybm"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>

      <div className="mt-10 text-lg">
        <p className="font-semibold ">
          If you found this guide helpful, Please Share this Guide with Your
          Network!
        </p>{" "}
        <br />
        <p>
          By following this content layout, you’ll create a landing page that
          not only captures leads effectively but also encourages further
          engagement with your content and brand.
        </p>{" "}
        <br />
        <p>
          Check your email now for all the templates you need to get started.
        </p>
      </div>
    </>
  );
}

export default ThankYou;
