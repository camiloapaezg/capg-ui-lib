# CAPG UI Library

A React component library built with **Ark UI**, **vanilla-extract**, and **TypeScript**.

`@capg/capg-ui-lib` provides accessible, reusable UI components with a consistent visual language, TypeScript support, and built-in light/dark theme support.

## Features

- React 19 support
- TypeScript-first API
- Accessible primitives powered by [Ark UI](https://ark-ui.com/)
- Type-safe styling with [vanilla-extract](https://vanilla-extract.style/)
- Light and dark theme support
- Storybook development environment
- Reusable form and interaction components
- Components exported from a single package entry point

## Installation

```bash
npm install @capg/capg-ui-lib
```

### Peer dependencies

The library requires:

```text
react ^19.2.5
react-dom ^19.2.5
@ark-ui/react ^5.39.0
@vanilla-extract/css ^1.21.2
```

If these dependencies are not already installed:

```bash
npm install react react-dom @ark-ui/react @vanilla-extract/css
```

## Basic usage

Components can be imported directly from the package:

```tsx
import { Button, TextInput, Dropdown, Toggle } from "@capg/capg-ui-lib";

export function Example() {
  return (
    <div>
      <Button
        appearance="Primary"
        label="Save"
        onClick={() => console.log("Saved")}
      />

      <TextInput
        placeholder="Enter your name"
        onValueChange={(_, value) => console.log(value)}
      />

      <Toggle label="Enable notifications" />
    </div>
  );
}
```

---

# Components

The library currently exports the following components:

| Component            | Description                                                        |
| -------------------- | ------------------------------------------------------------------ |
| `BasicDialog`        | Modal dialog with trigger, title and content                       |
| `Button`             | Styled button with multiple appearances and optional icon          |
| `CollapsibleSection` | Accordion-style collapsible sections                               |
| `ContextMenu`        | Context or standard menu with buttons, checkboxes and custom items |
| `DateSelector`       | Date, multiple-date and date-range selector                        |
| `Dropdown`           | Select/dropdown with optional grouping                             |
| `FormField`          | Field wrapper providing label, helper and error text               |
| `NumericInput`       | Numeric input with increment/decrement controls                    |
| `OptionsGroup`       | Radio-button group                                                 |
| `PaginationControl`  | Pagination control with customizable item rendering                |
| `ProgressIndicator`  | Linear or circular progress indicator                              |
| `ProtectedInput`     | Password input with visibility toggle                              |
| `QRCode`             | QR code with optional image overlay                                |
| `RangeSlider`        | Slider supporting single values and ranges                         |
| `ScrollableArea`     | Styled scrollable container                                        |
| `SelectionBox`       | Checkbox-style selection control                                   |
| `Stepper`            | Multi-step navigation component                                    |
| `TabsGroup`          | Tab navigation with associated content                             |
| `TextArea`           | Styled textarea with value-change callback                         |
| `TextInput`          | Styled text input with value-change callback                       |
| `ThemeProvider`      | Light/dark theme context                                           |
| `Toggle`             | Switch/toggle control                                              |
| `UploadFile`         | File upload/drop zone with previews                                |
| `UserImage`          | Avatar/image with fallback                                         |

---

# Button

A styled HTML button supporting several visual appearances and optional icons.

```tsx
import { Button } from "@capg/capg-ui-lib";

<Button appearance="Primary" label="Save" onClick={handleSave} />;
```

### Props

`Button` extends the native `ButtonHTMLAttributes<HTMLButtonElement>`.

| Prop         | Type                                               | Required | Description                      |
| ------------ | -------------------------------------------------- | -------: | -------------------------------- |
| `appearance` | `"Primary" \| "Secondary" \| "Outline" \| "Ghost"` |      Yes | Visual appearance                |
| `label`      | `string`                                           |       No | Button text                      |
| `icon`       | `JSX.Element`                                      |       No | Icon displayed inside the button |
| `className`  | `string`                                           |       No | Additional CSS class             |
| `...rest`    | `ButtonHTMLAttributes<HTMLButtonElement>`          |       No | Native button properties         |

### Appearances

```tsx
<Button appearance="Primary" label="Primary" />
<Button appearance="Secondary" label="Secondary" />
<Button appearance="Outline" label="Outline" />
<Button appearance="Ghost" label="Ghost" />
```

When `label` is omitted, the button receives the icon-button styling:

```tsx
<Button appearance="Ghost" icon={<MyIcon />} />
```

---

# BasicDialog

A modal dialog built on top of Ark UI's dialog primitive.

```tsx
import { BasicDialog, Button } from "@capg/capg-ui-lib";

<BasicDialog
  title="Delete item"
  trigger={<Button appearance="Outline" label="Delete" />}
>
  <p>Are you sure you want to delete this item?</p>
</BasicDialog>;
```

### Props

`BasicDialog` extends `Dialog.RootProps`.

| Prop            | Type                   | Description                     |
| --------------- | ---------------------- | ------------------------------- |
| `trigger`       | `JSX.Element`          | Element used to open the dialog |
| `title`         | `string`               | Dialog title                    |
| `portalProps`   | `PortalProps`          | Props forwarded to the portal   |
| `backdropProps` | `Dialog.BackdropProps` | Props forwarded to the backdrop |
| `titleProps`    | `Dialog.TitleProps`    | Props forwarded to the title    |
| `contentProps`  | `Dialog.ContentProps`  | Props forwarded to the content  |
| `children`      | `React.ReactNode`      | Dialog content                  |
| `...rest`       | `Dialog.RootProps`     | Ark UI dialog properties        |

The dialog includes a built-in close button.

---

# CollapsibleSection

Accordion-style collapsible content.

```tsx
import { CollapsibleSection } from "@capg/capg-ui-lib";

<CollapsibleSection
  items={[
    {
      value: "general",
      title: "General",
      content: "General configuration options.",
    },
    {
      value: "advanced",
      title: "Advanced",
      content: "Advanced configuration options.",
    },
  ]}
/>;
```

### Props

`CollapsibleSection` extends `Accordion.RootProps`.

| Prop          | Type                         | Required |
| ------------- | ---------------------------- | -------: |
| `items`       | `CollapsibleItem[]`          |      Yes |
| `orientation` | Ark UI accordion orientation |       No |
| `className`   | `string`                     |       No |
| `...rest`     | `Accordion.RootProps`        |       No |

### Item

```ts
type CollapsibleItem = {
  value: string;
  title: string;
  content: string;
};
```

Additional Ark UI item properties are also supported.

---

# ContextMenu

A context menu supporting regular menu items, checkbox items, groups, and custom-rendered items.

```tsx
import { ContextMenu } from "@capg/capg-ui-lib";

<ContextMenu
  trigger={<div>Right click me</div>}
  items={[
    {
      category: "button",
      value: "edit",
      text: "Edit",
    },
    {
      category: "button",
      value: "delete",
      text: "Delete",
    },
  ]}
/>;
```

### Props

`ContextMenu` extends Ark UI's `MenuRootProps`.

| Prop             | Type                | Description                                      |
| ---------------- | ------------------- | ------------------------------------------------ |
| `items`          | `ContextMenuItem[]` | Menu items                                       |
| `trigger`        | `JSX.Element`       | Menu trigger                                     |
| `customTrigger`  | `boolean`           | Use the trigger without wrapping it              |
| `asStandardMenu` | `boolean`           | Render a standard menu instead of a context menu |
| `contentProps`   | `Menu.ContentProps` | Content customization                            |
| `...rest`        | `MenuRootProps`     | Ark UI menu properties                           |

### Button item

```tsx
{
  category: "button",
  value: "edit",
  text: "Edit"
}
```

### Checkbox item

```tsx
{
  category: "checkbox",
  value: "show-grid",
  text: "Show grid"
}
```

### Custom item

```tsx
{
  category: "custom",
  value: "custom-action",
  onRenderItem: () => <MyCustomMenuItem />
}
```

Items can optionally be grouped:

```tsx
{
  category: "button",
  value: "copy",
  text: "Copy",
  group: "Clipboard"
}
```

---

# DateSelector

Date picker supporting:

- Single date selection
- Multiple date selection
- Date ranges
- Day/month/year navigation
- Clear action

```tsx
import { DateSelector } from "@capg/capg-ui-lib";

<DateSelector label="Date" selectionMode="single" />;
```

### Single date

```tsx
<DateSelector label="Date" selectionMode="single" />
```

### Date range

```tsx
<DateSelector label="Period" selectionMode="range" />
```

### Multiple dates

```tsx
<DateSelector label="Dates" selectionMode="multiple" />
```

### Props

`DateSelector` extends `DatePicker.RootProps`.

| Prop              | Type                                | Description                   |
| ----------------- | ----------------------------------- | ----------------------------- |
| `label`           | `string`                            | Optional field label          |
| `clearLabel`      | `string`                            | Text for clear button         |
| `selectionMode`   | `"single" \| "multiple" \| "range"` | Selection mode                |
| `positionerProps` | `DatePicker.PositionerProps`        | Positioner customization      |
| `disabled`        | `boolean`                           | Disables the selector         |
| `className`       | `string`                            | Additional class              |
| `...rest`         | `DatePicker.RootProps`              | Ark UI date picker properties |

The default clear label is `"Clear"`.

---

# Dropdown

Select/dropdown component with optional grouping.

```tsx
import { Dropdown } from "@capg/capg-ui-lib";

<Dropdown
  label="Country"
  options={{
    items: [
      { label: "Germany", value: "de" },
      { label: "Spain", value: "es" },
      { label: "France", value: "fr" },
    ],
  }}
/>;
```

### Option

```ts
type DropdownOption = {
  label: string;
  value: string;
  disabled?: boolean;
  group?: string;
};
```

### Grouped options

```tsx
<Dropdown
  label="Country"
  group
  options={{
    items: [
      {
        label: "Germany",
        value: "de",
        group: "Europe",
      },
      {
        label: "Japan",
        value: "jp",
        group: "Asia",
      },
    ],
  }}
/>
```

### Props

| Prop              | Type                       | Description              |
| ----------------- | -------------------------- | ------------------------ |
| `options`         | `DropdownOptions`          | Collection options       |
| `label`           | `string`                   | Optional label           |
| `group`           | `boolean`                  | Enable grouping          |
| `valueTextProps`  | `Select.ValueTextProps`    | Value text customization |
| `positionerProps` | `Select.PositionerProps`   | Positioner customization |
| `contentProps`    | `Select.ContentProps`      | Content customization    |
| `...rest`         | `SelectRootComponentProps` | Ark UI select properties |

When there are no items, the component displays `"No items to display"`.

---

# FormField

Generic form-field wrapper providing label, helper text, and validation error text.

```tsx
import { FormField, TextInput } from "@capg/capg-ui-lib";

<FormField label="Username" helperText="Enter your public username.">
  <TextInput placeholder="Username" />
</FormField>;
```

### Props

`FormField` extends `Field.RootProps`.

| Prop         | Type              | Description             |
| ------------ | ----------------- | ----------------------- |
| `label`      | `string`          | Field label             |
| `helperText` | `string`          | Supporting text         |
| `errorText`  | `string`          | Validation error        |
| `children`   | `React.ReactNode` | Field control           |
| `...rest`    | `Field.RootProps` | Ark UI field properties |

---

# NumericInput

Numeric input with increment and decrement controls.

```tsx
import { NumericInput } from "@capg/capg-ui-lib";

<NumericInput label="Quantity" min={0} max={100} defaultValue={10} />;
```

### Props

`NumericInput` extends `NumberInput.RootProps`.

| Prop      | Type                    | Description                    |
| --------- | ----------------------- | ------------------------------ |
| `label`   | `string`                | Optional label                 |
| `...rest` | `NumberInput.RootProps` | Ark UI number-input properties |

Ark UI properties such as `min`, `max`, `step`, `defaultValue`, `value`, and change handlers can therefore be used.

---

# OptionsGroup

Radio-button group for selecting one option.

```tsx
import { OptionsGroup } from "@capg/capg-ui-lib";

<OptionsGroup
  label="Size"
  items={[
    {
      value: "small",
      text: "Small",
    },
    {
      value: "medium",
      text: "Medium",
    },
    {
      value: "large",
      text: "Large",
    },
  ]}
/>;
```

### Item

```ts
type OptionsGroupItem = {
  value: string;
  text: string;
};
```

The item also supports Ark UI `RadioGroup.ItemProps`.

### Props

| Prop      | Type                   | Required |
| --------- | ---------------------- | -------: |
| `items`   | `OptionsGroupItem[]`   |      Yes |
| `label`   | `string`               |       No |
| `...rest` | `RadioGroup.RootProps` |       No |

---

# PaginationControl

Pagination component with optional rendering of the items associated with the current page.

```tsx
import { PaginationControl } from "@capg/capg-ui-lib";

<PaginationControl
  count={100}
  pageSize={10}
  items={data}
  onRenderItem={(item) => <div>{String(item)}</div>}
/>;
```

### Props

`PaginationControl` extends `Pagination.RootProps`.

| Prop            | Type                                | Description                       |
| --------------- | ----------------------------------- | --------------------------------- |
| `items`         | `unknown[]`                         | Items to paginate                 |
| `onRenderItems` | `(pagination) => React.ReactNode`   | Custom rendering before the items |
| `onRenderItem`  | `(item, pagination) => JSX.Element` | Custom rendering for each item    |
| `className`     | `string`                            | Additional class                  |
| `...rest`       | `Pagination.RootProps`              | Ark UI pagination properties      |

The component automatically renders:

- Previous button
- Page buttons
- Ellipsis
- Next button

---

# ProgressIndicator

Progress indicator supporting circular and linear appearances.

```tsx
import { ProgressIndicator } from "@capg/capg-ui-lib";

<ProgressIndicator appearance="Circular" value={65} label="Uploading" />;
```

### Circular

```tsx
<ProgressIndicator appearance="Circular" value={65} label="Progress" />
```

### Linear

```tsx
<ProgressIndicator appearance="Linear" value={65} label="Progress" />
```

### Props

`ProgressIndicator` extends `Progress.RootProps`.

| Prop         | Type                     | Required |
| ------------ | ------------------------ | -------: |
| `appearance` | `"Linear" \| "Circular"` |      Yes |
| `label`      | `string`                 |       No |
| `...rest`    | `Progress.RootProps`     |       No |

---

# ProtectedInput

Password input with a built-in visibility toggle.

```tsx
import { ProtectedInput } from "@capg/capg-ui-lib";

<ProtectedInput label="Password" placeholder="Enter your password" />;
```

### Props

`ProtectedInput` extends `PasswordInput.RootProps`.

| Prop      | Type                      | Description                      |
| --------- | ------------------------- | -------------------------------- |
| `label`   | `string`                  | Optional label                   |
| `...rest` | `PasswordInput.RootProps` | Ark UI password-input properties |

The component automatically renders eye/eye-off icons for the visibility control.

---

# QRCode

QR code component based on Ark UI's QR code primitive.

```tsx
import { QRCode } from "@capg/capg-ui-lib";

<QRCode value="https://example.com" size={200} />;
```

### Image overlay

```tsx
<QRCode
  value="https://example.com"
  overlayProps={{
    src: "/logo.png",
    alt: "Logo",
  }}
/>
```

### Props

`QRCode` extends `QrCode.RootProps`.

| Prop           | Type                                  | Description                               |
| -------------- | ------------------------------------- | ----------------------------------------- |
| `overlayProps` | `ImgHTMLAttributes<HTMLImageElement>` | Optional image displayed over the QR code |
| `className`    | `string`                              | Additional class                          |
| `...rest`      | `QrCode.RootProps`                    | Ark UI QR-code properties                 |

---

# RangeSlider

Slider supporting both single values and ranges.

```tsx
import { RangeSlider } from "@capg/capg-ui-lib";

<RangeSlider label="Volume" min={0} max={100} defaultValue={[50]} />;
```

### Range

```tsx
<RangeSlider label="Price" min={0} max={1000} defaultValue={[200, 800]} />
```

When `defaultValue` contains two values, the component renders two slider thumbs.

### Marks

```tsx
<RangeSlider
  label="Price"
  min={0}
  max={100}
  defaultValue={[50]}
  marks={[0, 25, 50, 75, 100]}
/>
```

### Props

`RangeSlider` extends `Slider.RootProps`.

| Prop           | Type               | Description              |
| -------------- | ------------------ | ------------------------ |
| `label`        | `string`           | Optional label           |
| `marks`        | `number[]`         | Optional slider marks    |
| `orientation`  | Slider orientation | Horizontal or vertical   |
| `defaultValue` | `number[]`         | Initial value/range      |
| `...rest`      | `Slider.RootProps` | Ark UI slider properties |

---

# ScrollableArea

Styled scrollable container supporting vertical and horizontal scrolling.

```tsx
import { ScrollableArea } from "@capg/capg-ui-lib";

<ScrollableArea>
  <div>Large amount of content...</div>
</ScrollableArea>;
```

### Horizontal scrolling

```tsx
<ScrollableArea orientation="horizontal">
  <div>Wide content...</div>
</ScrollableArea>
```

### Props

`ScrollableArea` extends `ScrollArea.RootProps`.

| Prop          | Type                         | Description                   |
| ------------- | ---------------------------- | ----------------------------- |
| `orientation` | `"vertical" \| "horizontal"` | Scrollbar orientation         |
| `children`    | `React.ReactNode`            | Scrollable content            |
| `className`   | `string`                     | Additional class              |
| `...rest`     | `ScrollArea.RootProps`       | Ark UI scroll-area properties |

If no orientation is specified, both vertical and horizontal scrollbars are available.

---

# SelectionBox

Checkbox-style selection control.

```tsx
import { SelectionBox } from "@capg/capg-ui-lib";

<SelectionBox
  label="I agree to the terms"
  checked={accepted}
  onCheckedChange={(details) => {
    setAccepted(details.checked);
  }}
/>;
```

### Props

`SelectionBox` extends `Checkbox.RootProps`.

| Prop      | Type                         | Required |
| --------- | ---------------------------- | -------: |
| `label`   | `string`                     |      Yes |
| `checked` | `boolean \| "indeterminate"` |       No |
| `...rest` | `Checkbox.RootProps`         |       No |

The component displays a checkmark for a checked state and a horizontal line for an indeterminate state.

---

# Stepper

Multi-step navigation component.

```tsx
import { Stepper } from "@capg/capg-ui-lib";

<Stepper
  items={[
    {
      value: "account",
      title: "Account",
      content: <AccountStep />,
    },
    {
      value: "profile",
      title: "Profile",
      content: <ProfileStep />,
    },
    {
      value: "confirmation",
      title: "Confirmation",
      content: <ConfirmationStep />,
    },
  ]}
  completedContent={<p>Completed!</p>}
/>;
```

### Item

```ts
type StepperItem = {
  value: string;
  title: string;
  content?: React.ReactNode;
};
```

### Props

| Prop               | Type                                | Required |
| ------------------ | ----------------------------------- | -------: |
| `items`            | `StepperItem[]`                     |      Yes |
| `completedContent` | `JSX.Element`                       |      Yes |
| `contentProps`     | `Steps.ContentProps`                |       No |
| `...rest`          | `Steps.RootProps` excluding `count` |       No |

The component automatically calculates the step count from `items`.

It also provides built-in:

- Back button
- Next button
- Completed content
- Step indicators
- Step separators

---

# TabsGroup

Tab navigation with associated content.

```tsx
import { TabsGroup } from "@capg/capg-ui-lib";

<TabsGroup
  defaultValue="overview"
  items={[
    {
      value: "overview",
      title: "Overview",
      content: <Overview />,
    },
    {
      value: "settings",
      title: "Settings",
      content: <Settings />,
    },
  ]}
/>;
```

### Item

```ts
type TabsGroupItem = {
  value: string;
  title: string;
  content: React.ReactNode;
  triggerProps?: Tabs.TriggerProps;
  contentProps?: Tabs.ContentProps;
};
```

### Props

| Prop      | Type              | Required |
| --------- | ----------------- | -------: |
| `items`   | `TabsGroupItem[]` |      Yes |
| `...rest` | `Tabs.RootProps`  |       No |

Individual tab triggers and content areas can be customized through `triggerProps` and `contentProps`.

---

# TextInput

Styled text input with a simplified value-change callback.

```tsx
import { TextInput } from "@capg/capg-ui-lib";

<TextInput
  placeholder="Enter your name"
  onValueChange={(event, value) => {
    console.log(value);
  }}
/>;
```

### Props

`TextInput` is based on Ark UI's `Field.InputProps`.

The native `onChange` prop is replaced by:

```ts
onValueChange?: (
  event: React.ChangeEvent<HTMLInputElement>,
  newValue?: string,
) => void;
```

Other supported input properties are inherited from Ark UI.

---

# TextArea

Styled textarea with a simplified value-change callback.

```tsx
import { TextArea } from "@capg/capg-ui-lib";

<TextArea
  placeholder="Write a description..."
  rows={5}
  onValueChange={(event, value) => {
    console.log(value);
  }}
/>;
```

### Props

`TextArea` is based on Ark UI's `Field.TextareaProps`.

The native `onChange` prop is replaced by:

```ts
onValueChange?: (
  event: React.ChangeEvent<HTMLTextAreaElement>,
  newValue?: string,
) => void;
```

---

# ThemeProvider

Provides access to the library's light/dark theme classes through React context.

```tsx
import { ThemeProvider, useTheme } from "@capg/capg-ui-lib";

function App() {
  return (
    <ThemeProvider>
      <Application />
    </ThemeProvider>
  );
}
```

The provider starts with the light theme.

### useTheme

```tsx
function ThemeToggle() {
  const { className, onToggleTheme } = useTheme();

  return (
    <button className={className} onClick={() => onToggleTheme?.(true)}>
      Dark mode
    </button>
  );
}
```

The theme context provides:

```ts
type ThemeProviderState = {
  className: string;
  onToggleTheme?: (dark: boolean) => void;
};
```

### Important

`ThemeProvider` provides the active theme class through context. Consumers can use the returned `className` on the application/container element that should receive the theme.

For example:

```tsx
function Application() {
  const { className } = useTheme();

  return (
    <div className={className}>
      <YourApplication />
    </div>
  );
}
```

---

# Toggle

Switch/toggle control.

```tsx
import { Toggle } from "@capg/capg-ui-lib";

<Toggle
  label="Enable notifications"
  checked={enabled}
  onCheckedChange={(details) => {
    setEnabled(details.checked);
  }}
/>;
```

### Props

`Toggle` extends `Switch.RootProps`.

| Prop      | Type               | Description              |
| --------- | ------------------ | ------------------------ |
| `label`   | `string`           | Optional label           |
| `...rest` | `Switch.RootProps` | Ark UI switch properties |

---

# UploadFile

File upload component supporting drag-and-drop, file selection, previews, and deletion.

```tsx
import { UploadFile } from "@capg/capg-ui-lib";

<UploadFile label="Documents" accept="application/pdf,image/*" maxFiles={5} />;
```

By default, the component displays a drag-and-drop area.

### Custom trigger

```tsx
<UploadFile trigger={<Button appearance="Outline" label="Select files" />} />
```

### Custom drop-zone text

```tsx
<UploadFile title="Upload documents" description="PDF files up to 10 MB" />
```

### Compact mode

```tsx
<UploadFile compact />
```

Compact mode removes the file preview and file-size display.

### Props

`UploadFile` extends `FileUpload.RootProps`.

| Prop          | Type                   | Description                   |
| ------------- | ---------------------- | ----------------------------- |
| `label`       | `string`               | Optional field label          |
| `trigger`     | `JSX.Element`          | Custom upload trigger         |
| `title`       | `string`               | Drop-zone title               |
| `description` | `string`               | Drop-zone description         |
| `compact`     | `boolean`              | Compact selected-file display |
| `...rest`     | `FileUpload.RootProps` | Ark UI file-upload properties |

Default drop-zone text:

```text
Drag and drop files here
or click to browse
```

The component provides previews for:

- Images
- Videos
- PDF documents
- Generic files

---

# UserImage

Avatar/image component with fallback content.

```tsx
import { UserImage } from "@capg/capg-ui-lib";

<UserImage
  fallback="CA"
  imageProps={{
    src: "/avatar.jpg",
    alt: "Camilo Páez",
  }}
/>;
```

### Props

`UserImage` extends `Avatar.RootProps`.

| Prop         | Type                | Required | Description              |
| ------------ | ------------------- | -------: | ------------------------ |
| `fallback`   | `string`            |      Yes | Fallback content         |
| `imageProps` | `Avatar.ImageProps` |       No | Image properties         |
| `className`  | `string`            |       No | Additional class         |
| `...rest`    | `Avatar.RootProps`  |       No | Ark UI avatar properties |

---

# Styling and themes

The library uses vanilla-extract for component styling.

Components include their own predefined styles while allowing consumers to provide additional `className` values where supported.

The library also provides light and dark theme classes through the `ThemeProvider`.

Example:

```tsx
import { ThemeProvider, useTheme } from "@capg/capg-ui-lib";

function App() {
  const { className, onToggleTheme } = useTheme();

  return (
    <div className={className}>
      <button onClick={() => onToggleTheme?.(true)}>Dark</button>

      <button onClick={() => onToggleTheme?.(false)}>Light</button>

      <Application />
    </div>
  );
}

export default function Root() {
  return (
    <ThemeProvider>
      <App />
    </ThemeProvider>
  );
}
```

---

# TypeScript

The library is written in TypeScript and exports component prop types.

For example:

```tsx
import { Button, type ButtonProps } from "@capg/capg-ui-lib";

const props: ButtonProps = {
  appearance: "Primary",
  label: "Save",
};
```

The component-specific types are also available from the package's main export.

---

# Accessibility

The components are built on top of Ark UI primitives, which provide the behavioral and accessibility foundation for many of the interactive components.

Examples include:

- Dialog
- Accordion
- Menu
- Date picker
- Select
- Number input
- Radio group
- Pagination
- Progress
- Password input
- Slider
- Checkbox
- Steps
- Tabs
- Switch
- File upload
- Avatar

Applications should still provide appropriate labels, accessible names, descriptions, and other application-specific accessibility information.

For example:

```tsx
<QRCode
  value="https://example.com"
  overlayProps={{
    src: "/logo.png",
    alt: "Company logo",
  }}
/>
```

---

# Development

Clone the repository:

```bash
git clone https://github.com/camiloapaezg/capg-ui-lib.git
cd capg-ui-lib
```

Install dependencies:

```bash
npm install
```

## Build

```bash
npm run build
```

## Lint

```bash
npm run lint
```

## Storybook

Start Storybook:

```bash
npm run start
```

Storybook will run on:

```text
http://localhost:6006
```

## Build Storybook

```bash
npm run build-storybook
```

---

# Project structure

The components are organized under:

```text
src/
├── components/
│   ├── BasicDialog/
│   ├── Button/
│   ├── CollapsibleSection/
│   ├── ContextMenu/
│   ├── DateSelector/
│   ├── Dropdown/
│   ├── FormField/
│   ├── NumericInput/
│   ├── OptionsGroup/
│   ├── PaginationControl/
│   ├── ProgressIndicator/
│   ├── ProtectedInput/
│   ├── QRCode/
│   ├── RangeSlider/
│   ├── ScrollableArea/
│   ├── SelectionBox/
│   ├── Stepper/
│   ├── TabsGroup/
│   ├── TextArea/
│   ├── TextInput/
│   ├── ThemeProvider/
│   ├── Toggle/
│   ├── UploadFile/
│   └── UserImage/
├── styles/
└── main.ts
```

All components are re-exported from:

```text
src/components/index.ts
```

and the package entry point exports the component collection through:

```text
src/main.ts
```

Therefore consumers can use:

```tsx
import { Button, Dropdown, TextInput, DateSelector } from "@capg/capg-ui-lib";
```

rather than importing components from internal paths.

---

# Dependencies

The library uses:

- [React](https://react.dev/)
- [Ark UI](https://ark-ui.com/)
- [vanilla-extract](https://vanilla-extract.style/)
- [clsx](https://github.com/lukeed/clsx)
- [Iconify](https://iconify.design/)

Ark UI provides the behavioral primitives, while vanilla-extract provides the styling layer.

---

# Package information

```json
{
  "name": "@capg/capg-ui-lib",
  "version": "0.9.0",
  "license": "ISC"
}
```

The package exposes both ESM and CommonJS builds as well as TypeScript declarations.

---

# License

ISC License.

---

# Repository

Source code and development information:

https://github.com/camiloapaezg/capg-ui-lib

```


This is based on the **actual exported components and their current TypeScript APIs**, including the component-specific types rather than just their names.

One thing I would **strongly recommend before putting this into the repository**: I can make a second pass specifically over the **Storybook stories** and turn the README into a more polished npm-quality documentation page, with the actual examples from your stories, a component API table, installation instructions, theme setup, and a component index. That would make it considerably more useful to someone consuming `@capg/capg-ui-lib`.
```
