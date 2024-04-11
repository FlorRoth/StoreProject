import { StyleSheet } from "react-native";

export const cartStyles = StyleSheet.create({

    cardProduct: {
        marginVertical: 12,
        backgroundColor: 'white',
        flexBasis: '46%',
        marginHorizontal: 10,

    },

    cardProductFooter: {
        marginTop: 10,
        flexDirection: "row",
        justifyContent: "space-around",
    },

    cardProductHeader: {
        top: 10,
        right: 14,
        position: "absolute",
        zIndex: 1,
        backgroundColor: "#000000",
        padding: 5,
        borderRadius: 40

    },

    productImage: {
        height: 140,
        width: "100%",
        borderRadius: 20,
        alignSelf: 'center',
        borderColor: '#DDDDDD',
        borderWidth: 1,
        objectFit: "scale-down",
    },

    titleProduct: {
        fontSize: 18,
        color: "#000000",
        fontWeight: 'bold',
    },

    descriptionProduct: {
        fontSize: 14,
        flex: 1,
        color: '#696969',
    },

    priceProduct: {
        fontSize: 18,
        alignSelf: 'flex-end',
        color: "#000000",
        fontWeight: 'bold',
        marginTop: 5,
    },

    quantityContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#FFF',
        justifyContent: "space-between",
        paddingHorizontal: 7,
        height: 36,
        width: 84,
        borderRadius: 40,
        fontWeight: '900',
        position: 'absolute',
        bottom: 10,
        left: 15,
        borderColor: '#DDDDDD',
        borderWidth: 1
    },

    addToCartContainer: {
        marginBottom: 10,
        marginTop: 10,
        flexDirection: 'row',
        alignItems: 'center',
    },

    addToCartButton: {
        marginTop: 8,
        height: 45,
        width: "50%",
        flex: 2,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        backgroundColor: '#000000',
    },

    addToCartButtonText: {
        color: '#FFFFFF',
        fontSize: 18,
        fontWeight: '700',
        marginLeft: 10
    },

    shadow: {
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 3
    },

    containerTotal: {
        flexDirection: "row", 
        justifyContent: "space-between",
        
    },
    
    textTotal: {
        color: "#919191", 
        fontSize: 18, 
        fontWeight: '800'
    },

    containerIconCart: {
        position: "absolute", 
        top: -5, 
        right: 0,
        width: 14,
        height: 14, 
        borderRadius: 40,
        backgroundColor: "#000000", 
        flexDirection: "row", 
        justifyContent: "center"
    },

    numberItemsCart: {
        fontSize: 9,
        color: "#fff",
        fontWeight: "800"
    },

    paymentContainerButtons: {
        marginTop: 8,
        height: 45,
        width: 200,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        backgroundColor: '#000000',
    }
});
