
const getExperienceTextFieldData = (experience, setCompanyName, setPosition, setDuties, setStartingDate, setEndingDate) => {
    return [
        {
          label: "Enter Company Name",
          value: experience.companyName,
          helperText: "Enter Company Name must be between 1 to 100 characters",
          onChange: setCompanyName
        },
        {
          label: "Enter Your Position",
          value: experience.position,
          helperText: "Enter Major must be between 1 to 50 characters",
          onChange: setPosition
        },
        {
          label: "Enter your Duties",
          value: experience.duties,
          helperText: "Enter Duties should be between 100 to 300 characters",
          onChange: setDuties,
          multiline: true
        },
        {
          label: "Starting Date",
          value: experience.starting,
          helperText: "Enter Starting Date must be like May 2021 or 01-07-2020",
          onChange: setStartingDate
        },
        {
          label: "Ending Date",
          value: experience.ending,
          helperText: "Enter Starting Date must be like May 2021 or 01-07-2020 or Present",
          onChange: setEndingDate
        },
      ];
}

export default getExperienceTextFieldData;