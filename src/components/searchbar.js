// @Flow

import React from 'react';
import {
  StyleSheet,
  TextInput,
  View,
  TouchableOpacity,
  Text,
} from 'react-native';

const SearchBar = ({text}: PropTypes) => {
  return (
    <View style={styles.searchBarContainer}>
      <TextInput
        placeholder="Search For Coffee Venue"
        style={styles.textInputSearch}
        underlineColorAndroid={'transparent'}
      />
      <TouchableOpacity
        style={styles.textSearchButton}
        onPress={() => console.log('Ive been searched')}>
        <Text>Find</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  searchBarContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 50,
    marginTop: 30,
    borderColor: 'lightgray',
    flex: 1,
    margin: 10,
    marginBottom: 25,
  },
  textInputSearch: {
    flex: 8,
    borderColor: 'lightgray',
    borderWidth: 1,
    borderRadius: 5,
    marginRight: 10,
    height: 40,
    paddingLeft: 10,
  },
  textSearchButton: {
    flex: 1,
    backgroundColor: '#6f4e37',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    height: 40,
  },
});
