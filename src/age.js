export default class GalacticCalculator {
    constructor(earthAge) {
      this.earthAge = earthAge;
      this.jupiterAge = undefined;
      this.marsAge = undefined;
      this.venusAge = undefined;
      this.mercuryAge = undefined;
    }
      calculateAge() {
      this.mercuryAge = this.earthAge/.24;
      this.venusAge = this.earthAge/.62;
      this.marsAge = this.earthAge/1.88;
      this.jupiterAge = this.earthAge/11.86;
      let solarAges = {"mercury": this.mercuryAge.toFixed(2), "venus": this.venusAge.toFixed(2), "mars": this.marsAge.toFixed(2), "jupiter": this.jupiterAge.toFixed(2)};
      return solarAges
    }
      solarYearsSince(earthYearsSincePastBday){
      this.mercuryAge = earthYearsSincePastBday/.24;
      this.venusAge = earthYearsSincePastBday/.62;
      this.marsAge = earthYearsSincePastBday/1.88;
      this.jupiterAge = earthYearsSincePastBday/11.86;
      let solarTimePassed = {"mercury": earthYearsSincePastBday/.24.toFixed(2), "venus": earthYearsSincePastBday/.62.toFixed(2), "mars": earthYearsSincePastBday/1.88.toFixed(2), "jupiter": earthYearsSincePastBday/1.88.toFixed(2)};
      return solarTimePassed
      }
      solarYearsUntil(earthYearsUntilABday){
        this.mercuryAge = earthYearsUntilABday/.24;
        this.venusAge = earthYearsUntilABday/.62;
        this.marsAge = earthYearsUntilABday/1.88;
        this.jupiterAge = earthYearsUntilABday/11.86;
        let solarTimePassed = {"mercury": earthYearsUntilABday/.24.toFixed(2), "venus": earthYearsUntilABday/.62.toFixed(2), "mars": earthYearsUntilABday/1.88.toFixed(2), "jupiter": earthYearsUntilABday/1.88.toFixed(2)};
        return solarTimePassed
        }
    }

