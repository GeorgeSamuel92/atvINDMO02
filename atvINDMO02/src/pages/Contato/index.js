import {Text, StyleSheet, Button, View, TextInput,} from'react-native'
// import React, {useLayoutEffect} from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useNavigation, useRoute } from '@react-navigation/native'


export default function Contato(){

    return(
        <SafeAreaView style={[styles.container]} >
            <Text> Tela Contato</Text>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      gap: 10,
    },
  });
  