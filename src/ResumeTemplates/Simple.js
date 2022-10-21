import Experience from "./ExperienceComponents/Simple";
import Project from "./ProjectComponents/Simple";
import Name from './NameComponents/Simple';
import Profile from './ProfileComponents/Simple';
import About from './AboutComponents/Simple';
import Education from "./EducationComponents/Simple";
import Skill from "./SkillsComponents/Simple";
import { Document, Page} from "@react-pdf/renderer";
import {tempData } from "./Helper/TempData";


const Simple = ({data}) => {
  data = data.name.length === 0 ? tempData : data;
  return (
    <Document>
    <Page style={{display:'flex', justifyContent:'flex-start'}}>
      <Name name={data.name} title={data.position}/>

      <Profile profiles={data.profiles}/>

      <About detail={"Amet ipsum ad voluptate cupidatat quis. Tempor minim anim pariatur quis est. Non fugiat velit laboris ad velit sunt ipsum consequat sit velit.Do quis enim proident id ullamco ut amet reprehenderit enim proident exercitation sit. Sunt deserunt ex tempor exercitation pariatur est commodo. Qui consequat elit excepteur voluptate. Tempor laborum minim excepteur aute eu consectetur minim dolore eiusmod dolor deserunt nostrud. Tempor est aliquip eu cillum non mollit dolor qui esse officia non adipisicing in."} />

      <Experience experiences={data.experiences}/>

      <Education educations={data.educations} />

      <Skill skills={data.skills} />

      <Project projects={data.projects}/>
    </Page>
  </Document>
  );
};


export default Simple;
