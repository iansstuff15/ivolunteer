import React from 'react'

import {View,Text,Dimensions, ScrollView} from 'react-native'

import {
    LineChart,
    BarChart,
    PieChart,
    ProgressChart,
    ContributionGraph,
    StackedBarChart
  } from "react-native-chart-kit";

  
  const data = {
    labels: ["Food", "Accomodation", "Transportation","Event Expenses"], // optional
    data: [0.1, 0.2, 0.3, 0.4]
  };

  const chartConfig = {
    backgroundGradientFrom: "#fb8c00",
    backgroundGradientFromOpacity: 0,
    backgroundGradientTo: "#ffa726",
    color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
      labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
   
    strokeWidth: 2, // optional, default 3
    barPercentage: 0.5,
    useShadowColorFromDataset: false // optional
  };


export const Chart = () => (
    <View>

   
    <ProgressChart
      data={data}
      width={Dimensions.get("window").width*.80}
      height={220}
      strokeWidth={16}
      radius={32}
      chartConfig={chartConfig}
      hideLegend={false}
      style ={{
        alignSelf:"center",
        borderRadius: 10
      }}
    />
 

    </View>
)