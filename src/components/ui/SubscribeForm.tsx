'use client';

function SubscribeForm() {
  return (
    <div
      className="pt-8 rounded-2xl px-4"
      style={{ backgroundColor: "#c39450" }}
    >
      <h4 className="text-xl font-semibold text-center">
        Ready to Start Building and Monetizing Your Personal Brand?
      </h4>

      <p className="mt-2 px-4">
        Fill out the form below to get instant access to this value-packed video
        guide and your 7 essential tools and templates!
      </p>

      <form
        action="https://app.convertkit.com/forms/7012853/subscriptions"
        className="opacity-75 w-full rounded-lg px-8 pt-6 pb-8 mb-2 gap-2"
        method="post"
        data-sv-form="7012853"
        data-uid="45142aa8ba"
        data-format="inline"
        data-version="5"
        data-options='{"settings":{"after_subscribe":{"action":"message","success_message":"Success! Now check your email to confirm your subscription.","redirect_url":""},"analytics":{"google":null,"fathom":null,"facebook":null,"segment":null,"pinterest":null,"sparkloop":null,"googletagmanager":null},"modal":{"trigger":"timer","scroll_percentage":null,"timer":5,"devices":"all","show_once_every":15},"powered_by":{"show":false,"url":"https://convertkit.com/features/forms?utm_campaign=poweredby&amp;utm_content=form&amp;utm_medium=referral&amp;utm_source=dynamic"},"recaptcha":{"enabled":false},"return_visitor":{"action":"show","custom_content":""},"slide_in":{"display_in":"bottom_right","trigger":"timer","scroll_percentage":null,"timer":5,"devices":"all","show_once_every":15},"sticky_bar":{"display_in":"top","trigger":"timer","scroll_percentage":null,"timer":5,"devices":"all","show_once_every":15}},"version":"5"}'
        min-width="400 500 600 700 800"
      >
        <div data-style="clean">
          <ul data-element="errors" data-group="alert"></ul>
          <div
            data-element="fields"
            data-stacked="false"
            className="flex w- lg:flex-row flex-col flex-grow gap-6"
          >
            <input
              className="shadow appearance-none border rounded p-3 text-gray-700 leading-tight focus:ring transform transition hover:scale-105 duration-300 ease-in-out my-2 flex-1"
              aria-label="First Name"
              name="fields[first_name]"
              required
              placeholder="First Name"
              type="text"
            />

            <input
              className="shadow appearance-none border rounded  p-3  text-gray-700 leading-tight focus:ring transform transition hover:scale-105 duration-300 ease-in-out  my-2 flex-1"
              name="email_address"
              aria-label="Email Address"
              placeholder="Email Address"
              required
              type="email"
            />

            <button
              className="bg-black text-white font-bold p-3 rounded focus:ring transform transition hover:scale-105 duration-300 ease-in-out"
              data-element="submit"
            >
              <div>
                <div></div>
                <div></div>
                <div></div>
              </div>
              <span>Get Your Free Copy</span>
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default SubscribeForm;
