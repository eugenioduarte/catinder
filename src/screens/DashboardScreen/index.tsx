import CatSwipe from '@/components/catSwipe/CatSwipe'
import Header from '@/components/header/Header'
import { useGetCatBreeds, useVoteForCat } from '@/hooks/useCats'
import { showApiError } from '@/utils/showApiToastError'
import React from 'react'
import { useTranslation } from 'react-i18next'
import { StyleSheet, View } from 'react-native'
import ContainerIconButtons from './Components/ContainerIconButtons'
import LoadingCard from './Components/LoadingCard'

const DashboardScreen = () => {
  const { t } = useTranslation()
  const [currentCatIndex, setCurrentCatIndex] = React.useState(0)
  const { data: catBreeds, isLoading: isLoadingCatBreeds } = useGetCatBreeds()

  const vote = useVoteForCat()

  const handleLike = (isLiked: boolean) => {
    const currentCat = catBreeds?.[currentCatIndex]

    if (!currentCat) return

    vote.mutate(
      {
        image_id: catBreeds[currentCatIndex].id,
        value: isLiked ? 1 : 0,
      },
      {
        onError: () => {
          showApiError(t('snackbar.error'))
        },
        onSuccess: () => {
          setCurrentCatIndex((prev) => prev + 1)
        },
      },
    )
  }
  if (isLoadingCatBreeds && !catBreeds) {
    return <LoadingCard />
  }

  return (
    <View style={styles.container}>
      <Header />
      <CatSwipe
        currentIndex={currentCatIndex}
        setCurrentIndex={setCurrentCatIndex}
        catsList={catBreeds as unknown as { id: number; image: string }[]}
        handleLike={handleLike}
      />

      <ContainerIconButtons handleLike={handleLike} />
    </View>
  )
}

export default DashboardScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
})
