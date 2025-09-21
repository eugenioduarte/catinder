import { useTheme } from '@/hooks/useTheme'
import React from 'react'
import { TouchableOpacity, View } from 'react-native'
import { CatIcon, MessageIcon, UserIcon } from '../../assets'
import { NavigationScreenName } from '../../navigation/screens'
import { bottomBarStyles } from './BottomBar.styles'

type Props = {
  current: NavigationScreenName
  onChange: (screen: NavigationScreenName) => void
}

const tabs = [
  { value: NavigationScreenName.Dashboard, Icon: CatIcon, label: 'Dashboard' },
  { value: NavigationScreenName.Chat, Icon: MessageIcon, label: 'Chat' },
  { value: NavigationScreenName.Profile, Icon: UserIcon, label: 'Profile' },
]

const BottomBar = ({ current, onChange }: Props) => {
  const theme = useTheme()
  const styles = bottomBarStyles(theme)
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
              testID={`bottomBar${tab.label}`}
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

export default BottomBar
