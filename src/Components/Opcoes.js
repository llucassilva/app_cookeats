import { View, Text, ScrollView, StyleSheet, Dimensions } from "react-native";
import React from "react";

export default function Opcoes({ title, data, vegano }) {
  return (
    <>
      <View style={style.container}>
        <Text style={style.OpcoesTitle}>{title}</Text>
        <ScrollView horizontal>
          <View style={style.containerCard}>
            <Text>Carne</Text>
          </View>
          <View style={style.containerCard}>
            <Text>Carne</Text>
          </View>
          <View style={style.containerCard}>
            <Text>Carne</Text>
          </View>
          <View style={style.containerCard}>
            <Text>Carne</Text>
          </View>
        </ScrollView>
      </View>
      <View style={style.container}>
        <Text style={style.OpcoesTitleVegano}>{vegano}</Text>
        <ScrollView horizontal>
          <View style={style.containerCard}>
            <Text>Carne</Text>
          </View>
          <View style={style.containerCard}>
            <Text>Carne</Text>
          </View>
          <View style={style.containerCard}>
            <Text>Carne</Text>
          </View>
          <View style={style.containerCard}>
            <Text>Carne</Text>
          </View>
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
  OpcoesTitleVegano:{
    fontSize: 30,
    marginBottom: 10,
    marginTop: 10
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
    height: 200,
  },
});
