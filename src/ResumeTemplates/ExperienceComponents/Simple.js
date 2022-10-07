import {Divide} from '../Helper/Design';
import { View, Text } from '@react-pdf/renderer';
import Style from '../Helper/Style';

const EXP = ({data}) => {
  return (
  <View style={{...Style.flexColumn, padding: '10px'}}>
    <View style={Style.flexRowInBetween}>
      <View style={Style.flexRowInBetween}>
        <Text style={Style.mainText}>{data.companyName}</Text>
        <Text> - </Text>
        <Text style={Style.mainText}>{data.position}</Text>
      </View>

      <View style={Style.flexRowInBetween}>
        <Text style={Style.mainText}>{data.starting}</Text>
        <Text> - </Text>
        <Text style={Style.mainText}>{data.ending}</Text>
      </View>
    </View>
    <Text style={Style.subText}>{data.duties}</Text>
  </View>
  );
}

const Experience = ({experiences})=> {
    return (
        <View style={Style.view}>
            <Divide title="Experience" />

            {
              experiences.map((obj)=> (
                <EXP data={obj}/>
              ))
            }
        </View>
    )
}

export default Experience;