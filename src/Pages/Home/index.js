import {
  View,
  Text,
  StatusBar,
  StyleSheet,
  Dimensions,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import Opcoes from "../../Components/Opcoes";

export default function Home() {
  const [hover, setHover] = useState("");
  const [value, setValue] = useState()
  
  return (
    <ScrollView>
      <StatusBar barStyle="light-content" backgroundColor="#23DCBB" />
      <View style={style.container}>
        <Text style={style.titleHeader}>Cookeats</Text>
      </View>
      <Text style={style.titleCategoria}>Receitas</Text>
      <View style={style.categoria}>
        <TouchableOpacity
          style={
            hover === "Entrada"
              ? style.textoCategoriaPress
              : style.textoCategoria
          }
          onPress={() => setHover("Entrada") && setValue()}
        >
          <Text style={style.textoCategoria}>Entrada</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={
            hover === "Principal"
              ? style.textoCategoriaPress
              : style.textoCategoria
          }
          onPress={() => setHover("Principal") && setValue(categorias[1])}
        >
          <Text style={style.textoCategoria}>Prato principal</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={
            hover === "Sobremesa"
              ? style.textoCategoriaPress
              : style.textoCategoria
          }
          onPress={() => setHover("Sobremesa")}
        >
          <Text style={style.textoCategoria}>Sobremesa</Text>
        </TouchableOpacity>
      </View>
      <View style={style.containerEntrada}>
          
      </View>
    </ScrollView>
  );
}

const { width, height } = Dimensions.get("screen");
const style = StyleSheet.create({
  container: {
    width: width,
    backgroundColor: "#000",
    height: 330,
    padding: 10,
  },
  titleHeader: {
    color: "#fff",
    fontSize: 60,
  },
  titleCategoria: {
    width: width,
    fontSize: 40,
    marginLeft: 10,
    marginTop: 14,
  },
  categoria: {
    width: width,
    flexDirection: "row",
  },
  textoCategoria: {
    marginTop: 20,
    marginLeft: 10,
    fontSize: 25,
  },
  textoCategoriaPress: {
    marginTop: 20,
    marginLeft: 10,
    fontSize: 25,
    borderBottomColor: "#23DCBB",
    borderBottomWidth: 3,
  },
  containerEntrada: {
    width: width,
    height: 250,
    padding: 10,
    marginTop: 20,
  },
  titleEntrada: {
    fontSize: 45,
  },
});
