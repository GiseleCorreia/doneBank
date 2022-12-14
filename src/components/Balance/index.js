import React from 'react'
import {
  StatusBar,
  StyleSheet,
  View,
  Text,
  TouchableOpacity
} from 'react-native'

export default function Balance({ saldo, gastos }) {
  return (
    <View style={styles.container}>
      <View style={styles.item}>
        <Text style={styles.itemTitlle}>Saldo</Text>
        <View style={styles.content}>
          <Text style={styles.symbol}>U$</Text>
          <Text style={styles.balance}>{saldo}</Text>
        </View>
      </View>
      <View style={styles.item}>
        <Text style={styles.itemTitlle}>Gastos</Text>
        <View style={styles.content}>
          <Text style={styles.symbol}>U$</Text>
          <Text style={styles.expenses}>{gastos}</Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#B2DFDB',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingStart: 18,
    paddingEnd: 18,
    marginTop: -24,
    marginStart: 14,
    marginEnd: 14,
    borderRadius: 5,
    paddingTop: 22,
    paddingBottom: 22,
    zIndex: 99 //define componente por cima de todos itens
  },
  itemTitlle: {
    fontSize: 20,
    color: '#757575'
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  symbol: {
    color: '#757575',
    marginRight: 6
  },
  balance: {
    fontSize: 22,
    color: '#388E3C'
  },
  expenses: {
    fontSize: 22,
    color: '#F57C00'
  }
})
