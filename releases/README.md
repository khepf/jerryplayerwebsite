# Jerry Player Releases

This folder will contain the releases of Jerry Player that can be downloaded from the website.

## Instructions for adding new releases:

1. **Build the MyMusicPlayer project** in Release mode
2. **Copy the executable** and any required files to this folder
3. **Update the version number** in the website's DownloadSection component
4. **Test the download link** to ensure it works properly

## Current Structure:
```
releases/
├── v1.0.1/
│   ├── JerryPlayer.exe
│   ├── README.txt
│   └── changelog.txt
└── latest/
    ├── JerryPlayer.exe (symlink or copy of latest version)
    └── version.txt
```

## Adding a new release:

1. Create a new folder with the version number (e.g., `v1.0.2`)
2. Copy the built executable to the version folder
3. Update the `latest` folder with the new version
4. Update the website's download section to point to the new version

## Serving files:

For a production website, you would typically:
- Host these files on a CDN or file server
- Update the download links in the DownloadSection component
- Implement proper download tracking and analytics

## Security considerations:

- Sign the executable files before distribution
- Use HTTPS for all downloads
- Consider adding checksum verification
- Implement download rate limiting if needed
