import { processColor, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { LineChart } from 'react-native-charts-wrapper';
import { Montserrat_Bold, Montserrat_Regular, theme_clr_1, theme_clr_3, theme_clr_9, theme_clr_dull_white, theme_clr_medium_grey, width } from '../../../style_sheet/styles';

const GraphType1 = ({ title = false, bottom_text_list = false }) => {
    return (
        <View style={styles.container}>

            <Text style={styles.title}>{title}</Text>
            <LineChart
                style={styles.chart}
                data={{
                    dataSets: [
                        {
                            values: [{ y: 100 }, { y: 0 }, { y: 30 }],
                            // label: 'Bin replacement',
                            label: '',
                            config: {
                                color: processColor(theme_clr_1),
                                circleColor: processColor(theme_clr_1),
                                drawValues: false,
                                lineWidth: 2.5,
                                circleRadius: 10,
                                drawCircleHole: false
                            }
                        },
                        {
                            values: [{ y: 80 }, { y: 0 }, { y: 15 }],
                            // label: 'Bin missing',
                            label: '',
                            config: {
                                color: processColor(theme_clr_3),
                                circleColor: processColor(theme_clr_3),
                                drawValues: false,
                                lineWidth: 2.5,
                                circleRadius: 10,
                                drawCircleHole: false
                            }
                        },
                        {
                            values: [{ y: 50 }, { y: 0 }, { y: 10 }],
                            // label: 'Bin Pick-up',
                            label: '',
                            config: {

                                color: processColor(theme_clr_9),
                                circleColor: processColor(theme_clr_9),
                                drawValues: false,
                                lineWidth: 2.5,
                                circleRadius: 10,
                                drawCircleHole: false
                            }
                        }

                    ]
                }}

                xAxis={{
                    valueFormatter: [''],
                    position: 'BOTTOM',
                    drawGridLines: false,  // Removes vertical grid lines
                    drawAxisLine: false,    // Removes x-axis line
                    axisMinimum: -0.3, // Adds padding to the left
                    axisMaximum: 2.3,    // Adds space on the right
                }}
                yAxis={{
                    left: {
                        textColor: processColor(theme_clr_1),  // Change Y-axis text color
                        textSize: 10,
                        axisMinimum: 0,
                        drawGridLines: true,  // Removes horizontal grid lines
                        drawAxisLine: false    // Removes y-axis line
                    },
                    right: { enabled: false } // Disables right y-axis
                }}
                legend={{ enabled: false }}
                chartDescription={{ text: '' }}
                drawGridBackground={false}
                borderColor={processColor('gray')}

            />

            {bottom_text_list &&
                <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', }}>
                    {Array.isArray(bottom_text_list) && bottom_text_list.map((item, index) => (
                        <Text key={index}
                            style={styles.bottom_text}>{item}</Text>
                    ))
                    }
                </View>
            }

        </View>

    )
}

export default GraphType1

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme_clr_dull_white,
        borderRadius: 15,
        padding: 20,
        paddingRight: 10,
        // justifyContent: 'center',
        // alignItems: 'center'
    },
    chart: {
        width: '100%',
        height: 180,
        backgroundColor: theme_clr_dull_white,

    },
    title: {
        fontSize: 16,
        color: theme_clr_medium_grey,
        fontFamily: Montserrat_Bold,
        alignSelf: 'flex-start'
    },
    bottom_text: {
        fontSize: 10,
        textAlign: 'center',
        color: theme_clr_medium_grey,
        fontFamily: Montserrat_Regular
    },
})