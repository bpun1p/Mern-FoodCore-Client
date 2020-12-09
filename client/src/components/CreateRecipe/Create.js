import React from 'react';
import DashboardHeader from '../dashboard/DashBoardHeader';
import CreateForm from './create/CreateForm';
import '../assets/styles/Main.css';

function Create() {
  return (
    <div className="create">
      <DashboardHeader />
      <CreateForm />
    </div>
  );
}
export default Create;
