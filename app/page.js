import Index from '@components/tables';
import Countriestables from '@components/tables/countriestables';
import EmployeeDetails from '@components/tables/employee';
import IndexOne from '@components/tables/indexone';
import Navbar from '@components/tables/navbar';
import Table from '@components/tables/table';
import React from 'react';
import Country from '@components/tables/data';


const Home = () => {
  return (
    <>
    <Navbar />
    <Countriestables Country={Country} />
    <Index  />
    <EmployeeDetails />
    <IndexOne />
    <Table />
    </>
  );
};

export default Home;
