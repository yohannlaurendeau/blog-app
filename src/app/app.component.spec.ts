describe('my first test', () => {
  let sut: { a?: any; };

  beforeEach(() => {
    sut = {}
  })

  it('should be true if true', () => {
    //arrange
    sut.a = false;

    //assert
    sut.a = true
    //act
    expect(sut.a).toBe(true);
  })
})
