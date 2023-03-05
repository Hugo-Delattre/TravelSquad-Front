export const capitalizeFirstLetter = (countryName) => {
  return countryName.charAt(0).toUpperCase() + countryName.slice(1);
};

export const formatDate = (unformattedDate) => {
  const dateStr = unformattedDate;
  const dateObj = new Date(dateStr);
  const options = { day: "numeric", month: "long", year: "numeric" };
  const formattedDate = dateObj.toLocaleDateString("fr-FR", options);
  return formattedDate;
};
// export const textFormatService = {
//   capitalizeFirstLetter
// };
