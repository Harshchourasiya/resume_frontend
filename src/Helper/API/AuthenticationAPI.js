// ! I WILL CHANGE AND STORE IN THE ENV VARIABLES

const API = "http://localhost:3001/";
const API_USER = API + "user/";
const authenticateUser = async(data, storeStatus) => {
    await fetch(API_USER + "login", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-type": "application/json",
        },
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

export {
    authenticateUser
}