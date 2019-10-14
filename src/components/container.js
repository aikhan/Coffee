// @flow

import React from 'react';
import {StyleSheet, Text, View, ScrollView} from 'react-native';
import SearchBar from './searchbar';
import Card from './card';
import {venuesFetch} from '../actions';
import {connect} from 'react-redux';

const Container = props => {
  const {venues, isLoading} = props;
  // if (!venues) {
  props.venuesFetch();
  // }

  console.log('props is ' + JSON.stringify(venues));
  return (
    <View>
      <SearchBar />
      <ScrollView>
        <View style={styles.scrollView}>
          <Text>
            {venues.length > 1
              ? JSON.stringify(venues.venue)
              : 'Venues not loaded!'}{' '}
          </Text>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <View style={styles.bottomSpace} />
        </View>
      </ScrollView>
    </View>
  );
};

const mapStateToProps = ({isLoading, venues}) => ({
  venues,
  isLoading,
});
// const mapStateToProps = venues => {
//   return {
//     venues,
//   };
// };
const mapDispatchToProps = dispatch => ({
  venuesFetch: () => dispatch(venuesFetch()),
});
//export default Container;

Container.defaultProps = {
  venues: [],
};
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Container);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  searchContainer: {
    margin: 10,
    marginBottom: 40,
    marginTop: 20,
  },
  scrollView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
    marginTop: 30,
  },
  bottomSpace: {
    margin: 50,
  },
});
