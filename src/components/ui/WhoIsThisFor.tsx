'use client';



import SubscribeForm from "@/components/ui/SubscribeForm";

function WhoIsThisFor() {
  return (
    <div
      className="w-full p-8 mt-9 shadow-2xl rounded-2xl"
      style={{ backgroundColor: "#c39450" }}
    >
      <div className="mt-2">
        <h2 className="text-3xl font-semibold text-center">Who is this for?</h2>
      </div>
      <div className="flex mt-5 flex-col flex-wrap gap-5 list md:flex-row">
        <div className="flex-1 flex-grow border-2 p-3 shadow-xl rounded-lg border-gray-300 bg-white">
          <h4 className=" text-xl text-center my-3 font-semibold">
            ✔ CEOs and Business Leaders
          </h4>
          <p>
            Looking to leverage their expertise and personal brand to create
            additional income streams.
          </p>
        </div>
        <div className="flex-1 flex-grow border-2 p-3 shadow-xl rounded-lg border-gray-300 bg-white">
          <h4 className=" text-xl text-center my-3 font-semibold">
            ✔ CEOs and Business Leaders
          </h4>
          <p>
            Looking to leverage their expertise and personal brand to create
            additional income streams.
          </p>
        </div>
      </div>
      <div className="flex mt-5 flex-col flex-wrap gap-5 list md:flex-row">
        <div className="flex-1 flex-grow border-2 p-3 shadow-xl rounded-lg border-gray-300 bg-white">
          <h4 className=" text-xl text-center my-3 font-semibold">
            ✔ CEOs and Business Leaders
          </h4>
          <p>
            Looking to leverage their expertise and personal brand to create
            additional income streams.
          </p>
        </div>
        <div className="flex-1 flex-grow border-2 p-3 shadow-xl rounded-lg border-gray-300 bg-white">
          <h4 className=" text-xl text-center my-3 font-semibold">
            ✔ CEOs and Business Leaders
          </h4>
          <p>
            Looking to leverage their expertise and personal brand to create
            additional income streams.
          </p>
        </div>
      </div>
      <SubscribeForm />
    </div>
  );
}

export default WhoIsThisFor;
