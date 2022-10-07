import {View, Text} from '@react-pdf/renderer'
const Divide = ({ title }) => {
  return (
    <View style={{
      display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly',
      alignContent: 'center',
      alignItems: 'center'
    }}>
      <View style={{ width: '30px', height: '1px', backgroundColor: '#000' }} />
      <Text style={{ fontSize: '20px', marginHorizontal:'10px' }}>
        {title}
      </Text>
      <View style={{ width: '400px', height: '1px', backgroundColor: '#000' }} />

      </View>
  );
};


export {
    Divide
}
