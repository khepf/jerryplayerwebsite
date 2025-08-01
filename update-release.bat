@echo off
echo Jerry Player Website - Release Update Script
echo =============================================
echo.

:: Check if version parameter is provided
if "%~1"=="" (
    echo Usage: update-release.bat [version]
    echo Example: update-release.bat v1.0.2
    echo.
    pause
    exit /b 1
)

set VERSION=%1
set RELEASES_DIR=releases
set VERSION_DIR=%RELEASES_DIR%\%VERSION%
set LATEST_DIR=%RELEASES_DIR%\latest

echo Updating Jerry Player to version %VERSION%
echo.

:: Create version directory if it doesn't exist
if not exist "%VERSION_DIR%" (
    echo Creating version directory: %VERSION_DIR%
    mkdir "%VERSION_DIR%"
)

:: Copy files to version directory
echo Copying JerryPlayer files to %VERSION_DIR%
if exist "JerryPlayer.zip" (
    copy "JerryPlayer.zip" "%VERSION_DIR%\"
) else (
    echo WARNING: JerryPlayer.zip not found in current directory
)

if exist "Music-Band-Year-Show.zip" (
    copy "Music-Band-Year-Show.zip" "%VERSION_DIR%\"
) else (
    echo WARNING: Music-Band-Year-Show.zip not found in current directory
)

if exist "Music-Band-Year-Show-Song.zip" (
    copy "Music-Band-Year-Show-Song.zip" "%VERSION_DIR%\"
) else (
    echo WARNING: Music-Band-Year-Show-Song.zip not found in current directory
)

:: Create changelog if it doesn't exist
if not exist "%VERSION_DIR%\changelog.txt" (
    echo Creating changelog.txt
    echo Jerry Player %VERSION% > "%VERSION_DIR%\changelog.txt"
    echo. >> "%VERSION_DIR%\changelog.txt"
    echo Changes in this version: >> "%VERSION_DIR%\changelog.txt"
    echo - Add your changes here >> "%VERSION_DIR%\changelog.txt"
)

:: Create README if it doesn't exist
if not exist "%VERSION_DIR%\README.txt" (
    echo Creating README.txt
    echo Jerry Player %VERSION% > "%VERSION_DIR%\README.txt"
    echo ==================== >> "%VERSION_DIR%\README.txt"
    echo. >> "%VERSION_DIR%\README.txt"
    echo A vintage-style music player for Windows >> "%VERSION_DIR%\README.txt"
    echo. >> "%VERSION_DIR%\README.txt"
    echo Installation: >> "%VERSION_DIR%\README.txt"
    echo 1. Extract JerryPlayer.zip >> "%VERSION_DIR%\README.txt"
    echo 2. Run JerryPlayer.exe from the extracted folder >> "%VERSION_DIR%\README.txt"
    echo 3. Create a Music folder or select your music library >> "%VERSION_DIR%\README.txt"
    echo 4. Or download sample libraries and extract them >> "%VERSION_DIR%\README.txt"
    echo. >> "%VERSION_DIR%\README.txt"
    echo For more information, visit: [your website URL] >> "%VERSION_DIR%\README.txt"
)

:: Update latest directory
echo Updating latest directory
if not exist "%LATEST_DIR%" mkdir "%LATEST_DIR%"

if exist "%VERSION_DIR%\JerryPlayer.zip" (
    copy "%VERSION_DIR%\JerryPlayer.zip" "%LATEST_DIR%\"
    echo JerryPlayer.zip copied to latest directory
)

if exist "%VERSION_DIR%\Music-Band-Year-Show.zip" (
    copy "%VERSION_DIR%\Music-Band-Year-Show.zip" "%LATEST_DIR%\"
    echo Music-Band-Year-Show.zip copied to latest directory
)

if exist "%VERSION_DIR%\Music-Band-Year-Show-Song.zip" (
    copy "%VERSION_DIR%\Music-Band-Year-Show-Song.zip" "%LATEST_DIR%\"
    echo Music-Band-Year-Show-Song.zip copied to latest directory
)

:: Update version.txt
echo %VERSION% > "%LATEST_DIR%\version.txt"
echo Version file updated

echo.
echo Release update completed successfully!
echo.
echo Next steps:
echo 1. Update the version number in src/components/DownloadSection.jsx
echo 2. Test the download links on your website
echo 3. Deploy the updated website to your web server
echo.
pause
