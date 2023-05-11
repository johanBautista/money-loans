import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import OffertPage from "../../../src/app/ofertas/[id]/page";
// import OffertPage from "@/app/ofertas/[id]/page";
// import OffertPage from "src/app/ofertas/[id]/page";
// import OffertPage from "@/pages/offert";

describe("Detail Offert Page", () => {
  // Tests that data is fetched from the API and rendered successfully.
  it("test_fetching_data_successfully", async () => {
    render(<OffertPage />);
    const heading = screen.getByRole("heading", {
      name: /Money Loans/i,
    });

    expect(heading).toBeInTheDocument();
  });
});
