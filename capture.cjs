const puppeteer = require('puppeteer');
const path = require('path');
const fs = require('fs');

async function run() {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.setViewport({ width: 1920, height: 1080 });
    
    console.log('Navigating to Lume-V Site...');
    // We'll give it plenty of time to resolve network requests
    await page.goto('http://localhost:5173/', { waitUntil: 'networkidle0' });
    
    // Wait for animations and blur effects to finish
    console.log('Waiting 5000ms for all React load animations to finish...');
    await new Promise(r => setTimeout(r, 5000));
    
    const outDir = 'C:\\Users\\unfor\\.gemini\\antigravity-ide\\brain\\98d54f6a-ca33-42b1-b92b-a7aa467263af';
    
    // We want 8 crisp screenshots from the site to fill the video.
    // Let's scroll through the page and take screenshots at different offsets.
    // A typical Vite landing page has multiple sections. We'll scroll down by 800px each time.
    
    for (let i = 0; i < 8; i++) {
        await page.evaluate((y) => { window.scrollTo(0, y); }, i * 800);
        
        // Wait 1 second after scroll for any scroll-triggered animations
        await new Promise(r => setTimeout(r, 1000));
        
        const outPath = path.join(outDir, `lumev_site_cap_${i}.png`);
        await page.screenshot({ path: outPath });
        console.log(`Captured: ${outPath}`);
    }
    
    await browser.close();
    console.log('All captures complete.');
}

run().catch(e => { console.error(e); process.exit(1); });
