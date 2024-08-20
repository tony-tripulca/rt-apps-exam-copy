# RT-Apps

This repository contains a Nx monorepo containing multiple `apps` and `libs`.

Use `nx graph` to get a graph overview of how these libraries inherit each other.

## Libraries

Libraries should contain **reusable code only!**

### UI-Components

The `ui-components` library should contain basic "dumb" components. No functionality!

### Data

The `data` library contains all the code to call external API's and systems.

### Features

The `features` library should contain entire reusable features (e.g. an article list). These are built with one or multiple `ui-components`. The feature's state is also managed here, as well as handling multiple possible states (e.g. list empty, loading states, etc.)

## Apps

The branded apps go here. Ideally, these should be as empty as possible, using the features library as much as possible. Here, you define the app's pages/routes, handle interactions with the router and optionally add app-specific code.

## Installation

### Requirements

- NodeJS
  - Optionally [Volta](https://volta.sh/) as version manager.
  - [Expo recommends only usage of even-numbered LTS releases.](https://docs.expo.dev/get-started/installation/#requirements)
    Node 20 LTS is currently working.

### Nx CLI

You can [install the Nx CLI globally](https://nx.dev/getting-started/installation#installing-nx-globally). You can also use `npx nx` to run CLI commands.

### Nx IDE Integrations

Nx also has multiple IDE integrations. The [VSCode Integration](https://nx.dev/features/integrate-with-editors#official-integrations) is highly recommended to view and run the available commands.

This extension is part of the VSCode recommended extensions. You should install all of them.

### Local environment

With Nx setup, install the npm packages from the root directory. After that, follow [these instructions](https://docs.expo.dev/guides/local-app-development/#prerequisites) to prepare your local machine for iOS and/or Android development.

To run an app (e.g. `footballtransfers-app`) from the command line, run `nx start footballtranfers-app`. This should start the Metro server. **Verify that the console outputs `Using development build`**.

### Creating a development build

After this, in a separate command window run `nx run-ios footballtransfers-app` for iOS. Use `nx run-android footballtransfers-app` for Android.

This compiles the app locally and installs it on the simulator. After this, you can use the `i` and `a` keys inside Metro to launch the development build.

## Pitfalls

### Auto Linking

When using auto-linking, some Expo and other required packages are not properly linked. This gives weird issues when opening the app, e.g. `requireNativeComponent: "RNSScreen" was not found in the UIManager`. Ensure that all required packages are referenced inside the **project's `package.json`**.

Packages that often cause these issues:

- `react-native-screens`
- `react-native-safe-area-context`
- `expo-dev-client`
- `react-native-svg`

A solution is to manually add these to the `package.json`. Then create an entirely new development build and verify the issues are gone.

## Nx Monorepo Conig

### ESLint Expo config

Expo apps and libraries should have their ESLint config extended as per the [Expo Docs](https://docs.expo.dev/guides/using-eslint/). This is done manually.
