import React from "react";
import { shallow } from "enzyme";
import BookList from "./BookList";
import { QueryClientProvider, QueryClient } from "react-query";

describe("<Home />", () => {
  const clientQuery = new QueryClient();
  it("renders without crashing", () => {
    const wrapper = shallow(
      <QueryClientProvider client={clientQuery}>
        <BookList />
      </QueryClientProvider>
    );
  });
});
