import Style from './Style';
import { View, Text } from '@react-pdf/renderer'
const Divide = ({ title, color }) => {
  return (
    <View style={{
      display: 'flex', flexDirection: 'row', justifyContent: 'flex-start',
      alignContent: 'center',
      alignItems: 'center',
    }}>
      <View style={{ height: '1px', backgroundColor: color, width: '10px' }} />
      <Text style={{ ...Style.mainText, flexGrow: 0, marginHorizontal: '5px' }}>
        {title}
      </Text>
      <View style={{ height: '1px', backgroundColor: color, flexGrow: 8 }} />

    </View>
  );
};

export {
  Divide,
}
