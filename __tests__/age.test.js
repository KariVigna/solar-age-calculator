import GalacticCalculator from './../src/age.js'

describe ("calculateAge", () => {
    let galacticCalculator;

     beforeEach(() => {
        galacticCalculator = new GalacticCalculator(10);
    })
    test('should correctly return solar ages', () => {
        
        expect(galacticCalculator.calculateAge()["mercury"]).toBe("41.67");
        expect(galacticCalculator.calculateAge()["venus"]).toBe("16.13");
        expect(galacticCalculator.calculateAge()["mars"]).toBe("5.32");
        expect(galacticCalculator.calculateAge()["jupiter"]).toBe("0.84");
    })
})

describe ("earthYearsSincePastBday", () => {
    let earthYearsSincePastBday;
    let galacticCalculator;

    beforeEach(() => {
        earthYearsSincePastBday = earthYearsSincePastBday(2);
    })
    test('should correctly return distance from future age', () => {
        
        expect(galacticCalculator.earthYearsSincePastBday()["mercury"]).toBe("8.33");
        expect(galacticCalculator.earthYearsSincePastBday()["venus"]).toBe("3.23");
        expect(galacticCalculator.earthYearsSincePastBday()["mars"]).toBe("1.06");
        expect(galacticCalculator.earthYearsSincePastBday()["jupiter"]).toBe("0.17");
    })
})

describe ("earthYearsUntilABday", () => {
    let earthYearsUntilABday;
    let galacticCalculator;

    beforeEach(() => {
        earthYearsUntilABday = earthYearsUntilABday(2);
    })
    test('should correctly return distance from future age', () => {
        
        expect(galacticCalculator.earthYearsUntilABday()["mercury"]).toBe("8.33");
        expect(galacticCalculator.earthYearsUntilABday()["venus"]).toBe("3.23");
        expect(galacticCalculator.earthYearsUntilABday()["mars"]).toBe("1.06");
        expect(galacticCalculator.earthYearsUntilABday()["jupiter"]).toBe("0.17");
    })
})