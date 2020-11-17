import React from 'react';
import ProfileHeader from './profile/ProfileHeader';
import CreateForm from './create/CreateForm';
import '../assets/styles/Main.css';

function Create() {
  return (
    <div className="create">
      <ProfileHeader />
      <CreateForm />
    </div>
  );
}
export default Create;
