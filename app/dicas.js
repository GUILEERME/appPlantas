import React from "react";
import { View, Text, ScrollView, Image, TouchableOpacity, StyleSheet } from "react-native";

export default function Dicas({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.tituloPagina}>Dicas de Cultivo</Text>

      <ScrollView contentContainerStyle={styles.scroll}>
        
        
        <View style={styles.card}>
          <Image source={require("../assets/images/regando.png")} style={styles.imagem} />
          <View style={styles.textContainer}>
            <Text style={styles.titulo}>Como regar suas plantas da forma certa</Text>
            <Text style={styles.resumo}>
              Evite excessos de água e aprenda a identificar quando sua planta realmente precisa ser regada.
            </Text>
            <TouchableOpacity
              style={styles.botao}
            >
              <Text style={styles.textoBotao}>Ler mais</Text>
            </TouchableOpacity>
          </View>
        </View>

       
        <View style={styles.card}>
          <Image source={require("../assets/images/luz.jpg")} style={styles.imagem} />
          <View style={styles.textContainer}>
            <Text style={styles.titulo}>A importância da luz solar</Text>
            <Text style={styles.resumo}>
              Nem toda planta precisa de sol direto. Descubra quais espécies preferem meia-sombra.
            </Text>
            <TouchableOpacity
              style={styles.botao}
            >
              <Text style={styles.textoBotao}>Ler mais</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.card}>
          <Image source={require("../assets/images/adubo.png")} style={styles.imagem} />
          <View style={styles.textContainer}>
            <Text style={styles.titulo}>Adubação natural</Text>
            <Text style={styles.resumo}>
              Aprenda a usar cascas de frutas e outros resíduos orgânicos para adubar suas plantas.
            </Text>
            <TouchableOpacity
              style={styles.botao}
            >
              <Text style={styles.textoBotao}>Ler mais</Text>
            </TouchableOpacity>
          </View>
        </View>

      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8F9FA",
    paddingHorizontal: 16,
  },
  tituloPagina: {
    fontSize: 24,
    fontWeight: "bold",
    marginVertical: 20,
    textAlign: "center",
    color: "#2E7D32",
  },
  scroll: {
    paddingBottom: 20,
  },
  card: {
    flexDirection: "row",
    backgroundColor: "#fff",
    borderRadius: 12,
    marginBottom: 16,
    overflow: "hidden", 
  },
  imagem: {
    width: 100,
    height: 100,
  },
  textContainer: {
    flex: 1,
    padding: 10,
    justifyContent: "space-between",
  },
  titulo: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#1B5E20",
  },
  resumo: {
    fontSize: 14,
    color: "#555",
    marginVertical: 6,
  },
  botao: {
    alignSelf: "flex-start",
    backgroundColor: "#2E7D32",
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 8,
  },
  textoBotao: {
    color: "#fff",
    fontWeight: "bold",
  },
});
