import { render } from "@testing-library/react";
import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { MemoryRouter, Routes, Route } from "react-router-dom";

// create a customRender that wraps the UI in a memory Router

const Wrapper = ({ children }) => {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <MemoryRouter>{children}</MemoryRouter>
    </QueryClientProvider>
  );
};
const customRender = (ui, options) => {
  return render(ui, { wrapper: Wrapper, ...options });
};

const customRenderRouterLayout = (layout, testComponent, options) => {
  const component = (
    <Routes>
      <Route path="/" element={layout}>
        <Route path="/" element={testComponent} />
      </Route>
    </Routes>
  );
  return customRender(component, options);
};

// re-export everything

export * from "@testing-library/react";
// override render method

export { customRender as render, customRenderRouterLayout as renderLayout };
