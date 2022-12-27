import "@testing-library/jest-dom"
import { render, screen } from "@testing-library/react"
import Card from "../../components/detailProduct/Card";
import test from "node:test";

describe('Card', () => {
    test("render product card price", () => {
        render(<Card id={""} name={"Ini Barang"} price={0} image={[]} location={""} review={0} rating={0} sold={0} avail={0} />);
        const name = screen.getByRole('name');
        expect(name).toBe('Ini Barang');
    });
    test("render product card price", () => {
        render(<Card id={""} name={""} price={20000} image={[]} location={""} review={0} rating={0} sold={0} avail={0} />);
        const price = screen.getByRole('price');
        expect(price).toBe([20000]);
    });
});
