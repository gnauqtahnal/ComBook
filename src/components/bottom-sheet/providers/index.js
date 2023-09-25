import React from 'react'

import { BottomSheetContext } from '../contexts'

export const BottomSheetProvider = ({ children }) => {
  const initState = {
    visible: false,
  }

  const reducer = (state, action) => {
    if (action.toggleVisible) {
      return { ...state, visible: !state.visible }
    }

    return state
  }

  const [state, dispatch] = React.useReducer(reducer, initState)

  const toggleVisible = React.useCallback(() => {
    dispatch({ toggleVisible: true })
  }, [dispatch])

  const value = React.useMemo(() => {
    return {
      state,
      toggleVisible,
    }
  }, [state, toggleVisible])

  return <BottomSheetContext.Provider value={value} children={children} />
}
