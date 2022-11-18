import { View, Text } from '@react-pdf/renderer';
import Style from '../helper/Style';

const Name = ({ name, title, style }) => {
  return (
    <View style={{ ...Style.view, ...style }}>
      <Text style={{ ...Style.mainText, fontSize: '30px' }}>{name}</Text>
      <Text style={Style.subText}>{title}</Text>
    </View>
  );
}

export default Name;