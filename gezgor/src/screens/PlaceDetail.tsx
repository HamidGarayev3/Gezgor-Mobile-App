import { View, Text, Dimensions,StyleSheet,Image, ScrollView } from 'react-native'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faCalendarDays,faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { TouchableOpacity } from 'react-native/Libraries/Components/Touchable/TouchableOpacity';
import Explore from './Explore';
import { BottomTabBar } from '@react-navigation/bottom-tabs';
import CommmonButton from '../components/Button/CommmonButton';
import FollowButton from '../components/Button/FollowButton';



const DATA=[
    {"id":'1',"price":'50',"date":'10 JUN',"year":'2023',"WeekDay":'Tuesday',"StartHour":'4:00PM',"EndHour":'9:00PM',"Place Name":'Gala Convention Center',"OrganizerName":'Ashfak Sayem',"title":'International Band Music Concert', "location":'36 Guild Street London,UK',"OrganizerAvatar":'https://s3-alpha-sig.figma.com/img/7f20/ad9e/5540ac67cf3ba48c2ca12089d02e291a?Expires=1680480000&Signature=qsNd2sh93SLTB-SW1O-7S1w-8yigPDqi0XMVu5-~9YqXHABocNINSsoSw8cGJcn~8nl-SbagNYtGNipI8vfIWV2ztPrd1lZQGrZ-dZ0-OeXXCl~JnnUCrFnWiEKTBYoCQYZD90XcddFk-lguS-4cRws3H2iiq-sDyVM5rve~s86gnINYnd80WUaB-0zCDoFt2CXEa79Cq44d8~C-Zje-FPy2Qsgq1AHhXRtfp-pOkMV4m2tMsHszqhvCJLkgR4zsLoZrD39aFcLjqeaposccGKRkBBqwc33hala~Hq0rtWYVHam6-avAtsvrmCMpleYY4ThmGMi8y4I6I7gS80lDOA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4','image':'https://s3-alpha-sig.figma.com/img/84a9/76ac/cf2178f37f5fdaf13d26c3580b71f85d?Expires=1679875200&Signature=KbLY4AvEAkzN0dSOHQFYG3dVZmObf3826QshrnuT7aYueB1IKHlUOrF0HRo3T8qQCuFE6l-a380ORk0l4SmLOWh22oUKZdGaQc6UL07BerZxyD9E1OjkMpPHWszLvr27dOSTii67C~XoJLwG3ZQAbnr95qFwpiXiEIieyWg~Xzbw01fqToYV8hJsuKBm5WMvLu1ftEaGn~92S47ag-hjlGp4Sc11MaEGuTWr043-HBLimKbjn-nAgS49h06WpOBUEnGIq~4W5DWx4JtFUJA9S43zS4Mxyzlf~xr1akBCZCve9-cVyA~TFsHfPNtCqTo90KwNMYjSip4PRAG2d2Impw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',"description":'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccc'}
    , {"id":'2',"price":'70',"date":'10 JUN',"year":'2023',"WeekDay":'Wendsday',"StartHour":'4:00PM',"EndHour":'9:00PM',"Place Name":'Gala Convention Center',"OrganizerName":'Ashfak Sayem', "title":'Jo Malone London’s Mo..', "location":'36 Guild Street London,UK',"OrganizerAvatar":'https://s3-alpha-sig.figma.com/img/7f20/ad9e/5540ac67cf3ba48c2ca12089d02e291a?Expires=1680480000&Signature=qsNd2sh93SLTB-SW1O-7S1w-8yigPDqi0XMVu5-~9YqXHABocNINSsoSw8cGJcn~8nl-SbagNYtGNipI8vfIWV2ztPrd1lZQGrZ-dZ0-OeXXCl~JnnUCrFnWiEKTBYoCQYZD90XcddFk-lguS-4cRws3H2iiq-sDyVM5rve~s86gnINYnd80WUaB-0zCDoFt2CXEa79Cq44d8~C-Zje-FPy2Qsgq1AHhXRtfp-pOkMV4m2tMsHszqhvCJLkgR4zsLoZrD39aFcLjqeaposccGKRkBBqwc33hala~Hq0rtWYVHam6-avAtsvrmCMpleYY4ThmGMi8y4I6I7gS80lDOA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4','image':'https://s3-alpha-sig.figma.com/img/6c71/bf2d/805db991ea266144b48ac8adde78bcf0?Expires=1679875200&Signature=hoWQVpVwehrzCa8BZv9x7zcSjazl0WYnLlLYvYT8Pzxcry6vMJn3GwJPcuyCVvI0z3P8SoixjTtuOjsIjY6E8MW-XMjKFOLTyHThRGw6Qt8IFPzJuIj7ntz0u0pLQuyv9XY96ZZAq7sDNJe20bCnOrVLQzV9aKlgcEf4fd-teadzu7s7QoEpgym9riMslTl0i2gg0JzQfx4JS3OB~VDnWnA0FBK4VasB6gZSVKOS8wIWk2BsAHPkzA1pOiRumBZnooocbjZY7CarRY97T4ISfJA1FTqF5-hdn960Mg1GuK8iU2GNWrP3As1GcCpTxOCZnpEGWv73QevnlXkMSh2jjg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',"description":'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccc'}
  ]

const PlaceDetail = ({route,navigation}:any) => {
    let { id } = route.params;
  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;
  let place = DATA.find(q => q.id == id);
  
  return (
    <View style={{flex:1}}>

      <View style={{flex:2}}>
      <Image source={{ uri: place?.image }} style={styles.image} />
      </View>

      <View style={{flex:2,marginTop:70}}>
        <Text style={{fontSize:35,paddingHorizontal:5,marginLeft:20,color:'#120D26',marginTop:50}}>{place?.title}</Text>
        </View>

        <View style={{flex:3}}>

        <View style={{flex:1,flexDirection:'row',padding:20}}>
        <View style={{width:48,height:48,borderRadius:8,backgroundColor:'rgba(86, 105, 255, 0.12)',alignItems:'center',justifyContent:'center'}}>
        <FontAwesomeIcon icon={faCalendarDays} size={30} color={'#5669FF'} />
        </View>

        <View style={{paddingHorizontal:20}}>
        <View style={{}}><Text style={{fontSize:16,fontWeight:'600',color:'#120D26'}}>{place?.date},{place?.year}</Text></View>
        <View style={{}}><Text style={{fontSize:12,fontWeight:'400',color:'#747688'}}>{place?.WeekDay},{place?.StartHour}-{place?.EndHour}</Text></View>
        </View>
        </View>

        <View style={{flex:1,flexDirection:'row',padding:20}}>
        <View style={{width:48,height:48,borderRadius:8,backgroundColor:'rgba(86, 105, 255, 0.12)',alignItems:'center',justifyContent:'center'}}>
        <FontAwesomeIcon icon={faLocationDot} size={30} color={'#5669FF'} />
        </View>

        <View style={{paddingHorizontal:20}}>
        <View style={{}}><Text style={{fontSize:16,fontWeight:'600',color:'#120D26'}}>{place?.['Place Name']}</Text></View>
        <View style={{}}><Text style={{fontSize:12,fontWeight:'400',color:'#747688'}}>{place?.location}</Text></View>
        </View>
        </View>
        
        <View style={{flex:1,flexDirection:'row',padding:20}}>
        <View style={{width:48,height:48,borderRadius:8,backgroundColor:'red',alignItems:'center',justifyContent:'center'}}>
        <Image style={{width:48,height:48,borderRadius:8}} source={{uri:'https://images.unsplash.com/photo-1629941181242-7e3f06c9257d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'}}></Image>
        </View>

        <View style={{paddingHorizontal:20}}>
        <View style={{}}><Text style={{fontSize:16,fontWeight:'600',color:'#120D26'}}>{place?.OrganizerName}</Text></View>
        <View style={{}}><Text style={{fontSize:12,fontWeight:'400',color:'#747688'}}>Organizer</Text>
        <View style={{marginLeft:220}}>
        <FollowButton></FollowButton>
        </View>
        </View>
        </View>
        </View>
        </View>
        
        <CommmonButton title='Buy Ticket' price={place?.price}></CommmonButton>
        <View style={{flex:2}}>
          <ScrollView style={{padding:20}}>
            <Text style={{fontSize:18,fontWeight:'600',color:'#120D26',marginBottom:10}}>About Event</Text>
            <Text style={{fontSize:16,color:'#120D26'}}>{place?.description}</Text>
          </ScrollView>
        </View>
    </View>
  )
  
}



const styles=StyleSheet.create({
  image:{
    width:'100%',
    height:244
  }
})

export default PlaceDetail