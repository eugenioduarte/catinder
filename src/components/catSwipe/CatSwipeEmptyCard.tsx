import { useTheme } from '@/hooks/useTheme'
import React from 'react'
import { useTranslation } from 'react-i18next'
import { View } from 'react-native'
import Text from '../text/Text'
import { catSwipeEmptyCardStyles } from './CatSwipeEmptyCard.styles'

const CatSwipeEmptyCard = () => {
  const theme = useTheme()
  const styles = catSwipeEmptyCardStyles(theme)
  const { t } = useTranslation()
  return (
    <View style={[styles.card, { justifyContent: 'center' }]}>
      <Text style={styles.endText} variant="body">
        {t('emptyState.title')}
      </Text>
    </View>
  )
}

export default CatSwipeEmptyCard
