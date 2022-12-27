import "@testing-library/jest-dom"
// import { screen } from "@testing-library/react"
import Alert from "../../components/Alert/Alert";
import { render } from "enzyme";

describe('Alert', () => {
    test('render show button', () => {
        const wrapper = render(<Alert isShow={true}/>);
        expect(wrapper.text()).to.contain(true);

    });

});
