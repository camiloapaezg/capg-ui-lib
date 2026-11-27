import type { Preview } from "@storybook/react-vite";
import { ThemeProvider } from "../src/components/ThemeProvider";
import "../src/styles/stories.css";
import { ThemeLayout } from "./ThemeLayout";

const preview: Preview = {
  decorators: [
    (Story) => (
      <ThemeProvider
        id="theme-provider"
        style={{
          position: "relative",
          height: "25rem",
          width: "100%",
          marginBottom: "1rem",
        }}
      >
        <ThemeLayout id="storybook-layout">
          <Story />
        </ThemeLayout>
      </ThemeProvider>
    ),
  ],
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    a11y: {
      // 'todo' - show a11y violations in the test UI only
      // 'error' - fail CI on a11y violations
      // 'off' - skip a11y checks entirely
      test: "todo",
    },
  },
};

export default preview;
