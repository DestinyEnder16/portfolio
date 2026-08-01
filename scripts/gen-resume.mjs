import { chromium } from '@playwright/test'
import { fileURLToPath } from 'url'
import { dirname, join } from 'path'

const __dirname = dirname(fileURLToPath(import.meta.url))
const htmlPath = join(__dirname, 'resume.html')
const outPath = join(__dirname, '..', 'public', 'resume.pdf')

const browser = await chromium.launch()
const page = await browser.newPage()
await page.goto('file://' + htmlPath, { waitUntil: 'networkidle' })
await page.emulateMedia({ media: 'print' })
await page.pdf({
  path: outPath,
  format: 'A4',
  printBackground: true,
  margin: { top: '0', right: '0', bottom: '0', left: '0' },
})
await browser.close()
console.log('Resume PDF written to', outPath)
