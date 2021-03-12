const titleShortener = (title) => {
  let string = title;
  if (string.length > 29) {
    string = string.split("").splice(0, 26).join("") + "...";
  }
  return string;
};

export { titleShortener };
