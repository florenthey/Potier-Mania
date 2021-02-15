import React from "react";
import { shallow } from "enzyme";
import SearchBar from "./SearchBar";
import { QueryClientProvider, QueryClient } from "react-query";

describe("<SearchBar />", () => {
  const clientQuery = new QueryClient();
  it("renders without crashing", () => {
    const wrapper = shallow(
      <QueryClientProvider client={clientQuery}>
        <SearchBar />
      </QueryClientProvider>
    );
  });
});
