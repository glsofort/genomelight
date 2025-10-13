import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// 创建images目录
const imagesDir = path.join(__dirname, 'public', 'images');
if (!fs.existsSync(imagesDir)) {
  fs.mkdirSync(imagesDir, { recursive: true });
}

// 所有需要下载的图片URL
const imageUrls = [
  'https://ext.same-assets.com/4081831888/753706709.jpeg',
  'https://ext.same-assets.com/4081831888/542701640.jpeg', 
  'https://ext.same-assets.com/4081831888/3495893387.jpeg',
  'https://ext.same-assets.com/4081831888/2948968051.jpeg',
  'https://ext.same-assets.com/4081831888/1691569958.png',
  'https://ext.same-assets.com/4081831888/1224048843.jpeg',
  'https://ext.same-assets.com/4081831888/1191796784.jpeg',
  'https://ext.same-assets.com/4081831888/3253282782.png',
  'https://ext.same-assets.com/4081831888/3329168636.png',
  'https://ext.same-assets.com/4081831888/2058622649.png',
  'https://ext.same-assets.com/4081831888/1017918516.png',
  'https://ext.same-assets.com/4081831888/1795410433.png',
  'https://ext.same-assets.com/4081831888/4239303297.png',
  'https://ext.same-assets.com/4081831888/2299838749.jpeg'
];

// 下载图片函数
async function downloadImage(url, filename) {
  try {
    console.log(`正在下载: ${url}`);
    const response = await fetch(url);
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const buffer = await response.arrayBuffer();
    const filePath = path.join(imagesDir, filename);
    
    fs.writeFileSync(filePath, Buffer.from(buffer));
    console.log(`✅ 下载完成: ${filename}`);
    
    return true;
  } catch (error) {
    console.error(`❌ 下载失败 ${url}:`, error.message);
    return false;
  }
}

// 批量下载所有图片
async function downloadAllImages() {
  console.log('开始下载图片...\n');
  
  for (const url of imageUrls) {
    // 从URL中提取文件名
    const urlParts = url.split('/');
    const filename = urlParts[urlParts.length - 1];
    
    await downloadImage(url, filename);
    
    // 添加延迟避免请求过于频繁
    await new Promise(resolve => setTimeout(resolve, 500));
  }
  
  console.log('\n所有图片下载完成！');
}

downloadAllImages();