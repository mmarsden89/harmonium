const titleShortener = (title) => {
  let string = title;
  if (string.length > 37) {
    string = string.split("").splice(0, 34).join("") + "...";
  }
  return string;
};

export { titleShortener };
