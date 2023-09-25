import React from 'react'

import { BottomSheetContext } from '../contexts'

export const useBottomSheet = () => {
  return React.useContext(BottomSheetContext)
}
