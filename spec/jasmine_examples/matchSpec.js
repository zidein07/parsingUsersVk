describe("matchSpec", function () {
  var plus = function (a, b) {
    return a + b;
  };
  it("test 1+1", function () {
    expect(plus(1, 1)).toEqual(2);
  });
});
