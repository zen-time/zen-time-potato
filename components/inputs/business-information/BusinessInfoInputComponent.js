"use client";

import Select from "react-select";

const BussinessInfoInputComponent = () => {
  //select element options
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

  // select element custom styles
  const customStyles = {
    control: (base) => ({
      ...base,
      height: 48,
      minHeight: 48,
      borderRadius: 10,
    }),
  };
  // select element custom theme
  const theme = (theme) => ({
    ...theme,
    borderRadius: 0,
    colors: {
      ...theme.colors,
      primary25: "lightgray",
      primary: "gray",
    },
  });

  return (
    <article className="px-8 py-6">
      <h2 className="text-2xl font-semibold mb-2 pb-2">Business Information</h2>
      <div className="grid grid-cols-2 gap-12">
        <div className="join">
          <label
            htmlFor="company-name"
            className="join-item btn label-text lg:w-56 w-48  max-w-xs"
          >
            <span>Company Name</span>
          </label>
          <input
            id="company-name"
            type="text"
            placeholder="Type here"
            className="input input-bordered join-item w-full max-w-xs "
          />
        </div>
        <div className="join">
          <label
            htmlFor="company-display-name"
            className="join-item btn label-text lg:w-56 w-48 max-w-xs"
          >
            <span>Company Display Name</span>
          </label>
          <input
            id="company-display-name"
            type="text"
            placeholder="Type here"
            className="input input-bordered join-item w-full max-w-xs"
          />
        </div>
        <div className="join">
          <label
            htmlFor="client-id"
            className="join-item btn label-text lg:w-56 w-48 max-w-xs"
          >
            <span>Client ID</span>
          </label>
          <input
            id="client-id"
            type="email"
            placeholder="Type here"
            className="input input-bordered join-item w-full max-w-xs"
          />
        </div>
        <div className="join">
          <label
            htmlFor="client-short-name"
            className="join-item btn label-text lg:w-56 w-48 max-w-xs"
          >
            <span>Client Short Name</span>
          </label>
          <input
            id="client-short-name"
            type="text"
            placeholder="Type here"
            className="input input-bordered join-item w-full max-w-xs"
          />
        </div>
        <div className="join">
          <label
            htmlFor="email"
            className="join-item btn label-text lg:w-56 w-48 max-w-xs"
          >
            <span>Email</span>
          </label>
          <input
            id="email"
            type="text"
            placeholder="Type here"
            className="input input-bordered join-item w-full max-w-xs"
          />
        </div>
        <div className="join">
          <label
            htmlFor="contact-number"
            className="join-item btn label-text lg:w-56 w-48 max-w-xs"
          >
            <span>Contact Number</span>
          </label>
          <input
            id="contact-number"
            type="text"
            placeholder="Type here"
            className="input input-bordered join-item w-full max-w-xs"
          />
        </div>
        <div className="join">
          <label
            htmlFor="federal-id"
            className="join-item btn label-text lg:w-56 w-48 max-w-xs"
          >
            <span>Federal ID</span>
          </label>
          <input
            id="federal-id"
            type="text"
            placeholder="Type here"
            className="input input-bordered join-item w-full max-w-xs"
          />
        </div>
        <div className="join">
          <label
            htmlFor="website"
            className="join-item btn label-text lg:w-56 w-48 max-w-xs"
          >
            <span>Website</span>
          </label>
          <input
            id="website"
            type="url"
            name="client-ownership"
            className="input input-bordered join-item w-full max-w-xs"
            placeholder="Type Your URL.."
          />
        </div>
        <div className="join">
          <label
            htmlFor="net-terms"
            className="join-item btn label-text lg:w-56 w-48 max-w-xs"
          >
            <span>Net Terms</span>
          </label>
          <input
            id="net-terms"
            type="text"
            placeholder="Type here"
            className="input input-bordered join-item w-full max-w-xs"
          />
        </div>
        <div className="join flex items-center">
          <label
            htmlFor="job-termination-notice"
            className="join-item btn label-text lg:w-56 w-48 max-w-xs"
          >
            <span>Job Termination Notice</span>
          </label>

          <Select
            id="job-termination-notice"
            className="join-item w-full max-w-xs "
            options={jobTerminationNoticeOptions}
            placeholder={"Job Termination Notice"}
            isSearchable={true}
            styles={customStyles}
            theme={theme}
          />
        </div>
        <div className="join">
          <label
            htmlFor="fax"
            className="join-item btn label-text lg:w-56 w-48 max-w-xs"
          >
            <span>Fax</span>
          </label>
          <input
            id="fax"
            type="text"
            placeholder="Type here"
            className="input input-bordered join-item w-full max-w-xs"
          />
        </div>
        <div className="join flex items-center">
          <label
            htmlFor="client-status"
            className="join-item btn label-text lg:w-56 w-48 max-w-xs"
          >
            <span>Client Status</span>
          </label>

          <Select
            id="client-status"
            className="join-item w-full max-w-xs"
            options={clientStatusOptions}
            placeholder={"Client Status"}
            isSearchable={true}
            styles={customStyles}
            theme={theme}
          />
        </div>
        <div className="join flex items-center">
          <label
            htmlFor="client-category"
            className="join-item btn label-text lg:w-56 w-48 max-w-xs"
          >
            <span>Client Category</span>
          </label>

          <Select
            id="client-category"
            className="join-item w-full max-w-xs"
            options={clientCategoryOptions}
            placeholder={"Client Category"}
            isSearchable={true}
            styles={customStyles}
            theme={theme}
          />
        </div>
        <div className="join flex items-center gap-4">
          <label
            htmlFor="client-ownership"
            className="join-item btn label-text lg:w-56 w-48 max-w-xs"
          >
            <span>Client Ownership</span>
          </label>
          <div className="join-item w-full max-w-xs ">
            <div className=" flex items-center gap-1">
              <input
                id="client-ownership"
                type="radio"
                name="client-ownership"
                className="radio w-4 h-4"
                checked
              />
              <span className=" ">Visible To Selected Owners</span>
            </div>
            <div className=" flex items-center gap-1">
              <input
                id="client-ownership"
                type="radio"
                name="client-ownership"
                className="radio w-4 h-4"
              />
              <span className=" ">Visible To All</span>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

export default BussinessInfoInputComponent;
