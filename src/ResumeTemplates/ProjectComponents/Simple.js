import {Divide} from '../Helper/Design';
import { View, Text, Link } from '@react-pdf/renderer';
import Style from '../Helper/Style';

const PRO = ({data}) => {
  return (
    <View style={Style.flexColumn}>
      <View style={Style.flexRowInBetween}>
        <Text style={Style.mainText}>{data.name}</Text>
        <Link src={data.link}><Text style={Style.subText}>View</Text></Link>
      </View>

      <Text style={Style.subText}>
        {data.details}
      </Text>

    </View>

  );
}

const Project = ({projects}) => {
  return (
    <View style={Style.view}>
      <Divide title="Projects" />
      
      {
        projects.map((obj) => (
          <PRO data={obj} />
        ))
      }
    </View>
  );
};

export default Project;
