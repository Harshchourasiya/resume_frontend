import {
    SIMPLE_ID, MATRIX_ID, DARK_RED_MATRIX_ID, DARK_RED_SIMPLE_ID, EXPERIENCE,
    EDUCATION,
    SKILL,
    PROJECT,
    PROFILE,
} from "./Strings";
import { NameInput, TitleInput, AboutMeInput } from "../Pages/Collector/InputComponents/Input";
import Addable from "../Pages/Collector/InputComponents/Addable";
import AddExperience from "../Pages/Collector/InputComponents/Experience";
import AddEducation from "../Pages/Collector/InputComponents/Education";
import AddSkill from "../Pages/Collector/InputComponents/Skill";
import AddProject from "../Pages/Collector/InputComponents/Project";
import AddProfile from "../Pages/Collector/InputComponents/Profile";
import Name from '../LottieJSON/Name.json';
import Title from '../LottieJSON/Title.json';
import AboutMe from '../LottieJSON/AboutMe.json';
import Experience from '../LottieJSON/Experience.json';
import Education from '../LottieJSON/Education.json';
import Profile from '../LottieJSON/Profile.json';
import Skills from '../LottieJSON/Skills.json';
import Project from '../LottieJSON/Project.json';



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
    otpCode: ""
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

const COLLECTOR_INPUTS = [
    {
        title: "Name",
        component: <NameInput />,
        json: Name
    },
    {
        title: "Title",
        component: <TitleInput />,
        json: Title
    },
    {
        title: "Objective",
        component: <AboutMeInput />,
        json: AboutMe
    },

    {
        title: "Experiences",
        component: <Addable component={AddExperience} type={EXPERIENCE} />,
        json: Experience
    },

    {
        title: "Education",
        component: <Addable component={AddEducation} type={EDUCATION} />,
        json: Education
    },
    {
        title: "Skills",
        component: <Addable component={AddSkill} type={SKILL} />,
        json: Skills
    },
    {
        title: "Projects",
        component: <Addable component={AddProject} type={PROJECT} />,
        json: Project
    },
    {
        title: "Profiles",
        component: <Addable component={AddProfile} type={PROFILE} />,
        json: Profile
    },
];

export {
    INITIAL_STATE,
    EMPTY_EXPERIENCE,
    EMPTY_EDUCATION,
    EMPTY_PROJECT,
    EMPTY_PROFILE,
    CREATE_ACCOUNT_INITIAL_STATE,
    TEMPLATES,
    COLLECTOR_INPUTS
}