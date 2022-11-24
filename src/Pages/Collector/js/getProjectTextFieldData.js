const getProjectTextFieldData = (project, setName, setDetail, setLink) => {
    return [
        {
            label: "Enter your Project Name",
            value: project.name,
            helperText: "Name should be between 1 to 50 characters",
            onChange: setName,
          }, {
            label: "Enter your Project Details",
            value: project.detail,
            helperText: "Detail should be between 1 to 300 characters",
            onChange: setDetail,
            multiline: true
          },
          {
            label: "Enter your Project Link",
            value: project.link,
            helperText: "Link must be URL",
            onChange: setLink,
          },
    ]
}
export default getProjectTextFieldData;