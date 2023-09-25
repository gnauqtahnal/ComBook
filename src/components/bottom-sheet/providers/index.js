import React from 'react'

import { BottomSheetContext, BottomSheetPropsContext } from '../contexts'

const BottomSheetPropsProvider = ({ children }) => {
  const [state, setState] = React.useState()

  const value = React.useMemo(() => {
    return { state, setState }
  }, [state, setState])

  return (
    <BottomSheetPropsContext.Provider value={value}>
      {children}
    </BottomSheetPropsContext.Provider>
  )
}

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

  return (
    <BottomSheetContext.Provider value={value}>
      <BottomSheetPropsProvider>{children}</BottomSheetPropsProvider>
    </BottomSheetContext.Provider>
  )
}
