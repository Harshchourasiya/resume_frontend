
import {API_USER_RESUME, HEADER} from '../Strings';



const CreateOrSaveResume = async(data, setIsSuccess) => {
    await fetch(API_USER_RESUME+"saveResume", {
        method: "POST",
        body: JSON.stringify(data),
        headers:HEADER,
        credentials: 'include'
      }).then(res => {
        setIsSuccess(res.status===200);
      }).catch(err=> console.log(err));
}

const getResume = async(setData, resumeId) => {
    await fetch(API_USER_RESUME+"getResume?id="+resumeId, {
        method: 'GET',
        credentials: 'include'
      }).then((res)=> {
        if (res.status === 200) res.json().then((data)=> {
          setData(data)
        });
      }).catch(err=> console.log(err));
}

const deleteResume = async(data)=> {
    await fetch(API_USER_RESUME+"deleteResume", {
        method: 'DELETE',
        body: JSON.stringify(data),
        headers: HEADER,
        credentials: 'include'
      }).then((res)=> {
        if (res.status===200) {
            // deleted!
        }
      }).catch(err=> console.log(err));
}



export {
    CreateOrSaveResume,
    getResume, 
    deleteResume
}