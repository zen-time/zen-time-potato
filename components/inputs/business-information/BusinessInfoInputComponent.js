"use client";
import $ from "jquery";
import { Select2 } from "select2-react-component";
// import { Select2 } from "select2";

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
      <select className="js-example-basic-single">
        <option>false</option>
      </select>
      <Select2
        data={[
          {
            label: "Alaskan/Hawaiian Time Zone",
            options: [
              { value: "AK", label: "Alaska" },
              { value: "HI", label: "Hawaii", disabled: true },
            ],
          },
          {
            label: "Pacific Time Zone",
            options: [
              { value: "CA", label: "California" },
              { value: "NV", label: "Nevada" },
              { value: "OR", label: "Oregon" },
              { value: "WA", label: "Washington" },
            ],
          },
          {
            label: "Mountain Time Zone",
            options: [
              { value: "AZ", label: "Arizona" },
              { value: "CO", label: "Colorado" },
              { value: "ID", label: "Idaho" },
              { value: "MT", label: "Montana" },
              { value: "NE", label: "Nebraska" },
              { value: "NM", label: "New Mexico" },
              { value: "ND", label: "North Dakota" },
              { value: "UT", label: "Utah" },
              { value: "WY", label: "Wyoming" },
            ],
          },
          {
            label: "Central Time Zone",
            options: [
              { value: "AL", label: "Alabama" },
              { value: "AR", label: "Arkansas" },
              { value: "IL", label: "Illinois" },
              { value: "IA", label: "Iowa" },
              { value: "KS", label: "Kansas" },
              { value: "KY", label: "Kentucky" },
              { value: "LA", label: "Louisiana" },
              { value: "MN", label: "Minnesota" },
              { value: "MS", label: "Mississippi" },
              { value: "MO", label: "Missouri" },
              { value: "OK", label: "Oklahoma" },
              { value: "SD", label: "South Dakota" },
              { value: "TX", label: "Texas" },
              { value: "TN", label: "Tennessee" },
              { value: "WI", label: "Wisconsin" },
            ],
          },
          {
            label: "Eastern Time Zone",
            options: [
              { value: "CT", label: "Connecticut" },
              { value: "DE", label: "Delaware" },
              { value: "FL", label: "Florida" },
              { value: "GA", label: "Georgia" },
              { value: "IN", label: "Indiana" },
              { value: "ME", label: "Maine" },
              { value: "MD", label: "Maryland" },
              { value: "MA", label: "Massachusetts" },
              { value: "MI", label: "Michigan" },
              { value: "NH", label: "New Hampshire" },
              { value: "NJ", label: "New Jersey" },
              { value: "NY", label: "New York" },
              { value: "NC", label: "North Carolina" },
              { value: "OH", label: "Ohio" },
              { value: "PA", label: "Pennsylvania" },
              { value: "RI", label: "Rhode Island" },
              { value: "SC", label: "South Carolina" },
              { value: "VT", label: "Vermont" },
              { value: "VA", label: "Virginia" },
              { value: "WV", label: "West Virginia" },
            ],
          },
        ]}
        value={this.value1}
        update={(value) => this.update1(value)}
      ></Select2>
      {
        // In your Javascript (external .js resource or <script> tag)
        // $(document).ready(function () {
        //   $(".js-example-basic-single").select2();
        // })
      }
    </>
  );
};

export default BussinessInfoInputComponent;
