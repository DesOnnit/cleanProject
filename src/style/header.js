import { StyleSheet } from 'react-native'
export const styles = StyleSheet.create({
    header: {
        width: '100%',
        height: 110,
        backgroundColor: '#689db1',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    container: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: "space-between",
        alignItems: 'center',
        width: '80%',
    },
    info: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        width: 80,
        height: 80,
        borderRadius: 70,
    }
}
)