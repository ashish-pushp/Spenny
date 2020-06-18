import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import normalize  from '../../Util/normalize'
import { Ionicons } from '@expo/vector-icons'
export default Balance = (props) => {
    return(
        <View style={styles.container}>
            <View style={styles.balnaceFirstView}>
                <View style={styles.balanceView}>
                    <Text style={styles.cardBalanceText}>{props.title}</Text>
                </View>
                <View style={styles.balanceContainer}>
                    <View style={[styles.icon, {backgroundColor: '#e2f2eb', right: normalize(17)}]}>
                        <Ionicons name={'md-arrow-up'} size={14} color={"#1bc773"}/>
                    </View>
                    <Text style={styles.balnceText}>{'$' + props.balance1}</Text>
                </View>
            </View>
            <View style={styles.balnaceFirstView}>
                <View style={styles.balanceView}>
                    <Text style={styles.cardBalance}>{'$'+props.cardBalance}</Text>
                </View>
                <View style={styles.balanceContainer}>
                    <View style={[styles.icon, {backgroundColor: '#f6e6e7'}]}>
                        <Ionicons name={'md-arrow-down'} size={14} color={"#f24750"}/>
                    </View>
                    <Text style={styles.balanceSecondText}>{'$' + props.balance2}</Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent:'center'
    },
    balnaceFirstView: {
        flex: .2,
        paddingHorizontal: normalize(20), 
        flexDirection: 'row',  
        margin: normalize(5)
    },
    balanceView: {
        flex:1
    },
    cardBalanceText: {
        fontSize: normalize(12), 
        color: '#77869e', 
        letterSpacing: 0.07
    },
    balanceContainer: {
        flex: 1, 
        flexDirection:'row', 
        justifyContent:'flex-end'
    },
    icon: {
        width: normalize(20), 
        height: normalize(20), 
        borderRadius: normalize(3), 
        right: normalize(10),
        alignItems:'center',
        justifyContent:'center'
    },
    balnceText: {
        fontSize: normalize(14), 
        color: '#1bc773', 
        letterSpacing: 0.07
    },
    cardBalance:{
        fontSize: normalize(21),
        color:'#042c5c', 
        letterSpacing:0.07
    },
    iconSecondView: {
        width: normalize(20), 
        height: normalize(20), 
        backgroundColor:'#e2f2eb', 
        borderRadius: normalize(3), 
        right: normalize(10)
    },
    balanceSecondText: {
        fontSize: normalize(14), 
        color: '#f24750', 
        letterSpacing: 0.07,
    }
  });