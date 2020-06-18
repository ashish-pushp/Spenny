import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import normalize  from '../../Util/normalize'
import { Ionicons } from '@expo/vector-icons'

export default Spending = (props) => {
    return(
        <View style={styles.container}>
            <View style={styles.spendingView}>
                <Text style={styles.spendingText}>{'Spending Breakdown'}</Text>
            </View>
            <View style={styles.shoppingTopView}>
                <View style={styles.shoppingView}>
                    <View style={styles.icon}>
                        <Ionicons name={'md-cart'} size={17} color={"#ffffff"}/>
                    </View>
                    <View style={styles.textView}>
                        <Text style={styles.shoppingText}>{'Shopping'}</Text>
                        <Text style={styles.dateText}>{'17 Monday January'}</Text>
                    </View>
                    <View style={styles.shoppingMoneyView}>
                        <Text style={styles.amountText}>{'$'+props.data.Shopping}</Text>
                    </View>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1.4, 
        paddingHorizontal: normalize(20)
    },
    spendingView: {
        flex: 1, 
        justifyContent: 'center',
        bottom: normalize(10)
    },
    spendingText: {
        fontWeight: 'bold', 
        fontSize: normalize(16), 
        color: '#042c5c', 
        lineHeight: 18, 
        letterSpacing: 0.26
    },
    shoppingTopView: {
        flex:1, 
        paddingHorizontal: normalize(20),
        bottom: normalize(20)
    },
    shoppingView: {
        width: '100%', 
        height: '80%', 
        backgroundColor: '#fff', 
        borderRadius: normalize(6), 
        flexDirection: 'row', 
        paddingHorizontal: normalize(10), 
        alignItems: 'center'
    },
    icon: {
        width: normalize(30), 
        height: normalize(30), 
        borderRadius: normalize(6), 
        backgroundColor: '#ff7e87', 
        alignItems: 'center', 
        justifyContent: 'center'
    },
    textView: {
        flex: 2, 
        left: normalize(13)
    },
    shoppingText: {
        fontWeight: 'bold', 
        fontSize: normalize(13), 
        color: '#042c5c', 
        letterSpacing: 0.27
    },
    dateText:{
        fontSize: normalize(10), 
        color: '#77869e', 
        letterSpacing: 0.20
    },
    shoppingMoneyView: {
        flex: 1
    },
    amountText: {
        fontSize: normalize(13),
        color: '#ee5a55', 
        letterSpacing: 0.27, 
        fontWeight: 'bold'
    }
  });