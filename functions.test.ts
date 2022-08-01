const {shuffleArray} = require('./utils')

describe('shuffleArray should return an array', () => {
    // CODE HERE
    test('returns an array of the same length as the argument sent in',()=> {
        let givenArray= ['H','e','l','l','o']
        let shuffled=shuffleArray(givenArray)
        expect(givenArray.length).toBe(shuffled.length)
    })
    test('check that the items have been shuffled around', ()=> {
        let givenArray= ['H','e','l','l','o']
        let shuffled=shuffleArray(givenArray)
        expect(givenArray === shuffled).toBeFalsy()

    })
})