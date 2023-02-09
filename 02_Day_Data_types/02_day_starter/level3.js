console.group("Level 3");

const sent1 = 'Love is the best thing in this world. Some found their love and some are still looking for their love.';
console.log(sent1.toLowerCase().match(/love/gm).length); // 1

const sent2 = 'You cannot end a sentence with because because because is a conjunction';
console.log(sent2.match(/because/g).length); // 2

const sent3 = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching'
const cleanSent = sent3.replace(/\$|@|\&|#|%|;|\.|!|,|\?/g, '');
console.log(cleanSent.toLowerCase().split(' ')); // 3

const sent4 = "He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.";
let amounts = sent4.match(/\d+/g);
console.log(+amounts[0] + +amounts[1] + +amounts[2]); // 4

console.groupEnd();