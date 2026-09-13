# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [0.9.4] - 2026-09-13

### Changed

- `ThemeProvider` component applies the theme by applying the corresponding class attribute to a presentation `<div>` element.

## [0.9.3] - 2026-09-13

### Fixed

- Theme styles and class names were not correctly exposed.

## [0.9.2] - 2026-09-10

### Changed

- The pre-configured theme's `tokens` might be used.
- GitHub workflow cache implemented when downloading and installing NPM packages.

## [0.9.1] - 2026-09-09

### Changed

- Theme tokens were modified in order to support light and dark theming.

### Added

- Light and dark theme support through `ThemeProvider` and `useTheme` custom hook.
- GitHub workflows for CI/CD best practices.
- README file updated.

## [0.9.0] - 2026-08-31

### Added

- First set of components added: BasicDialog, Button, CollapsibleSection, ContextMenu, DateSelector, Dropdown, FormField, NumericInput, OptionsGroup, PaginationControl, ProgressIndicator, ProtectedInput, QRCode, RangeSlider, ScrollableArea, SelectionBox, Stepper, TabsGroup, TextArea, TextInput, Toggle, UploadFile and UserImage.

[0.9.4]: https://github.com//camiloapaezg/capg-ui-lib
[0.9.3]: https://github.com/camiloapaezg/capg-ui-lib/commit/4fdb5fab930339f77769f505372b55dcac9c79e6
[0.9.2]: https://github.com/camiloapaezg/capg-ui-lib/commit/9893b67ced95f3915fbe12c5f3d69547424753e0
[0.9.1]: https://github.com/camiloapaezg/capg-ui-lib/commit/58399383f2e5c022d3a2b3b92fb4db320b0eeb33
[0.9.0]: https://github.com/camiloapaezg/capg-ui-lib/commit/d5252cc1bb917d398b9f56c64bbbbbdd3355b5b9
