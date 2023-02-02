import { Routes, Route, Navigate } from 'react-router-dom';
import { SingleCard } from './layouts';
import { LoginForm } from './components';

export default function UnauthenticatedContent() {
  return (
    <Routes>
      <Route
        path='/login' 
        element={
          <SingleCard id="loginBox" title="Logowanie">
            <LoginForm id="loginForm" />
          </SingleCard>
        }
      />
      <Route path='*' element={<Navigate to={'/login'} />}></Route>
    </Routes>
  );
}
