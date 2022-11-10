import {
    ADD_NAME,
    ADD_TITLE,
    ADD_ABOUT_ME,
    ADD_EXPERIENCE,
    REMOVE_EXPERIENCE,
    ADD_EDUCATION,
    REMOVE_EDUCATION,
    ADD_SKILL, REMOVE_SKILL, ADD_PROJECT, REMOVE_PROJECT, REMOVE_PROFILE, ADD_PROFILE,
    SET_ALL_DATA,
    IS_USER
} from '../../helper/Strings';

const addName = (name) => {
    return {
        type: ADD_NAME,
        name
    }
}

const addTitle = (title) => {
    return {
        type: ADD_TITLE,
        title
    }
}

const addAboutMe = (aboutMe) => {
    return {
        type: ADD_ABOUT_ME,
        aboutMe
    }
}

const addExperience = (experience) => {
    return {
        type: ADD_EXPERIENCE,
        experience
    }
}

const removeExperience = (idx) => {
    return {
        type: REMOVE_EXPERIENCE,
        idx
    }
}

const addEducation = (education) => {
    return {
        type: ADD_EDUCATION,
        education
    }
}

const removeEducation = (idx) => {
    return {
        type: REMOVE_EDUCATION,
        idx
    }
}

const addSkill = (skill) => {
    return {
        type: ADD_SKILL,
        skill
    }
}

const removeSkill = (idx) => {
    return {
        type: REMOVE_SKILL,
        idx
    }
}

const addProject = (project) => {
    return {
        type: ADD_PROJECT,
        project
    }
}

const removeProject = (idx) => {
    return {
        type: REMOVE_PROJECT,
        idx
    }
}

const addProfile = (profile) => {
    return {
        type: ADD_PROFILE,
        profile
    }
}

const removeProfile = (idx) => {
    return {
        type: REMOVE_PROFILE,
        idx
    }
}

const setAllData = (data) => {
    return {
        type: SET_ALL_DATA,
        data
    }
}

const setIsUser = (isUser) => {
    return {
        type: IS_USER,
        isUser
    }
}

export {
    addName,
    addTitle,
    addAboutMe,
    addExperience,
    removeExperience,
    addEducation,
    removeEducation,
    addSkill,
    removeSkill,
    addProject,
    removeProject,
    addProfile,
    removeProfile,
    setAllData,
    setIsUser
}