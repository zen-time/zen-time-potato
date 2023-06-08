import React from "react";

const AnotherTable = () => {
  return (
    <>
      <div class="container justify-center mx-auto flex flex-col">
        <div class="overflow-x-auto shadow-md sm:rounded-lg">
          <div class="inline-block min-w-full align-middle dark:bg-gray-800">
            <div class="p-4">
              <label for="table-search" class="sr-only">
                Search
              </label>
              <div class="relative mt-1">
                <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                  <svg
                    class="w-5 h-5 text-gray-500 dark:text-gray-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </div>
                <input
                  type="text"
                  id="table-search"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-80 pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Search for items"
                />
              </div>
            </div>
            <div class="overflow-hidden">
              <table class="min-w-full table-fixed dark:divide-gray-700 divide-y divide-green-400 ">
                <thead class="bg-gray-100 dark:bg-gray-700">
                  <tr>
                    <th scope="col" class="p-4">
                      <div class="flex items-center">
                        <input
                          id="checkbox-search-all"
                          type="checkbox"
                          class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                        />
                        <label for="checkbox-search-all" class="sr-only">
                          checkbox
                        </label>
                      </div>
                    </th>
                    <th
                      scope="col"
                      class="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"
                    >
                      Product Name
                    </th>
                    <th
                      scope="col"
                      class="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"
                    >
                      Category
                    </th>
                    <th
                      scope="col"
                      class="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"
                    >
                      Price
                    </th>
                    <th scope="col" class="p-4">
                      <span class="sr-only">Edit</span>
                    </th>
                  </tr>
                </thead>
                <tbody class="bg-white divide-y divide-gray-200 dark:bg-gray-800 dark:divide-gray-700">
                  <tr class="hover:bg-gray-100 dark:hover:bg-gray-700">
                    <td class="p-4 w-4">
                      <div class="flex items-center">
                        <input
                          id="checkbox-search-1"
                          type="checkbox"
                          class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                        />
                        <label for="checkbox-search-1" class="sr-only">
                          checkbox
                        </label>
                      </div>
                    </td>
                    <td class="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
                      HP Omen 45L"
                    </td>
                    <td class="py-4 px-6 text-sm font-medium text-gray-500 whitespace-nowrap dark:text-white">
                      Desktop PC
                    </td>
                    <td class="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
                      $1899
                    </td>
                    <td class="py-4 px-6 text-sm font-medium text-right whitespace-nowrap">
                      <a
                        href="#"
                        class="text-blue-600 dark:text-blue-500 hover:underline"
                      >
                        Edit
                      </a>
                    </td>
                  </tr>
                  <tr class="hover:bg-gray-100 dark:hover:bg-gray-700">
                    <td class="p-4 w-4">
                      <div class="flex items-center">
                        <input
                          id="checkbox-search-2"
                          type="checkbox"
                          class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                        />
                        <label for="checkbox-search-2" class="sr-only">
                          checkbox
                        </label>
                      </div>
                    </td>
                    <td class="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
                      Apple MacBook Pro 13"
                    </td>
                    <td class="py-4 px-6 text-sm font-medium text-gray-500 whitespace-nowrap dark:text-white">
                      Laptop
                    </td>
                    <td class="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
                      $2999
                    </td>
                    <td class="py-4 px-6 text-sm font-medium text-right whitespace-nowrap">
                      <a
                        href="#"
                        class="text-blue-600 dark:text-blue-500 hover:underline"
                      >
                        Edit
                      </a>
                    </td>
                  </tr>
                  <tr class="hover:bg-gray-100 dark:hover:bg-gray-700">
                    <td class="p-4 w-4">
                      <div class="flex items-center">
                        <input
                          id="checkbox-search-3"
                          type="checkbox"
                          class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                        />
                        <label for="checkbox-search-3" class="sr-only">
                          checkbox
                        </label>
                      </div>
                    </td>
                    <td class="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
                      Samsung Galaxy S7
                    </td>
                    <td class="py-4 px-6 text-sm font-medium text-gray-500 whitespace-nowrap dark:text-white">
                      Phone
                    </td>
                    <td class="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
                      $599
                    </td>
                    <td class="py-4 px-6 text-sm font-medium text-right whitespace-nowrap">
                      <a
                        href="#"
                        class="text-blue-600 dark:text-blue-500 hover:underline"
                      >
                        Edit
                      </a>
                    </td>
                  </tr>
                  <tr class="hover:bg-gray-100 dark:hover:bg-gray-700">
                    <td class="p-4 w-4">
                      <div class="flex items-center">
                        <input
                          id="checkbox-search-4"
                          type="checkbox"
                          class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                        />
                        <label for="checkbox-search-4" class="sr-only">
                          checkbox
                        </label>
                      </div>
                    </td>
                    <td class="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
                      Sony WF-1000XM4
                    </td>
                    <td class="py-4 px-6 text-sm font-medium text-gray-500 whitespace-nowrap dark:text-white">
                      Headphones
                    </td>
                    <td class="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
                      $273
                    </td>
                    <td class="py-4 px-6 text-sm font-medium text-right whitespace-nowrap">
                      <a
                        href="#"
                        class="text-blue-600 dark:text-blue-500 hover:underline"
                      >
                        Edit
                      </a>
                    </td>
                  </tr>
                  <tr class="hover:bg-gray-100 dark:hover:bg-gray-700">
                    <td class="p-4 w-4">
                      <div class="flex items-center">
                        <input
                          id="checkbox-search-5"
                          type="checkbox"
                          class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                        />
                        <label for="checkbox-search-5" class="sr-only">
                          checkbox
                        </label>
                      </div>
                    </td>
                    <td class="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
                      Apple Watch Series 7
                    </td>
                    <td class="py-4 px-6 text-sm font-medium text-gray-500 whitespace-nowrap dark:text-white">
                      Accessories
                    </td>
                    <td class="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
                      $599
                    </td>
                    <td class="py-4 px-6 text-sm font-medium text-right whitespace-nowrap">
                      <a
                        href="#"
                        class="text-blue-600 dark:text-blue-500 hover:underline"
                      >
                        Edit
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AnotherTable;
