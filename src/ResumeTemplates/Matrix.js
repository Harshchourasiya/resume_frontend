import Experience from "./ExperienceComponents/Simple";
import Project from "./ProjectComponents/Simple";
import Name from './NameComponents/Simple';
import Profile from './ProfileComponents/Simple';
import About from './AboutComponents/Simple';
import Education from "./EducationComponents/Simple";
import Skill from "./SkillsComponents/Simple";
import { Document, Page, View } from "@react-pdf/renderer";
import { tempData } from "./Helper/TempData";
import Style from './Helper/Style';

const Matrix = ({ data, color }) => {
    data = data.name.length === 0 ? tempData : data;
    return (
        <Document>
            <Page style={{ display: 'flex', justifyContent: 'flex-start' }}>
                <Name name={data.name} title={data.position} style={{ textAlign: 'center' }} />

                <Profile profiles={data.profiles} style={{ justifyContent: 'center' }} />

                <View style={{...Style.flexRowInBetween, alignItems: 'center', alignContent: 'center'
                }}>
                    <View style={{ width: '50%'}}>
                        <About detail={data.aboutMe} color={color}/>
                    </View>
                    <View style={{width: '1px', backgroundColor: color, height: '90%', marginTop: '20px'}}/>
                    <View style={{ width: '50%', height: '100%' }}>
                        <Education educations={data.educations} color={color} />
                    </View>
                </View>

                <Experience experiences={data.experiences} color={color}/>


                <Skill skills={data.skills} color={color}/>

                <Project projects={data.projects} color={color}/>
            </Page>
        </Document>
    );
};


export default Matrix;
