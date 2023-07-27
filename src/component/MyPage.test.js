import { render, screen } from "@testing-library/react"
import MyPage from "./MyPage"

test("유저가 없으면 로그인 문구와 버튼을 보여준다", () => {
  render(<MyPage />)
  const loginRequestText = screen.getByText("로그인이 필요합니다.")
  const loginRequestButton = screen.getByRole("button")
  expect(loginRequestText).toBeInTheDocument()
  expect(loginRequestButton).toBeInTheDocument()
  expect(loginRequestButton).toHaveTextContent("로그인")
})

test("유저가 있으면 유저 정보를 보여준다", () => {
  render(<MyPage user={{ name: "Kang" }} />)
  const userName = screen.getByText("Kang님 환영합니다.")
  expect(userName).toBeInTheDocument()
})

test("유저가 name이 없으면 로그인 문구와 버튼을 보여준다.", () => {
  render(<MyPage user="Kang"/>)
  const loginRequestText = screen.getByText(/로그인이 필요합니다/)
  const loginRequestButton = screen.getByRole("button")
  expect(loginRequestText).toBeInTheDocument()
  expect(loginRequestButton).toBeInTheDocument()
  expect(loginRequestButton).toHaveTextContent("로그인")
})