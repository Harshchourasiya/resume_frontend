import {
  Stack,
  Box,
  Paper,
} from "@mui/material";
import Experience from "./ExperienceComponents/Simple";
import Project from "./ProjectComponents/Simple";
import Name from './NameComponents/Simple';
import Profile from './ProfileComponents/Simple';
import About from './AboutComponents/Simple';
import Education from "./EducationComponents/Simple";
import Skill from "./SkillsComponents/Simple";
import {connect} from 'react-redux'

const Simple = (props) => {
  return (
    <Box sx={{padding: 5}}>
    <Paper sx={{margin : 'auto',padding: 5, width:'794px', height: '1123px'}}>
      <Stack container spacing={2} >
        {/* //? Name and Title */}

        <Name name={props.name} title={props.title}/>

        {/* //? Profiles  */}

        <Profile profiles={props.profiles}/>

        {/* //? About you */}
        <About detail={props.aboutMe}/>

        {/* //? Experience */}

        <Experience experiences={props.experiences}/>

        {/* //? Education */}

        <Education educations={props.educations}/>

        {/* //? Skills  */}

        <Skill skills={props.skills}/>

        {/* //? Projects  */}
        <Project projects={props.projects}/>
      </Stack>
    </Paper>
    </Box>
  );
};
const mapStateToProps = (state) => ({
  ...state,
});

export default connect(mapStateToProps)(Simple);
