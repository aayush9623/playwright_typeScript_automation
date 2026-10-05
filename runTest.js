const { execSync } = require('child_process');

try {
    console.log('Starting Playwright test...\n');
    
    const result = execSync(
        'npx playwright test tests/RahulshettyacademyLoginAndShop.spec.js --headed',
        {
            cwd: 'c:\\workspace\\Automation\\Playwright\\PlayWright_Automation',
            stdio: 'inherit',
            shell: true
        }
    );
    
    console.log('\n✅ Test execution completed');
} catch (error) {
    console.error('\n❌ Test execution failed:', error.message);
    process.exit(1);
}
