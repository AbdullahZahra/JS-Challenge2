const markMass = 78;
const markHeight = 1.69;

const johnMass = 92;
const johnHeight = 1.95;

const markBMI = markMass / (markHeight ** 2);
const johnBMI = johnMass / (johnHeight * johnHeight);

const markHegherBMI = markBMI > johnBMI;

console.log(markBMI, johnBMI, markHegherBMI);

if (markBMI > johnBMI) {
    console.log(`John's BMI (${johnBMI}) is higher than Mark's(${markBMI})!`);
}
else if (markBMI < johnBMI) {
    console.log(`Mark's BMI (${markBMI}) is higher than John's(${johnBMI})!`);
}
else {
    console.log(`Mark and John have the same BMI${johnBMI}`);
}
