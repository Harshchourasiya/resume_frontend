import Experience from "./ExperienceComponents/Simple";
import Project from "./ProjectComponents/Simple";
import Name from './NameComponents/Simple';
import Profile from './ProfileComponents/Simple';
import About from './AboutComponents/Simple';
import Education from "./EducationComponents/Simple";
import Skill from "./SkillsComponents/Simple";
import { Document, Page} from "@react-pdf/renderer";
import {tempData } from "./Helper/TempData";


const Simple = ({data, color}) => {
  data = data.name.length === 0 ? tempData : data;
  return (
    <Document>
    <Page style={{display:'flex', justifyContent:'flex-start'}}>
      <Name name={data.name} title={data.position}/>

      <Profile profiles={data.profiles}/>

      <About detail={data.aboutMe} color={color} />

      <Experience experiences={data.experiences} color={color}/>

      <Education educations={data.educations} color={color} />

      <Skill skills={data.skills} color={color}/>

      <Project projects={data.projects} color={color}/>
    </Page>
  </Document>
  );
};


export default Simple;
