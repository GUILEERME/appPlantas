import { Link } from "expo-router";
import { ImageBackground, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Index() {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../assets/images/luz.jpg')}
        style={styles.backgroundImagem}
        resizeMode="cover"
      >
        {/* View que centraliza os botões */}
        <View style={styles.buttonsWrapper}>
          <Link asChild href="/dicas">
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Dicas</Text>
            </TouchableOpacity>
          </Link>
          <Link asChild href="/vasos">
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Vasos</Text>
            </TouchableOpacity>
          </Link>
          <Link asChild href="/fertilizantes">
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Fertilizantes</Text>
            </TouchableOpacity>
          </Link>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImagem: {
    flex: 1,
    width: "100%",
    height: "100%",
    justifyContent: "center", // centraliza verticalmente
    alignItems: "center", // centraliza horizontalmente
  },
  buttonsWrapper: {
    alignItems: "center",  // centraliza os botões horizontalmente
    justifyContent: "center", // centraliza verticalmente dentro do ImageBackground
  },
  button: {
    backgroundColor: "#718C0F",
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 7,
    marginTop: 23,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});
