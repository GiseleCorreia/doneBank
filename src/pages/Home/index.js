import { StyleSheet, Text, View } from 'react-native'
import Header from '../../components/Header'
import Balance from '../../components/Balance'

export default function Home() {
  return (
    <View style={styles.container}>
      <Header name="Maria Gisele" />
      <Balance saldo="9.500,00" gastos="-350,00" />
      <Text>Últimas Movimentações</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  }
})
