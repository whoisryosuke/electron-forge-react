# Electron Forge React Template

Template for starting new React projects in Electron. Uses [Electron Forge](https://www.electronforge.io/) as basis.

## Features

- Electron
- Electron Forge
- React
- Typescript
- ESLint

## Distribution Builds

- MacOS (`.app` via `.dmg`)
- Windows (Setup `.exe`)
- Linux (`.deb`)

## Development

1. Clone this repo.
1. Run `yarn` in root to install dependencies
1. Run `yarn start` to spin up development server and open the Electron window

## Deployment

Building to each platform currently requires a Mac or Windows for each respective build.

1. Run `yarn make` in the project root to build project.
1. Run `yarn package` to create the distribution builds.
   - Repeat process for each necessary platform (Windows, Mac, and/or Linux)
