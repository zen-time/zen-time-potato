import Index from '@components/tables';
import Countriestables from '@components/tables/countriestables';
import EmployeeDetails from '@components/tables/employee';
import IndexOne from '@components/tables/indexone';
import Navbar from '@components/tables/navbar';
import Selectedtable from '@components/tables/selectedtable';
import Table from '@components/tables/table';
import React from 'react';


const Home = () => {
  return (
    <>
    <Navbar />
    <Selectedtable />
    <Countriestables  />
    <Index  />
    <EmployeeDetails />
    <IndexOne />
    <Table />
    </>
  );
};

export default Home;
