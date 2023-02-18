import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Keyboard, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import styles from './styles'

export default function App() {
  const [result, setResult] = useState('');
  const [expression, setExpression] = useState('');

  function formExpression(value) {
    setExpression(expression + value);
  }

  function calculateExpression() {
    setExpression('');
    try {
      if (!expression) setResult('');
      else {
        var resultNumber = eval(expression.replace(/,/g, '.').replace(/X/g, '*').replace('^', '**'));
        setResult(resultNumber.toString().replace('.', ','));
      }
    }
    catch {
      setResult('Expressão inválida');
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Calculadora</Text>
      <StatusBar style="auto" />
      <Text style={styles.numbersBox}>{expression}</Text>
      <Text style={styles.text}>Resultado</Text>
      <Text style={styles.numbersBox}>{result}</Text>
      <View>
        <View style={styles.numberRow}>
          <TouchableOpacity onPress={()=>formExpression('1')}>
            <Text style={styles.numberBox}>1</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>formExpression('2')}>
            <Text style={styles.numberBox}>2</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>formExpression('3')}>
            <Text style={styles.numberBox}>3</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>formExpression(' + ')}>
          <Text style={styles.numberBox}>+</Text>
        </TouchableOpacity>
        </View>
        <View style={styles.numberRow}>
          <TouchableOpacity onPress={()=>formExpression('4')}>
            <Text style={styles.numberBox}>4</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>formExpression('5')}>
            <Text style={styles.numberBox}>5</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>formExpression('6')}>
            <Text style={styles.numberBox}>6</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>formExpression(' - ')}>
          <Text style={styles.numberBox}>-</Text>
        </TouchableOpacity>
        </View>
        <View style={styles.numberRow}>
          <TouchableOpacity onPress={()=>formExpression('7')}>
            <Text style={styles.numberBox}>7</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>formExpression('8')}>
            <Text style={styles.numberBox}>8</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>formExpression('9')}>
            <Text style={styles.numberBox}>9</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>formExpression(' X ')}>
          <Text style={styles.numberBox}>X</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.numberRow}>
          <TouchableOpacity onPress={()=>formExpression('0')}>
            <Text style={styles.numberBox}>0</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>formExpression(',')}>
            <Text style={styles.numberBox}>,</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>formExpression('^')}>
            <Text style={styles.numberBox}>^</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>formExpression(' / ')}>
            <Text style={styles.numberBox}>/</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.numberRow}>
          <TouchableOpacity onPress={()=>calculateExpression()}>
            <Text style={styles.numberBox}>=</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}