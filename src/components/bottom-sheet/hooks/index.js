import React from 'react'

import { BottomSheetContext, BottomSheetPropsContext } from '../contexts'

export const useBottomSheet = () => {
  return React.useContext(BottomSheetContext)
}

export const useBottomSheetProps = () => {
  return React.useContext(BottomSheetPropsContext)
}
