import users from '../utils/users';

let loggedUser = {};

export async function signIn(email, password) {
    return users.find(element => {
      const cicik = element.email === email && element.password === password

      if(cicik) {
        loggedUser = {
          id: 1,
          firstName: element.firstName,
          lastName: element.lastName,
          email: element.email,
          position: element.position,
          school: element.school,
          avatarUrl: element.avatarUrl
        };
        localStorage.setItem('user', JSON.stringify(loggedUser))
      }

      return cicik;
    })
      ?
      {
        isOk: true,
        data: loggedUser
      }
      :
      {
        isOk: false,
        message: "Authentication failed"
      }
}

export async function getUser() {
  try {
    const user = JSON.parse(localStorage.getItem('user'));

    return {
      isOk: true,
      data: user
    };
  }
  catch {
    return {
      isOk: false,
      message: "Authentication failed"
    };
  }
}

