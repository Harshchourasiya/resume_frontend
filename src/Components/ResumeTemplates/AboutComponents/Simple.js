import { Divide } from '../../Components/ResumeTemplates/helper/Design';
import { View, Text } from '@react-pdf/renderer';
import Style from '../../Components/ResumeTemplates/helper/Style';
const About = ({ detail, style, color }) => {
  return (
    <View style={{ ...Style.view, ...style }}>
      <Divide title="Objective" color={color} />
      <Text style={Style.subText}>
        {detail}
      </Text>
    </View>
  );
};

export default About;
