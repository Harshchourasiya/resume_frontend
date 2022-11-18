import { Divide } from '../helper/Design';
import { View, Text } from '@react-pdf/renderer';
import Style from '../helper/Style';

const EXP = ({ data }) => {

  return (
    <View style={{ ...Style.flexColumn, padding: '10px' }}>
      <View style={Style.flexRowInBetween}>
        <View style={Style.flexRowInBetween}>
          <Text style={Style.mainText}>{data.companyName}</Text>
          <Text>{" "}-{" "}</Text>
          <Text style={Style.mainText}>{data.position}</Text>
        </View>

        <View style={{ ...Style.flexRowInBetween, ...Style.dateText }}>
          <Text>{data.starting}</Text>
          <Text>{" "}-{" "}</Text>
          <Text>{data.ending}</Text>
        </View>
      </View>
      <Text style={Style.subText}>{data.duties}</Text>
    </View>
  );
}

const Experience = ({ experiences, color }) => {
  return (
    <View style={Style.view}>
      <Divide title="Experience" color={color} />

      {
        experiences.map((obj, idx) => (
          <EXP data={obj} key={idx} />
        ))
      }
    </View>
  )
}

export default Experience;