const EMPTY_EXPERIENCE = {
    companyName: "",
    position: "",
    duties: "",
    starting: "",
    ending: ""
}

const EMPTY_EDUCATION = {
    collegeName: "",
    major: "",
    CGPA: "",
    starting: "",
    ending: ""
}

const EMPTY_PROJECT = {
    name: "",
    detail: "",
    link: ""
}

const EMPTY_PROFILE = {
    name: "",
    link: ""
}

const INITIAL_STATE = {
    name: "",
    position: "",
    aboutMe: "",
    experiences: [],
    educations: [],
    skills: [],
    projects: [],
    profiles: [],
    isUser: false
}

const CREATE_ACCOUNT_INITIAL_STATE = {
    email: "",
    password: "",
    name: "",
    verificationCode: "",
    status: "Failed",
    otpCode : ""
};
export {
    INITIAL_STATE,
    EMPTY_EXPERIENCE,
    EMPTY_EDUCATION,
    EMPTY_PROJECT,
    EMPTY_PROFILE,
    CREATE_ACCOUNT_INITIAL_STATE
}