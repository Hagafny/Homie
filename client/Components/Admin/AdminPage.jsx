import React from 'react';
import ClassesDataGrid from './ClassesDataGrid';
import ManagersDataGrid from './ManagersDataGrid';
import Footer from '../Footer';

const AdminPage = () => (
  <div>
    <ClassesDataGrid />
    <ManagersDataGrid />
    <Footer />
  </div>
);

export default AdminPage;
