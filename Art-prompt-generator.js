const colorRule=['Analogous','Monochromatic','Triadic','Complementary','Split Complementary', 'Double Split Complementary', 'Tetradic','NONE'];
//this is comprised of four choices of subjects "person" "animal" "landscape" "anything"
const subjectMatter= [{subject:'person', name:'David Bowie'}, {subject:'animal', name:'cat'}, {subject:'landscape', name:'c'}, {subject:'', name:''}];
const adjectives =[{subject:'landscape', name:'distant'},{subject:'landscape', name:'lovely'}, {subject:'landscape', name:'vast'}, {subject:'landscape', name:'little'}, {subject:'landscape', name:'desolate'}, {subject:'landscape', name:'charming'}, {subject:'landscape', name:'glorious'}, {subject:'landscape', name:'dreary'}, {subject:'landscape', name:'magnificent'}, {subject:'landscape', name:'bleak'}];
//if subjectMatter is landscape, omit action.
const action = [{subject:'', name:''}]; 
const place = [{subject:'', name:''}];
const numberGen = function(num){return Math.floor(Math.random()*num)};
//subjectFilter first filters the subject and then maps the name of the filtered objects.
const subjectFilter = function (query,arr){return arr.filter(obj=>obj.subject===query).map(obj=>obj.name);}
const randomizer= function(subject){
    //the randomizer takes an input of subject and takes an object from each array.
    //number decides how many subjectMatters are in the prompt. 
    let number = numberGen(10)+1;
}
