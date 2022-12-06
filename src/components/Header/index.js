import React from 'react'
import {
  StatusBar,
  StyleSheet,
  View,
  Text,
  TouchableOpacity
} from 'react-native'
import { Feather } from '@expo/vector-icons'

//criando statusBar e ampliando para IOS
const statusBarHeight = StatusBar.currentHeight
  ? StatusBar.currentHeight + 22
  : 64

export default function Header({ name }) {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.username}>{name}</Text>
        <TouchableOpacity activeOpacity={0.9} style={styles.buttonUser}>
          <Feather name="user" size={27} color="#FFFFFF" />
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#009688',
    paddingTop: statusBarHeight,
    flexDirection: 'row',
    padding: 16,
    paddingEnd: 16,
    paddingBottom: 44
  },
  content: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  username: {
    fontSize: 18,
    color: '#FFFFFF',
    fontWeight: 'bold'
  },
  buttonUser: {
    //criando circle em volta do button
    width: 44,
    height: 44,
    backgroundColor: '#BDBDBD',
    borderRadius: 44 / 2,
    alignItems: 'center',
    justifyContent: 'center'
  }
})
