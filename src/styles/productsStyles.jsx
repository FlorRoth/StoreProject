import { StyleSheet } from "react-native";

export const productsStyles = StyleSheet.create({

    headerContainer: {
        flexDirection: "row",
        justifyContent: "flex-end",
        marginVertical: 20,
        alignItems: "center",
    },

    listProductsContainer: {
        alignItems: 'center',
        marginTop: 10,
        paddingBottom: 120,
    },

    cardProduct: {
        marginVertical: 12,
        backgroundColor: 'white',
        flexBasis: '46%',
        marginHorizontal: 10,

    },

    cardProductFooter: {
        paddingVertical: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',

    },

    cardProductHeader: {
        top: 10,
        right: 14,
        position: "absolute",
        zIndex: 1

    },

    productImage: {
        height: 180,
        width: "100%",
        borderRadius: 20,
        alignSelf: 'center',
        borderColor: '#DDDDDD',
        borderWidth: 1,
        objectFit: "scale-down"
    },

    titleProduct: {
        fontSize: 18,
        flex: 1,
        alignSelf: 'center',
        color: "#000000",
        textAlign: 'center',
        fontWeight: 'bold',
    },

    descriptionProduct: {
        fontSize: 14,
        flex: 1,
        alignSelf: 'center',
        textAlign: 'center',
        color: '#696969',
    },

    priceProduct: {
        fontSize: 18,
        flex: 1,
        alignSelf: 'center',
        color: "#000000",
        fontWeight: 'bold',
        marginTop: 5
    },

    productItemcontainer: {
        flex: 1,
        backgroundColor: "#fff"
    },

    productItemImage: {
        height: "100%",
        objectFit: "scale-down"
    },

    productItemTitle: {
        fontSize: 18,
        color: "#000000",
        fontWeight: 'bold',
    },

    productDescriptionContainer: {
        flex: 1,
        borderTopStartRadius: 20,
        borderTopEndRadius: 20,
        backgroundColor: "#fff",
        marginTop: -10,
        paddingHorizontal: 20,
        borderColor: '#DDDDDD',
        borderWidth: 1,
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2
        },
        shadowOpacity: 1,
        shadowRadius: 3.84,
        elevation: 10,
    },

    productPrice: {
        flex: 1,
        fontSize: 18,
        color: "#000000",
        fontWeight: '900',
    },

    productDescription: {
        fontSize: 14,
        color: '#666666',
        alignContent: "center",
    },

    star: {
    width: 13,
    height: 13,
    marginRight: 5
    },

    starContainer: {
        flexDirection: 'row',
        marginTop: 15
    },

    quantityContainer: {
        marginTop: 10,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#EEEEEE',
        justifyContent: "space-between",
        paddingHorizontal: 7,
        height: 30,
        width: 90,
        borderRadius: 40,
        fontWeight: '900',
        marginLeft: "auto"
    },

    contentSize: {
        flexDirection: 'row',
        justifyContent: "space-between",
        marginTop: 10,
    },

    btnSize: {
        height: 40,
        width: 40,
        borderRadius: 40,
        borderColor: '#DDDDDD',
        borderWidth: 1,
        marginHorizontal: 3,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },

    btnSizeText: {
          color: '#888888',
          fontWeight: '700',
    },

    btnSizeSelected: {
          backgroundColor: 'black',
    },

    btnSizeSelectedText: {
          color: 'white'
    },
    
      

    btnColor: {
        height: 18,
        width: 18,
        borderRadius: 30,
        marginVertical: 4,
    },

    addToCartContainer: {
        marginBottom: 10,
        marginTop: 10,
        flexDirection: 'row',
        justifyContent: "space-between",
        alignItems: 'center'
    },

    addToCartButton: {
        marginTop: 8,
        height: 45,
        width: "50%",
        flex: 2,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 30,
        backgroundColor: '#000000',
    },

    addToCartButtonText: {
        color: '#FFFFFF',
        fontSize: 18,
        fontWeight: '700',
    },

    cartProductHeader: {
        top: 5,
        right: 20,
        position: "absolute",
        zIndex: 1,
        borderRadius: 30,
        borderColor: '#DDDDDD',
        borderWidth: 1
    },

    favoriteProductFooter: {
        bottom: 20,
        right: 20,
        position: "absolute",
        zIndex: 1,
        borderRadius: 30,
        borderColor: '#DDDDDD',
        borderWidth: 1
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
    }
});