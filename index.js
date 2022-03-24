function introduction(name){
return `Hi, my name is ${name}`;
}
function introduction(Aki){
    return `Hi, my name is ${Aki}.`;
}
 function introductionWithLanguage(name, language){
     return `Hi, my name is ${name} and I am learning to program in ${language}.`;
 }
// function introductionWithlanguage(Aki, Emberjs){
    // return `Hi, my name is ${Aki} and i am learningto program in ${Emberjs}.`;
//  }
  function introductionWithLanguageOptional(name, language = "JavaScript"){
      return `Hi, my name is ${name} and I am learning to program in ${language}.`;
  }
