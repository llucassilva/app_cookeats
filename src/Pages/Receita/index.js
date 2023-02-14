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

export default function Receita({ route }) {
  console.log(route.params.paramKey)
  return (
    <ScrollView>
      <View>
        {data.map((item) => (
          <View key={item.Entrada.Receita1.Title}>
            <View style={style.container}>
              <Text style={style.tituloReceita}>
                {item.Entrada.Receita1.Title}
              </Text>
              <Text style={style.preparo}>Preparo</Text>
              <Text style={style.tempo}>{item.Entrada.Receita1.Tempo}</Text>
              <Text style={style.rendimento}>Rendimento</Text>
              <Text>{item.Entrada.Receita1.Rendimento}</Text>

              <View style={style.containerTitle}>
                <Text style={style.ingredientes}>Ingredientes</Text>
                <Text style={style.ingredientes}>Preparo</Text>
              </View>

              <View style={style.containerReceita}>
                {item.Entrada.Receita1.Ingredientes.map(
                  (ingredientes, index) => (
                    <View key={index}>
                      <Text style={style.ingrediente}>{ingredientes}</Text>
                      <Text style={style.quantidade}>{item.Entrada.Receita1.Quantidade[index]}</Text>
                    </View>
                  )
                )}
              </View>
            </View>
          </View>
        ))}
      </View>
    </ScrollView>
  );
}
const style = StyleSheet.create({
    container:{
        width:"100%",
        height: "100%",
        backgroundColor: "#fff"
    },
    tituloReceita:{
        fontSize: 24,
        fontStyle: "inter",
        display: "flex",
        justifyContent: "center",
    },
    preparo:{
        fontSize: 12,
        fontStyle: "inter",
    },
    ingredientes:{
        fontSize: 24,
        fontStyle: "inter",
    },
    containerTitle:{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-evenly",
        marginBottom: 15,
    },
    rendimento:{
        fontSize: 12,
        fontStyle: "inter",
    },
    containerReceita:{
        display: 'flex',
        justifyContent: 'center',
        padding: 40,
    },
    ingrediente:{
        fontSize: 16,
        marginTop: 5,
        marginLeft: 5,
    },
    quantidade:{
        fontSize: 12,
        paddingTop: 5,
        paddingBottom: 5,
        color: "#818181",
        borderBottomColor: "#818181",
        borderBottomWidth: 2,
        marginLeft: 5,
    },
})
