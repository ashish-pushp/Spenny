import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import normalize  from '../../Util/normalize'
import { Ionicons } from '@expo/vector-icons'
export default ExpensesTitle = (props) => {
    return(
        <View style={styles.container}>
            <View style={styles.mainContainer}>
                <View style={styles.expenseView}>
                    <Text style={styles.text}>{props.title}</Text>
                </View>
                <View style={styles.iconView}>
                    <View>
                    </View>
                    <View style={styles.icon}/>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex:.8,
        margin:normalize(5)
    },
    mainContainer: {
        flex:1, 
        justifyContent:'space-between', 
        flexDirection:'row', 
        paddingHorizontal: normalize(20)
    },
    expenseView: {
        flex:1, 
        justifyContent:'flex-end'
    },
    text: {
        fontSize: normalize(17),
        lineHeight: 19, 
        letterSpacing: 0.26, 
        color:'#042c5c', 
        fontWeight:'bold'
    },
    iconView: {
        flex:1, 
        justifyContent:'flex-end', 
        alignItems:'flex-end',
        flexDirection:'row'
    },
    icon: {
        width:'15%', 
        height:'38%', 
        borderRadius: normalize(6), 
        backgroundColor:'#0047cc'
    }
  });