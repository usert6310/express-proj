const {createTextArray} = require("../helper_functions/createTextArray")

describe("array function", () => {
  test("return correct array", () => {
    const expectedArray = [{
      id: 0,
      articleName: "testfile1.txt",
      contents: "test",
      articleSummary: "test...",
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThyEKIq_a7eWEwVEoo1aTBQ6gV1KQ4BI8ojEQgnl0ITQ&s",
    }];

    const input = ["testfile1.txt"]
    expect(createTextArray(input, "__tests__/test_files")).toEqual(expectedArray)
  });
});

