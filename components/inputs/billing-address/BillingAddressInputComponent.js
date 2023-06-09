"use client";
import Select from "react-select";
const BillingAddressInputComponent = () => {
  const netTermsOptions = [
    { value: "30 Days", label: "30 Days" },
    { value: "60 Days", label: "60 Days" },
    { value: "90 Days", label: "90 Days" },
  ];
  const commissionTypeOptions = [
    { value: "straight commission", label: "Straight commission" },
    { value: "salary plus Commission", label: "Salary plus Commission" },
    { value: "graduated commission", label: "Graduated commission" },
  ];
  return (
    <article className="px-8 py-4">
      <section>
        <h2 className="text-2xl font-semibold mb-6 pb-2 ">
          Placement-Full Time
        </h2>

        <div className="flex justify-between">
          <div className="sm:">
            <Select
              options={netTermsOptions}
              placeholder={"Net terms"}
              isSearchable={true}
            />
          </div>
          <div>
            <Select
              options={commissionTypeOptions}
              placeholder={"commission type"}
              isSearchable={true}
            />
          </div>
        </div>
      </section>
      <hr className="my-8 " />
      <section className="flex flex-col gap-6">
        <h2 className="text-xl font-semibold">Invoice Address</h2>
        <div className="mt-2">
          <h3 className="text-semibold text-lg underline">Billing Address1</h3>
          <div className="grid grid-cols-2 gap-4">
            <div className="form-control w-full max-w-xs ">
              <label htmlFor="" className="label">
                <span className="label-text">Street Name</span>
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
                <span className="label-text">County</span>
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
                <span className="label-text">State</span>
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
                <span className="label-text">Zip Code</span>
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
                <span className="label-text">Country</span>
              </label>
              <input
                id=""
                type="text"
                placeholder="Type here"
                className="input input-bordered w-full max-w-xs"
              />
            </div>
          </div>
        </div>
        <div className="mt-2">
          <h3 className="text-semibold text-lg underline">Billing Address2</h3>
          <div className="grid grid-cols-2 gap-4">
            <div className="form-control w-full max-w-xs ">
              <label htmlFor="" className="label">
                <span className="label-text">Street Name</span>
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
                <span className="label-text">County</span>
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
                <span className="label-text">State</span>
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
                <span className="label-text">Zip Code</span>
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
                <span className="label-text">Country</span>
              </label>
              <input
                id=""
                type="text"
                placeholder="Type here"
                className="input input-bordered w-full max-w-xs"
              />
            </div>
            <div
              className="p-2 mt-6 text-center flex 
           justify-center items-center lg:m-10 lg:pr-48 xl:m-10 xl:pr-[25rem]"
            >
              <h3 className=" text-[0.7rem] text-blue-400 font-semibold underline cursor-pointer md:text-lg ">
                Add More Address
              </h3>
            </div>
          </div>
        </div>
      </section>
    </article>
  );
};

export default BillingAddressInputComponent;
