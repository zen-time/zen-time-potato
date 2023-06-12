"use client";
//import libraries
import Select from "react-select";
import { useFormik } from "formik";
import { schemaForBussinessInfo } from "@schemas";

const onSubmit = () => {
  console.log("submitted");
};

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

  //hook

  const formik = useFormik({
    initialValues: {
      companyName: "",
      companyDisplayName: "",
      clientId: "",
      clientShortName: "",
      email: "",
      contactNumber: "",
      federalId: "",
      website: "",
      netTerms: "",
      jobTerminationNotice: "",
      fax: "",
      clientStatus: "",
      clientCategory: "",
      clientOwnership: "",
    },
    validationSchema: schemaForBussinessInfo,
    onSubmit,
  });

  const {
    values,
    handleBlur,
    handleSubmit,
    handleChange,
    errors,
    touched,
    dirty,
  } = formik;

  return (
    <article className="px-8 py-6">
      <h2 className="text-2xl font-semibold mb-2 pb-2">Business Information</h2>
      <form className="grid grid-cols-2 gap-11" onSubmit={() => handleSubmit}>
        <div className="flex flex-col">
          <div className="join">
            <label
              htmlFor="companyName"
              className={`${
                touched.companyName && errors.companyName && "btn-error "
              } btn join-item  label-text lg:w-56 w-48  max-w-xs `}
            >
              <span>Company Name</span>
            </label>
            <input
              id="companyName"
              type="text"
              name="companyName"
              placeholder={"type here"}
              className={`${
                touched.companyName && errors.companyName && "border-orange-600"
              } input input-bordered join-item w-full max-w-xs`}
              value={values.companyName}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </div>
          <small className="flex justify-center mt-1 text-orange-600">
            {touched.companyName && errors.companyName
              ? errors.companyName
              : null}
          </small>
        </div>
        <div className="flex flex-col">
          <div className="join">
            <label
              htmlFor="companyDisplayName"
              className="join-item btn label-text lg:w-56 w-48 max-w-xs"
            >
              <span>Company Display Name</span>
            </label>
            <input
              id="companyDisplayName"
              type="text"
              name="companyDisplayName"
              placeholder={
                errors.companyDisplayName
                  ? errors.companyDisplayName
                  : "type here"
              }
              className="input input-bordered join-item w-full max-w-xs"
              value={values.companyDisplayName}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </div>
          <small className="flex justify-center mt-1">
            {touched.companyDisplayName && errors.companyDisplayName
              ? errors.companyDisplayName
              : null}
          </small>
        </div>
        <div className="flex flex-col">
          <div className="join">
            <label
              htmlFor="clientId"
              className="join-item btn label-text lg:w-56 w-48 max-w-xs"
            >
              <span>Client ID</span>
            </label>
            <input
              id="clientId"
              type="text"
              name="clientId"
              placeholder={errors.clientId ? errors.clientId : "Type here"}
              className="input input-bordered join-item w-full max-w-xs"
              value={values.clientId}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </div>
          <small className="flex justify-center mt-1">{errors.clientId}</small>
        </div>
        <div className="flex flex-col">
          <div className="join">
            <label
              htmlFor="clientShortName"
              className="join-item btn label-text lg:w-56 w-48 max-w-xs"
            >
              <span>Client Short Name</span>
            </label>
            <input
              id="clientShortName"
              type="text"
              name="clientShortName"
              placeholder={
                errors.clientShortName ? errors.clientShortName : "type here"
              }
              className="input input-bordered join-item w-full max-w-xs"
              value={values.clientShortName}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </div>
          <small className="flex justify-center mt-1">
            {errors.clientShortName}
          </small>
        </div>
        <div className="flex flex-col">
          <div className="join">
            <label
              htmlFor="email"
              className="join-item btn label-text lg:w-56 w-48 max-w-xs"
            >
              <span>Email</span>
            </label>
            <input
              id="email"
              type="email"
              name="email"
              placeholder={errors.email ? errors.email : "type here"}
              className="input input-bordered join-item w-full max-w-xs"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </div>
          <small className="flex justify-center mt-1">{errors.email}</small>
        </div>

        <div className="flex flex-col">
          <div className="join">
            <label
              htmlFor="contactNumber"
              className="join-item btn label-text lg:w-56 w-48 max-w-xs"
            >
              <span>Contact Number</span>
            </label>
            <input
              id="contactNumber"
              type="tel"
              name="contactNumber"
              placeholder={
                errors.contactNumber
                  ? errors.contactNumber
                  : "Mob or Tel Number "
              }
              className="input input-bordered join-item w-full max-w-xs"
              value={values.contactNumber}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </div>
          <small className="flex justify-center mt-1">
            {errors.contactNumber}
          </small>
        </div>
        <div className="flex flex-col">
          <div className="join">
            <label
              htmlFor="federalId"
              className="join-item btn label-text lg:w-56 w-48 max-w-xs"
            >
              <span>Federal ID</span>
            </label>
            <input
              id="federalId"
              type="text"
              name="federalId"
              placeholder={errors.federalId ? errors.federalId : "Type here "}
              className="input input-bordered join-item w-full max-w-xs"
              value={values.federalId}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </div>
          <small className="flex justify-center mt-1">{errors.federalId}</small>
        </div>
        <div className="flex flex-col">
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
              name="website"
              className="input input-bordered join-item w-full max-w-xs"
              placeholder={errors.website ? errors.website : "Type Your URL.."}
              value={values.website}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </div>
          <small className="flex justify-center mt-1">{errors.website}</small>
        </div>
        <div className="flex flex-col">
          <div className="join">
            <label
              htmlFor="netTerms"
              className="join-item btn label-text lg:w-56 w-48 max-w-xs"
            >
              <span>Net Terms</span>
            </label>
            <input
              id="netTerms"
              type="text"
              name="netTerms"
              placeholder={errors.netTerms ? errors.netTerms : "Type here"}
              className="input input-bordered join-item w-full max-w-xs"
              value={values.netTerms}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </div>
          <small className="flex justify-center mt-1">{errors.netTerms}</small>
        </div>
        <div className="flex flex-col">
          <div className="join flex items-center">
            <label
              htmlFor="jobTerminationNotice"
              className="join-item btn label-text lg:w-56 w-48 max-w-xs"
            >
              <span>Job Termination Notice</span>
            </label>

            <Select
              id="jobTerminationNotice"
              className="join-item w-full max-w-xs "
              options={jobTerminationNoticeOptions}
              placeholder={"Job Termination Notice"}
              value={values.jobTerminationNotice}
              onChange={handleChange}
              onBlur={handleBlur}
              isSearchable={true}
              styles={customStyles}
              theme={theme}
            />
          </div>
          <small className="flex justify-center mt-1">{}</small>
        </div>
        <div className="flex flex-col">
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
              name="fax"
              placeholder={errors.fax ? errors.fax : "Type here"}
              className="input input-bordered join-item w-full max-w-xs"
              value={values.fax}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </div>
          <small className="flex justify-center mt-1">{errors.fax}</small>
        </div>
        <div className="flex flex-col">
          <div className="join flex items-center">
            <label
              htmlFor="clientStatus"
              className="join-item btn label-text lg:w-56 w-48 max-w-xs"
            >
              <span>Client Status</span>
            </label>

            <Select
              id="clientStatus"
              className="join-item w-full max-w-xs"
              options={clientStatusOptions}
              placeholder={"Client Status"}
              isSearchable={true}
              value={values.clientStatus}
              onChange={handleChange}
              onBlur={handleBlur}
              styles={customStyles}
              theme={theme}
            />
          </div>
          <small className="flex justify-center mt-1">{}</small>
        </div>
        <div className="flex flex-col">
          <div className="join flex items-center">
            <label
              htmlFor="clientCategory"
              className="join-item btn label-text lg:w-56 w-48 max-w-xs"
            >
              <span>Client Category</span>
            </label>

            <Select
              id="clientCategory"
              className="join-item w-full max-w-xs"
              options={clientCategoryOptions}
              placeholder={"Client Category"}
              isSearchable={true}
              value={values.clientCategory}
              onChange={handleChange}
              onBlur={handleBlur}
              styles={customStyles}
              theme={theme}
            />
          </div>
          <small className="flex justify-center mt-1">{}</small>
        </div>
        <div className="flex flex-col">
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
                  id="clientOwnership"
                  type="radio"
                  name="clientOwnership"
                  className="radio w-4 h-4"
                  value={"visible to selected owners"}
                  defaultChecked
                />
                <span className=" ">Visible To Selected Owners</span>
              </div>
              <div className=" flex items-center gap-1">
                <input
                  id="clientOwnership"
                  type="radio"
                  name="clientOwnership"
                  className="radio w-4 h-4"
                  value={"visible to all"}
                />
                <span className=" ">Visible To All</span>
              </div>
            </div>
          </div>
          <small className="flex justify-center mt-1">{}</small>
        </div>
      </form>

      {console.log(values)}
    </article>
  );
};

export default BussinessInfoInputComponent;
