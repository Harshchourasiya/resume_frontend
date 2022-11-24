// for redux store action ID

const ADD_NAME = "AddName";
const ADD_TITLE = "AddTitle";
const ADD_ABOUT_ME = "AddAboutMe";
const ADD_EXPERIENCE = "AddExperience";
const REMOVE_EXPERIENCE = "RemoveExperience";
const ADD_EDUCATION = "AddEducation";
const REMOVE_EDUCATION = "RemoveEducation";
const ADD_SKILL = "AddSkill";
const REMOVE_SKILL = "removeSkill";
const ADD_PROJECT = "addProject";
const REMOVE_PROJECT = "removeProject";
const ADD_PROFILE = "addProfile";
const REMOVE_PROFILE = "removeProfile";
const SET_ALL_DATA = "setalldata";
const IS_USER = "isuser";

// for addable 
const SKILL = "Skill";
const EXPERIENCE = "Experience";
const EDUCATION = "Education";
const PROJECT = "Project";
const PROFILE = "Profile";


// resume templates id
const SIMPLE_ID = "simple";
const MATRIX_ID = "matrix"
const DARK_RED_SIMPLE_ID = "darkredsimple";
const DARK_RED_MATRIX_ID = "darkredmatrix"


// respone ids
const SUCCESS = "Success";
const FAILED = "Failed";


// api details
const API = process.env.REACT_APP_API_URL;
const API_USER = API + "user/";
const API_USER_RESUME = API_USER + "resume/";

// create id for unknow users
const CREATE_ID = "KANSBXJ3J1JBCS";


const HEADER = {
    "Content-type": "application/json",
    "Accept": "application/json",
}

// file location uris
const STATIC = "/static";
const TEMPLATEIMG_LOCATION = STATIC+"/TemplateIMG";


export {
    ADD_NAME,
    ADD_TITLE,
    ADD_ABOUT_ME,
    ADD_EXPERIENCE,
    REMOVE_EXPERIENCE,
    ADD_EDUCATION,
    REMOVE_EDUCATION,
    EXPERIENCE,
    EDUCATION,
    SKILL,
    ADD_SKILL,
    REMOVE_SKILL,
    ADD_PROJECT,
    REMOVE_PROJECT,
    PROJECT,
    ADD_PROFILE,
    REMOVE_PROFILE,
    PROFILE,
    SET_ALL_DATA,
    IS_USER,

    SIMPLE_ID,
    MATRIX_ID,
    DARK_RED_SIMPLE_ID,
    DARK_RED_MATRIX_ID,

    SUCCESS,
    FAILED,


    API,
    API_USER,
    API_USER_RESUME,

    CREATE_ID,


    HEADER,

    TEMPLATEIMG_LOCATION
}