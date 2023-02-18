import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Keyboard, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import styles from './styles'

export default function App() {

  const [valor1, setValor1] = useState(0);
  const [valor2, setValor2] = useState(0);
  const [resultado, setResultado] = useState(0);

  function soma() {
    let r = Number.parseFloat(valor1.replace(',', '.')) +
                    Number.parseFloat(valor2.replace(',', '.'));
                    setResultado(r);
                    Keyboard.dismiss();
  }

  return (
    <View style={styles.container}>
      <Text>Calculadora</Text>
      <StatusBar style="auto" />
      <Text style={styles.numbersBox}>Caixa de números</Text>
      <View>
        <View style={styles.numberRow}>
          <TouchableOpacity>
            <Text style={styles.numberBox}>1</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.numberBox}>2</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.numberBox}>3</Text>
          </TouchableOpacity>
          <TouchableOpacity>
          <Text style={styles.numberBox}>+</Text>
        </TouchableOpacity>
        </View>
        <View style={styles.numberRow}>
          <TouchableOpacity>
            <Text style={styles.numberBox}>4</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.numberBox}>5</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.numberBox}>6</Text>
          </TouchableOpacity>
          <TouchableOpacity>
          <Text style={styles.numberBox}>-</Text>
        </TouchableOpacity>
        </View>
        <View style={styles.numberRow}>
          <TouchableOpacity>
            <Text style={styles.numberBox}>7</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.numberBox}>8</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.numberBox}>9</Text>
          </TouchableOpacity>
          <TouchableOpacity>
          <Text style={styles.numberBox}>x</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.numberRow}>
          <TouchableOpacity>
            <Text style={styles.numberBox}>0</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.numberBox}>^</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.numberBox}>/</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.numberBox}>=</Text>
          </TouchableOpacity>
        </View>
      </View>
      
      <TextInput keyboardType='decimal-pad'  onChangeText={(text)=>setValor1(text)}>
      </TextInput>

      <TouchableOpacity onPress={()=> soma()}>

      </TouchableOpacity>
    </View>
  );
}