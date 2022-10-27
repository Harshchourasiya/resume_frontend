import {Divide} from '../Helper/Design';
import { View, Text } from '@react-pdf/renderer';
import Style from '../Helper/Style';

const Skill = ({skills, color}) => {
  return (
    <View style={Style.view}>
      <Divide title="Skills" color={color}/>
      <View style={{...Style.rowView, justifyContent: 'flex-start'}}>
        {
          skills.map((obj, idx)=> (
            <Text key={idx} style={{...Style.skillText, borderColor: color}}>{obj}</Text>
          ))
        }
      </View>

    </View>
  );
};

export default Skill;
