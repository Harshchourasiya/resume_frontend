// ! I WILL CHANGE AND STORE IN THE ENV VARIABLES
const API = "http://localhost:3001/";
const API_USER = API + "user/";

const sendOTP = async (data, setData) => {
  await fetch(API_USER + "new", {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-type": "application/json",
    },
  }).then((res) => {
    res
      .json()
      .then((resData) => {
        setData({...data, verificationCode : resData.verificationCode, otpCode : resData.otpCode, status: resData.status});
      })
      .catch((err) => {
        console.log(err.message);
      });
  }).catch((err) => {
    console.log(err);
  })

};


const verifyOTP = async(data, setRes) => {
    await fetch(API_USER + "otpverification", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-type": "application/json",
        },
      }).then((res) => {
        res
          .json()
          .then((resData) => {
            setRes(resData);
          })
          .catch((err) => {
            console.log(err.message);
          });
      });
}
export { sendOTP, verifyOTP };
