# GenomeLight 国际化 (i18n) 功能演示

## 🌍 功能概览

GenomeLight网站现已支持完整的国际化功能，用户可以在中文和英文之间自由切换。

## ✨ 主要特性

### 1. 语言切换按钮
- **位置**: 网站头部右上角
- **功能**: 一键切换中文/英文
- **设计**: 地球图标 + 当前语言显示
- **交互**: 悬停效果和平滑过渡

### 2. 自动语言检测
- 基于浏览器语言设置自动选择默认语言
- 支持语言偏好持久化存储（localStorage）

### 3. 完整翻译覆盖
所有内容都已完整翻译，包括：

#### 🏠 导航菜单
- 首页 / Home
- 关于我们 / About Us
- 产品服务 / Services
- 产品详情 / Products
- 联系我们 / Contact Us

#### 🎯 英雄区域
- 主标题和副标题
- 公司介绍文案
- 服务描述
- 行动按钮

#### 🔬 服务介绍
- **基因测序解析服务** → Gene Sequencing Analysis
- **罕见病基因诊断** → Rare Disease Genetic Diagnosis
- **携带者筛查** → Carrier Screening
- 服务特性列表完整翻译

#### 🧬 基因面板分类
12个医学专科分类全部翻译：
- 心血管疾病 → Cardiovascular Disease
- 内分泌代谢 → Endocrine & Metabolism
- 神经系统疾病 → Neurological Disorders
- 肌肉骨骼疾病 → Musculoskeletal Disease
- 发育异常 → Developmental Disorders
- 肾脏疾病 → Kidney Disease
- 听力疾病 → Hearing Disorders
- 视觉疾病 → Vision Disorders
- 多系统疾病 → Multi-system Disease
- 免疫缺陷 → Immunodeficiency
- 皮肤疾病 → Skin Disease
- 血液系统疾病 → Hematological Disease

#### 📞 页脚信息
- 公司信息
- 联系方式
- 法律信息
- 在线表单
- 版权声明

## 🛠 技术实现

### 依赖库
```json
{
  "react-i18next": "15.5.3",
  "i18next": "25.2.1",
  "i18next-browser-languagedetector": "8.2.0"
}
```

### 文件结构
```
src/
├── i18n/
│   ├── index.ts                 # i18n配置
│   └── locales/
│       ├── zh-CN.json          # 中文翻译
│       └── en-US.json          # 英文翻译
└── components/
    └── LanguageToggle.tsx      # 语言切换组件
```

### 使用方式
```typescript
import { useTranslation } from 'react-i18next'

const Component = () => {
  const { t, i18n } = useTranslation()

  return (
    <div>
      <h1>{t('header.companyName')}</h1>
      <button onClick={() => i18n.changeLanguage('en-US')}>
        Switch to English
      </button>
    </div>
  )
}
```

## 🎯 用户体验

1. **即时切换**: 点击语言按钮即可实时切换所有文本
2. **状态保持**: 刷新页面后语言选择保持不变
3. **直观界面**: 清晰显示当前语言和切换目标
4. **响应式设计**: 在所有设备上都能正常使用

## 📱 移动端适配

语言切换按钮在移动端也完全可用，保持了一致的用户体验。

---

**测试方法**: 点击网站右上角的语言切换按钮，观察整个网站内容的即时翻译效果。
