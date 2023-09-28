import { StyleSheet } from 'react-native';

import { CommCardContainer } from '../../../components/CommCard';

const CommCardPreview = () => {
  return (
    <CommCardContainer
      containerStyle={styles.previewContainer}
    ></CommCardContainer>
  );
};

const styles = StyleSheet.create({
  previewContainer: {
    backgroundColor: '#ffffff',
  },
});

export default CommCardPreview;
