
const isProjectValid = (project) => {
    return (
        project.name.length === 0 || project.detail.length === 0 || project.link.length === 0
      );
}

const isProfileValid = (profile) => {
    return (
        profile.name.length === 0 || profile.link.length === 0
      );
}

const isExperienceValid = (experience) => {
    return (
        experience.companyName.length === 0 || experience.position.length === 0
        || experience.duties.length === 0 || experience.starting.length === 0 || experience.ending.length === 0
      );
}

const isEducationValid = (education) => {
    return (
        education.collegeName.length === 0 || education.major.length === 0
        || education.CGPA.length === 0 || education.starting.length === 0 || education.ending.length === 0
      );
}

export {
    isProjectValid,
    isProfileValid,
    isExperienceValid,
    isEducationValid
}