class Snowboarder {
  constructor(firstName, lastName) {
    this.firstName = firstName
    this.lastName = lastName
    this.scores = []
  }

  fullName() {
    return `${this.firstName} ${this.lastName}`
  }

  registerScore(scoreNumber) {
    this.scores.push(scoreNumber)
    return this.scores
  }
}

export default Snowboarder
