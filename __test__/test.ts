import { draw } from "../helpers/index";
import data from "./test_data.json";

test("draw function exists", () => {
  expect(draw).toBeDefined();
});

interface Itest {
  input: string,
  pixelArrayJson: string
}

data.forEach((test: Itest) => {
  it(test.input + " to return equivalent object", () => {
    const input = test.input.split(",");
    const result = draw(
      Number(input[0]),
      Number(input[1]),
      Number(input[2])
    );
    expect(result).toEqual(JSON.parse(test.pixelArrayJson));
  });
});
