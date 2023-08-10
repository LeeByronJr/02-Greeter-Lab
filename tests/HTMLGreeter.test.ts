import HTMLGreeter from "../src/HTMLGreeter";

describe("HTMLGreeter class", () => {
  test(`the greeting property is set by the constructor`, () => {
    const hTMLGreeter: HTMLGreeter = new HTMLGreeter("What's up");
    expect(hTMLGreeter.greeting).toBe("What's up");
  });
  test("the constructor sets the tagName property", () => {
    const hTMLGreeter: HTMLGreeter = new HTMLGreeter("Sup", "div");
    expect(hTMLGreeter.tagName).toBe("div");
  });
  test("the constructor sets the tagName property with a default value of h1 if no value is provided", () => {
    const hTMLGreeter: HTMLGreeter = new HTMLGreeter("Sup", undefined);
    expect(hTMLGreeter.tagName).toBe("h1");
  });
  test("the greet method is overwritten and constructs a string with the appropriate tagname", () => {
    const hTMLGreeter: HTMLGreeter = new HTMLGreeter("Sup", undefined);
    expect(hTMLGreeter.greet("Mitch")).toBe("<h1>Sup, Mitch!</h1>");
  });
  test("the greet method is overwritten and constructs a string with the appropriate tagname", () => {
    const hTMLGreeter: HTMLGreeter = new HTMLGreeter("Sup", "p");
    expect(hTMLGreeter.greet("Mitch")).toBe("<p>Sup, Mitch!</p>");
  });
});
