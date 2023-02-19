class Formatter {
  //add static methods here
  static capitalize(string) {
    let firstLetter = string.charAt(0).toUpperCase();
    for (let i = 1; i < string.length; i++) {
      firstLetter += string[i];
    }
    return firstLetter;
  }

  static sanitize(string) {
    return string.replace(/[^A-Za-z0-9 '-]/g, "");
  }

  static titleize(string) {
    let except = [
      "the",
      "a",
      "an",
      "but",
      "of",
      "and",
      "for",
      "at",
      "by",
      "from",
    ];
    let newString = string.split(" ");
    let stringArr = [];
    stringArr.push(this.capitalize(newString[0]));

    for (let i = 1; i < newString.length; i++) {
      if (except.includes(newString[i])) {
        stringArr.push(newString[i]);
      } else {
        stringArr.push(this.capitalize(newString[i]));
      }
    }
    return stringArr.join(" ");
  }
}
