import "@testing-library/jest-dom"
import { render, screen } from "@testing-library/react"
import Card from "../../components/detailProduct/Card";
import test from "node:test";

describe('Card', () => {
    test("render product card", () => {
        const cards = [
            {
                price: 100,
                name: "gergaji",
                avail: 10,
                sold: 5,
                rating: 3,
                
            }
        ]
        render(<Card Card={cards} />);
        const anchorElements = screen.getAllByRole("navigation");
        expect(anchorElements[0]).toBe(cards[0].price);
        expect(anchorElements[0]).toHaveTextContent(cards[0].name);
        expect(anchorElements[0]).toBe(cards[0].avail);
        expect(anchorElements[0]).toBe(cards[0].sold);
        expect(anchorElements[0]).toBe(cards[0].rating);

    });

});
