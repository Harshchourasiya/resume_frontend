import { Divide } from "../Helper/Design";
import { View, Text, Link } from "@react-pdf/renderer";
import Style from '../Helper/Style'
const Profile = ({ profiles }) => {
  return (
    <View style={Style.view}>
      <Divide title={"Contact Me"}/>
      <View style={Style.rowView}>
        {
          profiles.map((obj) => (
            <Link src={obj.link}><Text style={Style.subText}>
              {obj.name}</Text></Link>
          ))
        }
      </View>
    </View>
  );
};

export default Profile;
