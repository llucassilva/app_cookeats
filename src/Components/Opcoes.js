import { View, Text, ScrollView, StyleSheet, Dimensions } from "react-native";
import React from "react";
import Card from "./Card";
import { data } from "../../receitas/entrada1";

export default function Opcoes({ title, vegano }) {
  return (
    <>
      <View style={style.container}>
        <Text style={style.OpcoesTitle}>{title}</Text>
        <ScrollView horizontal>
          {data[0].Entrada.map((item, index) => {
            console.log(item)
            return(
              <Card key={index} title={item.Title} />
            )
          })}
        </ScrollView>
      </View>
      <View style={style.container}>
        <Text style={style.OpcoesTitleVegano}>{vegano}</Text>
        <ScrollView horizontal>
          {data[0].EntradaVeg.map((item,index) => {
            return(
              <Card key={index} title={item.Title} />
            )
          })}
        </ScrollView>
      </View>
    </>
  );
}

const { width, height } = Dimensions.get("screen");

const style = StyleSheet.create({
  containerOpcoes: {
    width: width,
    padding: 10,
  },
  OpcoesTitleVegano: {
    fontSize: 30,
    marginBottom: 10,
    marginTop: 10,
  },
  OpcoesTitle: {
    fontSize: 30,
    marginBottom: 10,
  },
  containerCard: {
    width: 150,
    height: 150,
    backgroundColor: "#000",
    marginBottom: 20,
    marginRight: 15,
  },
  containerGeral: {
    height: 500,
  },
  container: {
    height: 220,
  },
});
