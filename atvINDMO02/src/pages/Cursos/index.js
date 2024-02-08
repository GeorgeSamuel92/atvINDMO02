import {
  Text,
  StyleSheet,
  Button,
  View,
  TextInput,
  Image,
  Alert,
  ScrollView,
} from "react-native";
import React, { useLayoutEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation, useRoute } from "@react-navigation/native";

export default function Cursos() {

  return (
    <SafeAreaView style={[styles.container]}>
      <ScrollView>
        <View>
          <Image
            source={require("../../assets/favicon.png")}
            style={{ width: 200, height: 100 }}
          ></Image>

          <View style={styles.separador}></View>

          <Text style={{ width: "90%", height: "100" }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. In
            fermentum posuere urna nec tincidunt. Ultricies integer quis auctor
            elit sed. Nisi est sit amet facilisis magna etiam tempor orci eu.
            Sit amet nisl purus in. Proin sagittis nisl rhoncus mattis rhoncus
            urna. Diam quis enim lobortis scelerisque fermentum dui faucibus in.
            Risus ultricies tristique nulla aliquet enim tortor at auctor. A
            diam sollicitudin tempor id eu nisl. Egestas pretium aenean pharetra
            magna ac placerat. Nisl vel pretium lectus quam id. Eget arcu dictum
            varius duis at consectetur. Laoreet non curabitur gravida arcu ac
            tortor dignissim convallis. Duis tristique sollicitudin nibh sit
            amet. Aliquam ultrices sagittis orci a scelerisque purus semper.
          </Text>

          <View style={styles.alinhamentoHozontal}>
            <Button
              title="Increva-se para esse curso"
              color="red"
              onPress={() =>
                Alert.alert("Você será redirecionado para o site.")
              }
            ></Button>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
  },

  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    padding: 25,
  },

  separador: {
    width: "100%",
    backgroundColor: "black",
    height: 1,
    marginTop: 5,
  },

  button: {
    width: 600,
    padding: 50,
    margin: 10,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
});
