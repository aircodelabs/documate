import Theme from "rspress/theme";
import { Documate } from "../../../ui/react";
import "../../../ui/react/dist/style.css";

const Layout = () => <Theme.Layout afterNavTitle={<Documate endpoint="" />} />;

export default {
  ...Theme,
  Layout,
};

// eslint-disable-next-line import/export
export * from "rspress/theme";
