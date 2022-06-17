const reverseString = require('./reverseString')

test('returns the string reversed', () => {
  // Arrange
  const string = 'sanfrancisco'

  // Act
  const reversed = reverseString(string)

  // Assert
  expect(reversed).toBe('ocsicnarfnas')

})

