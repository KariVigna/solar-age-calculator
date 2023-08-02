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