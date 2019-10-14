import React from 'react';
import PropTypes from 'prop-types';
import {StyleSheet, Text, View, ImageBackground} from 'react-native';
import Star from 'react-native-star-view';

const Card = props => {
  const {name, imageURL, rating, ratingCount, isClosed, id} = props;
  return (
    <View style={styles.card}>
      <Text style={styles.titleText}>{name}</Text>
      <ImageBackground
        style={styles.imageHolder}
        source={{
          uri: imageURL,
        }}>
        <View style={styles.textBackgroundViewBelow}>
          <Text style={styles.textRating}>{isClosed ? 'Closed' : 'Open'}</Text>
          <Star score={rating} style={styles.starStyle} />
          <Text>({ratingCount})</Text>
        </View>
      </ImageBackground>
    </View>
  );
};

// Card.PropTypes = {
//   name: PropTypes.string.isRequired,
//   imageURL: PropTypes.string.isRequired,
//   rating: PropTypes.number.isRequired,
//   isClosed: PropTypes.boolean.isRequired,
//   id: PropTypes.string.isRequired,
// };

Card.defaultProps = {
  name: 'Gloria Jeans',
  imageURL:
    'https://s3-media2.fl.yelpcdn.com/bphoto/rEFJSvLhqaiZxWinLBeAyQ/o.jpg',
  rating: 0,
  ratingCount: 0,
  isClosed: true,
  id: 0,
};

// const mapStateToProps = ({name, imageURL, rating, ratingCount, isClosed}) => ({
//   name,
//   imageURL,
//   rating,
//   ratingCount,
//   isClosed,
// });

// export default connect(
//   mapStateToProps,
//   null,
// )(Card);

export default Card;

const styles = StyleSheet.create({
  card: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#634832',
    marginBottom: 20,
  },
  titleText: {
    fontSize: 22,
    color: '#ece0d1',
  },
  imageHolder: {
    width: 350,
    height: 200,
    backgroundColor: '#d3d3d3',
    justifyContent: 'flex-end',
  },
  textBackgroundViewBelow: {
    flexDirection: 'row',
    backgroundColor: '#dbc1ac',
  },
  textRating: {
    marginLeft: 10,
    marginRight: 160,
  },
  starStyle: {
    width: 100,
    height: 20,
  },
});
