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
};
