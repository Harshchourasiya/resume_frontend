import {API_USER,HEADER} from '../Strings';


const sendOTP = async (data, setData) => {
  await fetch(API_USER + "new", {
    method: "POST",
    body: JSON.stringify(data),
    headers: HEADER,
  }).then((res) => {
    res
      .json()
      .then((resData) => {
        setData({...data, verificationCode : resData.verificationCode, status: resData.status});
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
        headers: HEADER,
      }).then((res) => {
        setRes(res.status===200)
      });
}
export { sendOTP, verifyOTP };
