import {API, API_USER, HEADER} from '../Strings';

const authenticateUser = async(data, storeStatus) => {
    await fetch(API_USER + "login", {
        method: "POST",
        body: JSON.stringify(data),
        headers: HEADER,
        credentials: 'include',
        origin: true
      }).then((res) => {
        res
          .json()
          .then((resData) => {
            storeStatus(resData.status);
          })
          .catch((err) => {
            console.log(err.message);
          });
      });
}

const isUserLogedIn = (isRedirect) => {
  fetch(API, {
    method: 'GET',
    credentials: 'include'
  }).then((res)=> {
    if (res.status===200) isRedirect(true);
  })
}

export {
    authenticateUser,
    isUserLogedIn
}