import React from "react";
import { View, Text, ScrollView, Image, TouchableOpacity, StyleSheet } from "react-native";

export default function Fertilizantes() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Fertilizantes</Text>

      {/* Botões de categoria */}
      <View style={styles.categorias}>
        <TouchableOpacity style={styles.categoriaBtn}><Text style={styles.categoriaTxt}>Orgânicos</Text></TouchableOpacity>
        <TouchableOpacity style={styles.categoriaBtn}><Text style={styles.categoriaTxt}>Químicos</Text></TouchableOpacity>
        <TouchableOpacity style={styles.categoriaBtn}><Text style={styles.categoriaTxt}>Líquidos</Text></TouchableOpacity>
        <TouchableOpacity style={styles.categoriaBtn}><Text style={styles.categoriaTxt}>Sólidos</Text></TouchableOpacity>
      </View>

      <ScrollView contentContainerStyle={{ paddingBottom: 20 }}>

        <View style={styles.card}>
          <Image source={require("../assets/images/organico.jpg")} style={styles.imagem} />
          <View style={styles.textContainer}>
            <Text style={styles.titulo}>Fertilizante Orgânico A</Text>
            <Text style={styles.resumo}>
              Produzido a partir de compostagem, ideal para hortas e plantas medicinais.
            </Text>
            <TouchableOpacity style={styles.botao}>
              <Text style={styles.textoBotao}>Saiba mais</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.card}>
          <Image source={require("../assets/images/liquido.jpg")} style={styles.imagem} />
          <View style={styles.textContainer}>
            <Text style={styles.titulo}>Fertilizante Líquido B</Text>
            <Text style={styles.resumo}>
              Rápida absorção, ótimo para plantas ornamentais e flores.
            </Text>
            <TouchableOpacity style={styles.botao}>
              <Text style={styles.textoBotao}>Saiba mais</Text>
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
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginVertical: 20,
    textAlign: "center",
    color: "#1B5E20",
  },
  categorias: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
    marginBottom: 16,
  },
  categoriaBtn: {
    backgroundColor: "#2E7D32",
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 20,
    margin: 4,
  },
  categoriaTxt: {
    color: "#fff",
    fontWeight: "bold",
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
    resizeMode: "cover",
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
    textAlign: 'center',
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
