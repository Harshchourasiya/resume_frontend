import { Divide } from '../helper/Design';
import { View, Text, Link } from '@react-pdf/renderer';
import Style from '../helper/Style';

const PRO = ({ data }) => {
  return (
    <View style={Style.flexColumn}>
      <View style={Style.flexRowInBetween}>
        <Text style={{ ...Style.mainText, fontSize: '18px' }}>{data.name}</Text>
        <Link src={data.link}><Text style={Style.subText}>View</Text></Link>
      </View>

      <Text style={Style.subText}>
        {data.detail}
      </Text>

    </View>

  );
}

const Project = ({ projects, color }) => {
  return (
    <View style={Style.view}>
      <Divide title="Projects" color={color} />
      <View style={{ height: '10px' }} />
      {
        projects.map((obj, idx) => (
          <PRO data={obj} key={idx} />
        ))
      }
    </View>
  );
};

export default Project;
