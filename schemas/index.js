import * as yup from "yup";

export const schemaForBussinessInfo = yup.object().shape({
  companyName: yup.string().required(),
  companyDisplayName: yup.string().required(),
  clientId: yup.string().required(),
  clientShortName: yup.string().required(),
  email: yup.string().email().required(),
  contactNumber: yup.string().required(),
  federalId: yup.string().required(),
  website: yup.string().url().required(),
  netTerms: yup.string().required(),
  jobTerminationNotice: yup.string().required(),
  fax: yup.string().required(),
  clientStatus: yup.string().required(),
  clientCategory: yup.string().required(),
  clientOwnership: yup.string().required(),
});

export const schemaForBillingInfo = yup.object().shape({
  netTerms: yup.string().required(),
  commissionType: yup.string().required(),
  billAddress1StreetName: yup.string().required(),
  billAddress1County: yup.string().required(),
  billAddress1State: yup.string().required(),
  billAddress1ZipCode: yup.string().required(),
  billAddress1Country: yup.string().required(),
  billAddress2StreetName: yup.string().required(),
  billAddress2County: yup.string().required(),
  billAddress2State: yup.string().required(),
  billAddress2ZipCode: yup.string().required(),
  billAddress2Country: yup.string().required(),
});
