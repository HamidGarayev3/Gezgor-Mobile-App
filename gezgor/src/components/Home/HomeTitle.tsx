import { View, Text , StyleSheet, Image} from 'react-native'
import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons/faMagnifyingGlass';
import { theme } from '../../assets&styles/theme';

const HomeTitle = () => {
  return (
<View style={{
            marginVertical: theme.spacing.xl,
            paddingHorizontal: theme.spacing.m,
            flexDirection: 'row',
            justifyContent: 'space-between'
        }}>
            <View style={{
                flexDirection: 'row',
                alignItems: 'center'
            }}>
                <Image
                    style={{
                        width: 45,
                        height: 45,
                    }}
                    source={{
                        uri: 'https://icon-library.com/images/walking-icon-png/walking-icon-png-18.jpg'
                    }}
                />
                <Text style={{
                    fontSize: theme.fontSize.l,
                    fontWeight: '800',
                    color: theme.colors.black[900],
                    paddingLeft: theme.spacing.s
                }}>
                    Gezgor
                </Text>
            </View>
            <View style={{
                width: 45,
                height: 45,
                borderColor: theme.colors.black[100],
                borderWidth: 1,
                borderRadius: 22.5,
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <FontAwesomeIcon size={theme.fontSize.m} icon={faMagnifyingGlass} />
            </View>
        </View>
  )
}

export default HomeTitle