import { describe, expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import TodoList from "./TodoList";

describe("TodoList Component", () => {
  test("renders TodoList component", () => {
    render(<TodoList />);
    expect(screen.getByText("Todo List")).toBeDefined();
  });
});