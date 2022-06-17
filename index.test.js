const stringLength  = require ('./index.js');

test('string length', () => {
  // arrange 

  let string = 'Gasangwa';

  //act
  const totalCharacters = stringLength(string);

  //assert
  expect (totalCharacters).toBe(string.length);
});

test('error message shown when string is < 1 or > 10', () => {
  // Arrange
  const string = 'Gasangwa Thomas'
  const errorMessage = 'string length is out of bounds'

  // Act
  // stringLength(string)
  
  // Assert
 expect(() => {
   stringLength(string)
 }).toThrow(errorMessage)
})