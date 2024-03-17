
import Dialog from "./Dialog.js";
import { render, screen, cleanup } from "@testing-library/react";


describe ("Dialog", () => {

    afterEach(() => {
        cleanup(); 
    })
    
    test('Dialog is rendered', () => {
        const { container } = renderComponent();
        const dialog = screen.getByTestId("dialog");
        expect(dialog).toBeInTheDocument();

    })

    test('Dialog is rendered with title', () => {
        const { container } = renderComponent("this is a test title");
        const dialog = screen.getByTestId("dialog");
        expect(dialog).toBeInTheDocument();
        const title = screen.getByText("this is a test title");
        expect(title).toBeInTheDocument();

    })
     
});

function renderComponent(title) {
    return render(<Dialog  title={title} dialogIsOpen={true}/>);
}