@echo off
cd /d "%~dp0"
python preview.py
if errorlevel 1 (
  echo.
  echo The portfolio could not start. Python 3 must be installed and available.
  pause
)
