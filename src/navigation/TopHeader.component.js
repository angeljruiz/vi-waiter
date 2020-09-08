import React from 'react'
import { SocialIcon, Icon, Header, Text} from 'react-native-elements'
import { StyleSheet, TouchableOpacity } from 'react-native'
import * as Color from '../config/colors';

const TopIcon =({icon, onPress}) => {
    if(icon==="none"){return(<Text></Text>)}
    return (
    <TouchableOpacity onPress={onPress}>
        <Icon name={icon} size={22} color={Color.topTab} style={styles.icon} type="ionicons"/>
    </TouchableOpacity>
)}

const TopHeader = ({leftIcon, title, rightIcon, onPress}) => (
    <Header containerStyle={styles.container}>
        <TopIcon icon={leftIcon} onPress={onPress}/>
        <Text style={styles.title}>{title}</Text>
        <TopIcon icon={rightIcon} onPress={onPress}/>
    </Header>
);

const styles=StyleSheet.create({
    container: {
        backgroundColor: Color.tabBackground,
        paddingVertical:10,
        marginTop: -42
    },
    icon:{

        color: Color.topTab
    },
    title:{
        fontSize: 22,
        color: Color.topTab

    }

});

export default TopHeader;