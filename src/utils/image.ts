export const getImage = (size: number, lock?: string) => {
  let image = `https://loremflickr.com/${size}/${size}/food`;

  return lock ? `${image}?lock=${lock}` : image;
};
