import { View, Text, ScrollView, StyleSheet, Dimensions, TouchableOpacity } from "react-native";
import React from "react";
import Card from "./Card";
import { useNavigation } from '@react-navigation/native';

export default function Opcoes({ title,data,dataveg, vegano }) {
  const navigation = useNavigation()

  return (
    <View style={style.containerGeral}>
      <View style={style.container}>
        <Text style={style.OpcoesTitle}>{title}</Text>
        <ScrollView horizontal>
          {data.map((item, index) => {
            return(
              <TouchableOpacity key={index} onPress={() => navigation.navigate("Receita", item)}>
                <Card key={index} img={item.Img} title={item.Title} />
              </TouchableOpacity>
            )
          })}
        </ScrollView>
      </View>
      <View style={style.container}>
        <Text style={style.OpcoesTitleVegano}>{vegano}</Text>
        <ScrollView horizontal>
          {dataveg.map((item,index) => {
            return(
              <TouchableOpacity key={index} onPress={() => navigation.navigate("Receita", item)}>
                <Card  title={item.Title} />
              </TouchableOpacity>
            )
          })}
        </ScrollView>
      </View>
    </View>
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
    height: 700,
  },
  container: {
    height: 220,
  },
});
