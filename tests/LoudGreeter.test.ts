import LoudGreeter from "../src/LoudGreeter";

describe("LoudGreeter class", () => {
  test(`the greeting property is set by the constructor`, () => {
    const loudGreeter: LoudGreeter = new LoudGreeter("What's up");
    expect(loudGreeter.greeting).toBe("What's up");
  });
  test("the greet method is overwritten and adds the extra exclamation points", () => {
    const loudGreeter: LoudGreeter = new LoudGreeter("Hello");
    expect(loudGreeter.greet("Mitch")).toBe("Hello, Mitch!!");
  });
  test("the addVolume method adds one additional exclamation point", () => {
    const loudGreeter: LoudGreeter = new LoudGreeter("Hello");
    loudGreeter.addVolume();
    loudGreeter.addVolume();
    loudGreeter.addVolume();
    loudGreeter.addVolume();
    expect(loudGreeter.greet("Mitch")).toBe("Hello, Mitch!!!!!!");
  });
});
