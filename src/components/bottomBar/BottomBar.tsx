import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { NavigationScreenName } from '../../navigation/screens'

type Props = {
  current: NavigationScreenName
  onChange: (screen: NavigationScreenName) => void
}

const tabs = [
  { label: 'Dashboard', value: NavigationScreenName.Dashboard },
  { label: 'Chat', value: NavigationScreenName.Chat },
  { label: 'Profile', value: NavigationScreenName.Profile },
]

const BottomBar = ({ current, onChange }: Props) => (
  <View style={styles.container}>
    {tabs.map((tab) => (
      <TouchableOpacity
        key={tab.value}
        style={[styles.tab, current === tab.value && styles.activeTab]}
        onPress={() => onChange(tab.value)}
      >
        <Text style={current === tab.value ? styles.activeText : styles.text}>
          {tab.label}
        </Text>
      </TouchableOpacity>
    ))}
  </View>
)

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: 60,
    borderTopWidth: 1,
    borderColor: '#eee',
    backgroundColor: '#fff',
  },
  tab: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 10,
  },
  activeTab: {
    borderTopWidth: 2,
    borderTopColor: '#007AFF',
  },
  text: {
    color: '#888',
    fontSize: 16,
  },
  activeText: {
    color: '#007AFF',
    fontWeight: 'bold',
    fontSize: 16,
  },
})

export default BottomBar
