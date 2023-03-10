export const capitalizeFirstLetter = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

export const lowerCaseFirstLetter = (string) => {
  return string.charAt(0).toLowerCase() + string.slice(1);
};

export const capitalizeFirstLetters = (string) =>
  string.replace(/(^|\-|\s)([a-z])/g, (l) => l.toUpperCase());

export const formatDate = (unformattedDate) => {
  const dateStr = unformattedDate;
  const dateObj = new Date(dateStr);
  const options = { day: "numeric", month: "long", year: "numeric" };
  const formattedDate = dateObj.toLocaleDateString("fr-FR", options);
  return formattedDate;
};

export const turnThemeIDintoThemeName = (theme_id) => {
  if (theme_id === 1) {
    return "Farniente";
  } else if (theme_id === 2) {
    return "Culturel";
  } else if (theme_id === 3) {
    return "Festif";
  } else if (theme_id === 4) {
    return "Sportif";
  }
};

export const turnThemeNameIntoThemeID = (theme) => {
  if (theme === "farniente") {
    return 1;
  } else if (theme === "culturel") {
    return 2;
  } else if (theme === "festif") {
    return 3;
  } else if (theme === "sportif") {
    return 4;
  }
};
