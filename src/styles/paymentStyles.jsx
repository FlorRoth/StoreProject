import { StyleSheet } from "react-native";

export const paymentStyles = StyleSheet.create({


    paymentContainerButtons: {
        marginTop: 8,
        height: 45,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        backgroundColor: '#000000',
    },


    carouselContainer: {
        paddingTop: 10,
        paddingBottom: 10,
        margin: 0,
        height: 215
    },

    cardContainer: {
        marginHorizontal:2,
        width: 300,
        height: 200,
        backgroundColor: 'black',
        borderRadius: 30,
        padding: 20,
        justifyContent: 'space-between',
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 3,
        borderWidth: 1,
        borderColor: '#ddd',
        borderBottomWidth: 6,
        borderBottomColor: '#ccc',
    },
    
    cardNumber: {
        fontSize: 20,
        letterSpacing: 4,
        marginBottom: 10,
        color: "white"
    },

    cardInfoContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },

    cardInfoLabel: {
        fontSize: 12,
        color: 'white',
    },

    cardInfoValue: {
        fontSize: 16,
        fontWeight: 'bold',
        marginTop: 5,
        color: 'white',
    },

    input: {
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 10,
        paddingHorizontal: 10,
        paddingVertical: 5,
        fontSize: 16,
        marginVertical: 8
      },
      
});
