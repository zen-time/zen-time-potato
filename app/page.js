import Index from '@components/tables';
import EmployeeDetails from '@components/tables/employee';
import IndexOne from '@components/tables/indexone';
import Navbar from '@components/tables/navbar';
import Table from '@components/tables/table';
import React from 'react';
// import Link from 'next/link';

const Home = () => {
  return (
    <>
    {/* <navbar /> */}
    <Navbar />
    <Index  />
    <EmployeeDetails />
    <IndexOne />
    <Table />
    </>
  );
};

export default Home;
