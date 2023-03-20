import { View, Text, Dimensions } from 'react-native'
import React from 'react'


const DATA=[
    {"id":'1',"date":'10 JUN', "title":'International Band', "location":'36 Guild Street London,UK','image':'https://s3-alpha-sig.figma.com/img/84a9/76ac/cf2178f37f5fdaf13d26c3580b71f85d?Expires=1679875200&Signature=KbLY4AvEAkzN0dSOHQFYG3dVZmObf3826QshrnuT7aYueB1IKHlUOrF0HRo3T8qQCuFE6l-a380ORk0l4SmLOWh22oUKZdGaQc6UL07BerZxyD9E1OjkMpPHWszLvr27dOSTii67C~XoJLwG3ZQAbnr95qFwpiXiEIieyWg~Xzbw01fqToYV8hJsuKBm5WMvLu1ftEaGn~92S47ag-hjlGp4Sc11MaEGuTWr043-HBLimKbjn-nAgS49h06WpOBUEnGIq~4W5DWx4JtFUJA9S43zS4Mxyzlf~xr1akBCZCve9-cVyA~TFsHfPNtCqTo90KwNMYjSip4PRAG2d2Impw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'}
    , {"id":'2',"date":'10 JUN', "title":'International Band', "location":'36 Guild Street London,UK','image':'https://s3-alpha-sig.figma.com/img/6c71/bf2d/805db991ea266144b48ac8adde78bcf0?Expires=1679875200&Signature=hoWQVpVwehrzCa8BZv9x7zcSjazl0WYnLlLYvYT8Pzxcry6vMJn3GwJPcuyCVvI0z3P8SoixjTtuOjsIjY6E8MW-XMjKFOLTyHThRGw6Qt8IFPzJuIj7ntz0u0pLQuyv9XY96ZZAq7sDNJe20bCnOrVLQzV9aKlgcEf4fd-teadzu7s7QoEpgym9riMslTl0i2gg0JzQfx4JS3OB~VDnWnA0FBK4VasB6gZSVKOS8wIWk2BsAHPkzA1pOiRumBZnooocbjZY7CarRY97T4ISfJA1FTqF5-hdn960Mg1GuK8iU2GNWrP3As1GcCpTxOCZnpEGWv73QevnlXkMSh2jjg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'}
  ]

const PlaceDetail = ({route}:any) => {
    let { id } = route.params;
  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;
  let place = DATA.find(q => q.id == id);
  return (
    <View>
      <Text>{place?.title}</Text>
    </View>
  )
}

export default PlaceDetail