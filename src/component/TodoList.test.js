import { render, screen } from "@testing-library/react";
import TodoList from "./TodoList";
import { rest } from "msw";
import { server } from "../mocks/server";

describe("TodoList test", () => {
  it("TodoList라는 제목이 있다.", () => {
    render(<TodoList />);
    const titleElement = screen.getByText("Todo List");
    expect(titleElement).toBeInTheDocument();
  });

  it("리스트가 3개가 나온다", async () => {
    render(<TodoList />);
    const list = await screen.findAllByRole("listitem"); // li
    expect(list.length).toBe(3);
  });

  it("에러가 발생하면 에러 메세지를 보여준다", async () => {
    server.use(
      rest.get(
        "https://jsonplaceholder.typicode.com/todos",
        (req, res, ctx) => {
          return res(ctx.status(500));
        }
      )
    );
    render(<TodoList />);
    const errorMsgElement = await screen.findByText("에러 발생");
    expect(errorMsgElement).toBeInTheDocument();
  });
});
