const vanga = (question) => {
    if(question.length === 42)
    return 42;
    switch(question.length % 3){
    case 0: 
        return "Yes";
        break;
    case 1:
        return "No";
        break;
    case 2:
        return "Probably";
        break;
    }
};

const q2 = vanga('Чи є життя поза землею?');
const q3 = vanga('А Віка мене любить?');
const q4 = vanga('А Оля?');
const q5 = vanga('Яка відповідь на головне питання Всесвіту?');

console.log(q2);
console.log(q3);
console.log(q4);
console.log(q5);