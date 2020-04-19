module.exports.getLocalGreeting = (language) => {
  switch (language) {
    case "en":
      return "Hello!";
    case "es":
      return "¡Hola!";
    case "ru":
      return "Привет!";
    default:
      return "👋";
  }
};

module.exports.pickLocale = () => {
  const languages = ["en", "es", "cn", "fr", "ru"];
  //return random language
  return languages[Math.floor(Math.random() * languages.length)];
};
