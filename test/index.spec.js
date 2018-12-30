
// The unit under test.
const { lambda } = require('../src/index');

describe('lambda', () => {
  it('Returns an array of one promise for each Record.', () => {
    // Arrange.
    const event = {
      Records: [
        { id: 1 },
        { id: 2 },
        { id: 3 },
      ],
    };

    // Act.
    const results = lambda(event);

    // Assert.
    expect(results).toHaveLength(3);
    results.forEach(r => expect(r).toBeInstanceOf(Promise));
  });
});
