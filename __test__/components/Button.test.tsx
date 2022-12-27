import "@testing-library/jest-dom"
import { render, screen } from "@testing-library/react"
import Button from "../../components/button/Button";
// import test from "node:test";

describe('Button', () => {
    it("render button children", () => {
        render(<Button children={"Button"} />);
        const button = screen.getByRole('button');
        expect(button).toBe("Button");

    });

});
