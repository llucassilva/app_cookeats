import {
  View,
  Text,
  StatusBar,
  StyleSheet,
  Dimensions,
  ScrollView,
  TouchableOpacity,
  Image
} from "react-native";
import React, { useState } from "react";
import Opcoes from "../../Components/Opcoes";
import { data } from "../../../receitas/entrada1"

export default function Home() {
  const [hover, setHover] = useState("");


  const categorias = [
    <Opcoes data={data[0].Entrada} dataveg={data[0].EntradaVeg} title="Entrada" vegano="Entrada vegana"/>,
    <Opcoes data={data[0].PratoPrincipal} dataveg={data[0].PratoVeg} title="Prato principal" vegano="Prato vegano"/>,
    <Opcoes data={data[0].Sobremesa} dataveg={data[0].SobremesaVeg} title="Sobremesa" vegano="Sobremesa vegana"/>,
  ]

  return (
    <View>
      <View style={style.container}>
        <Image source="../../img/Header.png"/>
        <Text style={style.titleHeader}>Cookeats</Text>
        <Text style={style.textheader}>Cookeats</Text>
      </View>
      <Text style={style.titleCategoria}>Receitas</Text>
      <View style={style.categoria}>
        <TouchableOpacity
          style={
            hover === "Entrada"
              ? style.textoCategoriaPress
              : style.textoCategoria
          }
          onPress={() => {setHover("Entrada") } }
        >
          <Text style={style.textoCategoria}>Entrada</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={
            hover === "Principal"
              ? style.textoCategoriaPress
              : style.textoCategoria
          }
          onPress={() => setHover("Principal") }
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
          {hover === "Entrada" ? categorias[0] : hover === "Principal" ? categorias[1] : hover === "Sobremesa" ? categorias[2] : categorias[0]}
      </View>
    </View>
  );
}


const { width, height } = Dimensions.get("screen");
const style = StyleSheet.create({
  container: {
    width: width,
    backgroundColor: "#000",
    height: 230,
    padding: 10,
  },
  titleHeader: {
    color: "#fff",
    fontSize: 60,
  },
  titleCategoria: {
    width: width,
    fontSize: 30,
    marginLeft: 10,
    marginTop: 14,
  },
  categoria: {
    width: width,
    flexDirection: "row",
  },
  textoCategoria: {
    marginTop: 10,
    marginLeft: 10,
    fontSize: 20,
  },
  textoCategoriaPress: {
    marginTop: 10,
    marginLeft: 10,
    fontSize: 20,
    borderBottomColor: "#23DCBB",
    borderBottomWidth: 3,
  },
  containerEntrada: {
    width: width,
    height: 250,
    padding: 10,
    marginTop: 10,
  },
  titleEntrada: {
    fontSize: 45,
  },
});
