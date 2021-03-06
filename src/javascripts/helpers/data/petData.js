// petData.js

const defaultPetName = 'Fido';
const defaultPetUrl = 'https://www.clipartkey.com/mpngs/m/11-119414_easy-clipart-dog-easy-simple-dog-drawing.png';
const kaputUrl = 'https://www.kindpng.com/picc/m/426-4264032_how-to-draw-tombstone-tombstone-drawing-easy-hd.png';
let petName = defaultPetName;
let petUrl = defaultPetUrl;

const setPetName = (name) => {
  petName = name;
};

const getPetName = () => petName;

const setPetUrl = (url) => {
  petUrl = url;
};
const getPetUrl = () => petUrl;

const getDefaultPetName = () => defaultPetName;

const getDefaultPetUrl = () => petUrl;

const getKaputUrl = () => kaputUrl;

export {
  getPetName, setPetName,
  getPetUrl, setPetUrl,
  getDefaultPetName, getDefaultPetUrl,
  getKaputUrl,
};
