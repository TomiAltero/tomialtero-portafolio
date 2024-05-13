import data from './languages.json';

export const getLanguages = () => {
  return data;
};

export default (req, res) => {
  const languages = getLanguages();
  res.json(languages);
};
