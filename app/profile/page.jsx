import React from "react";

const page = () => {
  return (
    <>
      <div class="my-5 px-14 flex flex-col gap-10">
        <div class="bg-slate-600 p-6 rounded-xl flex">
          <img
            class="rounded-xl w-[18rem] mx-auto ml-10 mr-20 shadow-lg shadow-slate-700"
            src="https://img.freepik.com/premium-vector/character-guy-avatar-internet_24877-17032.jpg"
            alt=""
          />
          <div className="flex flex-col gap-2">
            <h1 class="text-gray-50 font-bold text-xl leading-8 my-1">
              Arun Sreeramadasu
            </h1>
            <h3 class="text-gray-100 font-lg text-semibold leading-6">
              Web developer and Designer
            </h3>
            <p class="text-sm text-gray-100  leading-6 w-[45rem]">
              A web developer is a programmer who develops World Wide Web
              applications using a client–server model. The applications
              typically use HTML, CSS, and JavaScript in the client, and any
              general-purpose programming language in the server. HTTP is used
              for communications between client and server.
            </p>
            <ul class="bg-gray-100 text-gray-600 md:w-5/12 hover:text-gray-700 hover:shadow py-2 px-3 mt-3 divide-y rounded shadow-sm">
              <li class="flex items-center py-3">
                <span>Status</span>
                <span class="ml-auto">
                  <span class="bg-green-500 py-1 px-2 rounded text-white text-sm">
                    Active
                  </span>
                </span>
              </li>
              <li class="flex items-center py-3">
                <span>Member since</span>
                <span class="ml-auto">Nov 07, 2015</span>
              </li>
            </ul>
          </div>
        </div>
        <div class="bg-white p-3 shadow-slate-100 shadow-lg rounded-xl">
          <div class="flex items-center space-x-2 font-semibold text-gray-900 leading-8">
            <span clas="text-green-500">
              <svg
                class="h-5"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                />
              </svg>
            </span>
            <span class="tracking-wide">About</span>
          </div>
          <div class="text-gray-700">
            <div class="grid md:grid-cols-2 text-sm">
              <div class="grid grid-cols-2">
                <div class="px-4 py-2 font-semibold">First Name</div>
                <div class="px-4 py-2">Arun</div>
              </div>
              <div class="grid grid-cols-2">
                <div class="px-4 py-2 font-semibold">Last Name</div>
                <div class="px-4 py-2">Sreeramadasu</div>
              </div>
              <div class="grid grid-cols-2">
                <div class="px-4 py-2 font-semibold">Gender</div>
                <div class="px-4 py-2">male</div>
              </div>
              <div class="grid grid-cols-2">
                <div class="px-4 py-2 font-semibold">Contact No.</div>
                <div class="px-4 py-2">8008372144</div>
              </div>
              <div class="grid grid-cols-2">
                <div class="px-4 py-2 font-semibold">Current Address</div>
                <div class="px-4 py-2">Pullampet,Andhra Pradesh</div>
              </div>
              <div class="grid grid-cols-2">
                <div class="px-4 py-2 font-semibold">Permanant Address</div>
                <div class="px-4 py-2">Kadapa,Andhra Pradesh</div>
              </div>
              <div class="grid grid-cols-2">
                <div class="px-4 py-2 font-semibold">Email.</div>
                <div class="px-4 py-2">
                  <a
                    class="text-blue-800"
                    href="mailto:Arun Sreeramadasu@example.com"
                  >
                    sreeramadasuarun@gmail.com
                  </a>
                </div>
              </div>
              <div class="grid grid-cols-2">
                <div class="px-4 py-2 font-semibold">Birthday</div>
                <div class="px-4 py-2">Nov 25, 1990</div>
              </div>
            </div>
          </div>
        </div>

        <div class="bg-white p-3 shadow-lg shadow-slate-100 rounded-xl">
          <div class="grid grid-cols-3">
            <div>
              <div class="flex items-center space-x-2 font-semibold text-gray-900 leading-8 mb-3">
                <span clas="text-green-500">
                  <svg
                    class="h-5"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                </span>
                <span>Experience</span>
              </div>
              <ul class="list-inside space-y-2">
                <li>
                  <div class="text-teal-600">Company Inc.</div>
                  <div class="text-gray-500 text-xs">March 2020 - Now</div>
                </li>
                <li>
                  <div class="text-teal-600">Company Inc.</div>
                  <div class="text-gray-500 text-xs">March 2020 - Now</div>
                </li>
                <li>
                  <div class="text-teal-600">Company Inc.</div>
                  <div class="text-gray-500 text-xs">March 2020 - Now</div>
                </li>
                <li>
                  <div class="text-teal-600">Company Inc.</div>
                  <div class="text-gray-500 text-xs">March 2020 - Now</div>
                </li>
              </ul>
            </div>
            <div>
              <div class="flex items-center space-x-2 font-semibold text-gray-900 leading-8 mb-3">
                <span clas="text-green-500">
                  <svg
                    class="h-5"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path fill="#fff" d="M12 14l9-5-9-5-9 5 9 5z" />
                    <path
                      fill="#fff"
                      d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                    />
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                    />
                  </svg>
                </span>
                <span>Education</span>
              </div>
              <ul class="list-inside space-y-2">
                <li>
                  <div class="text-teal-600">Masters Degree in Oxford</div>
                  <div class="text-gray-500 text-xs">March 2020 - Now</div>
                </li>
                <li>
                  <div class="text-teal-600">Bachelors Degreen in LPU</div>
                  <div class="text-gray-500 text-xs">March 2020 - Now</div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default page;
