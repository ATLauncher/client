# ATLauncher Client

[![Build Status](https://travis-ci.org/ATLauncher/client.svg?branch=master)](https://travis-ci.org/ATLauncher/client)
[![Discord](https://discordapp.com/api/guilds/117047818136322057/embed.png?style=shield)](https://atl.pw/discordfromgithub)

## What is it?

ATLauncher client using modern web technologies. Install, play and create modpacks for Minecraft
with ease.

## Technologies used

We used the [Electron React Boilerplate](https://github.com/electron-react-boilerplate/electron-react-boilerplate)
to bootstrap the application as a working base.

-   [React](https://facebook.github.io/react/)
-   [Webpack](https://webpack.github.io/)
-   [Redux](http://redux.js.org/)
-   [React Router](https://github.com/ReactTraining/react-router)
-   [ESLint](http://eslint.org/)
-   [Jest](https://facebook.github.io/jest/)
-   [Yarn](https://yarnpkg.com/)

## Links

-   [ATLauncher Website](https://www.atlauncher.com)
-   [ATLauncher Discord](https://atl.pw/discordfromgithub)
-   [ATLauncher Facebook](https://www.facebook.com/ATLauncher)
-   [ATLauncher Reddit](https://www.reddit.com/r/ATLauncher)
-   [ATLauncher Twitter](https://twitter.com/ATLauncher)

## Getting setup

To get started you'll need to first install the following:

-   [NodeJS](https://nodejs.org/en/) (use the latest LTS version)
-   [Yarn](https://yarnpkg.com/en/)

If you're running on Windows, you'll also need to install the
[windows build tools](https://www.npmjs.com/package/windows-build-tools).

Then you can install all the dependencies needed by running:

```sh
yarn
```

## Development

To begin development, you need to run:

```sh
yarn dev
```

We recommend using [Visual Studio Code](https://code.visualstudio.com/) to develop this application
as it's what we use and we have settings and launch programs specificly committed to aid with the
development process.

## Building binaries

In order to build the binaries, simply run:

```sh
yarn package
```

This will build binaries for the current system you're on. For instance if you're on Windows, it
will build the binaries for Windows.

## Testing

To test the code, simply run:

```sh
yarn test
```

To run the end to end tests, run:

```sh
yarn test:e2e
```

## Contributing

If you wish to contribute to this repository in any way, take a look at
[CONTRIBUTING.md](CONTRIBUTING.md).
