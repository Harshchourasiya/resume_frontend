import {
    EDUCATION,
    EXPERIENCE,
    PROFILE,
    PROJECT,
    SKILL,
} from "../../../helper/Strings";

const getAddableData = (props) => {
    switch (props.type) {
        case EXPERIENCE:
            return props.experiences;
        case EDUCATION:
            return props.educations;
        case SKILL:
            return props.skills;
        case PROJECT:
            return props.projects;
        case PROFILE:
            return props.profiles;
        default:
            return props.educations;
    }
};

export default getAddableData;
