@echo off
echo Jerry Player Website - Download Test Script
echo ============================================
echo.

echo Testing download functionality...
echo.

:: Test if PHP is available
php --version >nul 2>&1
if %errorlevel% neq 0 (
    echo WARNING: PHP not found. The download.php script requires PHP to be installed.
    echo Please install PHP or test on a web server with PHP support.
    echo.
    pause
    exit /b 1
)

echo PHP is available.

:: Test if release files exist
if not exist "releases\latest\JerryPlayer.exe" (
    echo ERROR: JerryPlayer.exe not found in releases\latest\
    echo Please run update-release.bat first or add the files manually.
    pause
    exit /b 1
)

if not exist "releases\latest\JerryPlayer.zip" (
    echo ERROR: JerryPlayer.zip not found in releases\latest\
    echo Please run update-release.bat first or add the files manually.
    pause
    exit /b 1
)

echo Release files found.

:: Test download.php script
echo Testing download.php script...
echo.

echo Testing EXE download:
php download.php file=JerryPlayer.exe version=latest
echo.

echo Testing ZIP download:
php download.php file=JerryPlayer.zip version=latest
echo.

echo Test completed.
echo.

:: Check if downloads.log was created
if exist "downloads.log" (
    echo Downloads log file created:
    type downloads.log
) else (
    echo No downloads.log file created.
)

echo.
echo Manual testing:
echo 1. Start the development server: npm run dev
echo 2. Open http://localhost:3000 in your browser
echo 3. Scroll to the download section
echo 4. Test both download buttons
echo.
pause
