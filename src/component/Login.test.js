import { render, screen } from "@testing-library/react";
import Login from "./Login";
import userEvent from "@testing-library/user-event";

describe("Login test", () => {
  it("처음에는 로그인 버튼이 있다.", () => {
    render(<Login />);
    const btnEl = screen.getByRole("button");
    expect(btnEl).toHaveTextContent("Login");
  });

  const user = userEvent.setup();
  it("버튼을 클릭하면 Logout으로 바뀐다.", async () => {
    render(<Login />);
    const btnEl = screen.getByRole("button");
    await user.click(btnEl);
    await user.click(btnEl);
    await user.click(btnEl);
    expect(btnEl).toHaveTextContent("Logout");
  })

    it("tab, space, enter 키를 누르면 Logout으로 바뀐다.", async () => {
    render(<Login />);
    const btnEl = screen.getByRole("button");
    await user.tab(); // 포커싱
    await user.keyboard(" "); // 스페이스키
    expect(btnEl).toHaveTextContent("Logout");
  })
});
