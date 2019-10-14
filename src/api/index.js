// get your own key from unsplash please 😇
const KEY =
  '?client_id=5f96323678d05ff0c4eb264ef184556868e303b32a2db88ecbf15746e6f25e02';
const URL = `https://api.unsplash.com/photos/`;

const URLS = {
  VENUE: 'https://www.digitalablaze.com/json/venue.json',
  VENUE_SEARCH: 'https://www.digitalablaze.com/json/venue-search.json',
  VENUE_REVIEWS: 'https://www.digitalablaze.com/json/venue-review.json',
};

const fetchImages = async page => {
  const response = await fetch(`${URL}${KEY}&per_page=22&page=${page}`);
  const data = await response.json();
  if (response.status >= 400) {
    throw new Error(data.errors);
  }
  return data;
};

const fetchVenues = async () => {
  console.log('Fetching venues sit tight');
  const response = await fetch(`${URLS.VENUE_SEARCH}`);
  const data = await response.json();
  if (response.status >= 400) {
    throw new Error(data.errors);
  }
  return data.businesses;
};

const fetchImageStats = async id => {
  const response = await fetch(`${URL}/${id}/statistics${KEY}`);
  const data = await response.json();
  if (response.status >= 400) {
    throw new Error(data.errors);
  }
  return data;
};

export {fetchImages, fetchImageStats, fetchVenues};
