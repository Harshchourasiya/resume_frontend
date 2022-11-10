
import { StyleSheet } from '@react-pdf/renderer'

const Style = StyleSheet.create({
    view: {
        'margin': '5px',
        'padding': '5px',
    },
    mainText: {
        fontSize: '22px',
        fontFamily: 'Times-Roman'
    },

    subText: {
        fontSize: '13px',
        paddingVertical: '3px',
        paddingHorizontal: '5px'
    },

    rowView: {
        display: 'flex', flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center',
        flexWrap: 'wrap',
        paddingVertical: '10px'
    },

    flexRowInBetween: {
        display: 'flex', flexDirection: 'row', justifyContent: 'space-between'
    },

    flexColumn: {
        display: 'flex', flexDirection: 'column'
    },

    skillText: {
        border: '1px solid #000',
        fontSize: '10px',
        fontFamily: 'Courier',
        padding: '5px',
        marginVertical: '3px',
        marginHorizontal: '5px',
        borderRadius: '5px'
    },

    dateText: {
        fontFamily: "Courier-Bold",
        fontSize: "15px"
    }
})

export default Style;