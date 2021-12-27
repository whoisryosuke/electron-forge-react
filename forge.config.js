module.exports = {
  makers: [
    // MacOS
    {
      name: "@electron-forge/maker-dmg",
      config: {
        background: "./assets/dmg-background.png",
        format: "ULFO",
      },
    },
    // Ubuntu
    {
      name: "@electron-forge/maker-deb",
      config: {
        options: {
          maintainer: "Joe Bloggs",
          homepage: "https://example.com",
        },
      },
    },
    // Windows (Setup file)
    // Requires `mono` and `wine` if building on Mac
    {
      name: "@electron-forge/maker-squirrel",
      config: {
        certificateFile: "./cert.pfx",
        certificatePassword: "this-is-a-secret",
      },
    },
  ],
  plugins: [
    [
      "@electron-forge/plugin-webpack",
      {
        mainConfig: "./webpack.main.config.js",
        renderer: {
          config: "./webpack.renderer.config.js",
          entryPoints: [
            {
              html: "./src/index.html",
              js: "./src/renderer.ts",
              name: "main_window",
            },
          ],
        },
      },
    ],
  ],
  publishers: [
    {
      name: "@electron-forge/publisher-github",
      config: {
        repository: {
          // Change to your Github username
          owner: "whoisryosuke",
          // Change to repo name
          name: "electron-forge-react",
        },
        prerelease: true,
      },
    },
  ],
};
