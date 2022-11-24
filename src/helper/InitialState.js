import { SIMPLE_ID, MATRIX_ID, DARK_RED_MATRIX_ID, DARK_RED_SIMPLE_ID } from "./Strings";

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

const TEMPLATES = [
    {
        id: SIMPLE_ID,
        name: "Simple",
        imageLocation: "/simple.png",
    },
    {
        id: MATRIX_ID,
        name: "Matrix",
        imageLocation: "/matrix.png",
    },
    {
        id: DARK_RED_MATRIX_ID,
        name: "Dark Red Matrix",
        imageLocation: "/darkredmatrix.png",
    },
    {
        id: DARK_RED_SIMPLE_ID,
        name: "Dark Red Simple",
        imageLocation: "/darkredsimple.png",
    },
];

export {
    INITIAL_STATE,
    EMPTY_EXPERIENCE,
    EMPTY_EDUCATION,
    EMPTY_PROJECT,
    EMPTY_PROFILE,
    CREATE_ACCOUNT_INITIAL_STATE,
    TEMPLATES
}