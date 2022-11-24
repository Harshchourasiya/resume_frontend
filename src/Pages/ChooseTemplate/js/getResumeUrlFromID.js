const getResumeUrlFromID = (id, name, resumeName, resumeId)=> {
    let url = "/download/" + id;
    url += "?name=" + (resumeName !== null ? resumeName : name);
    url += resumeId !== null ? "&id=" + resumeId : "";
    return url;
}

export default getResumeUrlFromID;

