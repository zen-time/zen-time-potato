//input components
import BillingAddressInputComponent from "@components/inputs/billing-address/BillingAddressInputComponent";
import BussinessInfoInputComponent from "@components/inputs/business-information/BusinessInfoInputComponent";

const Home = () => {
  return (
    <>
      <BussinessInfoInputComponent />
      <BillingAddressInputComponent />
    </>
  );
};
export default Home;
