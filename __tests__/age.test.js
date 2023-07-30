import calculateAge from '../src/age.js'

describe ("calculateAge", () => {

    beforeEach(() => {
        let calculateAge = new calculateAge;
        const earthAge = 10
    })
    test('should correctly return solar ages' => {
        expect(calculateAge(earthAge[0])).toBe(41.66);
        expect(calculateAge(earthAge[1])).toBe(16.12);
        expect(calculateAge(earthAge[2])).toBe(5.31);
        expect(calculateAge(earthAge[3])).toBe(0.84);
    })
})