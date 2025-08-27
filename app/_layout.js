import { Stack } from "expo-router";

export default function RootLayout() {
  return <Stack
    screenOptions={{
      headerStyle: {
        backgroundColor: "#222",
        borderBottomWidth: 0, // Remove a borda
      },
      headerTintColor: "#0b9c15",
      headerTitleStyle: {
        fontWeight: "bold",
      },
      headerTitleAlign: "center", // Centraliza o título na barra de navegação
    }}
  >
    {/* <Stack.Screen name="index" options={{ headerShown: false }} /> */}
    <Stack.Screen name="index" options={{ title: "Tudo para suas plantas" }} />
    <Stack.Screen name="products" options={{ title: "Compre vasos!!!!!!!" }} />

  </Stack>
}