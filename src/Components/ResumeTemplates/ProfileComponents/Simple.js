import { View, Text, Link } from "@react-pdf/renderer";
import Style from '../helper/Style'
const Profile = ({ profiles, style }) => {
  return (
    <View style={{ ...Style.rowView, justifyContent: 'flex-start', paddingHorizontal: '10px', paddingVertical: '0px', ...style }}>
      {
        profiles.map((obj, idx) => (
          <Link src={obj.link} key={idx}><Text style={{ ...Style.subText, paddingHorizontal: '5px' }}>
            {obj.name}</Text></Link>
        ))
      }
    </View>
  );
};

export default Profile;
