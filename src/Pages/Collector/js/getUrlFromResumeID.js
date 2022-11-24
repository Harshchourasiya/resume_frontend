const getUrlFromResumeID = (resumeId, resumeName)=> {
    let url = "/choose";
    url += (resumeId !== null ? "?id=" + resumeId : "");
    url += (resumeName !== null ? "&name=" + resumeName : "");
    return url;
}

export default getUrlFromResumeID;