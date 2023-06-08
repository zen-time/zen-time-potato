"use client";

const BussinessInfoInputComponent = () => {
  return (
    <>
      <h2 className="text-center text-xl font-semibold">
        Business Information
      </h2>
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
          <span className="label-text">Client IDs</span>
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
          type="email"
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
          <span className="label-text">Client Category</span>
        </label>
        <input
          id=""
          type="text"
          placeholder="Type here"
          className="input input-bordered w-full max-w-xs"
        />
      </div>
      <div className="w-full max-w-xs ">
        <label htmlFor="" className="label">
          <span className="label-text">Client Ownership</span>
        </label>
        <input
          type="radio"
          className="radio w-5 h-5"
          name="client-ownership"
          checked
        />
        <span>Visible To Selected Owners</span>
        <input type="radio" className="radio w-5 h-5" name="client-ownership" />
        <span>Visible To All</span>
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
          <span className="label-text">Website</span>
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
          <span className="label-text">Job Termination Notice</span>
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
        <input
          id=""
          type="text"
          placeholder="Type here"
          className="input input-bordered w-full max-w-xs"
        />
      </div>
    </>
  );
};

export default BussinessInfoInputComponent;
