const titleShortener = (title) => {
  let string = title;
  if (string.length > 28) {
    string = string.split("").splice(0, 25).join("") + "...";
  }
  return string;
};

export { titleShortener };
