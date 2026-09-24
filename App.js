import React, { useState } from "react";
import { View, Text, Image, Pressable } from "react-native";

const fotos = [
  "https://picsum.photos/id/1036/300/300",
  "https://picsum.photos/seed/foto2/300/300",
  "https://picsum.photos/seed/foto3/300/300",
  "https://picsum.photos/seed/foto4/300/300",
  "https://picsum.photos/seed/foto5/300/300",
  "https://picsum.photos/seed/foto6/300/300"
];


function Foto({ imagem }) {
  return (
    <Image
      source={{ uri: imagem }}
      style={{
        width: 300,
        height: 300
      }}
    />
  );
}

export default function App() {

  const [foto, setFoto] = useState(0);

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
      }}
    >

      
      <Text
        style={{
          fontSize: 25,
          marginBottom: 20
        }}
      >
        Meu Álbum de Fotos
      </Text>


      
      <Foto imagem={fotos[foto]} />


      
      <Text
        style={{
          marginTop: 10
        }}
      >
        Foto {foto + 1}
      </Text>


      
      <View
        style={{
          flexDirection: "row",
          marginTop: 20
        }}
      >

        <Pressable
          onPress={() => {
            if (foto > 0) {
              setFoto(foto - 1);
            }
          }}
        >
          <Text
            style={{
              marginRight: 60
            }}
          >
            ANTERIOR
          </Text>
        </Pressable>


        <Pressable
          onPress={() => {
            if (foto < 5) {
              setFoto(foto + 1);
            }
          }}
        >
          <Text>
            PRÓXIMA
          </Text>
        </Pressable>

      </View>

    </View>
  );
}
