// 객체 해체
/* function getSentence({subject, verb, object}) {
    return `${subject} ${verb} ${object}`;
}

const o = {
    subject: "I",
    verb: "love",
    object: "JavaScript"
};

console.log(getSentence(o));
 */


// 배열 해체
function getSentence([subject, verb, object]) {
    return `${subject} ${verb} ${object}`;
}

const arr = ["I", "love", "JavaScript"];

console.log(getSentence(arr));    // "I love JavaScript"