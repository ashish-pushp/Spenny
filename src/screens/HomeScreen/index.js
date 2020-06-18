import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { connect } from 'react-redux'
import styles from './style'


class HomeScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }

  render() {    
    return (
      <View style={{ flex: 1, backgroundColor:'#fff', alignItems:'center', justifyContent:'center'}}>
            <Text style={{fontSize:18, color:'#000', fontWeight:'bold'}}>{'This Is Home Screen'}</Text>
      </View>
    )
  }
}

function mapStateToProps(state) {
  return {

  }
}

export default connect(mapStateToProps)(HomeScreen)
