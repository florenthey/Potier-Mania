import React from "react";
import { shallow } from "enzyme";
import Cart from "./Cart";
import { QueryClientProvider, QueryClient } from "react-query";

describe("<Cart />", () => {
  const clientQuery = new QueryClient();
  it("renders without crashing", () => {
    const wrapper = shallow(
      <QueryClientProvider client={clientQuery}>
        <Cart />
      </QueryClientProvider>
    );
  });
});
