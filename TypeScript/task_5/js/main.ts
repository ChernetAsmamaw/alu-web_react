export interface MajorCredits {
    credits: number;
    _majorCreditBrand: void;
}

export interface MinorCredits {
    credits: number;
    _minorCreditBrand: void;
}

export function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits): MajorCredits {
    return { credits: subject1.credits + subject2.credits } as MajorCredits;
}

export function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits): MinorCredits {
    return { credits: subject1.credits + subject2.credits } as MinorCredits;
}


/*** Test Cases ***/

let majorCredits1: MajorCredits = { credits: 10 } as MajorCredits;
let majorCredits2: MajorCredits = { credits: 20 } as MajorCredits;
let minorCredits1: MinorCredits = { credits: 5 } as MinorCredits;
let minorCredits2: MinorCredits = { credits: 10 } as MinorCredits;

console.log(sumMajorCredits(majorCredits1, majorCredits2));
console.log(sumMinorCredits(minorCredits1, minorCredits2));
