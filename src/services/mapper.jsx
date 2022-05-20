export const mapper = movies => {
  return movies.map(
    ({ id, largeImageURL: largeImg, webformatURL: smallImg, tags }) => ({
      id,
      largeImg,
      smallImg,
      tags,
    })
  );
};
