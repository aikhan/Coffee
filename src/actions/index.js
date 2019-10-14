import {IMAGES, VENUE} from '../constants';

const loadImages = () => ({
  type: IMAGES.LOAD,
});

const setImages = images => ({
  type: IMAGES.LOAD_SUCCESS,
  images,
});

const setError = error => ({
  type: VENUE.LOAD_FAILED,
  error,
});

const setVenuesFetched = venues => ({
  type: VENUE.VENUE_FETCHED,
  venues,
});

const venuesFetch = () => ({
  type: VENUE.VENUE_FETCH,
});

const venueRate = () => ({
  type: VENUE.VENUE_REVIEW,
});

const venueDetails = name => ({
  type: VENUE.VENUE,
});
export {
  loadImages,
  setImages,
  setError,
  setVenuesFetched,
  venuesFetch,
  venueRate,
  venueDetails,
};
