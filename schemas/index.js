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
  jobTerminationNotice: yup.string().required("This field is required"),
  fax: yup.string().required("This field is required"),
  clientStatus: yup.string().required("This field is required"),
  clientCategory: yup.string().required("This field is required"),
  clientOwnership: yup.string().required("This field is required"),
});

export const schemaForBillingInfo = yup.object().shape({
  netTerms: yup.string().required("This field is required"),
  commissionType: yup.string().required("This field is required"),
  billAddress1StreetName: yup.string().required("This field is required"),
  billAddress1County: yup.string().required("This field is required"),
  billAddress1State: yup.string().required("This field is required"),
  billAddress1ZipCode: yup.string().required("This field is required"),
  billAddress1Country: yup.string().required("This field is required"),
  billAddress2StreetName: yup.string().required("This field is required"),
  billAddress2County: yup.string().required("This field is required"),
  billAddress2State: yup.string().required("This field is required"),
  billAddress2ZipCode: yup.string().required("This field is required"),
  billAddress2Country: yup.string().required("This field is required"),
});
