import React from 'react';

import { BottomSheetPropsContext, BottomSheetVisibleContext } from './contexts';

const BottomSheetProvider = ({ children }) => {
  return (
    <BottomSheetVisibleProvider>
      <BottomSheetPropsProvider>{children}</BottomSheetPropsProvider>
    </BottomSheetVisibleProvider>
  );
};

const BottomSheetVisibleProvider = ({ children }) => {
  const [visible, setVisible] = React.useState(false);

  const toggleVisible = React.useCallback(() => {
    setVisible((value) => {
      return !value;
    });
  }, [setVisible]);

  const value = React.useMemo(() => {
    return { visible, toggleVisible };
  }, [visible, toggleVisible]);

  return (
    <BottomSheetVisibleContext.Provider value={value}>
      {children}
    </BottomSheetVisibleContext.Provider>
  );
};

const BottomSheetPropsProvider = ({ children }) => {
  const [props, setProps] = React.useState({});

  const value = React.useMemo(() => {
    return {
      props,
      setProps,
    };
  }, [props, setProps]);

  return (
    <BottomSheetPropsContext.Provider value={value}>
      {children}
    </BottomSheetPropsContext.Provider>
  );
};

export default BottomSheetProvider;
