export default class GalacticCalculator {
    constructor(earthAge) {
      this.earthAge = earthAge;
      this.jupiterAge = undefined;
      this.marsAge = undefined;
      this.venusAge = undefined;
      this.mercuryAge = undefined;
    }
      calculateAge() {
      this.mercuryAge = (this.earthAge/.24).toFixed(2);
      this.venusAge = (this.earthAge/.62).toFixed(2);
      this.marsAge = (this.earthAge/1.88).toFixed(2);
      this.jupiterAge = (this.earthAge/11.86).toFixed(2);
      let solarAges = {"mercury": this.mercuryAge, "venus": this.venusAge, "mars": this.marsAge, "jupiter": this.jupiterAge};
      return solarAges
    }
      solarYearsSince(pastAge){
      const earthYearsSincePastBday = this.earthAge - pastAge;
      const mercuryYearsSincePastBday = (earthYearsSincePastBday/.24).toFixed(2);
      const venusYearsSincePastBday = (earthYearsSincePastBday/.62).toFixed(2);
      const marsYearsSincePastBday = (earthYearsSincePastBday/1.88).toFixed(2);
      const jupiterYearsSincePastBday = (earthYearsSincePastBday/11.86).toFixed(2);
      let solarTimePassed = {"mercury": mercuryYearsSincePastBday, "venus": venusYearsSincePastBday, "mars": marsYearsSincePastBday, "jupiter": jupiterYearsSincePastBday};
      return solarTimePassed
      }
      solarYearsUntil(futureAge){
        const earthYearsUntilABday = futureAge - this.earthAge
        const mercuryYearsUntilABday = (earthYearsUntilABday/.24).toFixed(2);
        const venusYearsUntilABday = (earthYearsUntilABday/.62).toFixed(2);
        const marsYearsUntilABday = (earthYearsUntilABday/1.88).toFixed(2);
        const jupiterYearsUntilABday = (earthYearsUntilABday/11.86).toFixed(2);
        let solarTimePassed = {"mercury": mercuryYearsUntilABday, "venus": venusYearsUntilABday, "mars": marsYearsUntilABday, "jupiter": jupiterYearsUntilABday};
        return solarTimePassed
        }
    }

