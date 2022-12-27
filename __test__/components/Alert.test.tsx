import "@testing-library/jest-dom"
// import { screen } from "@testing-library/react"
import Alert from "../../components/Alert/Alert";
import { render } from "enzyme";

describe('Alert', () => {
    test('render show button', () => {
        const wrapper = render(<Alert 
            isShow={true} message={""} 
            setIsShow={function (): void {
            throw new Error("Function not implemented.");
        } }/>);
        expect(wrapper.text()).toContain(true);

    });

});
