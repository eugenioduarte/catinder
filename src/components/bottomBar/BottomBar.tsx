import { useTheme } from '@/hooks/useTheme'
import React from 'react'
import { StyleSheet, TouchableOpacity, View } from 'react-native'
import { CatIcon, MessageIcon, UserIcon } from '../../../assets/icons'
import { NavigationScreenName } from '../../navigation/screens'

type Props = {
  current: NavigationScreenName
  onChange: (screen: NavigationScreenName) => void
}

const tabs = [
  { value: NavigationScreenName.Dashboard, Icon: CatIcon },
  { value: NavigationScreenName.Chat, Icon: MessageIcon },
  { value: NavigationScreenName.Profile, Icon: UserIcon },
]

const BottomBar = ({ current, onChange }: Props) => {
  const theme = useTheme()

  return (
    <View style={styles.fabWrapper} pointerEvents="box-none">
      <View style={styles.container}>
        {tabs.map((tab) => {
          const Icon = tab.Icon
          return (
            <TouchableOpacity
              key={tab.value}
              style={styles.tab}
              onPress={() => onChange(tab.value)}
            >
              <Icon
                width={20}
                height={20}
                color={current === tab.value ? theme.colors.red : 'black'}
              />
            </TouchableOpacity>
          )
        })}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  fabWrapper: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 32,
    alignItems: 'center',
    zIndex: 100,
    pointerEvents: 'box-none',
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    borderRadius: 36,
    width: 156,
    height: 44,
    paddingTop: 12,
    paddingBottom: 12,
    paddingLeft: 24,
    paddingRight: 24,
    gap: 24,
    shadowColor: '#BFBFC0',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.3,
    shadowRadius: 16,
    elevation: 8,
  },
  tab: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 20,
    width: 20,
  },
  text: {
    color: '#222',
    fontSize: 14,
    fontWeight: '400',
  },
  activeText: {
    color: '#FF5A7D', // Rosa para o ativo (pata)
    fontSize: 14,
    fontWeight: '700',
  },
})

export default BottomBar
