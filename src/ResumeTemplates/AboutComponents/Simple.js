import {Divide} from '../Helper/Design';
import {View, Text} from '@react-pdf/renderer';
import Style from '../Helper/Style';
const About = ({detail}) => {
  return (
    <View style={Style.view}>
      <Divide title="Objective" />
        <Text style={Style.subText}>
          {detail}
        </Text>
    </View>
  );
};

export default About;
