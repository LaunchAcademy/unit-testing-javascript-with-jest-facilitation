import Snowboarder from '../Snowboarder.js'

describe('Snowboarder', () => {
  
  const firstName = 'Shaun'
  const lastName = 'White'
  let boarder
  let exampleBoarder = { firstName: 'Shawn', lastName: "White", scores: [] }

  beforeEach(() => {
    boarder = new Snowboarder(firstName, lastName)
  })

  describe('when it is initialized', () => {
    it('has a first name', () => {
      expect(boarder.firstName).toEqual(firstName)
    })
    
    it('has a last name', () => {
      expect(boarder.lastName).toEqual(lastName)
    })

    it('begins with an empty array of scores as a property', () => {
      expect(boarder.scores).toEqual([])
    })

    it.only("is created the correct initial properties", () => {
      expect(boarder).toMatchObject(exampleBoarder)
    })
  })

  describe("#fullName", () => {
    it("returns the combination of first and last name properties", () => {
      expect(boarder.fullName()).toEqual("Shaun White")
    })
  })

  describe("#registerScore", () => {
    it("accepts a integer score and returns the new array of scores", () => {
      boarder.registerScore(5)
      expect(boarder.registerScore(9)).toEqual([5, 9])
    })

    it("updates the score property of the snowboarder", () => {
      boarder.registerScore(5)
      boarder.registerScore(9)
      expect(boarder.scores).toEqual([5, 9])
    })
  })
})
