import React from "react";
import { View, Text, ScrollView, Image, TouchableOpacity, StyleSheet } from "react-native";

export default function Vasos({ navigation }) {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.header}>Vasos</Text>

      <View style={styles.grid}>
        
        <TouchableOpacity
          style={styles.item}
    
        >
          <Image source={require("../assets/images/vaso1.jpg")} style={styles.imagem} />
          <View style={styles.overlay}>
            <Text style={styles.nome}>Vaso de Cerâmica</Text>
          </View>
        </TouchableOpacity>

        {/* Vaso 2 */}
        <TouchableOpacity
          style={styles.item}
          
        >
          <Image source={require("../assets/images/vaso2.jpg")} style={styles.imagem} />
          <View style={styles.overlay}>
            <Text style={styles.nome}>Vaso de Plástico</Text>
          </View>
        </TouchableOpacity>

        
        <TouchableOpacity
          style={styles.item}
          
        >
          <Image source={require("../assets/images/vaso3.jpg")} style={styles.imagem} />
          <View style={styles.overlay}>
            <Text style={styles.nome}>Vaso de Vidro</Text>
          </View>
        </TouchableOpacity>

      
        
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 8,
    backgroundColor: "#F8F9FA",
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginVertical: 16,
    textAlign: "center",
    color: "#2E7D32",
  },
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  item: {
    flexBasis: "48%",
    height: 150,
    marginBottom: 8,
    borderRadius: 12,
    overflow: "hidden",
  },
  imagem: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  overlay: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    backgroundColor: "rgba(0,0,0,0.3)",
    paddingVertical: 4,
    alignItems: "center",
  },
  nome: {
    color: "#fff",
    fontWeight: "bold",
  },
});
