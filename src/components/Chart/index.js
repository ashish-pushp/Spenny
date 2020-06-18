import React, { Component, useState } from 'react'
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native'
import { LineChart, Path, Grid, XAxis, YAxis } from 'react-native-svg-charts'
import normalize  from '../../Util/normalize'
import { Ionicons } from '@expo/vector-icons'
import * as shape from 'd3-shape'

const axesSvg = { fontSize: normalize(10), fill: 'grey' };
const verticalContentInset = { top: normalize(10), bottom: normalize(10) }
const xAxisHeight = normalize(30)

export default Chart = (props) => {
    const [isMonthClicked, setActiveMonth] = useState(false);
    const [monthIndex, setMonthIndex] = useState(null);

    monthClicked = (index) => {
        setActiveMonth(true)
        setMonthIndex(index)
    }
    return (
        <View style={styles.container}>
            <View style={styles.scrollView}>
                <ScrollView horizontal={true}>
                    <View style={styles.buttonContainer}>
                        <TouchableOpacity style={styles.selectButton}>
                            <Text style={styles.monthText}>{'Monthly'}</Text>
                            <Ionicons name={'ios-arrow-down'} size={14} color={"#77869e"}/>
                        </TouchableOpacity>
                    </View>
                    {
                        props.month.map((item, index) => {
                            return(
                                <View key={index} style={styles.buttonContainer}>
                                    <TouchableOpacity onPress={() => this.monthClicked(index)} style={[styles.buttonView, {backgroundColor: isMonthClicked && monthIndex === index ? '#dfe7f5' : ''}]}>
                                        <Text style={[styles.monthText, {color: isMonthClicked && monthIndex == index ? '#0047cc' : '#77869e'}]}>{item}</Text>
                                    </TouchableOpacity>
                                </View>
                            )
                        })
                    }
                </ScrollView>
            </View>
            <View style={{flex:1, flexDirection:'row'}}>
                <YAxis
                    data={props.labels}
                    style={{ marginBottom: xAxisHeight }}
                    contentInset={verticalContentInset}
                    svg={axesSvg}
                />
                <View style={{flex:1}}>
                    <LineChart
                        style={{ flex:1}}
                        data={ props.chartData }
                        contentInset={{top: normalize(20), bottom: normalize(20) }}
                        curve={shape.curveNatural}
                        >
                            <Grid />
                    </LineChart>
                    <XAxis
                        style={{ height: xAxisHeight }}
                        data={props.labels}
                        contentInset={{ left: normalize(10), right: normalize(10) }}
                        svg={axesSvg}
                    />
                </View>
            </View>        
        </View>    
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 4
    },
    scrollView: {
        flex: .2, 
        marginTop: normalize(7), 
        justifyContent: 'center', 
        paddingHorizontal: normalize(10)
    },
    buttonContainer: {
        margin: normalize(10)
    },
    selectButton: {
        width: normalize(110), 
        height: normalize(40), 
        backgroundColor: '#fff', 
        borderRadius: normalize(17), 
        flexDirection:'row',
        alignItems: 'center', 
        justifyContent: 'space-evenly'
    },
    buttonView: {
        width: normalize(40), 
        height: normalize(40), 
        alignItems: 'center', 
        borderRadius: normalize(4), 
        justifyContent: 'center'
    },
    monthText: {
        color: '#77869e',
        fontSize: normalize(13),
        letterSpacing: 0.08
    },
    monthValue: {

    }
  });