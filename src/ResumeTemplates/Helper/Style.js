
import { StyleSheet } from '@react-pdf/renderer'

const Style = StyleSheet.create({
    view: {
        'margin': '5px',
        'padding': '5px',
    },
    mainText: {
        fontSize: '20px',
    },

    subText: {
        fontSize: '10px',
        padding: '5px'
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

    skill: {
        border: '1px solid #000',
        padding: '10px',
        margin: '5px'
    }

})

export default Style;