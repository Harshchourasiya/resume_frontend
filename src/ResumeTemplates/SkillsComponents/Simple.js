import {Divide} from '../Helper/Design';
import { View, Text } from '@react-pdf/renderer';
import Style from '../Helper/Style';

const Skill = ({skills}) => {
  return (
    <View style={Style.view}>
      <Divide title="Skills" />
      
      <View style={Style.rowView}>
        {
          skills.map((obj)=> (
            <Text style={Style.skill}>{obj}</Text>
          ))
        }
      </View>

    </View>
  );
};

export default Skill;
