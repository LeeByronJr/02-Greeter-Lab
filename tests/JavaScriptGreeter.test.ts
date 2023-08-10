import JavaScriptGreeter from "../src/JavaScriptGreeter";

describe("JavaScriptGreeter Class", () => {
  test(`the greeting property is set by the constructor`, () => {
    const javaScriptGreeter: JavaScriptGreeter = new JavaScriptGreeter(
      "What's up"
    );
    expect(javaScriptGreeter.greeting).toBe("What's up");
  });
  test(`the greet method with (What's up, Mitch) yields the string "console.log('What's up, Mitch!')"`, () => {
    const javaScriptGreeter: JavaScriptGreeter = new JavaScriptGreeter(
      "What's up"
    );
    expect(javaScriptGreeter.greet("Mitch")).toBe(
      "console.log('What's up, Mitch!')"
    );
  });
});
