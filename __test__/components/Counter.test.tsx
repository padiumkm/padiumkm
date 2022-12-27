import "@testing-library/jest-dom"
import { render, screen } from "@testing-library/react"
import Counter from "../../components/detailProduct/Counter";


describe('Counter', () => {
    it("Show Increase Result by Counter", () => {
        render(<Counter 
            quantity={2} 
            increase={function (): void {
            throw new Error("Function not implemented.");
        } } 
            decrease={function (): void {
            throw new Error("Function not implemented.");
        } }/>);
        const quantity = screen.getByTestId('quantity');
        expect(quantity).toMatchObject(2);

    });

});
