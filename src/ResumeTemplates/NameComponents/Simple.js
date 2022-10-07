import { View, Text } from '@react-pdf/renderer';
import Style from '../Helper/Style';

const Name = ({ name, title }) => {
  return (
    <View style={Style.view}>
      <Text style={Style.mainText}>{name}</Text>
      <Text style={Style.subText}>{title}</Text>
    </View>
  );
}

export default Name;