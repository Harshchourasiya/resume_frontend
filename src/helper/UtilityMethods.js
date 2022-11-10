
import { isEmail, isStrongPassword } from './Validator';


const setData = (data, props) => {
    data.name = props.name;
    data.position = props.title;
    data.aboutMe = props.aboutMe;
    data.educations = props.educations;
    data.experiences = props.experiences;
    data.profiles = props.profiles;
    data.projects = props.projects;
    data.skills = props.skills;
}
const getFrontEndEducationFromBackend = (education) => {
    const res = [];
    education.map((obj) => {
        res.push({
            collegeName: obj.CollegeName,
            CGPA: obj.CGPA,
            major: obj.Major,
            starting: obj.Starting,
            ending: obj.Ending
        });
    })
    return res;
}

const getFrontEndExperienceFromBackend = (experience) => {
    const res = [];
    experience.map((obj) => {
        res.push({
            companyName: obj.CompanyName,
            position: obj.Position,
            duties: obj.Duties,
            starting: obj.Starting,
            ending: obj.Ending
        })
    });
    return res;
}

const getFrontEndProfileFromBackend = (profile) => {
    const res = [];
    profile.map((obj) => {
        res.push({
            name: obj.Name,
            link: obj.Link
        });
    })
    return res;
}

const getFrontEndProjectFromBackend = (project) => {
    const res = [];
    project.map((obj) => {
        res.push({
            name: obj.Name,
            link: obj.Link,
            detail: obj.Detail
        });
    })
    return res;
}


const isLoginInputValid = (email, password) => {
    return (
        isEmail(email) &&
        isStrongPassword(password)
    );
}

export {
    setData,
    getFrontEndEducationFromBackend,
    getFrontEndExperienceFromBackend,
    getFrontEndProfileFromBackend,
    getFrontEndProjectFromBackend,
    isLoginInputValid
}