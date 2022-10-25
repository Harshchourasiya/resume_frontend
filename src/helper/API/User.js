
import {API_USER} from '../Strings';


const getUserInfo = async(setData) => {
    await fetch(API_USER+"info",{
        method: 'GET',
        credentials: 'include'
      }).then((res)=> {
        if (res.status===200){
            res.json().then((data)=> {
                setData(data);
            }).catch((err)=> console.log(err));
        }
    }).catch(err=> console.log(err));
}

const logoutUser = async() => {
    await fetch(API_USER+"logout",{
        method: 'GET',
        credentials: 'include'
      }).then().catch(err=> console.log(err));
}

export {
    getUserInfo,
    logoutUser
}