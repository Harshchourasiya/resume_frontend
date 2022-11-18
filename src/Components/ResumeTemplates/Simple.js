import Experience from "./ExperienceComponents/Simple";
import Project from "./ProjectComponents/Simple";
import Name from './NameComponents/Simple';
import Profile from './ProfileComponents/Simple';
import About from './AboutComponents/Simple';
import Education from "./EducationComponents/Simple";
import Skill from "./SkillComponents/Simple";
import { Document, Page } from "@react-pdf/renderer";
import { tempData } from "./helper/TempData";


const Simple = ({ data, color }) => {
  data = data.name.length === 0 ? tempData : data;
  return (
    <Document>
      <Page style={{ display: 'flex', justifyContent: 'flex-start' }}>
        {
          data.name.length !== 0 && <Name name={data.name} title={data.title} />
        }

        {
          data.profiles.length !== 0 && <Profile profiles={data.profiles} />
        }

        {
          data.aboutMe.length !== 0 && <About detail={data.aboutMe} color={color} />
        }

        {
          data.experiences.length !== 0 && <Experience experiences={data.experiences} color={color} />
        }

        {
          data.educations.length !== 0 && <Education educations={data.educations} color={color} />
        }

        {
          data.skills.length !== 0 && <Skill skills={data.skills} color={color} />
        }

        {
          data.projects.length !== 0 && <Project projects={data.projects} color={color} />
        }
      </Page>
    </Document>
  );
};


export default Simple;
