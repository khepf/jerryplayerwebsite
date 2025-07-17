@echo off
echo Building Jerry Player Website...
echo.

REM Navigate to the website directory
cd /d "%~dp0"

REM Install dependencies if node_modules doesn't exist
if not exist "node_modules" (
    echo Installing dependencies...
    npm install
    echo.
)

REM Build the project
echo Building for production...
npm run build

if %errorlevel% neq 0 (
    echo Build failed!
    pause
    exit /b 1
)

echo.
echo Build completed successfully!
echo Output is in the 'dist' folder
echo.

REM Optional: Start a local server to preview the build
choice /c YN /m "Do you want to preview the build locally? (Y/N)"
if errorlevel 2 goto :end
if errorlevel 1 (
    echo Starting preview server...
    npm run preview
)

:end
pause
