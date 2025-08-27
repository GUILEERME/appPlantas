
import { View, Text, ScrollView, Image } from "react-native"

export default function Products() {
    return (
        <ScrollView>
            <View style={{ flexDirection: 'column', padding: 20 }}>

                <View style={{ alignItems: 'center', justifyContent: 'center', marginTop: 10, marginBottom: 10 }}>
                    <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Teclado Gamer</Text>
                </View>

                <View style={{ alignItems: 'center' }}>
                    <Image style={{ width: 150, height: 150, borderRadius: 150, }}
                        source={require('../assets/images/products/keyboard.png')}
                    />
                </View>

                <View style={{ justifyContent: 'center' }}>
                    <Text>Lorem Ipsum lorem ipsum Ipsum lorem ipsum Ipsum lorem ipsum Ipsum lorem ipsum </Text>
                </View>

            </View>

            <View style={{ height: 1, backgroundColor: '#ccc', marginTop: 20, width: '80%', alignSelf: 'center' }} />

            <View style={{ display: 'flex', flexDirection: 'column' }}>
                <View style={{ alignItems: 'center', justifyContent: 'center', padding: 20 }}>
                    <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Mouse Gamer</Text>
                </View>
                <View style={{ flexDirection: 'row' }}>
                    <View style={{ flex: 1, alignItems: 'center' }}>
                        <Image style={{ width: 150, height: 150, borderRadius: 150 }}
                            source={require('../assets/images/products/mouse.jpg')}
                        />
                    </View>
                    <View style={{ flex: 1, justifyContent: 'center' }}>
                        <Text>Lorem Ipsum lorem ipsum Ipsum lorem ipsum Ipsum lorem ipsum Ipsum lorem ipsum </Text>
                    </View>
                </View>
            </View>
            <View style={{ height: 1, backgroundColor: '#ccc', marginTop: 20, width: '80%', alignSelf: 'center' }} />
        </ScrollView >
    )
}

/*
flexDirection -> 'column' (default) or 'row' organiza os elementos na vertical ou horizontal, respectivamente.
alignItems -> 'center', 'flex-start', 'flex-end' alinha os elementos no eixo transversal (vertical para 'row' e horizontal para 'column').

 */
