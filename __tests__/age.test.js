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

describe ("solarYearsSince", () => {
    let galacticCalculator;

    beforeEach(() => {
        galacticCalculator = new GalacticCalculator(10);
    })
    test('should correctly return distance from future age', () => {
        
        expect(galacticCalculator.solarYearsSince(8)["mercury"]).toBe("8.33");
        expect(galacticCalculator.solarYearsSince(8)["venus"]).toBe("3.23");
        expect(galacticCalculator.solarYearsSince(8)["mars"]).toBe("1.06");
        expect(galacticCalculator.solarYearsSince(8)["jupiter"]).toBe("0.17");
    })
})

describe ("solarYearsUntil", () => {
    let galacticCalculator;

    beforeEach(() => {
         galacticCalculator = new GalacticCalculator(10);
    })
    test('should correctly return distance from future age', () => {
        
        expect(galacticCalculator.solarYearsUntil(12)["mercury"]).toBe("8.33");
        expect(galacticCalculator.solarYearsUntil(12)["venus"]).toBe("3.23");
        expect(galacticCalculator.solarYearsUntil(12)["mars"]).toBe("1.06");
        expect(galacticCalculator.solarYearsUntil(12)["jupiter"]).toBe("0.17");
    })
})