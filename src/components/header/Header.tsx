import { StarIcon, TinderLogo } from '@/assets'
import { useTheme } from '@/hooks/useTheme'
import React from 'react'
import { TouchableOpacity, View } from 'react-native'
import { headerStyles } from './Header.styles'

const ICON_SIZE = 14

enum Tabs {
  Left = 'left',
  Right = 'right',
}

type SelectedTab = Tabs

const IconButton = ({
  children,
  onPress,
  selected,
}: {
  children: React.ReactNode
  onPress: () => void
  selected: boolean
}) => {
  const theme = useTheme()
  const styles = headerStyles(theme, selected)
  return (
    <TouchableOpacity
      onPress={onPress}
      testID="headerIconButton"
      style={styles.iconButton}
    >
      {children}
    </TouchableOpacity>
  )
}

const Header = () => {
  const theme = useTheme()
  const styles = headerStyles(theme)
  const [selectedTab, setSelectedTab] = React.useState<SelectedTab>(Tabs.Left)

  return (
    <View style={styles.container}>
      <IconButton
        onPress={() => setSelectedTab(Tabs.Left)}
        selected={selectedTab === Tabs.Left}
      >
        <TinderLogo width={ICON_SIZE} height={ICON_SIZE} />
      </IconButton>
      <IconButton
        onPress={() => setSelectedTab(Tabs.Right)}
        selected={selectedTab === Tabs.Right}
      >
        <StarIcon width={ICON_SIZE} height={ICON_SIZE} />
      </IconButton>
    </View>
  )
}

export default Header
