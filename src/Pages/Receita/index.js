import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { data } from "../../../receitas/entrada1";
import  Steak  from "../../../assets/steak.jpg";
import Time from "../../../assets/iconTime.jpg"
import Pessoa from "../../../assets/iconPessoa.jpg"

export default function Receita(props) {
  const [hover, setHover] = useState("Ingredientes");

  return (
    <ScrollView>
      <View>
        <View style={style.containerImg}>
          <Image source = {Steak} alt="carne" style={style.carne} />
        </View>
        {data.map((item) => (
          <View key={item.Entrada.Receita1.Title}>
            <View style={style.container}>
              <Text style={style.tituloReceita}>
                {item.Entrada.Receita1.Title}
              </Text>
              <View style={style.containerOrganizacao}>
                <View style={style.containerCol}>
                  <Image source={Time} alt="Relógio"/>
                  <Text style={style.textoPreparo}>Preparo</Text>
                  <Text style={style.tempoRendimento}>{item.Entrada.Receita1.Tempo}</Text>
                </View>
                <View style={style.containerCol2}>
                  <Image source={Pessoa} alt="Pessoa"/>
                  <Text style={style.textoPreparo}>Rendimento</Text>
                  <Text style={style.itemRendimento}>{item.Entrada.Receita1.Rendimento}</Text>
                </View>
              </View>

              <View style={style.containerTitle}>
                <TouchableOpacity
                  style={
                    hover === "Ingredientes"
                      ? style.textoCategoriaPress
                      : style.textoCategoria
                  }
                  onPress={() => {
                    setHover("Ingredientes");
                  }}
                >
                  <Text style={style.ingredientes}>Ingredientes</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={
                    hover === "Preparo"
                      ? style.textoCategoriaPress
                      : style.textoCategoria
                  }
                  onPress={() => {
                    setHover("Preparo");
                  }}
                >
                <Text style={style.ingredientes}>Preparo</Text>
                </TouchableOpacity>
              </View>
              { hover === "Ingredientes" ?
              <View style={style.containerReceita}>
                {item.Entrada.Receita1.Ingredientes.map(
                  (ingredientes, index) => (
                    <View key={index}>
                      <Text style={style.ingrediente}>{ingredientes}</Text>
                      <Text style={style.quantidade}>
                        {item.Entrada.Receita1.Quantidade[index]}
                      </Text>
                    </View>
                  )
                )}
              </View> :
              <View>
              <View>
                {item.Entrada.Receita1.Preparo.map((preparo, index) => (
                  <View style={style.containerPreparo} key={index}>
                      <Text style={style.tituloPreparo}>{index + 1 + "."}</Text>
                      <Text style={style.palavrasPreparo}>{preparo}</Text>
                  </View>
                ))}
              </View>
              </View>
              }
            </View>
          </View>
        ))}
      </View>
    </ScrollView>
  );
}
const style = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    backgroundColor: "#fff",
    paddingTop: 50,
    borderRadius: 40,
    marginTop: -40,
    zIndex: 2,
  },
  carne: {
    width: '100%',
  },
  containerImg:{
    zIndex: 1
  },
  tituloReceita: {
    fontSize: 30,
    fontStyle: "inter",
    display: "flex",
    justifyContent: "center",
    marginLeft: 'auto',
    marginRight: 'auto',
    marginBottom: 35,
  },
  containerPreparo:{
    display: "flex",
    flexDirection: "row",
    margin: 10,
    paddingBottom: 10,
    paddingRight: 20,
    alignItems: "center",
  },
  containerOrganizacao: {
    display: "flex",
    justifyContent: 'space-evenly',
    alignItems: "center",
    flexDirection: "row",
    marginBottom: 35,
  },
  containerCol: {
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
    width: '50%',
    
  },
  containerCol2: {
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
    width: '50%',
  },
  tituloPreparo: {
    fontSize: 30,
    color: "#23DCBB"
  },
  palavrasPreparo: {
    fontSize: 18,
    marginLeft: 10,
  },
  preparo: {
    fontSize: 12,
    fontStyle: "inter",
  },
  tempoRendimento:{
    fontSize: 20,
    color: "#23DCBB",
  },
  itemRendimento:{
    fontSize: 20,
    color: "#23DCBB"
  },
  textoPreparo:{
    fontSize: 25
  },
  ingredientes: {
    fontSize: 30,
    fontStyle: "inter",

  },
  textoCategoria: {
    marginTop: 10,
    fontSize: 20,
  },
  textoCategoriaPress: {
    marginTop: 10,
    fontSize: 20,
    borderBottomColor: "#23DCBB",
    borderBottomWidth: 3,
  },
  containerTitle: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginBottom: 10,
  },
  rendimento: {
    fontSize: 12,
    fontStyle: "inter",
  },
  containerReceita: {
    display: "flex",
    justifyContent: "center",
    padding: 20,
  },
  ingrediente: {
    fontSize: 20,
    marginTop: 10,
    marginLeft: 5,
  },
  quantidade: {
    fontSize: 16,
    paddingBottom: 5,
    color: "#818181",
    borderBottomColor: "#818181",
    borderBottomWidth: 1,
    marginLeft: 5,
  },
});
