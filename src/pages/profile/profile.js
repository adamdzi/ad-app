import React from 'react';
import './profile.scss';
import Form from 'devextreme-react/form';
import { useAuth } from './../../contexts/auth'; 

export default function Profile() {
  const { user } = useAuth();

  const loggedUser = {
    Imię: user.firstName,
    Nazwisko: user.lastName,
    Email: user.email,
    Pozycja: user.position,
    Szkoła: user.school,
    Avatar: user.avatarUrl
  };

  return (
    <React.Fragment>
      <h2 className={'content-block'}>Profil</h2>
      <div className={'content-block dx-card responsive-paddings'}>
        <div className={'form-avatar'}>
          <img
            alt={''}
            src={loggedUser.Avatar}
          />
        </div>
        <div>
          <h2>{`${loggedUser.Imię} ${loggedUser.Nazwisko}`}</h2>
        </div>
      </div>

      <div className={'content-block dx-card responsive-paddings'}>
        <Form
          id={'form'}
          defaultFormData={loggedUser}
          labelLocation={'top'}
          colCountByScreen={colCountByScreen}
        />
      </div>
    </React.Fragment>
  );
}

const colCountByScreen = {
  xs: 1,
  sm: 2,
  md: 3,
  lg: 4
};
