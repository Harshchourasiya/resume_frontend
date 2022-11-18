import { Divide } from '../helper/Design';
import { View, Text } from '@react-pdf/renderer';
import Style from '../helper/Style';

const EDU = ({ data, style }) => {
  return (
    <View style={{ ...Style.flexRowInBetween, padding: '10px', ...Style.mainText, ...style }}>
      <View style={Style.flexColumn}>
        <View style={Style.flexRowInBetween}>
          <Text>{data.collegeName}</Text>
          <Text>{" "}-{" "}</Text>
          <Text>{data.major}</Text>
        </View>
        <Text style={{ ...Style.dateText, fontSize: '12px', paddingTop: '5px' }}>CGPA: {data.CGPA}</Text>
      </View>
      <View style={{ ...Style.flexRowInBetween, ...Style.dateText }}>
        <Text >{data.starting}</Text>
        <Text>{" "}-{" "}</Text>
        <Text>{data.ending}</Text>
      </View>
    </View>
  );
}

const Education = ({ educations, color }) => {
  return (
    <View style={Style.view}>
      <Divide title="Education" color={color} />

      {
        educations.map((obj, idx) => (
          <EDU data={obj} key={idx} />
        ))
      }
    </View>
  )
}

export default Education;