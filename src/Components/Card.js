import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";

export default function Card({ img, title }) {
  return (
    <View style={style.containerCard}>
      <Image source={{uri: img}} alt=""  style={{height: "70%", width: "100%", backgroundColor: "#000", borderTopLeftRadius: 15, borderTopRightRadius:15}}/>
      <View style={style.containerTitle}>
        <Text style={style.cardTitle}>{title}</Text>  
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  containerCard: {
    width: 150,
    height: 160,
    backgroundColor: "#fff",
    marginBottom: 20,
    marginRight: 15,
    borderRadius: 15,
  },
  containerTitle:{
    width: "100%",
    height: "30%",
    justifyContent: "center",
    alignItems: "center",
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15
  },
  cardTitle:{
    fontSize: 14,
  }
});
