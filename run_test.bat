@echo off
cd /d "c:\workspace\Automation\Playwright\PlayWright_Automation"
npx playwright test tests/RahulshettyacademyLoginAndShop.spec.js --headed
pause
