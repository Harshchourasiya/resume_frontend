const EMPTY_EXPERIENCE = {
    companyName : "",
    position : "",
    duties : "",
    starting: "",
    ending: ""
}

const EMPTY_EDUCATION = {
    collegeName: "",
    major : "",
    CGPA : "",
    starting : "",
    ending : ""
}

const EMPTY_PROJECT = {
    name : "",
    detail : "",
    link : ""
}

const EMPTY_PROFILE = {
    name : "",
    link : ""
}

const INITIAL_STATE = {
    name : "",
    position : "",
    aboutMe : "",
    experiences : [
        EMPTY_EXPERIENCE
    ],
    educations : [
        EMPTY_EDUCATION
    ],
    skills : [""],
    projects :[EMPTY_PROJECT],
    profiles : [EMPTY_PROFILE]
}
export {
    INITIAL_STATE,
    EMPTY_EXPERIENCE,
    EMPTY_EDUCATION,
    EMPTY_PROJECT,
    EMPTY_PROFILE
}