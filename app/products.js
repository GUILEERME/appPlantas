import { View, Text, ScrollView, Image, StyleSheet } from "react-native"
import { Directions } from "react-native-gesture-handler"

export default function Products() {
    return (
        <ScrollView>
            <View style={styles.containerVaso1}>

                <View style={styles.teclado}>
                    <Text style={styles.text}> Vaso redondo marrom muito bonitinho</Text>
                </View>

                <View style={styles.imgTeclado}>
                    <Image style={styles.image}
                        source={require('../assets/images/products/vaso1.png')}
                    />
                </View>

                <View style={styles.descricao}>
                    <Text >Lorem Ipsum lorem ipsum Ipsum lorem ipsum Ipsum lorem ipsum Ipsum lorem ipsum </Text>
                </View>

            </View>

         

            <View style={styles.containerVaso2}>
                <View style={styles.container2}>
                    <Text style={styles.text}>Vaso pessoa</Text>
                </View>
                <View style={styles.row}>
                    <View style={styles.produto}>
                        <Image style={styles.imgMouse}
                            source={require('../assets/images/products/vasoPessoa.png')}
                        />
                    </View>
                    <View style={styles.textMouse}>
                        <Text>Lorem Ipsum lorem ipsum Ipsum lorem ipsum Ipsum lorem ipsum Ipsum lorem ipsum </Text>
                    </View>
                </View>
            </View>

            <View style={styles.containerVaso3}>
                <View style={styles.container3}>
                    <Text style={styles.text}>Outro vaso</Text>
                </View>
            </View>
             <View />
        </ScrollView >
    )
}

const styles = StyleSheet.create({
    containerVaso1:{
        flexDirection: 'column', 
        padding: 20,
        backgroundColor: '#C8D98B',
    }, 
    teclado:{
        alignItems: 'center', 
        justifyContent: 'center', 
        marginTop: 10, 
        marginBottom: 10,
    },
    imgTeclado:{
        alignItems: 'center'
    },
    descricao:{
        justifyContent: 'center' 
    },
    image:{
        width: 150,
        height: 150,
        borderRadius: 150, 
    },
    text: {
        flex: 1, 
        fontSize: 18,
        fontWeight: 'bold'     
    }, 
    containerVaso2: { 
        alignItems: 'center', 
        justifyContent: 'center', 
        padding: 20,
        backgroundColor: '#C8D98B', 
    },
    row: {
        flexDirection: 'row',
    },
    imgMouse: {
        width: 150,
        height: 150,
        borderRadius: 150
    },
    produto: { 
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
    },
    textMouse: {
        flex: 1, 
        justifyContent: 'center',
    },
    containerVaso3: {
        alignItems: 'center', 
        justifyContent: 'center', 
        padding: 20,
        backgroundColor: '#C8D98B', 
    }
})