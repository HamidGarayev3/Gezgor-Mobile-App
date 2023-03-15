import { View, Text, TouchableOpacity, Pressable } from 'react-native'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faPlus, faPlusSquare } from '@fortawesome/free-solid-svg-icons'
import { theme } from '../../assets&styles/theme'


const PostButton = () => {
  return (
    <View style={{justifyContent: 'center',alignItems: 'center',}}>
<View style={{
        top:530,
        borderRadius: 35,
        backgroundColor: theme.colors.blue[900],
        width: 46,
        height: 46,
        zIndex: 100,
        justifyContent: 'center',
        alignItems: 'center',
        alignContent:'center',
        shadowColor: '#00000070',
        shadowOffset: {
            width: 10,
            height: 10
        },
        shadowRadius: 1,
        elevation: 3
    }}>
        <Pressable>
            <FontAwesomeIcon color={theme.colors.white[500]} size={20} icon={faPlusSquare} />
        </Pressable>
    </View>
    </View>
    
  )
}

export default PostButton