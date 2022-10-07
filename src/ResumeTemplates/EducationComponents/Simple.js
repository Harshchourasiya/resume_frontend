import {Divide} from '../Helper/Design';
import { View, Text } from '@react-pdf/renderer';
import Style from '../Helper/Style';

const EDU = ({data}) => {
  return (
    <View style={{...Style.flexRowInBetween, padding: '10px', ...Style.mainText}}>
      <View style={Style.flexRowInBetween}>
        <Text>{data.name}</Text>
        <Text> - </Text>
        <Text>{data.major}</Text>
      </View>
      <Text>CGPA: {data.CGPA}</Text>
      <View style={Style.flexRowInBetween}>
        <Text>{data.starting}</Text>
        <Text> - </Text>
        <Text>{data.ending}</Text>
      </View>
    </View>
  );
}

const Education = ({educations})=> {
    return (
        <View style={Style.view}>
          <Divide title="Education" />

          {
            educations.map((obj) => (
              <EDU data={obj}/>
            ))
          }
        </View>
    )
}

export default Education;