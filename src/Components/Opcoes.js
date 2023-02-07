import { View, Text, ScrollView, StyleSheet, Dimensions } from 'react-native'
import React from 'react'

export default function Opcoes({title, data, vegano}) {
  return (
    <View>
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
      <Text style={style.OpcoesTitle}>{vegano}</Text>
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
  )
}

const { width, height } = Dimensions.get("screen");

const style = StyleSheet.create({
    containerOpcoes:{
        width: width,
        padding: 10
    },
    OpcoesTitle:{
        fontSize: 45,
        marginBottom: 20
    },
    containerCard:{
        width: 170,
        height: 170,
        backgroundColor: "#000",
        marginBottom:20,
        marginRight: 15
    }
})