import React from 'react';
import DashboardHeader from '../Dashboard/DashboardHeader';
import CreateForm from './CreateForm';
import '../../assets/styles/Main.css';

export default function Create() {
  return (
    <div className="create">
      <DashboardHeader />
      <CreateForm />
    </div>
  );
}
