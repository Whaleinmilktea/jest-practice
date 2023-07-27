import { render, screen } from "@testing-library/react";
import UserList from "./UserList";

describe("UserList test", () => {
  const users = ["user1", "user2", "user3"];
  test("ul이 있다.", () => {
    render(<UserList users={users} />);
    const ulElement = screen.getByRole("list");
    expect(ulElement).toBeInTheDocument();
  });
  test("li는 3개가 나올까?", () => {
    render(<UserList users={[]} />);
    const liElements = screen.queryAllByRole("listitem");
    expect(liElements.length).toBe(0);
    // expect(liElements).not.toBeInTheDocument();
  });
});
