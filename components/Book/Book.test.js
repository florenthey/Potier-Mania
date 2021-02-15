import React from "react";
import { shallow } from "enzyme";
import Book from "./Book";
import { QueryClientProvider, QueryClient } from "react-query";

describe("<Home />", () => {
  const clientQuery = new QueryClient();
  it("renders without crashing", () => {
    const wrapper = shallow(
      <QueryClientProvider client={clientQuery}>
        <Book />
      </QueryClientProvider>
    );
  });
});
