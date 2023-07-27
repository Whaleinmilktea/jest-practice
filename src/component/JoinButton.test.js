import { render, screen } from "@testing-library/react";
import JoinButton from "./JoinButton";

test("19세 미만은 가입할 수 없습니다. 색상은 빨간색입니다", () => {
  render(<JoinButton age={17} />)
  const buttonElement = screen.getByRole("button")
  const textElement = screen.getByRole("heading", { level: 3 })
  expect(buttonElement).toBeInTheDocument()
  expect(textElement).toBeInTheDocument()
  expect(buttonElement).toBeDisabled()
  expect(textElement).toHaveStyle({ color: "red" })
})