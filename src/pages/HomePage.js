import { PageLayout } from "./PageLayout";

import { ProductList, SearchForm } from "../components/index.js";

export const HomePage = ({ filters, pagination, products, loading }) => {
  return PageLayout({
    children: `
      ${SearchForm({ filters, pagination })}
      ${ProductList({ loading, products })}
    `,
  });
};
