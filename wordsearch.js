const wordSearch = (letters, word) => {
  const horizontalJoin = letters.map((ls) => ls.join(""));
  for (l of horizontalJoin) {
    if (l.includes(word)) return true;
  }

  if (word.length < 2) {
    return false;
  }

  const verticalJoin = transpose(letters).map((x) => x.join(""));

  for (l of verticalJoin) {
    if (l.includes(word)) return true;
  }
  return false;
};

const transpose = (letters) => {
  const newArray = [];

  for (let i = 0; i < letters.length - 1; i++) {
    newArray[i] = [];

    for (let j = 0; j < letters[i].length; j++) {
      newArray[i][j] = letters[j][i];
    }
  }
  return newArray;
};


module.exports = wordSearch