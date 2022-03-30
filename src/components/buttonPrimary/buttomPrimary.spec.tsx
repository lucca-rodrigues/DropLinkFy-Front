import { ButtonPrimary } from "../buttonPrimary";
describe("<Button />", () => {
  it("should render without errors", () => {
    const defaultProps = {
      title: "Button Title",
    };
    const component = <ButtonPrimary {...defaultProps} />;
    expect(component).toBeTruthy();
  });
});
