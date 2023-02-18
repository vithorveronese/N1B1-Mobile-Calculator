import { StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    numbersBox: {
      borderColor: "#456",
      borderWidth: 2,
      width: "70%",
      height: "5%",
      marginBottom: "4%",
      marginTop: "5%",
      textAlign: "center",
      textAlignVertical: "center"
    },
    text: {
      fontWeight: "bold",
      fontSize: 30,
    },
    calcButtonsContainer: {
      flexDirection: 'row',
    },
    numberRow: {
      flexDirection: 'row',
      justifyContent: 'space-around'
    },
    numberBox: {
      borderColor: "#000",
      borderWidth: 2,
      alignItems: 'center',
      width: 55,
      height: 55,
      textAlign: 'center',
      fontSize: 40,
    },
    pressableOperationsBox: {
      borderColor: "#fde",
      borderWidth: 5,
      alignItems: 'center',
      width: "30%",
      height: "45%",
    },

});

export default styles;