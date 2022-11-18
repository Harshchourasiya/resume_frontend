import Experience from "./ExperienceComponents/Simple";
import Project from "./ProjectComponents/Simple";
import Name from './NameComponents/Simple';
import Profile from './ProfileComponents/Simple';
import About from './AboutComponents/Simple';
import Education from "./EducationComponents/Simple";
import Skill from "./SkillComponents/Simple";
import { Document, Page, View } from "@react-pdf/renderer";
import { tempData } from "./helper/TempData";
import Style from './helper/Style';

const Matrix = ({ data, color }) => {
    data = data.name.length === 0 ? tempData : data;
    return (
        <Document>
            <Page style={{ display: 'flex', justifyContent: 'flex-start' }}>
                {
                    data.name.length !== 0 && <Name name={data.name} title={data.title} style={{ textAlign: 'center' }} />
                }

                {
                    data.profiles.length !== 0 && <Profile profiles={data.profiles} style={{ justifyContent: 'center' }} />
                }

                <View style={{
                    ...Style.flexRowInBetween, alignItems: 'center', alignContent: 'center'
                }}>
                    <View style={{ width: '50%' }}>
                        {
                            data.aboutMe.length !== 0 && <About detail={data.aboutMe} color={color} />
                        }
                    </View>
                    {
                        data.aboutMe.length !== 0 && data.educations.length !== 0 && <View style={{ width: '1px', backgroundColor: color, height: '90%', marginTop: '20px' }} />
                    }
                    <View style={{ width: '50%', height: '100%' }}>
                        {
                            data.educations.length !== 0 && <Education educations={data.educations} color={color} />
                        }
                    </View>
                </View>

                {
                    data.experiences.length !== 0 && <Experience experiences={data.experiences} color={color} />
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


export default Matrix;
