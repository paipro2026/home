/* 派+ · 官网国际化（中 / EN） */
(function () {
  'use strict';

  const STORAGE_KEY = 'paipro-lang';
  const SITE_URL = 'https://pplus2026.github.io/home/';

  const SHOWCASE_IMAGES = {
    zh: [
      'assets/images/app-screenshot-1.jpg',
      'assets/images/app-screenshot-2.jpg',
      'assets/images/app-screenshot-3.jpg',
    ],
    en: [
      'assets/images/app-screenshot-1-en.jpg',
      'assets/images/app-screenshot-2-en.jpg',
      'assets/images/app-screenshot-3-en.jpg',
    ],
  };

  const PHILOSOPHY_IMAGES = {
    zh: [
      'assets/images/splash-screen-1.jpg',
      'assets/images/splash-screen-2.jpg',
      'assets/images/splash-screen-3.jpg',
    ],
    en: [
      'assets/images/splash-screen-1-en.jpg',
      'assets/images/splash-screen-2-en.jpg',
      'assets/images/splash-screen-3-en.jpg',
    ],
  };

  const T = {
    zh: {
      meta: {
        indexTitle: '派+ · 私人正念与冥想空间',
        indexDesc: '派+ —— 一款融合动态玻璃质感与坚实隐私保护的私人正念冥想 App。沉浸式场景音景、Face ID 加密日记、智能地理围栏提醒。',
        privacyTitle: '隐私政策 · 派+',
        termsTitle: '用户协议 · 派+',
      },
      nav: {
        features: '功能',
        showcase: '界面',
        philosophy: '理念',
        download: '下载',
        downloadApp: '下载 App',
        downloadShort: '下载',
        backHome: '返回首页',
        langLabel: '语言',
        switchToZh: '切换到中文',
        switchToEn: '切换到英文',
      },
      hero: {
        tag: '为现代人打造的正念空间',
        title: '在喧嚣世界中，<br/>找回<em>属于你</em>的那片宁静。',
        sub: '派+ 以动态玻璃质感与场景化音景，为你构建私密、安全、智能的冥想伴侣 —— 每一次呼吸，都被温柔守护。',
        ctaApp: 'App Store 下载',
        ctaMore: '了解更多',
        meta1l: 'Face ID', meta1s: '隐私加密',
        meta2l: 'i18n', meta2s: '中英双语',
        meta3l: 'Geofence', meta3s: '智能提醒',
        float1t: '呼吸 · 3 分钟', float1s: '心率下降 12 BPM',
        float2t: '日记已上锁', float2s: 'Face ID 守护',
      },
      features: {
        eyebrow: 'CORE FEATURES',
        title: '为<em>心灵</em>设计的六大模块',
        desc: '围绕「隐私安全 · 心灵宁静 · 智能体验」三大主轴，每一个细节都旨在让你专注当下。',
        f1t: '场景化冥想与专注', f1d: '深度睡眠、清晨唤醒、自然流水…… 多场景沉浸式音景陪伴每一个时刻。',
        f1a: 'Liquid Glass', f1b: '沉浸音景',
        f2t: 'Face ID 加密日记', f2d: '面容/指纹级别的原生防护，切到后台<strong>瞬间上锁</strong>，让心事永远只属于你。',
        f2a: 'Biometric Lock', f2b: '后台自动加锁',
        f3t: '智能地理围栏提醒', f3d: '抵达「外滩」「瑜伽馆」时，温柔通知提醒你停下脚步，深呼吸三次。',
        f3a: 'Geofencing', f3b: '低能耗后台',
        f4t: '纯净的好友分享', f4d: '原生通讯录选择列表，精准邀请在意的人，一起踏上正念之旅。',
        f4a: '原生联系人', f4b: '无第三方追踪',
        f5t: '极致个性化定制', f5d: '从相册自由选取头像、自定义昵称，所有数据安全持久化保存在本地。',
        f5a: '专属档案', f5b: '本地持久化',
        f6t: '中英双语 · 全球陪伴', f6d: '全面 i18n 国际化支持，无论你身在何处，正念的语言皆能相通。',
        f6a: '简体中文', f6b: 'English', f6c: '随系统切换',
      },
      showcase: {
        eyebrow: 'IN-APP EXPERIENCE',
        title: '每一帧，皆为<em>沉浸</em>而生',
        desc: '动态玻璃 · 渐层光感 · 一致设计语言 —— 派+ 的每一处交互都在传递「平静」。',
        c1: '冥想主题', c2: '沉浸时长选择', c3: '专属档案设置',
        alt1: '冥想主题列表', alt2: '选择冥想时长', alt3: '个性化设置',
      },
      philosophy: {
        eyebrow: 'OUR PHILOSOPHY',
        title: '呼吸 · 放松 · 入眠',
        desc: '三段式的引导，温柔陪你完成每一次正念回归。',
        alt1: '呼吸 · 在每一次的呼吸中，找回内心的平静',
        alt2: '放松 · 卸下一天的疲惫，让身体回归自然',
        alt3: '入眠 · 在柔和的白噪音中，安然入睡',
      },
      privacySec: {
        eyebrow: 'PRIVACY FIRST',
        title: '隐私优先，从底层做起。',
        desc: '派+ 不收集任何可识别的个人数据。所有日记、头像、地理围栏均加密存储于设备本地，App 离开前台即<strong>瞬间锁定</strong>。我们的承诺：你的内心世界，只属于你。',
        p1: 'Face ID / Touch ID 原生加密',
        p2: '无第三方分析 SDK',
        p3: '地理围栏数据仅本地处理',
        p4: '切换后台自动加锁',
      },
      download: {
        eyebrow: 'START TODAY',
        title: '开始你的正念旅程',
        desc: '从呼吸开始 —— 让派+ 成为你忙碌生活中那一片，永远为你预留的宁静。',
        appSmall: 'Download on the',
        app: 'App Store',
        androidSmall: 'Coming Soon',
        android: 'Android Version',
      },
      footer: {
        tag: 'Mindful · Private · Beautiful',
        product: '产品',
        legal: '合规',
        contact: '联系',
        privacy: '隐私政策',
        terms: '用户协议',
        rights: '派+. All rights reserved.',
        made: 'Made with ☁ for inner peace.',
      },
      legal: {
        back: '← 返回首页',
        websiteLabel: '官网：',
        emailLabel: '邮箱：',
      },
    },
    en: {
      meta: {
        indexTitle: '派+ · Private Mindfulness & Meditation',
        indexDesc: '派+ — A private mindfulness app with liquid glass UI, immersive soundscapes, Face ID journal lock, and smart geofence reminders.',
        privacyTitle: 'Privacy Policy · 派+',
        termsTitle: 'Terms & Conditions · 派+',
      },
      nav: {
        features: 'Features',
        showcase: 'Interface',
        philosophy: 'Philosophy',
        download: 'Download',
        downloadApp: 'Get the App',
        downloadShort: 'Get',
        backHome: 'Home',
        langLabel: 'Language',
        switchToZh: 'Switch to Chinese',
        switchToEn: 'Switch to English',
      },
      hero: {
        tag: 'A mindfulness space for modern life',
        title: 'In a noisy world,<br/>find the <em>peace</em> that belongs to you.',
        sub: '派+ blends liquid glass design with immersive soundscapes to build a private, secure, and intelligent meditation companion — every breath, gently guarded.',
        ctaApp: 'Download on App Store',
        ctaMore: 'Learn more',
        meta1l: 'Face ID', meta1s: 'Privacy lock',
        meta2l: 'i18n', meta2s: 'ZH / EN',
        meta3l: 'Geofence', meta3s: 'Smart reminders',
        float1t: 'Breathe · 3 min', float1s: 'Heart rate −12 BPM',
        float2t: 'Journal locked', float2s: 'Face ID protected',
      },
      features: {
        eyebrow: 'CORE FEATURES',
        title: 'Six&nbsp;modules&nbsp;for&nbsp;your&nbsp;<em>inner&nbsp;peace</em>',
        desc: 'Built around privacy, calm, and intelligent experience — every detail helps you stay present.',
        f1t: 'Immersive meditation', f1d: 'Deep sleep, morning focus, flowing water — soundscapes for every moment.',
        f1a: 'Liquid Glass', f1b: 'Immersive audio',
        f2t: 'Face ID encrypted journal', f2d: 'Native biometric protection; locks <strong>instantly</strong> when the app goes to the background.',
        f2a: 'Biometric Lock', f2b: 'Auto-lock',
        f3t: 'Smart geofence reminders', f3d: 'Gentle nudges when you arrive at places you care about — pause and breathe.',
        f3a: 'Geofencing', f3b: 'Low-power',
        f4t: 'Mindful sharing', f4d: 'Invite people you care about from your contacts — no link copying.',
        f4a: 'Native contacts', f4b: 'No third-party tracking',
        f5t: 'Personalization', f5d: 'Custom avatar and nickname; data stored securely on your device.',
        f5a: 'Your profile', f5b: 'Local storage',
        f6t: 'Bilingual · worldwide', f6d: 'Full i18n support — mindfulness speaks your language, wherever you are.',
        f6a: '简体中文', f6b: 'English', f6c: 'System locale',
      },
      showcase: {
        eyebrow: 'IN-APP EXPERIENCE',
        title: 'Every frame, built for <em>immersion</em>',
        desc: 'Liquid glass · gradient light · consistent design — 派+ whispers calm in every interaction.',
        c1: 'Meditation themes', c2: 'Session duration', c3: 'Profile settings',
        alt1: 'Meditation theme list', alt2: 'Choose session length', alt3: 'Profile customization',
      },
      philosophy: {
        eyebrow: 'OUR PHILOSOPHY',
        title: 'Breathe · Relax · Sleep',
        desc: 'A three-step journey, gently guiding you back to mindfulness.',
        alt1: 'Breathe · Find calm in every breath',
        alt2: 'Relax · Release the day, return to your body',
        alt3: 'Sleep · Drift off with soft ambient sound',
      },
      privacySec: {
        eyebrow: 'PRIVACY FIRST',
        title: 'Privacy by design, from the ground up.',
        desc: '派+ does not collect identifiable personal data. Journals, avatars, and geofences stay on your device; leaving the app <strong>locks instantly</strong>. Your inner world stays yours.',
        p1: 'Face ID / Touch ID encryption',
        p2: 'No third-party analytics SDKs',
        p3: 'Geofence data processed locally',
        p4: 'Auto-lock when backgrounded',
      },
      download: {
        eyebrow: 'START TODAY',
        title: 'Begin your mindfulness journey',
        desc: 'Start with a breath — let 派+ be the quiet space always reserved for you.',
        appSmall: 'Download on the',
        app: 'App Store',
        androidSmall: 'Coming Soon',
        android: 'Android Version',
      },
      footer: {
        tag: 'Mindful · Private · Beautiful',
        product: 'Product',
        legal: 'Legal',
        contact: 'Contact',
        privacy: 'Privacy Policy',
        terms: 'Terms & Conditions',
        rights: '派+. All rights reserved.',
        made: 'Made with ☁ for inner peace.',
      },
      legal: {
        back: '← Back to home',
        websiteLabel: 'Website: ',
        emailLabel: 'Email: ',
      },
    },
  };

  const PRIVACY_BODY = {
    zh: `
      <p>本隐私政策说明 Harpreet Dhaliwal（以下简称「我们」）在您使用 派+（以下简称「本应用」）时，如何收集、使用及保护相关信息。</p>
      <h2>1. 我们收集的信息</h2>
      <p>我们可能会收集以下信息：</p>
      <ul>
        <li>您自愿创建个人资料时提供的姓名或昵称</li>
        <li>您联系我方时提供的电子邮箱地址或其他联系方式</li>
        <li>设备信息及使用数据</li>
        <li>冥想偏好、主题选择、提醒设置、连续打卡记录及使用统计</li>
        <li>仅在您启用基于位置的提醒或类似功能时收集的位置数据</li>
        <li>您在本应用中自愿提供的其他信息</li>
      </ul>
      <h2>2. 信息的使用方式</h2>
      <p>我们收集的信息将用于：</p>
      <ul>
        <li>提供冥想、呼吸、睡眠、放松及提醒功能</li>
        <li>个性化展示主题、内容和用户体验</li>
        <li>记录进度、使用情况及连续打卡记录</li>
        <li>改进应用性能、稳定性和用户体验</li>
        <li>维护系统安全并防止滥用</li>
        <li>回复客户支持请求</li>
      </ul>
      <h2>3. 第三方服务</h2>
      <p>本应用可能使用第三方服务用于云存储、数据分析、崩溃报告、通知或技术支持。相关服务提供商仅会在提供和优化本应用所必需的范围内处理有限信息。</p>
      <h2>4. 数据共享</h2>
      <p>我们不会出售用户个人信息。在以下情况下，我们可能共享相关信息：</p>
      <ul>
        <li>云服务提供商</li>
        <li>数据分析或技术服务提供商</li>
        <li>法律法规要求下的相关机构</li>
      </ul>
      <h2>5. 数据保存期限</h2>
      <p>我们仅在提供本应用服务或满足法律要求所必需的期限内保留用户信息。用户可通过联系我们申请删除账户或相关数据。</p>
      <h2>6. 数据安全</h2>
      <p>我们会采取合理措施保护用户信息，但任何电子存储或传输方式均无法保证绝对安全。</p>
      <h2>7. 儿童隐私</h2>
      <p>本应用不面向 13 岁以下儿童提供服务。</p>
      <h2>8. 医疗免责声明</h2>
      <p>本应用仅用于冥想、放松及身心健康支持，不提供任何医疗、心理、法律或专业建议，也不能替代专业诊疗或护理。如您正处于医疗或心理健康紧急情况，请立即联系专业人士或紧急救助机构。</p>
      <h2>9. 您的选择</h2>
      <p>您可以：</p>
      <ul>
        <li>在适用情况下更新或删除您的个人资料信息</li>
        <li>通过设备设置关闭通知或提醒</li>
        <li>依据适用法律申请删除账户或数据</li>
      </ul>
      <h2>10. 联系方式</h2>
      <p>如您对本隐私政策有任何疑问，请联系：</p>
    `,
    en: `
      <p>This Privacy Policy explains how Harpreet Dhaliwal ("we", "our", or "us") collects, uses, and protects information when you use 派+ ("the App").</p>
      <h2>1. Information We Collect</h2>
      <p>We may collect the following information:</p>
      <ul>
        <li>Name or nickname, if you choose to create a profile</li>
        <li>Email address or other contact information, if you contact us</li>
        <li>Device information and usage data</li>
        <li>Meditation preferences, theme selections, reminder settings, streaks, and usage statistics</li>
        <li>Location data, only if you enable location-based reminders or similar features</li>
        <li>Any other information you voluntarily provide within the App</li>
      </ul>
      <h2>2. How We Use Information</h2>
      <p>We use collected information to:</p>
      <ul>
        <li>Provide meditation, breathing, sleep, relaxation, and reminder features</li>
        <li>Personalize themes, content, and user experience</li>
        <li>Track progress, usage, and streaks</li>
        <li>Improve app performance, stability, and user experience</li>
        <li>Maintain security and prevent misuse</li>
        <li>Respond to customer support requests</li>
      </ul>
      <h2>3. Third-Party Services</h2>
      <p>The App may use third-party services for cloud storage, analytics, crash reporting, notifications, or technical support. These providers may process limited information solely to operate and improve the App.</p>
      <h2>4. Data Sharing</h2>
      <p>We do not sell personal information. We may share information with:</p>
      <ul>
        <li>Cloud hosting providers</li>
        <li>Analytics or technical service providers</li>
        <li>Authorities if required by applicable laws or regulations</li>
      </ul>
      <h2>5. Data Retention</h2>
      <p>We retain user information only for as long as necessary to provide the App's services or comply with legal obligations. Users may request deletion of their account or related data by contacting us.</p>
      <h2>6. Data Security</h2>
      <p>We take reasonable measures to protect user information. However, no method of electronic storage or transmission is completely secure.</p>
      <h2>7. Children's Privacy</h2>
      <p>The App is not intended for children under 13 years old.</p>
      <h2>8. Medical Disclaimer</h2>
      <p>The App is designed for meditation, relaxation, and wellness support only. It does not provide medical, psychological, legal, or professional advice and is not a substitute for professional care. If you are experiencing a medical or mental health emergency, contact a qualified professional or emergency services immediately.</p>
      <h2>9. Your Choices</h2>
      <p>You may:</p>
      <ul>
        <li>Update or delete your profile information where applicable</li>
        <li>Disable notifications or reminders through your device settings</li>
        <li>Request deletion of your account or data, subject to applicable law</li>
      </ul>
      <h2>10. Contact</h2>
      <p>If you have any questions regarding this Privacy Policy, please contact:</p>
    `,
  };

  const TERMS_BODY = {
    zh: `
      <p>欢迎使用 派+（以下简称「本应用」）。本应用由 Harpreet Dhaliwal（以下简称「我们」）运营。当您访问或使用本应用时，即表示您同意遵守并受本《用户协议》（以下简称「条款」）约束。</p>
      <h2>1. 服务内容</h2>
      <p>本应用提供冥想及身心健康相关功能，包括但不限于：</p>
      <ul>
        <li>冥想主题内容</li>
        <li>呼吸及放松练习</li>
        <li>睡眠辅助及舒缓内容</li>
        <li>每日提醒及连续打卡记录</li>
        <li>使用统计及进度跟踪</li>
        <li>个人资料及个性化设置</li>
      </ul>
      <h2>2. 用户账户</h2>
      <p>如本应用允许创建账户，用户需自行负责保管账户登录信息的机密性，并对其账户下发生的所有活动承担责任。</p>
      <h2>3. 合理使用</h2>
      <p>用户同意不得：</p>
      <ul>
        <li>滥用本应用</li>
        <li>尝试未经授权访问系统或数据</li>
        <li>干扰本应用正常运行</li>
        <li>将本应用用于任何非法用途</li>
        <li>上传或传播任何有害、辱骂性或侵权内容</li>
      </ul>
      <h2>4. 免责声明</h2>
      <p>本应用仅用于冥想、放松及一般身心健康用途，不构成任何医疗、心理、法律或专业建议。本应用不旨在诊断、治疗、治愈或预防任何医疗或心理健康状况。</p>
      <h2>5. 第三方服务</h2>
      <p>本应用可能依赖第三方服务提供商提供云存储、数据分析、通知或技术支持。在法律允许的范围内，我们对第三方服务提供商的行为或不作为不承担责任。</p>
      <h2>6. 服务可用性</h2>
      <p>我们有权在法律允许的范围内，随时修改、暂停或终止本应用的部分功能或服务，无论是否事先通知。</p>
      <h2>7. 数据存储</h2>
      <p>用户数据可能存储于安全的云端基础设施中。尽管我们采取合理安全措施，但无法保证绝对安全。</p>
      <h2>8. 知识产权</h2>
      <p>本应用及其相关设计、文字、图形、功能和品牌标识的全部权利归我们或我们的许可方所有，并受适用知识产权法律保护。未经我们事先书面同意，您不得复制、修改、分发或创作衍生作品。</p>
      <h2>9. 责任限制</h2>
      <p>在法律允许的最大范围内，我们不对因使用本应用而产生的间接性、附带性、特殊性或后果性损害承担责任。</p>
      <h2>10. 终止</h2>
      <p>如我们合理认为用户违反本条款或滥用本应用，我们有权暂停或终止其对本应用的访问。</p>
      <h2>11. 适用法律</h2>
      <p>本条款受适用法律管辖并据其解释，不考虑法律冲突原则。</p>
      <h2>12. 联系方式</h2>
      <p>如您对本条款有任何疑问，请联系：</p>
    `,
    en: `
      <p>Welcome to 派+ ("the App"), operated by Harpreet Dhaliwal ("we", "our", or "us"). By accessing or using the App, you agree to comply with and be bound by these Terms & Conditions ("Terms").</p>
      <h2>1. Services</h2>
      <p>The App provides meditation and wellness-related features, including but not limited to:</p>
      <ul>
        <li>Guided meditation themes</li>
        <li>Breathing and relaxation exercises</li>
        <li>Sleep support and calming content</li>
        <li>Daily reminders and streak tracking</li>
        <li>Usage statistics and progress tracking</li>
        <li>Profile and personalization settings</li>
      </ul>
      <h2>2. User Accounts</h2>
      <p>If the App allows account creation, users are responsible for maintaining the confidentiality of their login credentials and all activities conducted under their account.</p>
      <h2>3. Acceptable Use</h2>
      <p>Users agree not to:</p>
      <ul>
        <li>Misuse the App</li>
        <li>Attempt unauthorized access to systems or data</li>
        <li>Interfere with App operations</li>
        <li>Use the App for unlawful purposes</li>
        <li>Upload or share harmful, abusive, or infringing content</li>
      </ul>
      <h2>4. Disclaimer</h2>
      <p>The App is provided for meditation, relaxation, and general wellness purposes only. It does not constitute medical, psychological, legal, or professional advice. The App is not intended to diagnose, treat, cure, or prevent any medical or mental health condition.</p>
      <h2>5. Third-Party Services</h2>
      <p>The App may rely on third-party service providers for cloud storage, analytics, notifications, or technical support. We are not responsible for the acts or omissions of third-party providers to the extent permitted by applicable law.</p>
      <h2>6. Service Availability</h2>
      <p>We may modify, suspend, or discontinue parts of the App or services at any time, with or without notice, to the extent permitted by applicable law.</p>
      <h2>7. Data Storage</h2>
      <p>User data may be stored using secure cloud infrastructure. While reasonable security measures are implemented, absolute security cannot be guaranteed.</p>
      <h2>8. Intellectual Property</h2>
      <p>All rights in and to the App, including its design, text, graphics, features, and branding, belong to us or our licensors and are protected by applicable intellectual property laws. You may not copy, modify, distribute, or create derivative works without our prior written consent.</p>
      <h2>9. Limitation of Liability</h2>
      <p>To the maximum extent permitted by applicable law, we are not liable for indirect, incidental, special, or consequential damages arising from the use of the App.</p>
      <h2>10. Termination</h2>
      <p>We may suspend or terminate access to the App if we reasonably believe that a user has violated these Terms or misused the App.</p>
      <h2>11. Governing Law</h2>
      <p>These Terms shall be governed by and construed in accordance with applicable laws, without regard to conflict of law principles.</p>
      <h2>12. Contact</h2>
      <p>If you have any questions regarding these Terms, please contact:</p>
    `,
  };

  function getPage() {
    const p = document.body.dataset.page;
    if (p) return p;
    if (document.getElementById('legal-privacy')) return 'privacy';
    if (document.getElementById('legal-terms')) return 'terms';
    return 'index';
  }

  function getLang() {
    const params = new URLSearchParams(window.location.search);
    const q = params.get('lang');
    if (q === 'zh' || q === 'en') return q;
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored === 'zh' || stored === 'en') return stored;
    return 'en';
  }

  function setLang(lang) {
    localStorage.setItem(STORAGE_KEY, lang);
    document.documentElement.lang = lang === 'zh' ? 'zh-CN' : 'en';
  }

  function resolve(obj, path) {
    return path.split('.').reduce((o, k) => (o && o[k] != null ? o[k] : null), obj);
  }

  function applyShowcaseImages(lang) {
    document.querySelectorAll('[data-showcase-img]').forEach((el) => {
      const idx = Number(el.dataset.showcaseImg) - 1;
      const list = SHOWCASE_IMAGES[lang];
      if (list && list[idx]) el.src = list[idx];
    });
  }

  function applyPhilosophyImages(lang) {
    document.querySelectorAll('[data-philosophy-img]').forEach((el) => {
      const idx = Number(el.dataset.philosophyImg) - 1;
      const list = PHILOSOPHY_IMAGES[lang];
      if (list && list[idx]) el.src = list[idx];
    });
  }

  function applyFlat(lang, pack) {
    document.querySelectorAll('[data-i18n]').forEach((el) => {
      const v = resolve(pack, el.dataset.i18n);
      if (v != null) el.textContent = v;
    });
    document.querySelectorAll('[data-i18n-html]').forEach((el) => {
      const v = resolve(pack, el.dataset.i18nHtml);
      if (v != null) el.innerHTML = v;
    });
    document.querySelectorAll('[data-i18n-title]').forEach((el) => {
      const v = resolve(pack.meta, el.dataset.i18nTitle);
      if (v != null) document.title = v;
    });
    document.querySelectorAll('[data-i18n-meta]').forEach((el) => {
      const v = resolve(pack.meta, el.dataset.i18nMeta);
      if (v != null) el.setAttribute('content', v);
    });
    document.querySelectorAll('[data-i18n-alt]').forEach((el) => {
      const v = resolve(pack, el.dataset.i18nAlt);
      if (v != null) el.setAttribute('alt', v);
    });
  }

  function contactBlock(lang) {
    const L = T[lang].legal;
    return `<p>${L.websiteLabel}<a href="${SITE_URL}">${SITE_URL}</a></p>
      <p>${L.emailLabel}<a href="mailto:hullsd39@outlook.com">hullsd39@outlook.com</a></p>`;
  }

  function applyLegal(lang, page) {
    const h1 = document.querySelector('[data-legal-title]');
    const meta = document.querySelector('[data-legal-meta]');
    const body = document.getElementById('legal-body');
    if (!h1 || !body) return;

    if (page === 'privacy') {
      h1.textContent = lang === 'zh' ? '隐私政策' : 'Privacy Policy';
      meta.textContent =
        lang === 'zh' ? '生效日期：2026 年 5 月 20 日' : 'Effective Date: May 20, 2026';
      body.innerHTML = PRIVACY_BODY[lang] + contactBlock(lang);
      document.title = T[lang].meta.privacyTitle;
    } else if (page === 'terms') {
      h1.textContent = lang === 'zh' ? '用户协议' : 'Terms & Conditions';
      meta.textContent =
        lang === 'zh' ? '生效日期：2026 年 5 月 20 日' : 'Effective Date: May 20, 2026';
      body.innerHTML = TERMS_BODY[lang] + contactBlock(lang);
      document.title = T[lang].meta.termsTitle;
    }
  }

  function updateLangToggle(lang) {
    const btn = document.querySelector('.lang-toggle');
    if (!btn) return;
    const pack = T[lang];
    const next = lang === 'en' ? 'zh' : 'en';
    const label = btn.querySelector('.lang-toggle-text');
    if (label) label.textContent = next === 'zh' ? '中' : 'EN';
    btn.dataset.nextLang = next;
    btn.setAttribute(
      'aria-label',
      next === 'zh' ? pack.nav.switchToZh : pack.nav.switchToEn
    );
  }

  function apply(lang) {
    setLang(lang);
    const page = getPage();
    const pack = T[lang];

    if (page === 'index') {
      applyFlat(lang, pack);
      applyShowcaseImages(lang);
      applyPhilosophyImages(lang);
      document.title = pack.meta.indexTitle;
      const desc = document.querySelector('meta[name="description"]');
      if (desc) desc.setAttribute('content', pack.meta.indexDesc);
    } else {
      applyFlat(lang, pack);
      applyLegal(lang, page);
    }

    updateLangToggle(lang);
  }

  function bindLangSwitch() {
    const btn = document.querySelector('.lang-toggle');
    if (!btn) return;
    btn.addEventListener('click', () => {
      const next = btn.dataset.nextLang;
      if (next === 'zh' || next === 'en') apply(next);
    });
  }

  function init() {
    apply(getLang());
    bindLangSwitch();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  window.PaiProI18n = { apply, getLang, T };
})();
