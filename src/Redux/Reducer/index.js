import {
  ADD_NAME,
  ADD_TITLE,
  ADD_ABOUT_ME,
  ADD_EXPERIENCE,
  REMOVE_EXPERIENCE,
  ADD_EDUCATION,
  REMOVE_EDUCATION,
  ADD_SKILL,
  REMOVE_SKILL,
  ADD_PROJECT,
  REMOVE_PROJECT,
  ADD_PROFILE,
  REMOVE_PROFILE,
  SET_ALL_DATA,
  IS_USER
} from "../../helper/Strings";

import { INITIAL_STATE } from "../../helper/InitialState";
import {
  getFrontEndProjectFromBackend, getFrontEndProfileFromBackend, getFrontEndExperienceFromBackend,
  getFrontEndEducationFromBackend
} from '../../helper/UtilityMethods';
const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_NAME:
      return {
        ...state,
        name: action.name,
      };
    case ADD_TITLE:
      return {
        ...state,
        title: action.title,
      };
    case ADD_ABOUT_ME:
      return {
        ...state,
        aboutMe: action.aboutMe,
      };

    case ADD_EXPERIENCE:
      return {
        ...state,
        experiences: [...state.experiences, action.experience],
      };

    case REMOVE_EXPERIENCE:
      return {
        ...state,
        experiences: state.experiences.filter(
          (val) => val !== state.experiences[action.idx]
        ),
      };
    case ADD_EDUCATION:
      return {
        ...state,
        educations: [...state.educations, action.education],
      };

    case REMOVE_EDUCATION:
      return {
        ...state,
        educations: state.educations.filter(
          (val) => val !== state.educations[action.idx]
        ),
      };
    case ADD_SKILL:
      return {
        ...state,
        skills: [...state.skills, action.skill],
      };

    case REMOVE_SKILL:
      return {
        ...state,
        skills: state.skills.filter((val) => val !== state.skills[action.idx]),
      };
    case ADD_PROJECT:
      return {
        ...state,
        projects: [...state.projects, action.project],
      };

    case REMOVE_PROJECT:
      return {
        ...state,
        projects: state.projects.filter(
          (val) => val !== state.projects[action.idx]
        ),
      };
    case ADD_PROFILE:
      return {
        ...state,
        profiles: [...state.profiles, action.profile],
      };

    case REMOVE_PROFILE:
      return {
        ...state,
        profiles: state.profiles.filter(
          (val) => val !== state.profiles[action.idx]
        ),
      };
    case SET_ALL_DATA:
      action = action.data;
      const education = getFrontEndEducationFromBackend(action.Educations);
      const experience = getFrontEndExperienceFromBackend(action.Experiences);
      const projects = getFrontEndProjectFromBackend(action.Projects);
      const profiles = getFrontEndProfileFromBackend(action.Profiles);
      const res = {
        isUser: state.isUser,
        name: action.Name,
        title: action.Position,
        aboutMe: action.AboutMe,
        educations: education,
        experiences: experience,
        projects: projects,
        profiles: profiles,
        skills: action.Skills
      };
      return res;
    case IS_USER:
      return {
        ...state,
        isUser: action.isUser
      };
    default:
      return state;
  }
};

export { reducer };
