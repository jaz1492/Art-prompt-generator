const colorRules=['Analogous','Monochromatic','Triadic','Complementary','Split Complementary', 'Double Split Complementary', 'Tetradic'];
//this is comprised of four choices of subjects "person" "animal" "landscape" "anything"
const subjectMatter= [{subject:'person', name:'David Bowie'}, {subject:'person', name:'Ryan Renolds'}, {subject:'person', name:'A man'}, {subject:'person', name:'A woman'}, {subject:'animal', name:'A cat'}, {subject:'animal', name:'A dog'}, {subject:'animal', name:'A horse'}, {subject:'landscape', name:'oasis'}, {subject:'landscape', name:'forest'}, {subject:'landscape', name:'rainforest'}];
const adjectives =[{subject:'person', name:'angry'}, {subject:'person', name:'cute'}, {subject:'person', name:'easygoing'},{subject:'person', name:'old'}, {subject:'person', name:'thin'}, {subject:'person', name:'unlucky'},{subject:'person', name:'sad'}, {subject:'person', name:'worried'},{subject:'landscape', name:'distant'},{subject:'landscape', name:'lovely'}, {subject:'landscape', name:'vast'}, {subject:'landscape', name:'little'}, {subject:'landscape', name:'desolate'}, {subject:'landscape', name:'charming'}, {subject:'landscape', name:'glorious'}, {subject:'landscape', name:'dreary'}, {subject:'landscape', name:'magnificent'}, {subject:'landscape', name:'bleak'}];
//if subjectMatter is landscape, omit action.
const actions = [{subject:'anything', name:'shaving'}, {subject:'anything', name:'modelling'}, {subject:'anything', name:'singing'}, {subject:'anything', name:'belly dancing'}, {subject:'anything', name:'doing a street performance'}, {subject:'anything', name:'swimming'}, {subject:'anything', name:'galloping'}, {subject:'anything', name:'shooting a movie'}, {subject:'anything', name:'stealing something'}, {subject:'anything', name:'playing cards'}];
const places = [{subject:'location', name:'prison'}, {subject:'location', name:'Town hall'}, {subject:'location', name:'stadium'}, {subject:'location', name:'internet cafe'}, {subject:'location', name:'laundromat'}, {subject:'location', name:'gym'}, {subject:'location', name:'Library'}, {subject:'location', name:'office'}, {subject:'location', name:'bar'}, {subject:'location', name:'supermarket'}];
const numberGen = function(num){return Math.floor(Math.random()*num)};
//subjectFilter first filters the subject and then maps the name of the filtered objects.

const subjectFilter = function (query,arr){
  // if(query==='landscape'){
    let filtered = arr.filter(obj=>obj.subject===query);
    return filtered.map(obj=>obj.name);
   // else {
   //   let filtered = arr.filter(obj=>obj.subject!='landscape');
   //   return filtered.map(obj=>obj.name);
 // }
}
const randomWord = function(arr){
  return arr[numberGen(arr.length)];
}
const randomizer= function(subject){
    //the randomizer takes an input of subject and takes an object from each array.
    //number decides how many subjectMatters are in the prompt.
    let colorRule=randomWord(colorRules);
    let number = numberGen(10)+1;
    let noun = subjectFilter(subject,subjectMatter);
    let adjective = subjectFilter(subject,adjectives);
    let place = subjectFilter('location',places);
    let action = subjectFilter('anything', actions);
    if(subject!='landscape'){
    return console.log(`Ok, here is your prompt: do a ${colorRule} painting of ${randomWord(noun)} looking ${randomWord(adjective)} while ${randomWord(action)} at the ${randomWord(place)}`);}
    else{
      return console.log(``)
    }
}
randomizer("person");
