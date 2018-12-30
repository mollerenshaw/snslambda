
// The unit under test.
const { lambda } = require('../src/index');

describe('lambda', () => {
  it('Returns an array of one promise for each Record.', () => {
    // Arrange.
    const event = {
      Records: [
        { Sns: { Message: 'The first one' } },
        { Sns: { Message: 'The second one' } },
        { Sns: { Message: 'The third one' } },
      ],
    };

    // Act.
    const results = lambda(event);

    // Assert.
    expect(results).toHaveLength(3);
    results.forEach(r => expect(r).toBeInstanceOf(Promise));

    Promise.all(results)
      .then((values) => {
        expect(values).toBeInstanceOf(Array);
        expect(values[0]).toEqual('The first one');
        expect(values[1]).toEqual('The second one');
        expect(values[2]).toEqual('The third one');
      });
  });
});
