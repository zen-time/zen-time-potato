import AnotherTable from "@components/tables/anotherTable";
import ClientTable from "@components/tables/clientTable";
import React from "react";

const Home = () => {
  return (
    <div>
      <ClientTable textColor={"table_head_text"} titleColor={"title"} />
      {/* <AnotherTable /> */}
    </div>
  );
};
export default Home;
