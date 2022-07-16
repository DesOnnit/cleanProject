import { StyleSheet } from 'react-native'
export const styles = StyleSheet.create({
    card:{
        width: 375,
        height: 400,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: "space-between",
        backgroundColor: '#90ced4',
        marginBottom:20
    },
    title:{
        marginTop:30,
        marginBottom: 10,
        textAlign: 'center',
    },
    img:{
        width: '80%',
        height: '50%',
        marginBottom: 20,
        marginHorizontal:'auto',
    },
    subtitle:{
        marginBottom: 30,
    }
})