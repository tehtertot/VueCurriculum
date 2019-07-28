export default {
  state: {
    goldAmount: 0,
    locations: [
      {
        name: 'farm',
        minGold: 10,
        maxGold: 20,
      },
      {
        name: 'cave',
        minGold: 5,
        maxGold: 10,
      },
      {
        name: 'house',
        minGold: 2,
        maxGold: 5,
      },
      {
        name: 'casino',
        minGold: -50,
        maxGold: 50,
      },
    ],
    activities: [],
  },
  addGold(newNum) {
    this.state.goldAmount += newNum;
  },
  addActivity(locationData, goldAmount) {
    const newActivity = {
      gold: goldAmount,
      locationName: locationData.name,
      time: new Date(),
    }
    this.state.activities = [newActivity, ...this.state.activities];
  }
}