import React, {useState} from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';
import {CreateReviewInfoDisplay} from './components/CreateReviewInfoDisplay';
import {Button, Input} from '@rneui/themed';
import colors from '../../styles/colors';

export function ItemSeparatorComponent(): JSX.Element {
  return <View style={styles.ItemSeparator} />;
}
export function HorizontalItemSeparator(): JSX.Element {
  return <View style={styles.HorizontalItemSeparator} />;
}

export function CreateReviewScreen(): JSX.Element {
  const [title, setTitle] = useState('');
  const [externalUrl, setExternalUrl] = useState('');
  const [content, setContent] = useState('');

  const onRating = (rating: number) => {
    console.log(rating);
  };
  const onPressButton = () => {
    console.log('Call API');
  };
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <CreateReviewInfoDisplay
        imageUri=""
        movieName={'name'}
        movieYear={2022}
        criticScore={8.0}
        userScore={9.0}
        genres={'Thriller'}
        onRating={onRating}
      />

      <Input
        value={title}
        onChangeText={i => setTitle(i)}
        placeholder="Enter a title..."
        label={'Title'}
        renderErrorMessage={false}
      />

      <Input
        value={externalUrl}
        onChangeText={i => setExternalUrl(i)}
        placeholder="Enter a external url..."
        label={'External URL'}
        renderErrorMessage={false}
      />

      <Input
        value={content}
        onChangeText={i => setContent(i)}
        placeholder="Enter content..."
        label={'Content'}
        inputStyle={{
          height: 100,
        }}
        multiline
        renderErrorMessage={false}
      />

      <View style={styles.buttonContainer}>
        <Button
          containerStyle={styles.button}
          onPress={onPressButton}
          title="Post"
        />
      </View>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingVertical: 12,
    gap: 20,
  },
  ItemSeparator: {
    height: 20,
    width: '100%',
  },
  HorizontalItemSeparator: {
    marginVertical: 10,
    width: 1,
  },
  cancelButton: {
    backgroundColor: colors.mediumBlack,
    flex: 1,
  },
  button: {
    flex: 1,
  },
  buttonContainer: {
    flexDirection: 'row',
    width: '100%',
    gap: 12,
    justifyContent: 'space-between',
  },
});
