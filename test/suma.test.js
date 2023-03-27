import suma from "../includes/suma";

describe("suma", () => {
    test("Fa la suma 1+2=3", () => {
        expect(suma(1, 2)).toBe(3);
    });

    test("Fa la suma 55+55=110", () => {
        expect(suma(55, 55)).toBe(110);
    });

});