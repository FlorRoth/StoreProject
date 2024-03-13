import { StyleSheet } from "react-native";

export const productsStyles = StyleSheet.create({

    productsContainer: {
        flex: 1,
        backgroundColor: '#fff',
        paddingHorizontal: 20,
        marginTop: 30,
    },

    headerContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
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
    },

    titleProduct: {
        fontSize: 18,
        flex: 1,
        alignSelf: 'center',
        color: "#000000",
        fontWeight: 'bold',
    },

    productDescription: {
        fontSize: 14,
        flex: 1,
        alignSelf: 'center',
        color: '#696969',
    },

    productPrice: {
        fontSize: 18,
        flex: 1,
        alignSelf: 'center',
        color: "#000000",
        fontWeight: 'bold',
    },

    productItemcontainer: {
        flex: 1,
        marginTop: 20,
    },

    productItemImage: {
        width: '100%',
        height: "100%"
    },

    productItemTitle: {
        fontSize: 18,
        color: "#000000",
        fontWeight: 'bold',
    },

    productDescriptionContainer: {
        flex: 1,
        borderRadius: 20,
        backgroundColor: "#fff",
        marginTop: -10,
        paddingHorizontal: 20
    },

    productPrice: {
        flex: 1,
        fontSize: 18,
        color: "#000000",
        fontWeight: '900',
    },

    productDescription: {
        marginTop: 10,
        fontSize: 14,
        color: '#666666',
    },

    star: {
    width: 13,
    height: 13,
    marginRight: 5
    },

    starContainer: {
        flexDirection: 'row',
        marginTop: 10,
    },

    quantityContainer: {
        marginTop: 25,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#EEEEEE',
        justifyContent: "space-between",
        paddingHorizontal: 7,
        height: 30,
        width: 70,
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

    btnColor: {
        height: 18,
        width: 18,
        borderRadius: 30,
        marginVertical: 4,
    },

    contentColors: {

        justifyContent: "center",
        alignItems: 'center',
        width: 35,
        borderRadius: 40,
        paddingVertical: 3,
        backgroundColor: '#fff',
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 3,
        marginRight: 5

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
    }
});
