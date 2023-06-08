"use client";

import Select from "react-select";

const BussinessInfoInputComponent = () => {
  const jobTerminationNoticeOptions = [
    { value: "aaa", label: "aaa" },
    { value: "bbb", label: "bbb" },
    { value: "ccc", label: "ccc" },
  ];
  const clientStatusOptions = [
    { value: "aaa", label: "aaa" },
    { value: "bbb", label: "bbb" },
    { value: "ccc", label: "ccc" },
  ];

  const clientCategoryOptions = [
    { value: "aaa", label: "aaa" },
    { value: "bbb", label: "bbb" },
    { value: "ccc", label: "ccc" },
  ];

  return (
    <article className="px-8 py-4">
      <h2 className="text-xl font-semibold mb-2 pb-2">Business Information</h2>
      <div className="grid grid-cols-2 gap-4">
        <div className="form-control w-full max-w-xs ">
          <label htmlFor="" className="label">
            <span className="label-text">Company Name</span>
          </label>
          <input
            id=""
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full max-w-xs"
          />
        </div>
        <div className="form-control w-full max-w-xs ">
          <label htmlFor="" className="label">
            <span className="label-text">Company Display Name</span>
          </label>
          <input
            id=""
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full max-w-xs"
          />
        </div>
        <div className="form-control w-full max-w-xs ">
          <label htmlFor="" className="label">
            <span className="label-text">Client ID</span>
          </label>
          <input
            id=""
            type="email"
            placeholder="Type here"
            className="input input-bordered w-full max-w-xs"
          />
        </div>
        <div className="form-control w-full max-w-xs ">
          <label htmlFor="" className="label">
            <span className="label-text">Client Short Name</span>
          </label>
          <input
            id=""
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full max-w-xs"
          />
        </div>
        <div className="form-control w-full max-w-xs ">
          <label htmlFor="" className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            id=""
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full max-w-xs"
          />
        </div>
        <div className="form-control w-full max-w-xs ">
          <label htmlFor="" className="label">
            <span className="label-text">Contact Number</span>
          </label>
          <input
            id=""
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full max-w-xs"
          />
        </div>
        <div className="form-control w-full max-w-xs ">
          <label htmlFor="" className="label">
            <span className="label-text">Federal ID</span>
          </label>
          <input
            id=""
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full max-w-xs"
          />
        </div>
        <div className="form-control w-full max-w-xs ">
          <label htmlFor="" className="label">
            <span className="label-text">Website</span>
          </label>
          <input
            type="url"
            name="client-ownership"
            className="input input-bordered w-full max-w-xs"
          />
        </div>
        <div className="form-control w-full max-w-xs ">
          <label htmlFor="" className="label">
            <span className="label-text">Net Terms</span>
          </label>
          <input
            id=""
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full max-w-xs"
          />
        </div>
        <div className="form-control w-full max-w-xs ">
          <label htmlFor="" className="label">
            <span className="label-text ">Job Termination Notice</span>
          </label>

          <Select
            options={jobTerminationNoticeOptions}
            placeholder={"Job Termination Notice"}
            isSearchable={true}
          />
        </div>
        <div className="form-control w-full max-w-xs ">
          <label htmlFor="" className="label">
            <span className="label-text">Fax</span>
          </label>
          <input
            id=""
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full max-w-xs"
          />
        </div>
        <div className="form-control w-full max-w-xs ">
          <label htmlFor="" className="label">
            <span className="label-text">Client Status</span>
          </label>

          <Select
            options={clientStatusOptions}
            placeholder={"Client Status"}
            isSearchable={true}
          />
        </div>
        <div className="form-control w-full max-w-xs ">
          <label htmlFor="" className="label">
            <span className="label-text">Client Category</span>
          </label>

          <Select
            options={clientCategoryOptions}
            placeholder={"Client Category"}
            isSearchable={true}
          />
        </div>
        <div className="form-control w-full max-w-xs ">
          <label htmlFor="client-ownership" className="label">
            <span className="label-text">Client Ownership</span>
          </label>
          <div className="flex flex-col md:flex-row w-96 md:gap-3 lg:gap-3 xl:gap-3">
            <div className="mt-3 flex gap-1">
              <input
                id="client-ownership"
                type="radio"
                name="client-ownership"
                checked
              />
              <span className="text-[0.8rem]  md:text-[1rem] lg:text-[1rem] xl:text-[1rem] ">
                Visible To Selected Owners
              </span>
            </div>
            <div className="mt-3 flex flex-row gap-1">
              <input
                id="client-ownership"
                type="radio"
                name="client-ownership"
              />
              <span className="text-[0.8rem]  md:text-[1rem] lg:text-[1rem] xl:text-[1rem]">
                Visible To All
              </span>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

export default BussinessInfoInputComponent;
