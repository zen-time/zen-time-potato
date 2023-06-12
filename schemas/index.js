import * as yup from "yup";

export const schemaForBussinessInfo = yup.object().shape({
  companyName: yup.string().required("This field is required"),
  companyDisplayName: yup.string().required("This field is required"),
  clientId: yup.string().required("This field is required"),
  clientShortName: yup.string().required("This field is required"),
  email: yup
    .string()
    .email("please enter the valid email address")
    .required("This field is required"),
  contactNumber: yup.string().required("This field is required"),
  federalId: yup.string().required("This field is required"),
  website: yup
    .string()
    .url("enter valid url")
    .required("This field is required"),
  netTerms: yup.string().required("This field is required"),
  jobTerminationNotice: "",
  fax: yup.string().required("This field is required"),
  clientStatus: "",
  clientCategory: "",
  clientOwnership: "",
});
