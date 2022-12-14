const colorRules=['analogous','monochromatic','triadic','complementary','split complementary', 'double split complementary', 'tetradic'];
//this is comprised of three choices of subjects "person" "animal" "landscape"
const subjectChoices = ['person', 'animal', 'landscape','anything'];
const subjectMatter= [{subject:'person', name:'David Bowie'}, {subject:'person', name:'Ryan Renolds'}, {subject:'person', name:'man'}, {subject:'person', name:'woman'}, {subject:'animal', name:'cat'}, {subject:'animal', name:' dog'}, {subject:'animal', name:'horse'}, {subject:'landscape', name:'oasis'}, {subject:'landscape', name:'forest'}, {subject:'landscape', name:'rainforest'}];
const adjectives =[{subject:'person', name:'angry'}, {subject:'person', name:'cute'}, {subject:'person', name:'easygoing'},{subject:'person', name:'old'}, {subject:'person', name:'thin'}, {subject:'person', name:'unlucky'},{subject:'person', name:'sad'}, {subject:'person', name:'worried'},{subject:'landscape', name:'distant'},{subject:'landscape', name:'lovely'}, {subject:'landscape', name:'vast'}, {subject:'landscape', name:'little'}, {subject:'landscape', name:'desolate'}, {subject:'landscape', name:'charming'}, {subject:'landscape', name:'glorious'}, {subject:'landscape', name:'dreary'}, {subject:'landscape', name:'magnificent'}, {subject:'landscape', name:'bleak'}];
//if subjectMatter is landscape, omit actions and places.
const actions = [{subject:'anything', name:'shaving'}, {subject:'anything', name:'modelling'}, {subject:'anything', name:'singing'}, {subject:'anything', name:'belly dancing'}, {subject:'anything', name:'doing a street performance'}, {subject:'anything', name:'swimming'}, {subject:'anything', name:'galloping'}, {subject:'anything', name:'shooting a movie'}, {subject:'anything', name:'stealing something'}, {subject:'anything', name:'playing cards'}];
const places = [{subject:'location', name:'prison'}, {subject:'location', name:'Town hall'}, {subject:'location', name:'stadium'}, {subject:'location', name:'internet cafe'}, {subject:'location', name:'laundromat'}, {subject:'location', name:'gym'}, {subject:'location', name:'Library'}, {subject:'location', name:'office'}, {subject:'location', name:'bar'}, {subject:'location', name:'supermarket'}];
//random number generator
const numberGen = function(num){return Math.floor(Math.random()*num)};
//subjectFilter first filters the subject and then maps the name of the filtered objects into an array.
const subjectFilter = function (query,arr){

    let filtered = arr.filter(obj=>obj.subject===query).map(obj=>obj.name);
  return filtered;
}
//finds if the the first letter is a vowel to change "a" to "an"
const firstLetterVowel = function (word){
    const vowels=['a','e','i','o','u']
    return vowels.includes(word[0].toLowerCase());
}
//chooses a word from the subjectFilter array
const randomWord = function(arr){
  return arr[numberGen(arr.length)];
}
//the randomizer takes an input of subject and takes filtered objects from each array.
const randomizer= function(subject){
    let colorRule=randomWord(colorRules);
    let noun = randomWord(subjectFilter(subject,subjectMatter));
    let adjective = randomWord(subjectFilter(subject,adjectives));
    let place = randomWord(subjectFilter('location',places));
    let action = randomWord(subjectFilter('anything', actions));
    //changes the wording depending on the subject.
    switch(subject){
        case 'anything':
            while(subject==='anything')
            {subject = subjectChoices[numberGen(subjectChoices.length-1)];}
            return randomizer(subject);
            break;
        case 'landscape':
            return `Ok, here is your prompt:\n Do ${firstLetterVowel(colorRule)?'an':'a'} ${colorRule} painting of ${firstLetterVowel(adjective)?'an':'a'} ${adjective} ${noun}.`;
            break;
        case 'person':
            return `Ok, here is your prompt:\n Do ${firstLetterVowel(colorRule)?'an':'a'} ${colorRule} painting of ${firstLetterVowel(adjective)?'an':'a'} ${adjective} ${noun} ${action} at the ${place}.`;
            break;
        case 'animal':
            adjective = randomWord(subjectFilter('person',adjectives));
            return `Ok, here is your prompt:\n Do ${firstLetterVowel(colorRule)?'an':'a'} ${colorRule} painting of ${firstLetterVowel(adjective)?'an':'a'} ${adjective} ${noun} ${action} at the ${place}.`;
            break;
        default:
            return `Sorry but please choose one of the following to run the program: ${subjectChoices}.`;
            break;
    }
}
//On submit, grabs the form and transforms the artPrompt p with the function above 
const form = document.querySelector('form');
const artPrompt = document.querySelector('#artPrompt');
form.addEventListener("submit", (event)=>{
    let text = randomizer(event.srcElement.elements.topic.value);
    artPrompt.innerText = text;
    event.preventDefault();});
