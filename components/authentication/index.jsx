import React from "react";

const Login = (props) => {
  const { Signin, email, Password } = props;
  // const { Signin, email, Password } = props; testing pull request

  return (
    <div className="flex justify-center items-center h-screen w-screen bg-[url('https://wallpaper.dog/large/11027692.jpg')] bg-center bg-no-repeat bg-cover">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm  p-14 rounded-xl  backdrop-blur-xl bg-white/25 border-2 border-slate-300">
        <h2 className="mb-8 text-center text-2xl font-bold leading-9 tracking-tight text-gray-700">
          {Signin}
        </h2>

        <form className="space-y-6" action="#" method="POST">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium leading-6 text-gray-800"
            >
              {email}
            </label>
            <div className="mt-2">
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="block w-full rounded-md border-0 py-1.5  text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400  focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label
                htmlFor="password"
                className="block text-sm font-medium leading-6 text-gray-700"
              >
                {Password}
              </label>
            </div>
            <div className="mt-2">
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Sign in
            </button>
          </div>
        </form>

        <p className="mt-10 text-center text-sm text-gray-500">
          <button
            aria-label="Continue with google"
            role="button"
            class="focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-gray-700 py-3.5 px-4 border rounded-lg border-gray-700 flex items-center w-full mt-10"
          >
            <img
              src="https://tuk-cdn.s3.amazonaws.com/can-uploader/sign_in-svg2.svg"
              alt="google"
            />
            <p class="text-base font-medium ml-4 text-gray-700">
              Continue with Google
            </p>
          </button>
        </p>
      </div>
    </div>
  );
};

export default Login;
