import ClientTable from "@components/tables/clientTable";
import React from "react";

const Home = () => {
  return (
    <div>
      <ClientTable
        textColor={"table_head_text"}
        tableData_text_center={"td_text_center"}
      />
    </div>
  );
};
export default Home;
