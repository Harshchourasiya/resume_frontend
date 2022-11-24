

const getEducationTextFieldData = (education, setCollegeName, setMajor, setCGPA, setStartingDate, setEndingDate)=> {
    return [
        {
          label: "College Or School Name",
          value: education.collegeName,
          helperText: "Enter College Name must be between 1 to 100 characters",
          onChange: setCollegeName
        },
        {
          label: "Enter Your Major",
          value: education.major,
          helperText: "Enter Major must be between 1 to 50 characters",
          onChange: setMajor
        },
        {
          label: "Enter your CGPA",
          value: education.CGPA,
          helperText: "Enter CGPA must be between 1 to 4 characters",
          onChange: setCGPA
        },
        {
          label: "Starting Date",
          value: education.starting,
          helperText: "Enter Starting Date must be like May 2021 or 01-07-2020",
          onChange: setStartingDate
        },
        {
          label: "Ending Date",
          value: education.ending,
          helperText: "Enter Starting Date must be like May 2021 or 01-07-2020 or Present",
          onChange: setEndingDate
        },
      ];
}

export default getEducationTextFieldData;