import { CloseIcon, HeartIcon } from '@/assets'
import IconButton from '@/components/iconButton/IconButton'
import { useTheme } from '@/hooks/useTheme'
import React from 'react'
import { View } from 'react-native'
import { containerIconButtonsStyles } from './ContainerIconButtons.styles'

type ContainerIconButtonsProps = {
  handleLike: (isLiked: boolean) => void
}

const ContainerIconButtons = ({ handleLike }: ContainerIconButtonsProps) => {
  const theme = useTheme()
  const styles = containerIconButtonsStyles(theme)
  return (
    <View style={styles.container}>
      <IconButton onPress={() => handleLike(false)}>
        <CloseIcon width={24} height={24} />
      </IconButton>
      <IconButton onPress={() => handleLike(true)}>
        <HeartIcon width={24} height={24} />
      </IconButton>
    </View>
  )
}

export default ContainerIconButtons
