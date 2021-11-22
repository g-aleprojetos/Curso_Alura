import React from "react";
import { Image, StyleSheet, View } from "react-native";

import Texto from "../../../componentes/Texto";
import Botao from "./Botao";

export default function Detalhes({
  nome,
  logoFazenda,
  nomeFazenda,
  descricao,
  preco,
 }) {
  return (
    <>
      <Texto style={styles.nome}>{nome}</Texto>

      <View style={styles.fazenda}>
        <Image source={logoFazenda} style={styles.imagemFazenda} />
        <Texto style={styles.nomeFazenda}>{nomeFazenda}</Texto>
      </View>

      <Texto style={styles.descricao}>{descricao}</Texto>
      <Texto style={styles.preco}>{preco}</Texto>
    </>
  );
}

const styles = StyleSheet.create({
  nome: {
    color: "#464646",
    fontSize: 26,
    lineHeight: 42,
    fontWeight: "bold",
  },

  fazenda: {
    flexDirection: "row",
    paddingVertical: 12,
  },

  imagemFazenda: {
    width: 32,
    height: 32,
  },

  nomeFazenda: {
    fontSize: 16,
    lineHeight: 26,
    marginLeft: 12,
  },

  descricao: {
    color: "#A3A3A3",
    fontSize: 16,
    lineHeight: 26,
  },

  preco: {
    color: "#2A9F85",
    fontWeight: "bold",
    fontSize: 26,
    lineHeight: 42,
    marginTop: 8,
  },
});
