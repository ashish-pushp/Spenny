import React, { Component } from 'react'
import { View, Text, SafeAreaView, Modal, ActivityIndicator, StyleSheet } from 'react-native'
import { connect } from 'react-redux'
import {  getDashboardData } from '../../actions'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler'

// components
import ExpensesTitle from '../../components/Expenses'
import Balance from '../../components/Balance'
import Chart from '../../components/Chart'
import Spending from '../../components/Spending'

class ExpensesScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {
        dashboard: {},
        chartData: null,
        isWaiting: true,
        chartData: [],
        labels: [],
        months: [],
        chart: [],
        spending: {},
        bills: {},
        rent: {}
    }
  }

  async componentDidMount(){
    const { dispatch } = this.props;  
    await dispatch(getDashboardData()).then(() => {
        this.setState({
            dashboard: this.props.dashboardData,
            chartData: this.props.dashboardData.data.datasets,
            labels: this.props.dashboardData.data.labels,
            months: this.props.dashboardData.month,
            spending: this.props.dashboardData.spending[0],
            bills: this.props.dashboardData.spending[1],
            rent: this.props.dashboardData.spending[2],
            isWaiting: false
        }, () => {
            var data = [];
            const { chart } = this.state;
            this.state.chartData.forEach((element, index) => {
                chart.push({
                    data: element.data,
                    svg: { stroke: element.borderColor, strokeWidth:3 },
                });
            });

            this.setState({
                chart: chart
            })
        })
    });
  }

  renderIndicator() {
    return (
      <Modal
        visible={this.state.isWaiting}
        transparent={true}
        onRequestClose={() => { }}
      >
        <View style={styles.indicatorContainer}>
          <View style={styles.indicator}>
            <ActivityIndicator size="large" />
          </View>
        </View>
      </Modal>
    );
  }

  render() {  
    const { dashboard, chartData, months, isWaiting, labels, chart, spending, bills, rent } = this.state
        return (
            <SafeAreaView style={{ flex: 1, backgroundColor:'#f8f9f9'}} >
                <ExpensesTitle title={'Expenses'} />
                <Balance title = {'Card Balance'} balance1 = {bills.Bills} balance2 = {rent.Rent} cardBalance = {dashboard.cardBalance} />
                <Chart chartData = {chart} month = {months} labels = {labels} />
                <Spending data = {spending} />
                {isWaiting && this.renderIndicator()}
            </SafeAreaView>
        )
  }
}

function mapStateToProps(state) {
  return {
    dashboardData: state.dashboard.dashboardData
  }
}

export default connect(mapStateToProps)(ExpensesScreen)

const styles = StyleSheet.create({
    indicatorContainer: {
        flex: 1,
        backgroundColor: "rgba(0, 0, 0,0.5)",
        alignItems: "center",
        justifyContent: "center"
      },
      indicator: {
        width: 80,
        height: 80,
        borderRadius: 5,
        shadowColor: "black",
        alignItems: "center",
        justifyContent: "center",
        shadowOffset: { width: 2, height: 2 },
        shadowOpacity: 0.4,
        shadowRadius: 3,
        backgroundColor: "white"
      },
})
