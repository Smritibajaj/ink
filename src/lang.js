const strings = {
    ar: {
      HELLO_WORLD: "Hello World in Arabic",
    },
    en: {
      HELLO_WORLD: "Hello World in English",
    },
};

export const getString = (stringId, language) => {
    if (!language) {
      console.warn("getString, language is undefined");
      return "";
    }
    if (!strings[language][stringId]) {
      const alternativeLanguage = language === "en" ? "ar" : "en";
      if (!strings[alternativeLanguage][stringId]) {
        console.warn(
          "getString, string not found in any language. ID: ",
          stringId,
        );
        return "";
      }
      console.warn(`getString, string not found in ${language}. ID: `, stringId);
      return strings[alternativeLanguage][stringId];
    cd}
    return strings[language][stringId];
  };