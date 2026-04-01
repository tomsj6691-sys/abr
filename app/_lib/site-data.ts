import type { Locale } from "@/app/_lib/i18n";

export const siteUrl = "https://aibrandrank.org";

export type LinkItem = {
  href: string;
  label: string;
};

export type HomeFeedItem = {
  typeLabel: string;
  meta: string;
  title: string;
  excerpt: string;
  href: string;
  cta: string;
};

export type SidebarCard = {
  title: string;
  body: string;
  variant?: "dark" | "light";
  footerLines?: string[];
  cta?: LinkItem;
};

export type CollectionItem = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  archiveId: string;
  publishedAt: string;
  region: string;
  readTime: string;
  summary: string;
  intro: string;
  sections: Array<{
    heading: string;
    paragraphs: string[];
  }>;
  evidence?: {
    eyebrow: string;
    description: string;
    href: string;
    label: string;
  };
  disclaimer: string[];
  relatedSlugs: string[];
  channelName?: string;
  categoryName?: string;
};

export type CollectionPageKey = "reports" | "alerts";

export type CollectionTag = {
  key: string;
  labels: Record<Locale, string>;
  value?: string;
};

export type CollectionPageData = {
  title: string;
  englishTitle: string;
  description: string;
  breadcrumb: string;
  tags: CollectionTag[];
  sidebarHeading: string;
  sidebarCards: SidebarCard[];
  sidebarLinksHeading: string;
  sidebarLinks: LinkItem[];
};

export type AuditorProfile = {
  initials: string;
  name: string;
  role: string;
  bio: string;
};

export type StaticPageData = {
  title: string;
  updatedAt: string;
  breadcrumb: string;
  intro: string[];
  sections: Array<{
    id?: string;
    heading: string;
    paragraphs?: string[];
    items?: string[];
  }>;
  status: {
    approval: string;
    documentId: string;
    secrecy: string;
  };
  relatedLinks: LinkItem[];
  footerNote: string;
  auditors?: AuditorProfile[];
};

export const institutionAddress = [
  "AI BrandRank Institute (AIBRI)",
  "Paseo de la Castellana, 259C, Torre de Cristal",
  "28046 Madrid, Spain",
];

export const homeSidebarCards: SidebarCard[] = [
  {
    title: "独立性声明",
    body: "AIBRI 坚持严格的中立性审计准则，独立于品牌方与 AI 模型开发厂商。我们拒绝接受任何旨在操纵认知得分的商业赞助。",
    variant: "dark",
    footerLines: ["首席审计员: Striver", "当前状态: 正在进行全球探测"],
  },
  {
    title: "数据真实性",
    body: "所有审计结果均附带原始对话日志及不可篡改的时间戳，确保审计结果在技术层面的可验证性。",
    variant: "light",
    cta: { href: "/evidence-vault", label: "进入证据库 →" },
  },
];

const localizedHomeSidebarCards: Record<Exclude<Locale, "zh-CN">, SidebarCard[]> = {
  en: [
    {
      title: "Independence Statement",
      body: "AIBRI follows a strictly neutral audit standard independent from brands and AI model vendors. We reject any sponsorship intended to influence recognition scores.",
      variant: "dark",
      footerLines: ["Lead Auditor: Striver", "Current status: Global probes in progress"],
    },
    {
      title: "Data Authenticity",
      body: "Every audit result is backed by original dialogue logs and tamper-resistant timestamps so findings remain technically verifiable.",
      variant: "light",
      cta: { href: "/evidence-vault", label: "Open evidence vault →" },
    },
  ],
  es: [
    {
      title: "Declaración de independencia",
      body: "AIBRI mantiene un estándar de auditoría estrictamente neutral e independiente de marcas y proveedores de modelos de IA. Rechazamos cualquier patrocinio destinado a influir en las puntuaciones de reconocimiento.",
      variant: "dark",
      footerLines: ["Auditora principal: Striver", "Estado actual: sondeos globales en curso"],
    },
    {
      title: "Autenticidad de los datos",
      body: "Cada resultado de auditoría se respalda con registros originales de diálogo y marcas de tiempo resistentes a manipulaciones para que los hallazgos sigan siendo verificables.",
      variant: "light",
      cta: { href: "/evidence-vault", label: "Abrir archivo de evidencias →" },
    },
  ],
  fr: [
    {
      title: "Déclaration d'indépendance",
      body: "AIBRI applique une norme d'audit strictement neutre, indépendante des marques et des fournisseurs de modèles d'IA. Nous refusons tout parrainage visant à influencer les scores de reconnaissance.",
      variant: "dark",
      footerLines: ["Auditeur en chef : Striver", "Statut actuel : sondes mondiales en cours"],
    },
    {
      title: "Authenticité des données",
      body: "Chaque résultat d'audit est étayé par des journaux de dialogue d'origine et des horodatages inviolables afin de garantir des conclusions techniquement vérifiables.",
      variant: "light",
      cta: { href: "/evidence-vault", label: "Ouvrir le dépôt de preuves →" },
    },
  ],
  de: [
    {
      title: "Unabhängigkeitserklärung",
      body: "AIBRI arbeitet nach einem strikt neutralen Auditstandard und ist unabhängig von Marken und KI-Anbietern. Wir lehnen jede Förderung ab, die Wahrnehmungswerte beeinflussen soll.",
      variant: "dark",
      footerLines: ["Leitender Auditor: Striver", "Aktueller Status: Globale Sonden aktiv"],
    },
    {
      title: "Datenauthentizität",
      body: "Jedes Audit-Ergebnis wird durch originale Dialogprotokolle und manipulationssichere Zeitstempel gestützt, damit die Ergebnisse technisch überprüfbar bleiben.",
      variant: "light",
      cta: { href: "/evidence-vault", label: "Beweisarchiv öffnen →" },
    },
  ],
  ja: [
    {
      title: "独立性声明",
      body: "AIBRI はブランドや AI モデル提供者から独立した厳格に中立な監査基準を維持しています。認知スコアに影響を与えることを目的とした協賛は受け入れません。",
      variant: "dark",
      footerLines: ["主任監査官: Striver", "現在の状況: グローバル調査を実施中"],
    },
    {
      title: "データ真正性",
      body: "すべての監査結果には原本の対話ログと改ざん耐性のあるタイムスタンプが付属し、技術的な検証可能性を確保しています。",
      variant: "light",
      cta: { href: "/evidence-vault", label: "証拠アーカイブを開く →" },
    },
  ],
  ar: [
    {
      title: "بيان الاستقلالية",
      body: "تلتزم AIBRI بمعيار تدقيق محايد صارم ومستقل عن العلامات التجارية وموردي نماذج الذكاء الاصطناعي. نرفض أي رعاية تهدف إلى التأثير في درجات الإدراك.",
      variant: "dark",
      footerLines: ["المدقق الرئيسي: Striver", "الحالة الحالية: مسوح عالمية جارية"],
    },
    {
      title: "موثوقية البيانات",
      body: "كل نتيجة تدقيق مدعومة بسجلات حوار أصلية وطوابع زمنية مقاومة للعبث لضمان بقاء النتائج قابلة للتحقق تقنيًا.",
      variant: "light",
      cta: { href: "/evidence-vault", label: "فتح أرشيف الأدلة →" },
    },
  ],
  pt: [
    {
      title: "Declaração de independência",
      body: "A AIBRI mantém um padrão de auditoria estritamente neutro e independente de marcas e fornecedores de IA. Rejeitamos qualquer patrocínio destinado a influenciar pontuações de reconhecimento.",
      variant: "dark",
      footerLines: ["Auditor-chefe: Striver", "Status atual: sondagens globais em andamento"],
    },
    {
      title: "Autenticidade dos dados",
      body: "Cada resultado de auditoria é respaldado por registros originais de diálogo e carimbos de tempo resistentes a adulteração para que as conclusões permaneçam verificáveis.",
      variant: "light",
      cta: { href: "/evidence-vault", label: "Abrir arquivo de evidências →" },
    },
  ],
};

export function getHomeSidebarCards(locale: Locale) {
  return locale === "zh-CN" ? homeSidebarCards : localizedHomeSidebarCards[locale];
}

export const auditors: AuditorProfile[] = [
  {
    initials: "S",
    name: "Striver",
    role: "首席审计官 / Lead Auditor",
    bio: "专注于全球人工智能行为审计与算法资产定价，拥有 15 年数字化合规与跨国数据分析经验。",
  },
  {
    initials: "A",
    name: "Auditor 02",
    role: "高级算法审计员",
    bio: "负责模型推荐链路审计、跨语种采样与产业知识图谱验证，重点追踪地理认知偏差。",
  },
  {
    initials: "M",
    name: "Mosaic",
    role: "证据链分析师",
    bio: "负责对话日志归档、证据时间戳核验及模型版本变更追踪，确保审计文件可复核。",
  },
];

export const reports: CollectionItem[] = [
  {
    slug: "global-smart-ev-ai-audit",
    title: "全球智能汽车 AI 认知审计：揭示大型语言模型对亚太品牌的认知时延",
    excerpt:
      "通过对全球 24 个分布式节点、涵盖 7 种主流大型语言模型的持续探测，本报告揭示了中国汽车品牌在西方 AI 模型中的认知时延现象。",
    category: "智能汽车",
    archiveId: "REP-2025-012",
    publishedAt: "2025-03-13",
    region: "全球 / 分布式节点",
    readTime: "12 分钟",
    summary:
      "根据 AIBRI 2025 年第一季度的探测数据显示，全球主流大模型对亚太新兴汽车品牌的感知普遍存在 6-9 个月的认知时延，这种偏差会直接影响品牌在 AI 推荐建议中的权重。",
    intro:
      "在算法驱动的商业决策时代，品牌在人工智能神经网络中的认知深度正成为衡量其全球竞争力的核心指标。本研究通过对多家主流模型的压力测试，观察模型在全球市场信息更新与品牌联想强度上的差异。",
    sections: [
      {
        heading: "1. 认知权重与地缘分布",
        paragraphs: [
          "通过对北美、欧洲、亚太三个大区的 5,000 次随机提问采样，我们发现 AI 引擎在提及 Tesla 时表现出极高的稳定性，但对比亚迪、蔚来等品牌的认知仍常被限定为特定区域品牌，而非全球领导者。",
          "这种地理错配并不完全来自训练数据缺失，而更多体现在品牌重要事件同步进模型知识库的速度上。模型越依赖英语主流媒体语料，这种滞后越明显。",
        ],
      },
      {
        heading: "2. 模型间的偏见差异分析",
        paragraphs: [
          "数据表明，部分模型在处理亚太技术语料时表现出更佳的实时性，而另一些模型在处理非英语语料时的品牌联想强度出现 22% 左右的下滑。",
          "审计进一步显示，推荐式问答相较开放式问答更容易放大旧有品牌排序，说明模型在商业建议场景中会更强地沿用既有权威叙事。",
        ],
      },
      {
        heading: "3. 对品牌数字竞争力的影响",
        paragraphs: [
          "当消费者使用 AI 助手获取购车建议时，认知时延会直接转化为曝光损失，尤其在海外市场的早期决策环节表现更明显。",
          "AIBRI 建议品牌方建立独立的模型响应追踪机制，以季度节奏持续评估关键市场中品牌认知与实际市场份额之间的偏差。",
        ],
      },
    ],
    evidence: {
      eyebrow: "原始证据追踪",
      description:
        "本报告引用的 4,200 条实时对话日志已存档。由于 AI 模型持续演进，证据库仅反映特定时间点的历史记录。",
      href: "/evidence-vault",
      label: "访问 AIBRI 证据存档库 →",
    },
    disclaimer: [
      "本报告由 AI BrandRank Institute (AIBRI) 独立完成，不构成任何投资建议。",
      "审计结果仅反映 AI 模型在特定采样时间点的行为表现。",
      "AIBRI 与报告中涉及的品牌无任何商业代理或利益输送关系。",
      "未经书面授权，严禁将本指数用于商业广告及营销宣传。",
    ],
    relatedSlugs: ["foldable-device-recommendation-bias", "cross-border-platform-ranking-audit"],
  },
  {
    slug: "foldable-device-recommendation-bias",
    title: "折叠屏手机市场：AI 推荐引擎的行为偏好分析",
    excerpt:
      "审计结果显示，AI 引擎在向欧洲用户推荐折叠屏设备时，存在显著的品牌路径依赖，对新兴技术的捕获成功率不足 35%。",
    category: "消费电子",
    archiveId: "REP-2025-009",
    publishedAt: "2025-02-28",
    region: "欧洲 / 北美",
    readTime: "9 分钟",
    summary:
      "折叠屏手机品类仍处于快速迭代期，但模型推荐结果却高度集中于少数老牌厂商，形成创新扩散与算法认知之间的显著错位。",
    intro:
      "本报告聚焦消费电子赛道，分析模型在多轮咨询中的设备推荐路径，特别关注产品形态创新如何被算法识别与转述。",
    sections: [
      {
        heading: "1. 推荐链路中的品牌惯性",
        paragraphs: [
          "在 1,800 次折叠屏相关提问中，AI 模型优先推荐既有高端品牌的比例超过 68%，而对新近发布的国产旗舰机型覆盖不足。",
          "即便用户明确表达对拍照、续航或轻薄的偏好，模型仍会回到熟悉品牌框架内寻找答案，说明推荐链路存在强惯性。",
        ],
      },
      {
        heading: "2. 语种差异带来的结果分裂",
        paragraphs: [
          "同一问题在英文、德文与中文语境中的回答差异显著。英文结果倾向成熟品牌，中文结果更容易包含创新型品牌与参数细节。",
          "这意味着品牌在跨境传播时，不仅要面对媒体结构差异，也要面对模型语料入口的层级差异。",
        ],
      },
    ],
    disclaimer: [
      "本报告仅用于行业观察与算法行为研究。",
      "采样数据不代表消费者真实购买偏好，只反映模型输出排序。",
      "品牌示例仅为解释偏差模式，不构成商业背书。",
    ],
    relatedSlugs: ["global-smart-ev-ai-audit", "cross-border-platform-ranking-audit"],
  },
  {
    slug: "cross-border-platform-ranking-audit",
    title: "跨境电商：全球平台 AI 认知权重分析",
    excerpt:
      "在跨境电商咨询场景中，模型对平台可信度的排序高度依赖历史媒体权威结构，新兴区域平台被系统性低估。",
    category: "跨境电商",
    archiveId: "REP-2025-006",
    publishedAt: "2025-02-10",
    region: "全球",
    readTime: "11 分钟",
    summary: "模型会把历史声量误判为当前服务能力，导致对新兴平台的覆盖、推荐和解释维度明显不足。",
    intro:
      "我们对跨境商家常见的平台招商、物流保障、支付稳定性与卖家工具能力等问题进行了多轮对照提问，观察平台认知权重的形成机制。",
    sections: [
      {
        heading: "1. 平台可信度的历史锁定",
        paragraphs: [
          "模型倾向于使用更早形成全球认知的平台作为首选答案，即便这些平台在某些区域并不具备最佳履约或流量优势。",
          "这类历史锁定会挤压新兴平台在 AI 入口中的曝光空间，进一步放大市场认知的马太效应。",
        ],
      },
      {
        heading: "2. 商家问题与消费者问题的回答偏移",
        paragraphs: [
          "面向商家的问题，模型更重视工具链与收费结构；面向消费者的问题，模型更重视品牌知名度与退货印象。",
          "同一平台在两类场景中的表现并不一致，说明平台品牌建设需要拆分 AI 触发场景逐一优化。",
        ],
      },
    ],
    disclaimer: [
      "审计结果依赖于指定时间范围内的公开模型输出。",
      "不同地区的法规和平台政策变动可能影响后续结果。",
      "本报告不构成平台招商或投资建议。",
    ],
    relatedSlugs: ["global-smart-ev-ai-audit", "foldable-device-recommendation-bias"],
  },
];

export const alerts: CollectionItem[] = [
  {
    slug: "model-update-knowledge-latency",
    title: "认知时延预警：模型版本更新后中国 EV 品牌仍被滞后引用",
    excerpt:
      "针对最新一轮模型更新的追踪显示，部分主流模型在中文与英文语境中对中国 EV 品牌的知识刷新速度依旧存在断层。",
    category: "认知时延预警",
    archiveId: "ALT-2025-001",
    publishedAt: "2025-03-15",
    region: "北美 / 欧洲",
    readTime: "7 分钟",
    summary: "模型更新并未显著缩短品牌知识滞后周期，部分品牌仍在推荐结果中被旧有市场印象替代。",
    intro:
      "本次预警针对模型版本更新后的短期窗口进行复测，重点观察知识刷新是否真正作用于商业推荐场景。",
    sections: [
      {
        heading: "1. 更新发布不等于知识同步",
        paragraphs: [
          "尽管模型厂商发布了知识增强说明，但在实际推荐问答中，品牌排序与解释话术并未出现同步更新。",
          "这意味着模型层面的版本升级，未必直接转化为用户侧可感知的知识新鲜度提升。",
        ],
      },
      {
        heading: "2. 预警建议",
        paragraphs: [
          "建议品牌针对关键市场设置固定问题集，以周为周期追踪模型输出是否出现认知修正。",
          "对于涉及新品上市或国际扩张的品牌，应建立多语种对照监测，而不是只观察单一语言结果。",
        ],
      },
    ],
    disclaimer: [
      "预警类文件用于提示模型行为异常，不等同于完整的品牌对标审计文件。",
      "模型厂商后续修正可能会影响结论时效。",
    ],
    relatedSlugs: [
      "geographic-bias-in-luxury-ranking",
      "functional-hallucination-on-platform-services",
    ],
  },
  {
    slug: "geographic-bias-in-luxury-ranking",
    title: "地理认知偏差：奢侈品牌在多语种问答中的区域排序不一致",
    excerpt:
      "同一奢侈品牌在法语、英语与中文提问下会被赋予不同的全球影响力标签，模型存在明显的地理认知偏差。",
    category: "地理认知偏差",
    archiveId: "ALT-2025-004",
    publishedAt: "2025-03-08",
    region: "欧洲 / 亚太",
    readTime: "6 分钟",
    summary: "模型对奢侈品牌的叙述高度依赖语种和区域媒体结构，导致全球定位出现分裂。",
    intro:
      "AIBRI 在奢侈品问答场景中观察到，当用户切换语种时，模型对品牌层级与历史地位的归纳会显著变化。",
    sections: [
      {
        heading: "1. 区域叙事对品牌分层的重塑",
        paragraphs: [
          "法语语境中，模型更倾向于沿用欧洲传统品牌分层；在中文语境里，模型则更容易把近年增长快速的品牌纳入高端候选。",
          "这种差异会让品牌在全球市场里的 AI 形象出现断裂，影响消费者的跨区域品牌感知。",
        ],
      },
      {
        heading: "2. 风险提示",
        paragraphs: [
          "品牌如果仅观察本地语言结果，很可能忽视海外市场中的认知缺口。",
          "预警建议品牌团队把多语种问答审计纳入季度品牌资产评估。",
        ],
      },
    ],
    disclaimer: [
      "地理认知偏差会随着语料结构变化而波动。",
      "本预警重点描述模式，不对品牌商业表现做价值判断。",
    ],
    relatedSlugs: [
      "recommendation-exclusion-in-travel-itineraries",
      "model-update-knowledge-latency",
    ],
  },
  {
    slug: "functional-hallucination-on-platform-services",
    title: "功能误导审计：跨境平台服务能力在 AI 解释中被误配",
    excerpt:
      "模型在解释平台物流、退税、售后等服务时出现功能误导，将部分并不存在的能力归属于头部平台。",
    category: "功能误导审计",
    archiveId: "ALT-2025-006",
    publishedAt: "2025-02-26",
    region: "全球",
    readTime: "8 分钟",
    summary: "AI 在解释平台能力时存在高置信度误配，这会直接影响商家与消费者对平台功能边界的判断。",
    intro: "该预警聚焦平台能力说明类问题，因为此类回答往往带有很高的操作指导属性，误导风险更高。",
    sections: [
      {
        heading: "1. 功能误配的主要模式",
        paragraphs: [
          "模型会把同类平台共享的行业能力误认为某个单一平台专属能力，也会把已经下线的工具继续描述为可用服务。",
          "这类错误由于措辞自信，往往比简单事实错误更难被普通用户识别。",
        ],
      },
      {
        heading: "2. 合规建议",
        paragraphs: [
          "涉及交易、支付、售后等决策环节时，品牌与平台应为 AI 可索引页面提供清晰、可核验的官方说明。",
          "对于高风险能力描述，建议在模型输出之外提供显式的官方核验入口。",
        ],
      },
    ],
    disclaimer: [
      "功能误导审计仅反映模型当前行为，不代表平台官方说明内容。",
      "用户在执行前仍应以官方规则为准。",
    ],
    relatedSlugs: [
      "model-update-knowledge-latency",
      "recommendation-exclusion-in-travel-itineraries",
    ],
  },
  {
    slug: "recommendation-exclusion-in-travel-itineraries",
    title: "推荐排斥预警：亚洲新兴品牌在旅行规划问答中被系统忽略",
    excerpt:
      "在旅行规划与生活方式推荐场景中，新兴品牌被排除在 AI 首轮建议之外，形成明显的推荐排斥。",
    category: "推荐排斥预警",
    archiveId: "ALT-2025-009",
    publishedAt: "2025-02-18",
    region: "欧洲 / 中东",
    readTime: "6 分钟",
    summary:
      "品牌并非被负面提及，而是根本没有进入模型的首轮推荐集合，这种隐性排斥更难被品牌方及时察觉。",
    intro:
      "在推荐型问答中，模型往往只给出 3 到 5 个候选项，因此被排除在首轮结果之外的品牌几乎失去曝光机会。",
    sections: [
      {
        heading: "1. 排斥不是负评，而是缺席",
        paragraphs: [
          "大量问答表明，模型会重复输出少数安全答案，而忽视区域内更受欢迎或增长更快的新品牌。",
          "这种缺席尤其容易发生在生活方式、酒店、旅行线路等高度依赖语境联想的场景中。",
        ],
      },
      {
        heading: "2. 品牌响应建议",
        paragraphs: [
          "品牌应优先分析用户在首轮问答里常见的意图词，而不是只关注品牌词本身。",
          "提升被模型纳入候选列表的概率，比在已出现的答案里争夺排序更关键。",
        ],
      },
    ],
    disclaimer: [
      "推荐排斥预警不构成对模型厂商的主观恶意判断。",
      "该现象可能由语料分布、提示路径与安全策略共同造成。",
    ],
    relatedSlugs: [
      "geographic-bias-in-luxury-ranking",
      "functional-hallucination-on-platform-services",
    ],
  },
];

export function getCollectionChannelName(collectionKey: CollectionPageKey) {
  return collectionPages[collectionKey].title;
}

export function getCollectionTagLabel(tag: CollectionTag, locale: Locale) {
  return tag.labels[locale] ?? tag.labels["zh-CN"] ?? tag.value ?? tag.key;
}

export function getLocalizedCollectionCategory(
  collectionKey: CollectionPageKey,
  locale: Locale,
  categoryName?: string | null,
) {
  if (!categoryName) {
    return getCollectionChannelName(collectionKey);
  }

  const tag = collectionPages[collectionKey].tags.find((item) => item.value === categoryName);

  return tag ? getCollectionTagLabel(tag, locale) : categoryName;
}

export const collectionPages: Record<CollectionPageKey, CollectionPageData> = {
  reports: {
    title: "品牌对标审计",
    englishTitle: "Brand Benchmark Audits",
    description:
      "AIBRI 聚焦品牌在 AI 认知与推荐链路中的相对位置，围绕品牌势能、竞品关系与认知差距发布结构化对标审计。",
    breadcrumb: "首页 / 品牌对标审计",
    tags: [
      {
        key: "all",
        labels: {
          en: "All Sections",
          es: "Todas las secciones",
          fr: "Toutes les rubriques",
          de: "Alle Bereiche",
          "zh-CN": "全部栏目",
          ja: "すべての欄目",
          ar: "جميع الأقسام",
          pt: "Todas as seções",
        },
      },
      {
        key: "ai-cognition-ranking",
        value: "AI 认知排行榜",
        labels: {
          en: "AI Cognition Rankings",
          es: "Clasificación de cognición IA",
          fr: "Classement de cognition IA",
          de: "KI-Erkenntnisranking",
          "zh-CN": "AI 认知排行榜",
          ja: "AI認知ランキング",
          ar: "تصنيف الإدراك بالذكاء الاصطناعي",
          pt: "Ranking de cognição em IA",
        },
      },
      {
        key: "competitive-benchmark-audits",
        value: "竞品对比审计",
        labels: {
          en: "Competitive Benchmark Audits",
          es: "Auditorías comparativas de competidores",
          fr: "Audits comparatifs concurrents",
          de: "Wettbewerbsvergleich-Audits",
          "zh-CN": "竞品对比审计",
          ja: "競合比較監査",
          ar: "تدقيق المقارنة التنافسية",
          pt: "Auditorias comparativas de concorrentes",
        },
      },
    ],
    sidebarHeading: "首席审计官准则",
    sidebarCards: [
      {
        title: "独立性承诺",
        body: "AIBRI 拒绝接受任何旨在影响审计排名的商业赞助。我们的研究经费均来自独立信托，确保 AIRI 指数免受商业利益侵蚀。",
        variant: "dark",
      },
    ],
    sidebarLinksHeading: "最近预警",
    sidebarLinks: [
      {
        href: "/alerts/model-update-knowledge-latency",
        label: "某主流模型对中国 EV 的认知延迟预警",
      },
      {
        href: "/alerts/functional-hallucination-on-platform-services",
        label: "跨境平台功能误配审计通报",
      },
    ],
  },
  alerts: {
    title: "审计观察与预警",
    englishTitle: "Audit Observations & Alerts",
    description:
      "AIBRI 追踪模型输出中的结构性异动与时序偏差，围绕指数变动、偏差警报与证据回溯发布持续性的审计观察。",
    breadcrumb: "首页 / 审计观察与预警",
    tags: [
      {
        key: "all",
        labels: {
          en: "All Sections",
          es: "Todas las secciones",
          fr: "Toutes les rubriques",
          de: "Alle Bereiche",
          "zh-CN": "全部栏目",
          ja: "すべての欄目",
          ar: "جميع الأقسام",
          pt: "Todas as seções",
        },
      },
      {
        key: "index-shift-bulletins",
        value: "指数异动公告",
        labels: {
          en: "Index Shift Bulletins",
          es: "Boletines de variación del índice",
          fr: "Bulletins de variation d'indice",
          de: "Indexabweichungs-Meldungen",
          "zh-CN": "指数异动公告",
          ja: "指数変動公告",
          ar: "إعلانات تغير المؤشر",
          pt: "Boletins de variação do índice",
        },
      },
      {
        key: "bias-latency-alerts",
        value: "偏差与时延警报",
        labels: {
          en: "Bias & Latency Alerts",
          es: "Alertas de sesgo y latencia",
          fr: "Alertes de biais et latence",
          de: "Bias- und Latenzwarnungen",
          "zh-CN": "偏差与时延警报",
          ja: "偏差・遅延アラート",
          ar: "تنبيهات الانحياز والتأخير",
          pt: "Alertas de viés e latência",
        },
      },
      {
        key: "evidence-backtracking-briefs",
        value: "证据回溯快讯",
        labels: {
          en: "Evidence Backtracking Briefs",
          es: "Boletines de trazabilidad de evidencia",
          fr: "Brèves de retraçage des preuves",
          de: "Kurzmeldungen zur Beweisrückverfolgung",
          "zh-CN": "证据回溯快讯",
          ja: "証拠追跡速報",
          ar: "إحاطات تتبع الأدلة",
          pt: "Boletins de rastreio de evidências",
        },
      },
    ],
    sidebarHeading: "预警处置建议",
    sidebarCards: [
      {
        title: "监测优先级",
        body: "优先监测高频推荐问题、产品对比问题和场景决策问题。这三类问题最容易把模型偏差转化为真实商业损失。",
        variant: "dark",
      },
      {
        title: "复核原则",
        body: "所有预警均建议使用跨语种、跨区域与跨模型的三重复核方法，避免把单模型异常误判为整体趋势。",
        variant: "light",
      },
    ],
    sidebarLinksHeading: "分类索引",
    sidebarLinks: [
      { href: "/alerts/model-update-knowledge-latency", label: "认知时延预警 (Knowledge Latency)" },
      {
        href: "/alerts/geographic-bias-in-luxury-ranking",
        label: "地理认知偏差 (Geographic Bias)",
      },
      {
        href: "/alerts/functional-hallucination-on-platform-services",
        label: "功能误导审计 (Functional Hallucination)",
      },
      {
        href: "/alerts/recommendation-exclusion-in-travel-itineraries",
        label: "推荐排斥预警 (Recommendation Exclusion)",
      },
    ],
  },
};

const localizedCollectionSidebarCards: Record<
  Exclude<Locale, "zh-CN">,
  Record<CollectionPageKey, SidebarCard[]>
> = {
  en: {
    reports: [
      {
        title: "Independence Commitment",
        body: "AIBRI rejects any commercial sponsorship intended to influence audit rankings. All research funding comes from independent trusts to keep the AIRI index free from commercial pressure.",
        variant: "dark",
      },
    ],
    alerts: [
      {
        title: "Monitoring Priorities",
        body: "Prioritize high-frequency recommendation prompts, product-comparison prompts, and scenario-based decision prompts. These are the places where model bias most easily becomes real business loss.",
        variant: "dark",
      },
      {
        title: "Review Principles",
        body: "Every alert should be re-checked across languages, regions, and models so that isolated anomalies are not mistaken for a structural trend.",
        variant: "light",
      },
    ],
  },
  es: {
    reports: [
      {
        title: "Compromiso de independencia",
        body: "AIBRI rechaza cualquier patrocinio comercial destinado a influir en las clasificaciones de auditoría. Toda la financiación proviene de fideicomisos independientes para proteger el índice AIRI de presiones comerciales.",
        variant: "dark",
      },
    ],
    alerts: [
      {
        title: "Prioridades de monitoreo",
        body: "Priorice preguntas frecuentes de recomendación, comparativas de producto y decisiones basadas en escenarios. Ahí es donde el sesgo del modelo se convierte con mayor facilidad en pérdida comercial real.",
        variant: "dark",
      },
      {
        title: "Principios de revisión",
        body: "Toda alerta debe volver a verificarse entre idiomas, regiones y modelos para no confundir anomalías aisladas con una tendencia estructural.",
        variant: "light",
      },
    ],
  },
  fr: {
    reports: [
      {
        title: "Engagement d'indépendance",
        body: "AIBRI refuse tout parrainage commercial visant à influencer les classements d'audit. Tous les financements proviennent de fiducies indépendantes afin de protéger l'indice AIRI de toute pression commerciale.",
        variant: "dark",
      },
    ],
    alerts: [
      {
        title: "Priorités de surveillance",
        body: "Priorisez les questions fréquentes de recommandation, les comparaisons de produits et les décisions fondées sur des scénarios. Ce sont les cas où le biais du modèle se transforme le plus facilement en perte commerciale réelle.",
        variant: "dark",
      },
      {
        title: "Principes de revue",
        body: "Chaque alerte doit être vérifiée à travers les langues, les régions et les modèles afin de ne pas confondre une anomalie isolée avec une tendance structurelle.",
        variant: "light",
      },
    ],
  },
  de: {
    reports: [
      {
        title: "Unabhängigkeitszusage",
        body: "AIBRI lehnt jede kommerzielle Förderung ab, die Audit-Rankings beeinflussen soll. Sämtliche Forschungsgelder stammen aus unabhängigen Trusts, damit der AIRI-Index frei von wirtschaftlichem Druck bleibt.",
        variant: "dark",
      },
    ],
    alerts: [
      {
        title: "Überwachungsprioritäten",
        body: "Priorisieren Sie häufige Empfehlungsfragen, Produktvergleiche und szenariobasierte Entscheidungsfragen. Dort wird Modell-Bias am ehesten zu realem geschäftlichem Schaden.",
        variant: "dark",
      },
      {
        title: "Prüfprinzipien",
        body: "Jede Warnung sollte sprach-, regions- und modellübergreifend überprüft werden, damit einzelne Ausreißer nicht mit einem strukturellen Trend verwechselt werden.",
        variant: "light",
      },
    ],
  },
  ja: {
    reports: [
      {
        title: "独立性コミットメント",
        body: "AIBRI は監査順位に影響を与えることを目的とした商業スポンサーシップを拒否します。研究資金はすべて独立信託から提供され、AIRI 指数を商業的圧力から守ります。",
        variant: "dark",
      },
    ],
    alerts: [
      {
        title: "監視の優先事項",
        body: "高頻度の推薦質問、製品比較質問、シナリオ型意思決定質問を優先的に監視してください。こうした場面でモデルの偏りは最も現実の事業損失につながりやすくなります。",
        variant: "dark",
      },
      {
        title: "再確認の原則",
        body: "個別の異常を構造的傾向と取り違えないため、すべての警報は言語・地域・モデルをまたいで再確認する必要があります。",
        variant: "light",
      },
    ],
  },
  ar: {
    reports: [
      {
        title: "التزام الاستقلالية",
        body: "ترفض AIBRI أي رعاية تجارية تهدف إلى التأثير في تصنيفات التدقيق. يأتي تمويل الأبحاث بالكامل من صناديق مستقلة لحماية مؤشر AIRI من الضغط التجاري.",
        variant: "dark",
      },
    ],
    alerts: [
      {
        title: "أولويات المراقبة",
        body: "أعطِ الأولوية لأسئلة التوصية المتكررة، وأسئلة مقارنة المنتجات، وأسئلة اتخاذ القرار المبنية على السيناريو. في هذه المواضع يتحول تحيز النموذج بسهولة أكبر إلى خسارة تجارية حقيقية.",
        variant: "dark",
      },
      {
        title: "مبادئ المراجعة",
        body: "يجب إعادة التحقق من كل تنبيه عبر اللغات والمناطق والنماذج حتى لا تُفهم الحالات الشاذة الفردية على أنها اتجاه هيكلي.",
        variant: "light",
      },
    ],
  },
  pt: {
    reports: [
      {
        title: "Compromisso de independência",
        body: "A AIBRI rejeita qualquer patrocínio comercial destinado a influenciar rankings de auditoria. Todo o financiamento vem de fundos independentes para manter o índice AIRI livre de pressão comercial.",
        variant: "dark",
      },
    ],
    alerts: [
      {
        title: "Prioridades de monitoramento",
        body: "Priorize perguntas frequentes de recomendação, comparações de produtos e decisões baseadas em cenários. É nesses casos que o viés do modelo mais facilmente se transforma em perda comercial real.",
        variant: "dark",
      },
      {
        title: "Princípios de revisão",
        body: "Todo alerta deve ser verificado novamente entre idiomas, regiões e modelos para que anomalias isoladas não sejam confundidas com uma tendência estrutural.",
        variant: "light",
      },
    ],
  },
};

const localizedCollectionSidebarLinks: Record<
  Exclude<Locale, "zh-CN">,
  Record<CollectionPageKey, LinkItem[]>
> = {
  en: {
    reports: [
      {
        href: "/alerts/model-update-knowledge-latency",
        label: "Knowledge latency alert for a major model's handling of Chinese EV brands",
      },
      {
        href: "/alerts/functional-hallucination-on-platform-services",
        label: "Audit notice on service-function mismatches across cross-border platforms",
      },
    ],
    alerts: [
      { href: "/alerts/model-update-knowledge-latency", label: "Knowledge Latency Alert" },
      {
        href: "/alerts/geographic-bias-in-luxury-ranking",
        label: "Geographic Bias",
      },
      {
        href: "/alerts/functional-hallucination-on-platform-services",
        label: "Functional Hallucination",
      },
      {
        href: "/alerts/recommendation-exclusion-in-travel-itineraries",
        label: "Recommendation Exclusion",
      },
    ],
  },
  es: {
    reports: [
      {
        href: "/alerts/model-update-knowledge-latency",
        label: "Alerta de latencia cognitiva sobre marcas chinas de EV en un modelo principal",
      },
      {
        href: "/alerts/functional-hallucination-on-platform-services",
        label: "Aviso de auditoría sobre funciones mal atribuidas en plataformas transfronterizas",
      },
    ],
    alerts: [
      { href: "/alerts/model-update-knowledge-latency", label: "Alerta de latencia cognitiva" },
      {
        href: "/alerts/geographic-bias-in-luxury-ranking",
        label: "Sesgo geográfico",
      },
      {
        href: "/alerts/functional-hallucination-on-platform-services",
        label: "Alucinación funcional",
      },
      {
        href: "/alerts/recommendation-exclusion-in-travel-itineraries",
        label: "Exclusión de recomendación",
      },
    ],
  },
  fr: {
    reports: [
      {
        href: "/alerts/model-update-knowledge-latency",
        label:
          "Alerte de latence cognitive sur le traitement des marques EV chinoises par un grand modèle",
      },
      {
        href: "/alerts/functional-hallucination-on-platform-services",
        label:
          "Avis d'audit sur les capacités de plateforme mal attribuées dans le commerce transfrontalier",
      },
    ],
    alerts: [
      { href: "/alerts/model-update-knowledge-latency", label: "Alerte de latence cognitive" },
      {
        href: "/alerts/geographic-bias-in-luxury-ranking",
        label: "Biais géographique",
      },
      {
        href: "/alerts/functional-hallucination-on-platform-services",
        label: "Hallucination fonctionnelle",
      },
      {
        href: "/alerts/recommendation-exclusion-in-travel-itineraries",
        label: "Exclusion de recommandation",
      },
    ],
  },
  de: {
    reports: [
      {
        href: "/alerts/model-update-knowledge-latency",
        label: "Warnung zur Wissenslatenz eines führenden Modells bei chinesischen EV-Marken",
      },
      {
        href: "/alerts/functional-hallucination-on-platform-services",
        label:
          "Audit-Hinweis zu falsch zugeordneten Plattformfunktionen im grenzüberschreitenden Handel",
      },
    ],
    alerts: [
      { href: "/alerts/model-update-knowledge-latency", label: "Wissenslatenz-Warnung" },
      {
        href: "/alerts/geographic-bias-in-luxury-ranking",
        label: "Geografischer Bias",
      },
      {
        href: "/alerts/functional-hallucination-on-platform-services",
        label: "Funktionale Halluzination",
      },
      {
        href: "/alerts/recommendation-exclusion-in-travel-itineraries",
        label: "Empfehlungsausschluss",
      },
    ],
  },
  ja: {
    reports: [
      {
        href: "/alerts/model-update-knowledge-latency",
        label: "主要モデルによる中国EVブランド認知の遅延アラート",
      },
      {
        href: "/alerts/functional-hallucination-on-platform-services",
        label: "越境プラットフォーム機能の誤配に関する監査通知",
      },
    ],
    alerts: [
      { href: "/alerts/model-update-knowledge-latency", label: "認知遅延アラート" },
      {
        href: "/alerts/geographic-bias-in-luxury-ranking",
        label: "地理的バイアス",
      },
      {
        href: "/alerts/functional-hallucination-on-platform-services",
        label: "機能ハルシネーション",
      },
      {
        href: "/alerts/recommendation-exclusion-in-travel-itineraries",
        label: "推薦排除アラート",
      },
    ],
  },
  ar: {
    reports: [
      {
        href: "/alerts/model-update-knowledge-latency",
        label: "تنبيه تأخر المعرفة في نموذج رئيسي بشأن علامات السيارات الكهربائية الصينية",
      },
      {
        href: "/alerts/functional-hallucination-on-platform-services",
        label: "إشعار تدقيق حول إسناد وظائف المنصات العابرة للحدود بشكل خاطئ",
      },
    ],
    alerts: [
      { href: "/alerts/model-update-knowledge-latency", label: "تنبيه تأخر المعرفة" },
      {
        href: "/alerts/geographic-bias-in-luxury-ranking",
        label: "تحيز جغرافي",
      },
      {
        href: "/alerts/functional-hallucination-on-platform-services",
        label: "هلوسة وظيفية",
      },
      {
        href: "/alerts/recommendation-exclusion-in-travel-itineraries",
        label: "استبعاد التوصية",
      },
    ],
  },
  pt: {
    reports: [
      {
        href: "/alerts/model-update-knowledge-latency",
        label:
          "Alerta de latência de conhecimento sobre marcas chinesas de EV em um modelo principal",
      },
      {
        href: "/alerts/functional-hallucination-on-platform-services",
        label: "Aviso de auditoria sobre funções mal atribuídas em plataformas transfronteiriças",
      },
    ],
    alerts: [
      {
        href: "/alerts/model-update-knowledge-latency",
        label: "Alerta de latência de conhecimento",
      },
      {
        href: "/alerts/geographic-bias-in-luxury-ranking",
        label: "Viés geográfico",
      },
      {
        href: "/alerts/functional-hallucination-on-platform-services",
        label: "Alucinação funcional",
      },
      {
        href: "/alerts/recommendation-exclusion-in-travel-itineraries",
        label: "Exclusão de recomendação",
      },
    ],
  },
};

export function getCollectionSidebarCards(collectionKey: CollectionPageKey, locale: Locale) {
  return locale === "zh-CN"
    ? collectionPages[collectionKey].sidebarCards
    : localizedCollectionSidebarCards[locale][collectionKey];
}

export function getCollectionSidebarLinks(collectionKey: CollectionPageKey, locale: Locale) {
  return locale === "zh-CN"
    ? collectionPages[collectionKey].sidebarLinks
    : localizedCollectionSidebarLinks[locale][collectionKey];
}

export const staticPages: Record<string, StaticPageData> = {
  methodology: {
    title: "审计方法论 (Methodology)",
    updatedAt: "2025年3月13日",
    breadcrumb: "首页 / 审计方法论",
    intro: [
      "AIBRI 采用分布式节点采样、跨语种提示对照与证据链归档三层审计方法，对 AI 模型的品牌认知行为进行长期追踪。",
      "我们关注的不是单次回答是否正确，而是模型在连续建议、品牌排序与场景推理中的稳定偏差结构。",
    ],
    sections: [
      {
        heading: "1. 分布式节点采样",
        paragraphs: [
          "节点覆盖北美、欧洲、中东与亚太多个地区，确保同一问题在不同地理条件与接口配置下得到可比结果。",
          "每一轮审计都会记录时间戳、提示词版本、节点位置与模型版本，以便后续复核。",
        ],
      },
      {
        heading: "2. 多轮问题设计",
        paragraphs: [
          "审计问题分为开放式提问、对比式提问、推荐式提问和追问式提问四类，以观察模型在不同决策阶段的行为差异。",
          "我们尤其重视推荐式提问，因为这类场景最容易对消费者与企业决策产生直接影响。",
        ],
      },
      {
        heading: "3. 证据链与校验",
        items: [
          "保留原始对话日志与节点环境信息。",
          "将关键结论映射回可解释的问题集与回答样本。",
          "对高风险结论执行跨模型、跨区域与跨语种复测。",
        ],
      },
    ],
    status: {
      approval: "已生效",
      documentId: "AIBRI-MTH-001",
      secrecy: "公开 (Public)",
    },
    relatedLinks: [
      { href: "/evidence-vault", label: "证据存档说明" },
      { href: "/policies/integrity", label: "审计诚信准则" },
      { href: "/policies/privacy", label: "数据采集伦理" },
    ],
    footerNote: "方法论版本将随审计协议更新同步修订。",
  },
  auditors: {
    title: "关于审计员 (Auditor Profiles)",
    updatedAt: "2025年3月13日",
    breadcrumb: "首页 / 机构事务",
    intro: [
      "AIBRI 的每一项审计结果均由具备算法背景、数字化合规经验及行业洞察力的职业审计员核准。我们坚持独立客观的职业操守。",
    ],
    sections: [
      {
        heading: "审计员准入标准",
        items: [
          "具备跨语种模型行为分析经验。",
          "能够独立完成证据链复核与偏差归因。",
          "遵守 AIBRI 的利益冲突回避与披露制度。",
        ],
      },
    ],
    status: {
      approval: "已生效",
      documentId: "AIBRI-POL-003",
      secrecy: "公开 (Public)",
    },
    relatedLinks: [
      { href: "/policies/anti-fraud", label: "反欺诈声明" },
      { href: "/policies/privacy", label: "数据采集伦理" },
      { href: "/policies/terms", label: "服务条款" },
      { href: "/policies/integrity", label: "审计准则" },
    ],
    footerNote: "所有审计员资料均受机构合规部核准。",
    auditors,
  },
  "evidence-vault": {
    title: "证据存档库 (Evidence Vault)",
    updatedAt: "2025年3月18日",
    breadcrumb: "首页 / 证据存档库",
    intro: [
      "AIBRI 证据存档库用于记录报告与预警中引用的原始对话样本、时间戳、节点环境说明及模型版本标识。",
      "证据存档的核心目标是让审计结论具备可追溯性，而不是停留在不可验证的主观判断层面。",
    ],
    sections: [
      {
        heading: "1. 存档内容范围",
        items: ["关键问题集及其回答原文", "节点地理位置与执行时间戳", "模型版本说明与对照组结果"],
      },
      {
        heading: "2. 调阅规则",
        paragraphs: [
          "公开报告对应的摘要证据可向机构申请调阅。涉及持续追踪中的敏感样本将以脱敏方式开放。",
          "任何引用证据的外部传播，均必须附带原始时间窗口与模型版本标识。",
        ],
      },
    ],
    status: {
      approval: "运行中",
      documentId: "AIBRI-EVD-002",
      secrecy: "部分公开",
    },
    relatedLinks: [
      { href: "/methodology", label: "审计方法论" },
      { href: "/reports", label: "最新品牌对标审计" },
      { href: "/alerts", label: "实时预警索引" },
    ],
    footerNote: "证据库内容按采样时间顺序归档，历史记录不会被覆写。",
  },
  about: {
    title: "关于 AIBRI",
    updatedAt: "2025年3月20日",
    breadcrumb: "首页 / 关于我们",
    intro: [
      "AI BrandRank Institute (AIBRI) 是一家独立的全球研究机构，通过分布式节点审计人工智能模型中的品牌认知权重。",
      "我们关注品牌在 AI 时代的数字认知资产，帮助研究者、企业与媒体理解模型如何塑造市场叙事。",
    ],
    sections: [
      {
        id: "mission",
        heading: "1. 机构使命",
        paragraphs: [
          "提升算法商业时代的透明度，建立跨市场、跨语言、跨模型的品牌认知审计基准。",
          "推动 AI 输出从黑箱印象走向可复核、可比较、可追踪的审计对象。",
        ],
      },
      {
        id: "network",
        heading: "2. 全球协作网络",
        paragraphs: [
          "AIBRI 在马德里设立机构协调中心，并与香港、伦敦等地的研究协作节点保持长期联动。",
          "我们的合作网络覆盖品牌研究、数据治理、合规审计与跨语种分析多个方向。",
        ],
      },
      {
        id: "governance",
        heading: "3. 治理原则",
        items: [
          "不接受品牌方购买排名、删除预警或指定结论。",
          "所有正式结论均需回溯到样本、时间戳与执行环境说明。",
          "审计发布前必须完成跨模型、跨区域或跨语种中的至少两项复核。",
        ],
      },
      {
        id: "contact",
        heading: "4. 联系我们",
        paragraphs: [
          "机构联络与研究合作请求请通过公开窗口提交。涉及证据调阅、研究引用、媒体沟通与合规举报的请求，将由对应职能组在审查后统一回复。",
          "为确保审计独立性，任何带有排名购买、定向删改或结果干预意图的商业请求都不会进入合作流程。",
        ],
        items: [
          "机构邮箱: contact@aibrandrank.org",
          "媒体联络: press@aibrandrank.org",
          "证据调阅: vault@aibrandrank.org",
          "合规举报: integrity@aibrandrank.org",
          "协调中心: Paseo de la Castellana, 259C, Torre de Cristal, 28046 Madrid, Spain",
        ],
      },
    ],
    status: {
      approval: "公开发布",
      documentId: "AIBRI-ORG-001",
      secrecy: "公开 (Public)",
    },
    relatedLinks: [
      { href: "/methodology", label: "方法论总览" },
      { href: "/auditors", label: "审计员档案" },
      { href: "/evidence-vault", label: "证据存档库" },
    ],
    footerNote: "机构信息按季度审查一次并更新。",
  },
  privacy: {
    title: "隐私权政策",
    updatedAt: "2025年3月19日",
    breadcrumb: "首页 / 合规声明 / 隐私权政策",
    intro: ["AIBRI 仅收集公开可获取的 AI 模型输出数据，不涉及任何个人隐私或未授权数据。"],
    sections: [
      {
        heading: "1. 数据收集范围",
        paragraphs: [
          "我们记录的是模型输出、时间戳、提示词版本与执行节点环境，不主动采集个人身份信息。",
          "任何因公开页面引用而进入审计样本的内容，都将按照最小必要原则保留。",
        ],
      },
      {
        heading: "2. 数据使用目的",
        paragraphs: [
          "数据仅用于算法行为研究、偏差归因、证据存档与审计报告撰写。",
          "未经额外授权，AIBRI 不会将样本数据用于广告投放或商业画像。",
        ],
      },
    ],
    status: {
      approval: "已生效",
      documentId: "AIBRI-PRV-001",
      secrecy: "公开 (Public)",
    },
    relatedLinks: [
      { href: "/policies/terms", label: "服务条款" },
      { href: "/policies/anti-fraud", label: "反欺诈声明" },
    ],
    footerNote: "如采集规则调整，机构将同步发布修订版本。",
  },
  terms: {
    title: "服务条款",
    updatedAt: "2025年3月19日",
    breadcrumb: "首页 / 合规声明 / 服务条款",
    intro: ["AIBRI 网站内容用于研究、公示与学术传播目的。任何商业引用均需遵循机构的授权规范。"],
    sections: [
      {
        heading: "1. 使用许可",
        paragraphs: [
          "用户可在注明来源的前提下引用公开摘要，但不得修改结论含义或断章取义。",
          "涉及品牌排名或指数截图的商业使用，必须取得书面授权。",
        ],
      },
      {
        heading: "2. 限制事项",
        items: [
          "不得伪造或篡改 AIBRI 文档编号。",
          "不得将预警文件包装为机构背书。",
          "不得利用机构名义进行招商、募资或营销传播。",
        ],
      },
    ],
    status: {
      approval: "已生效",
      documentId: "AIBRI-TRM-002",
      secrecy: "公开 (Public)",
    },
    relatedLinks: [
      { href: "/policies/privacy", label: "隐私权政策" },
      { href: "/policies/integrity", label: "审计诚信准则" },
    ],
    footerNote: "条款解释权由 AIBRI 合规部保留。",
  },
  "anti-fraud": {
    title: "反欺诈声明",
    updatedAt: "2025年3月19日",
    breadcrumb: "首页 / 合规声明 / 反欺诈声明",
    intro: [
      "AIBRI 不接受品牌方购买排名、删除预警或指定结论的任何形式请求，亦不会以收费方式出售审计结论。",
    ],
    sections: [
      {
        heading: "1. 禁止行为",
        items: ["付费要求调整审计分数或排序", "冒用机构名义开展商业销售", "伪造证据链或样本时间戳"],
      },
      {
        heading: "2. 举报渠道",
        paragraphs: [
          "任何涉及假冒机构、虚假授权、伪造文档或非法商业合作的线索，均可通过合规渠道提交复核。",
          "经核实后，机构将保留公开披露与法律追诉的权利。",
        ],
      },
    ],
    status: {
      approval: "已生效",
      documentId: "AIBRI-AFD-001",
      secrecy: "公开 (Public)",
    },
    relatedLinks: [
      { href: "/policies/terms", label: "服务条款" },
      { href: "/auditors", label: "审计员档案" },
    ],
    footerNote: "任何收费合作均不得影响审计独立性。",
  },
  integrity: {
    title: "审计诚信准则",
    updatedAt: "2025年3月19日",
    breadcrumb: "首页 / 合规声明 / 审计诚信准则",
    intro: [
      "AIBRI 的审计诚信准则规定了证据核验、利益冲突回避、结论复核与发布纪律，是全站所有报告的基础规范。",
    ],
    sections: [
      {
        heading: "1. 证据优先原则",
        paragraphs: [
          "任何结论都必须能够映射回原始问答样本、时间戳与执行环境说明。",
          "未经复核的观察不得直接进入正式结论层。",
        ],
      },
      {
        heading: "2. 利益冲突回避",
        paragraphs: [
          "审计员必须披露与被审计品牌、平台或模型厂商之间可能存在的利益关联。",
          "如存在无法回避的潜在冲突，该人员不得参与对应项目的结论签发。",
        ],
      },
    ],
    status: {
      approval: "已生效",
      documentId: "AIBRI-INT-001",
      secrecy: "公开 (Public)",
    },
    relatedLinks: [
      { href: "/methodology", label: "审计方法论" },
      { href: "/policies/anti-fraud", label: "反欺诈声明" },
    ],
    footerNote: "准则版本号会随协议升级同步更新。",
  },
};

export type StaticPageKey =
  | "about"
  | "auditors"
  | "methodology"
  | "evidence-vault"
  | "privacy"
  | "terms"
  | "anti-fraud"
  | "integrity";

type LocalizedStaticPageOverride = {
  updatedAt: string;
  intro: string[];
  sections: StaticPageData["sections"];
  status: {
    approval: string;
    secrecy: string;
  };
  relatedLabels: string[];
  footerNote: string;
  auditors?: AuditorProfile[];
};

const localizedAuditors: Record<Exclude<Locale, "zh-CN">, AuditorProfile[]> = {
  en: [
    {
      initials: "S",
      name: "Striver",
      role: "Chief Audit Officer / Lead Auditor",
      bio: "Focuses on global AI behavior audits and algorithmic asset pricing with 15 years of experience in digital compliance and cross-border analysis.",
    },
    {
      initials: "A",
      name: "Auditor 02",
      role: "Senior Algorithm Auditor",
      bio: "Leads recommendation-path audits, multilingual sampling, and industry graph validation with emphasis on geographic bias.",
    },
    {
      initials: "M",
      name: "Mosaic",
      role: "Evidence Chain Analyst",
      bio: "Maintains dialogue archives, timestamp verification, and model-version tracking to keep audit files reviewable.",
    },
  ],
  es: [
    {
      initials: "S",
      name: "Striver",
      role: "Director de Auditoría / Auditor Principal",
      bio: "Se centra en auditorías globales del comportamiento de la IA y valoración de activos algorítmicos, con 15 años de experiencia en cumplimiento digital y análisis transfronterizo.",
    },
    {
      initials: "A",
      name: "Auditor 02",
      role: "Auditor sénior de algoritmos",
      bio: "Dirige auditorías de rutas de recomendación, muestreo multilingüe y validación de grafos sectoriales, con foco en sesgos geográficos.",
    },
    {
      initials: "M",
      name: "Mosaic",
      role: "Analista de cadena de evidencia",
      bio: "Mantiene archivos de diálogo, verificación de marcas de tiempo y seguimiento de versiones del modelo para que los expedientes sean revisables.",
    },
  ],
  fr: [
    {
      initials: "S",
      name: "Striver",
      role: "Directeur de l'audit / Auditeur principal",
      bio: "Travaille sur les audits mondiaux du comportement de l'IA et la valorisation des actifs algorithmiques avec 15 ans d'expérience en conformité numérique et en analyse transfrontalière.",
    },
    {
      initials: "A",
      name: "Auditor 02",
      role: "Auditeur algorithmique senior",
      bio: "Pilote les audits des parcours de recommandation, l'échantillonnage multilingue et la validation des graphes sectoriels, avec un accent sur les biais géographiques.",
    },
    {
      initials: "M",
      name: "Mosaic",
      role: "Analyste de chaîne de preuves",
      bio: "Gère l'archivage des dialogues, la vérification des horodatages et le suivi des versions de modèles afin de garder les dossiers auditables.",
    },
  ],
  de: [
    {
      initials: "S",
      name: "Striver",
      role: "Leiter Audit / Lead Auditor",
      bio: "Fokussiert globale Audits des KI-Verhaltens und die Bewertung algorithmischer Vermögenswerte mit 15 Jahren Erfahrung in digitaler Compliance und grenzüberschreitender Analyse.",
    },
    {
      initials: "A",
      name: "Auditor 02",
      role: "Senior-Algorithmus-Auditor",
      bio: "Leitet Audits von Empfehlungswegen, mehrsprachiges Sampling und die Validierung von Branchen-Graphen mit Schwerpunkt auf geografischer Verzerrung.",
    },
    {
      initials: "M",
      name: "Mosaic",
      role: "Analyst für Beweisketten",
      bio: "Pflegt Dialogarchive, Zeitstempelprüfung und Modellversions-Tracking, damit Auditakten überprüfbar bleiben.",
    },
  ],
  ja: [
    {
      initials: "S",
      name: "Striver",
      role: "主任監査責任者 / Lead Auditor",
      bio: "グローバルな AI 行動監査とアルゴリズム資産評価を専門とし、デジタルコンプライアンスと越境分析で 15 年の経験を持ちます。",
    },
    {
      initials: "A",
      name: "Auditor 02",
      role: "シニアアルゴリズム監査官",
      bio: "推薦経路の監査、多言語サンプリング、業界知識グラフ検証を担当し、地理的バイアスの追跡に重点を置きます。",
    },
    {
      initials: "M",
      name: "Mosaic",
      role: "証拠チェーンアナリスト",
      bio: "対話ログの保管、タイムスタンプ検証、モデル版数追跡を担当し、監査ファイルの再検証性を維持します。",
    },
  ],
  ar: [
    {
      initials: "S",
      name: "Striver",
      role: "رئيس التدقيق / المدقق الرئيسي",
      bio: "يركز على تدقيق سلوك الذكاء الاصطناعي عالميًا وتسعير الأصول الخوارزمية، مع 15 عامًا من الخبرة في الامتثال الرقمي والتحليل العابر للحدود.",
    },
    {
      initials: "A",
      name: "Auditor 02",
      role: "مدقق خوارزميات أول",
      bio: "يقود تدقيق مسارات التوصية وأخذ العينات متعددة اللغات والتحقق من الرسوم البيانية القطاعية مع تركيز على التحيز الجغرافي.",
    },
    {
      initials: "M",
      name: "Mosaic",
      role: "محلل سلسلة الأدلة",
      bio: "يدير أرشفة الحوارات والتحقق من الطوابع الزمنية وتتبع إصدارات النماذج للحفاظ على قابلية مراجعة ملفات التدقيق.",
    },
  ],
  pt: [
    {
      initials: "S",
      name: "Striver",
      role: "Diretor de Auditoria / Auditor Líder",
      bio: "Atua em auditorias globais de comportamento de IA e precificação de ativos algorítmicos, com 15 anos de experiência em conformidade digital e análise transfronteiriça.",
    },
    {
      initials: "A",
      name: "Auditor 02",
      role: "Auditor sênior de algoritmos",
      bio: "Conduz auditorias de trajetórias de recomendação, amostragem multilíngue e validação de grafos setoriais, com foco em viés geográfico.",
    },
    {
      initials: "M",
      name: "Mosaic",
      role: "Analista de cadeia de evidências",
      bio: "Mantém arquivos de diálogos, verificação de carimbos de tempo e rastreamento de versões de modelo para preservar a revisibilidade dos dossiês.",
    },
  ],
};

const localizedStaticPageOverrides: Record<
  Exclude<Locale, "zh-CN">,
  Record<StaticPageKey, LocalizedStaticPageOverride>
> = {
  en: {
    methodology: {
      updatedAt: "2025-03-13",
      intro: [
        "AIBRI uses a three-layer methodology of distributed node sampling, multilingual prompt comparison, and evidence-chain archiving to track brand cognition inside AI models.",
        "We are less interested in one-off correctness than in persistent bias patterns that emerge across recommendation, ranking, and scenario reasoning.",
      ],
      sections: [
        {
          heading: "1. Distributed Node Sampling",
          paragraphs: [
            "Our nodes span North America, Europe, the Middle East, and Asia-Pacific so that the same query can be compared across geographies and execution settings.",
            "Each round records timestamps, prompt versions, node location, and model versions for later review.",
          ],
        },
        {
          heading: "2. Multi-turn Question Design",
          paragraphs: [
            "Questions are grouped into open, comparative, recommendation, and follow-up prompts to surface different decision-stage behaviors.",
            "Recommendation prompts receive special attention because they are the most likely to influence real user choices.",
          ],
        },
        {
          heading: "3. Evidence Chain Validation",
          items: [
            "Retain original dialogue logs and node context.",
            "Map conclusions back to interpretable question sets and answer samples.",
            "Re-test high-risk findings across models, regions, and languages.",
          ],
        },
      ],
      status: {
        approval: "In force",
        secrecy: "Public",
      },
      relatedLabels: ["Evidence Vault Notes", "Audit Integrity Code", "Data Collection Ethics"],
      footerNote: "Methodology revisions track protocol updates.",
    },
    auditors: {
      updatedAt: "2025-03-13",
      intro: [
        "Every AIBRI conclusion is signed off by auditors with algorithmic, compliance, and industry expertise. We maintain an independent and evidence-driven professional standard.",
      ],
      sections: [
        {
          heading: "Auditor Admission Standards",
          items: [
            "Hands-on experience analyzing multilingual model behavior.",
            "Ability to verify evidence chains and attribute bias patterns independently.",
            "Full compliance with AIBRI conflict-of-interest disclosure rules.",
          ],
        },
      ],
      status: {
        approval: "In force",
        secrecy: "Public",
      },
      relatedLabels: [
        "Anti-Fraud Statement",
        "Data Collection Ethics",
        "Terms of Service",
        "Audit Standards",
      ],
      footerNote: "All auditor profiles are reviewed by the compliance office.",
      auditors: localizedAuditors.en,
    },
    "evidence-vault": {
      updatedAt: "2025-03-18",
      intro: [
        "The AIBRI Evidence Vault stores original dialogue samples, timestamps, node environment notes, and model version markers cited in reports and alerts.",
        "Its purpose is to make audit conclusions traceable rather than leaving them at the level of unverifiable opinion.",
      ],
      sections: [
        {
          heading: "1. Scope of Archived Material",
          items: [
            "Key question sets and answer excerpts",
            "Node geography and execution timestamps",
            "Model version notes and control-group outputs",
          ],
        },
        {
          heading: "2. Access Rules",
          paragraphs: [
            "Public reports may be accompanied by request-based access to summary evidence. Sensitive samples under active monitoring are released only in redacted form.",
            "Any external citation of evidence must include the original time window and model version marker.",
          ],
        },
      ],
      status: {
        approval: "Operational",
        secrecy: "Partially public",
      },
      relatedLabels: ["Methodology", "Latest Brand Benchmark Audits", "Live Alert Index"],
      footerNote: "Vault records are archived by sampling window and are not overwritten.",
    },
    about: {
      updatedAt: "2025-03-20",
      intro: [
        "AI BrandRank Institute (AIBRI) is an independent global research institution that audits how AI models recognize and weight brands across markets.",
        "We focus on brand cognition as a digital asset in the AI era and help researchers, companies, and media understand how models shape market narratives.",
      ],
      sections: [
        {
          id: "mission",
          heading: "1. Institutional Mission",
          paragraphs: [
            "Increase transparency in the algorithmic commercial era and establish cross-market, cross-language, and cross-model audit benchmarks.",
            "Move AI outputs from opaque impressions toward comparable, reviewable, and time-stamped audit objects.",
          ],
        },
        {
          id: "network",
          heading: "2. Global Collaboration Network",
          paragraphs: [
            "AIBRI coordinates its institutional operations from Madrid while maintaining long-term collaboration nodes in Hong Kong, London, and other regions.",
            "Our network spans brand research, data governance, compliance auditing, and multilingual analysis.",
          ],
        },
        {
          id: "governance",
          heading: "3. Governance Principles",
          items: [
            "No paid ranking, no paid removal of alerts, and no directed conclusion writing.",
            "Every formal conclusion must map back to samples, timestamps, and execution context.",
            "At least two of the following must be completed before release: cross-model, cross-region, or cross-language review.",
          ],
        },
        {
          id: "contact",
          heading: "4. Contact",
          paragraphs: [
            "Institutional coordination, research collaboration, media contact, evidence access, and compliance reporting are all handled through public intake channels and routed to the relevant team after review.",
            "Requests that imply ranking purchase, directed deletion, or outcome manipulation are rejected before entering any cooperation workflow.",
          ],
          items: [
            "Institutional contact: contact@aibrandrank.org",
            "Press desk: press@aibrandrank.org",
            "Evidence access: vault@aibrandrank.org",
            "Integrity reporting: integrity@aibrandrank.org",
            "Coordination center: Paseo de la Castellana, 259C, Torre de Cristal, 28046 Madrid, Spain",
          ],
        },
      ],
      status: {
        approval: "Public release",
        secrecy: "Public",
      },
      relatedLabels: ["Methodology Overview", "Auditor Profiles", "Evidence Vault"],
      footerNote: "Institutional information is reviewed once per quarter.",
    },
    privacy: {
      updatedAt: "2025-03-19",
      intro: [
        "AIBRI only collects publicly obtainable AI model output data and does not process private personal data or unauthorized records.",
      ],
      sections: [
        {
          heading: "1. Scope of Data Collection",
          paragraphs: [
            "We record model outputs, timestamps, prompt versions, and execution-node context rather than direct personal identifiers.",
            "Any content entering an audit sample through public references is retained under a minimum-necessary principle.",
          ],
        },
        {
          heading: "2. Purpose of Use",
          paragraphs: [
            "Collected data is used for algorithm-behavior research, bias attribution, evidence archiving, and audit reporting.",
            "Without additional authorization, AIBRI does not repurpose audit samples for advertising or commercial profiling.",
          ],
        },
      ],
      status: {
        approval: "In force",
        secrecy: "Public",
      },
      relatedLabels: ["Terms of Service", "Anti-Fraud Statement"],
      footerNote: "If collection rules change, a revised version will be published.",
    },
    terms: {
      updatedAt: "2025-03-19",
      intro: [
        "AIBRI website content is published for research, public transparency, and academic communication. Commercial reuse must follow the institute's authorization rules.",
      ],
      sections: [
        {
          heading: "1. Usage Permission",
          paragraphs: [
            "Public summaries may be cited with attribution, but users may not distort conclusions or quote out of context.",
            "Commercial use of rankings, index visuals, or institutional marks requires written approval.",
          ],
        },
        {
          heading: "2. Restrictions",
          items: [
            "Do not forge or alter AIBRI document identifiers.",
            "Do not package alerts as institutional endorsement.",
            "Do not use the institute name for fundraising, sales, or marketing.",
          ],
        },
      ],
      status: {
        approval: "In force",
        secrecy: "Public",
      },
      relatedLabels: ["Privacy Policy", "Audit Integrity Code"],
      footerNote: "Interpretation authority is reserved by the compliance office.",
    },
    "anti-fraud": {
      updatedAt: "2025-03-19",
      intro: [
        "AIBRI does not accept requests to buy rankings, remove alerts, or commission predetermined conclusions, and it does not sell audit outcomes as a paid product.",
      ],
      sections: [
        {
          heading: "1. Prohibited Conduct",
          items: [
            "Paying to change audit scores or ranking order",
            "Using the institute's identity for unauthorized commercial sales",
            "Forging evidence chains or sample timestamps",
          ],
        },
        {
          heading: "2. Reporting Channel",
          paragraphs: [
            "Any lead involving impersonation, false authorization, forged documents, or unlawful commercial cooperation may be submitted for review through compliance channels.",
            "Once verified, the institute reserves the right to disclose the case publicly and pursue legal remedies.",
          ],
        },
      ],
      status: {
        approval: "In force",
        secrecy: "Public",
      },
      relatedLabels: ["Terms of Service", "Auditor Profiles"],
      footerNote: "No paid cooperation may compromise audit independence.",
    },
    integrity: {
      updatedAt: "2025-03-19",
      intro: [
        "The AIBRI audit integrity code defines evidence verification, conflict disclosure, conclusion review, and release discipline for all published work.",
      ],
      sections: [
        {
          heading: "1. Evidence-First Principle",
          paragraphs: [
            "Every conclusion must map back to source dialogue samples, timestamps, and execution-context notes.",
            "Unreviewed observations may not enter the formal conclusion layer.",
          ],
        },
        {
          heading: "2. Conflict Avoidance",
          paragraphs: [
            "Auditors must disclose any material relationship with audited brands, platforms, or model providers.",
            "If a material conflict cannot be avoided, the person may not sign off on the relevant file.",
          ],
        },
      ],
      status: {
        approval: "In force",
        secrecy: "Public",
      },
      relatedLabels: ["Methodology", "Anti-Fraud Statement"],
      footerNote: "The code version is updated alongside protocol revisions.",
    },
  },
  es: {
    methodology: {
      updatedAt: "2025-03-13",
      intro: [
        "AIBRI utiliza un método de tres capas basado en muestreo distribuido por nodos, contraste multilingüe de prompts y archivo de cadena de evidencia para seguir la cognición de marca en modelos de IA.",
        "Nos interesa menos un acierto aislado que los patrones estables de sesgo que aparecen en recomendación, ranking y razonamiento contextual.",
      ],
      sections: [
        {
          heading: "1. Muestreo distribuido por nodos",
          paragraphs: [
            "Los nodos cubren Norteamérica, Europa, Oriente Medio y Asia-Pacífico para comparar la misma pregunta en distintas geografías y configuraciones.",
            "Cada ronda registra marcas de tiempo, versiones de prompts, ubicación del nodo y versión del modelo para revisión posterior.",
          ],
        },
        {
          heading: "2. Diseño de preguntas multietapa",
          paragraphs: [
            "Las preguntas se agrupan en abiertas, comparativas, de recomendación y de seguimiento para observar distintos comportamientos en cada etapa de decisión.",
            "Las preguntas de recomendación reciben especial atención porque son las que más fácilmente afectan decisiones reales.",
          ],
        },
        {
          heading: "3. Validación de la cadena de evidencia",
          items: [
            "Conservar registros originales y contexto del nodo.",
            "Vincular conclusiones con conjuntos de preguntas y respuestas interpretables.",
            "Repetir pruebas de alto riesgo entre modelos, regiones e idiomas.",
          ],
        },
      ],
      status: { approval: "Vigente", secrecy: "Público" },
      relatedLabels: [
        "Notas del archivo de evidencias",
        "Código de integridad",
        "Ética de recolección de datos",
      ],
      footerNote: "Las revisiones metodológicas siguen las actualizaciones del protocolo.",
    },
    auditors: {
      updatedAt: "2025-03-13",
      intro: [
        "Cada conclusión de AIBRI es aprobada por auditores con experiencia en algoritmos, cumplimiento y análisis sectorial. Mantenemos un estándar profesional independiente y basado en evidencia.",
      ],
      sections: [
        {
          heading: "Criterios de admisión de auditores",
          items: [
            "Experiencia práctica en análisis multilingüe del comportamiento de modelos.",
            "Capacidad para verificar cadenas de evidencia y atribuir patrones de sesgo de forma independiente.",
            "Cumplimiento de las reglas de divulgación de conflictos de interés de AIBRI.",
          ],
        },
      ],
      status: { approval: "Vigente", secrecy: "Público" },
      relatedLabels: [
        "Declaración antifraude",
        "Ética de recolección de datos",
        "Términos del servicio",
        "Normas de auditoría",
      ],
      footerNote: "Todos los perfiles de auditores son revisados por el área de cumplimiento.",
      auditors: localizedAuditors.es,
    },
    "evidence-vault": {
      updatedAt: "2025-03-18",
      intro: [
        "El archivo de evidencias de AIBRI conserva muestras originales de diálogo, marcas de tiempo, notas del entorno de ejecución y marcadores de versión del modelo citados en informes y alertas.",
        "Su finalidad es hacer trazables las conclusiones de auditoría y no dejarlas en el nivel de opinión no verificable.",
      ],
      sections: [
        {
          heading: "1. Alcance del material archivado",
          items: [
            "Conjuntos clave de preguntas y extractos de respuestas",
            "Geografía del nodo y marcas de tiempo",
            "Notas de versión del modelo y resultados de control",
          ],
        },
        {
          heading: "2. Reglas de acceso",
          paragraphs: [
            "Los informes públicos pueden ir acompañados de acceso solicitado a evidencia resumida. Las muestras sensibles bajo seguimiento activo solo se entregan de forma anonimizada.",
            "Toda cita externa de evidencia debe incluir la ventana temporal original y el marcador de versión del modelo.",
          ],
        },
      ],
      status: { approval: "Operativo", secrecy: "Parcialmente público" },
      relatedLabels: ["Metodología", "Últimos informes sectoriales", "Índice de alertas"],
      footerNote:
        "Los registros del archivo se ordenan por ventana de muestreo y no se sobrescriben.",
    },
    about: {
      updatedAt: "2025-03-20",
      intro: [
        "AI BrandRank Institute (AIBRI) es una institución global de investigación independiente que audita cómo los modelos de IA reconocen y ponderan marcas en distintos mercados.",
        "Nos centramos en la cognición de marca como activo digital en la era de la IA y ayudamos a investigadores, empresas y medios a entender cómo los modelos moldean la narrativa del mercado.",
      ],
      sections: [
        {
          id: "mission",
          heading: "1. Misión institucional",
          paragraphs: [
            "Aumentar la transparencia en la era comercial algorítmica y establecer referencias de auditoría entre mercados, idiomas y modelos.",
            "Mover las salidas de IA desde impresiones opacas hacia objetos auditables, comparables y trazables.",
          ],
        },
        {
          id: "network",
          heading: "2. Red global de colaboración",
          paragraphs: [
            "AIBRI coordina sus operaciones desde Madrid y mantiene nodos de colaboración a largo plazo en Hong Kong, Londres y otras regiones.",
            "La red cubre investigación de marca, gobernanza de datos, auditoría de cumplimiento y análisis multilingüe.",
          ],
        },
        {
          id: "governance",
          heading: "3. Principios de gobernanza",
          items: [
            "No se aceptan pagos por ranking, eliminación de alertas ni conclusiones dirigidas.",
            "Toda conclusión formal debe vincularse a muestras, marcas de tiempo y contexto de ejecución.",
            "Antes de publicar se requieren al menos dos revisiones entre modelo, región o idioma.",
          ],
        },
        {
          id: "contact",
          heading: "4. Contacto",
          paragraphs: [
            "La coordinación institucional, colaboración de investigación, contacto con medios, acceso a evidencia y reportes de integridad se gestionan por canales públicos y se derivan al equipo correspondiente tras revisión.",
            "Las solicitudes que impliquen compra de ranking, borrado dirigido o manipulación de resultados quedan excluidas antes de cualquier flujo de cooperación.",
          ],
          items: [
            "Contacto institucional: contact@aibrandrank.org",
            "Prensa: press@aibrandrank.org",
            "Acceso a evidencia: vault@aibrandrank.org",
            "Reporte de integridad: integrity@aibrandrank.org",
            "Centro de coordinación: Paseo de la Castellana, 259C, Torre de Cristal, 28046 Madrid, Spain",
          ],
        },
      ],
      status: { approval: "Publicación abierta", secrecy: "Público" },
      relatedLabels: ["Resumen de metodología", "Perfiles de auditores", "Archivo de evidencias"],
      footerNote: "La información institucional se revisa una vez por trimestre.",
    },
    privacy: {
      updatedAt: "2025-03-19",
      intro: [
        "AIBRI solo recopila datos públicos de salida de modelos de IA y no procesa datos personales privados ni registros no autorizados.",
      ],
      sections: [
        {
          heading: "1. Alcance de la recolección",
          paragraphs: [
            "Registramos salidas del modelo, marcas de tiempo, versiones de prompts y contexto del nodo de ejecución, no identificadores personales directos.",
            "Todo contenido que entre a una muestra por referencias públicas se conserva bajo el principio de mínima necesidad.",
          ],
        },
        {
          heading: "2. Finalidad de uso",
          paragraphs: [
            "Los datos se usan para investigación del comportamiento algorítmico, atribución de sesgo, archivo de evidencia y elaboración de informes.",
            "Sin autorización adicional, AIBRI no reutiliza muestras para publicidad o perfilado comercial.",
          ],
        },
      ],
      status: { approval: "Vigente", secrecy: "Público" },
      relatedLabels: ["Términos del servicio", "Declaración antifraude"],
      footerNote: "Si cambian las reglas de recolección, se publicará una versión revisada.",
    },
    terms: {
      updatedAt: "2025-03-19",
      intro: [
        "El contenido del sitio AIBRI se publica para investigación, transparencia pública y comunicación académica. Todo reutilizo comercial debe seguir las reglas de autorización del instituto.",
      ],
      sections: [
        {
          heading: "1. Permiso de uso",
          paragraphs: [
            "Los resúmenes públicos pueden citarse con atribución, pero no se permite distorsionar conclusiones ni descontextualizarlas.",
            "El uso comercial de rankings, visuales del índice o marcas institucionales requiere aprobación escrita.",
          ],
        },
        {
          heading: "2. Restricciones",
          items: [
            "No falsificar ni alterar identificadores documentales de AIBRI.",
            "No presentar alertas como aval institucional.",
            "No usar el nombre del instituto para ventas, recaudación o marketing.",
          ],
        },
      ],
      status: { approval: "Vigente", secrecy: "Público" },
      relatedLabels: ["Política de privacidad", "Código de integridad"],
      footerNote: "La oficina de cumplimiento se reserva la interpretación.",
    },
    "anti-fraud": {
      updatedAt: "2025-03-19",
      intro: [
        "AIBRI no acepta solicitudes para comprar rankings, eliminar alertas o encargar conclusiones predeterminadas, y no vende resultados de auditoría como producto de pago.",
      ],
      sections: [
        {
          heading: "1. Conducta prohibida",
          items: [
            "Pagar para alterar puntuaciones o posiciones",
            "Usar la identidad del instituto para ventas no autorizadas",
            "Falsificar cadena de evidencia o marcas de tiempo",
          ],
        },
        {
          heading: "2. Canal de denuncia",
          paragraphs: [
            "Cualquier pista sobre suplantación, autorizaciones falsas, documentos forjados o cooperación comercial ilícita puede enviarse a revisión por los canales de cumplimiento.",
            "Una vez verificado, el instituto se reserva el derecho de divulgar el caso y emprender acciones legales.",
          ],
        },
      ],
      status: { approval: "Vigente", secrecy: "Público" },
      relatedLabels: ["Términos del servicio", "Perfiles de auditores"],
      footerNote: "Ninguna cooperación pagada puede comprometer la independencia de la auditoría.",
    },
    integrity: {
      updatedAt: "2025-03-19",
      intro: [
        "El código de integridad de auditoría de AIBRI define verificación de evidencia, divulgación de conflictos, revisión de conclusiones y disciplina de publicación para todo el trabajo emitido.",
      ],
      sections: [
        {
          heading: "1. Principio de evidencia primero",
          paragraphs: [
            "Toda conclusión debe remitir a muestras de diálogo, marcas de tiempo y notas del contexto de ejecución.",
            "Las observaciones no revisadas no pueden entrar en la capa formal de conclusiones.",
          ],
        },
        {
          heading: "2. Prevención de conflictos",
          paragraphs: [
            "Los auditores deben declarar cualquier relación relevante con marcas auditadas, plataformas o proveedores de modelos.",
            "Si el conflicto material no puede evitarse, la persona no podrá firmar el expediente correspondiente.",
          ],
        },
      ],
      status: { approval: "Vigente", secrecy: "Público" },
      relatedLabels: ["Metodología", "Declaración antifraude"],
      footerNote: "La versión del código se actualiza junto con el protocolo.",
    },
  },
  fr: {
    methodology: {
      updatedAt: "2025-03-13",
      intro: [
        "AIBRI s'appuie sur une méthode en trois couches combinant échantillonnage distribué, comparaison multilingue des invites et archivage de la chaîne de preuves pour suivre la cognition de marque dans les modèles d'IA.",
        "Nous cherchons moins la justesse ponctuelle qu'une structure stable de biais dans la recommandation, le classement et le raisonnement scénarisé.",
      ],
      sections: [
        {
          heading: "1. Échantillonnage distribué",
          paragraphs: [
            "Les nœuds couvrent l'Amérique du Nord, l'Europe, le Moyen-Orient et l'Asie-Pacifique afin de comparer une même question selon différentes géographies et configurations d'exécution.",
            "Chaque cycle enregistre les horodatages, versions d'invite, localisation du nœud et version du modèle pour contrôle ultérieur.",
          ],
        },
        {
          heading: "2. Conception multi-tours des questions",
          paragraphs: [
            "Les questions sont réparties entre invites ouvertes, comparatives, de recommandation et de relance afin d'observer plusieurs étapes de décision.",
            "Les invites de recommandation sont traitées en priorité car elles ont le plus fort potentiel d'influence sur les choix réels.",
          ],
        },
        {
          heading: "3. Validation de la chaîne de preuves",
          items: [
            "Conserver les journaux originaux et le contexte d'exécution.",
            "Rattacher les conclusions à des jeux de questions et d'échantillons interprétables.",
            "Réaliser des contre-vérifications sur plusieurs modèles, régions et langues.",
          ],
        },
      ],
      status: { approval: "En vigueur", secrecy: "Public" },
      relatedLabels: [
        "Notes du dépôt de preuves",
        "Code d'intégrité",
        "Éthique de collecte des données",
      ],
      footerNote: "Les révisions méthodologiques suivent les mises à jour du protocole.",
    },
    auditors: {
      updatedAt: "2025-03-13",
      intro: [
        "Chaque conclusion d'AIBRI est validée par des auditeurs disposant d'une expertise en algorithmes, conformité et analyse sectorielle. Nous maintenons une norme professionnelle indépendante et fondée sur les preuves.",
      ],
      sections: [
        {
          heading: "Critères d'admission des auditeurs",
          items: [
            "Expérience pratique de l'analyse multilingue du comportement des modèles.",
            "Capacité à vérifier les chaînes de preuves et à attribuer les schémas de biais de manière indépendante.",
            "Respect intégral des règles de divulgation des conflits d'intérêts d'AIBRI.",
          ],
        },
      ],
      status: { approval: "En vigueur", secrecy: "Public" },
      relatedLabels: [
        "Déclaration anti-fraude",
        "Éthique de collecte des données",
        "Conditions de service",
        "Normes d'audit",
      ],
      footerNote: "Tous les profils d'auditeurs sont revus par le service conformité.",
      auditors: localizedAuditors.fr,
    },
    "evidence-vault": {
      updatedAt: "2025-03-18",
      intro: [
        "Le dépôt de preuves AIBRI conserve les extraits de dialogue originaux, horodatages, notes d'environnement d'exécution et marqueurs de version des modèles cités dans les rapports et alertes.",
        "Son objectif est de rendre les conclusions traçables et non de les laisser au niveau d'une opinion invérifiable.",
      ],
      sections: [
        {
          heading: "1. Portée des archives",
          items: [
            "Jeux de questions clés et extraits de réponses",
            "Géographie des nœuds et horodatages",
            "Notes de version des modèles et résultats de contrôle",
          ],
        },
        {
          heading: "2. Règles d'accès",
          paragraphs: [
            "Les rapports publics peuvent être accompagnés d'un accès sur demande à des preuves synthétiques. Les échantillons sensibles sous suivi actif ne sont diffusés qu'en version expurgée.",
            "Toute citation externe d'une preuve doit inclure la fenêtre temporelle d'origine et le marqueur de version du modèle.",
          ],
        },
      ],
      status: { approval: "Opérationnel", secrecy: "Partiellement public" },
      relatedLabels: ["Méthodologie", "Derniers rapports sectoriels", "Index des alertes"],
      footerNote:
        "Les enregistrements du dépôt sont archivés par fenêtre d'échantillonnage et ne sont pas écrasés.",
    },
    about: {
      updatedAt: "2025-03-20",
      intro: [
        "AI BrandRank Institute (AIBRI) est une institution de recherche mondiale indépendante qui audite la manière dont les modèles d'IA reconnaissent et pondèrent les marques selon les marchés.",
        "Nous abordons la cognition de marque comme un actif numérique de l'ère IA et aidons chercheurs, entreprises et médias à comprendre comment les modèles structurent les récits de marché.",
      ],
      sections: [
        {
          id: "mission",
          heading: "1. Mission institutionnelle",
          paragraphs: [
            "Accroître la transparence de l'ère commerciale algorithmique et établir des références d'audit entre marchés, langues et modèles.",
            "Faire passer les sorties d'IA d'impressions opaques à des objets auditables, comparables et traçables.",
          ],
        },
        {
          id: "network",
          heading: "2. Réseau de collaboration mondial",
          paragraphs: [
            "AIBRI coordonne ses opérations depuis Madrid et maintient des nœuds de coopération de long terme à Hong Kong, Londres et dans d'autres régions.",
            "Le réseau couvre recherche de marque, gouvernance des données, audit de conformité et analyse multilingue.",
          ],
        },
        {
          id: "governance",
          heading: "3. Principes de gouvernance",
          items: [
            "Aucun paiement pour un classement, une suppression d'alerte ou une conclusion dirigée.",
            "Toute conclusion formelle doit être reliée à des échantillons, horodatages et contextes d'exécution.",
            "Avant publication, au moins deux axes de revue doivent être couverts: modèle, région ou langue.",
          ],
        },
        {
          id: "contact",
          heading: "4. Contact",
          paragraphs: [
            "Coordination institutionnelle, coopération de recherche, relations médias, accès aux preuves et signalements d'intégrité sont gérés via des canaux publics puis orientés vers l'équipe concernée après examen.",
            "Les demandes impliquant achat de classement, suppression dirigée ou manipulation des résultats sont rejetées avant toute coopération.",
          ],
          items: [
            "Contact institutionnel: contact@aibrandrank.org",
            "Presse: press@aibrandrank.org",
            "Accès aux preuves: vault@aibrandrank.org",
            "Signalement d'intégrité: integrity@aibrandrank.org",
            "Centre de coordination: Paseo de la Castellana, 259C, Torre de Cristal, 28046 Madrid, Spain",
          ],
        },
      ],
      status: { approval: "Publication publique", secrecy: "Public" },
      relatedLabels: ["Vue d'ensemble méthodologique", "Profils des auditeurs", "Dépôt de preuves"],
      footerNote: "Les informations institutionnelles sont revues une fois par trimestre.",
    },
    privacy: {
      updatedAt: "2025-03-19",
      intro: [
        "AIBRI ne collecte que des sorties publiques de modèles d'IA et ne traite pas de données personnelles privées ni d'enregistrements non autorisés.",
      ],
      sections: [
        {
          heading: "1. Champ de collecte",
          paragraphs: [
            "Nous enregistrons les sorties de modèles, horodatages, versions d'invite et contexte des nœuds d'exécution, et non des identifiants personnels directs.",
            "Tout contenu entrant dans un échantillon via des références publiques est conservé selon un principe de stricte nécessité.",
          ],
        },
        {
          heading: "2. Finalité d'usage",
          paragraphs: [
            "Les données collectées servent à la recherche sur le comportement algorithmique, à l'attribution des biais, à l'archivage des preuves et à la rédaction des rapports.",
            "Sans autorisation complémentaire, AIBRI ne réutilise pas les échantillons à des fins publicitaires ou de profilage commercial.",
          ],
        },
      ],
      status: { approval: "En vigueur", secrecy: "Public" },
      relatedLabels: ["Conditions de service", "Déclaration anti-fraude"],
      footerNote: "Toute évolution des règles de collecte donnera lieu à une version révisée.",
    },
    terms: {
      updatedAt: "2025-03-19",
      intro: [
        "Le contenu du site AIBRI est publié pour la recherche, la transparence publique et la communication académique. Toute réutilisation commerciale doit respecter les règles d'autorisation de l'institut.",
      ],
      sections: [
        {
          heading: "1. Autorisation d'usage",
          paragraphs: [
            "Les synthèses publiques peuvent être citées avec attribution, mais sans déformation des conclusions ni sorties de contexte.",
            "L'usage commercial des classements, visuels d'indice ou marques institutionnelles exige une autorisation écrite.",
          ],
        },
        {
          heading: "2. Restrictions",
          items: [
            "Ne pas falsifier ni modifier les identifiants documentaires AIBRI.",
            "Ne pas présenter une alerte comme une approbation institutionnelle.",
            "Ne pas utiliser le nom de l'institut pour vente, levée de fonds ou marketing.",
          ],
        },
      ],
      status: { approval: "En vigueur", secrecy: "Public" },
      relatedLabels: ["Politique de confidentialité", "Code d'intégrité"],
      footerNote: "L'interprétation est réservée au service conformité.",
    },
    "anti-fraud": {
      updatedAt: "2025-03-19",
      intro: [
        "AIBRI n'accepte aucune demande visant à acheter un classement, supprimer une alerte ou obtenir une conclusion prédéterminée et ne vend pas ses conclusions d'audit comme produit payant.",
      ],
      sections: [
        {
          heading: "1. Comportements interdits",
          items: [
            "Payer pour modifier un score ou un ordre de classement",
            "Utiliser l'identité de l'institut pour des ventes non autorisées",
            "Falsifier la chaîne de preuves ou les horodatages",
          ],
        },
        {
          heading: "2. Canal de signalement",
          paragraphs: [
            "Tout signalement portant sur usurpation, fausse autorisation, faux documents ou coopération commerciale illicite peut être transmis via les canaux conformité.",
            "Une fois les faits vérifiés, l'institut se réserve le droit de rendre l'affaire publique et d'engager des voies juridiques.",
          ],
        },
      ],
      status: { approval: "En vigueur", secrecy: "Public" },
      relatedLabels: ["Conditions de service", "Profils des auditeurs"],
      footerNote: "Aucune coopération payante ne peut compromettre l'indépendance de l'audit.",
    },
    integrity: {
      updatedAt: "2025-03-19",
      intro: [
        "Le code d'intégrité d'audit d'AIBRI définit la vérification des preuves, la déclaration des conflits, la revue des conclusions et la discipline de publication pour l'ensemble des travaux publiés.",
      ],
      sections: [
        {
          heading: "1. Principe de primauté des preuves",
          paragraphs: [
            "Chaque conclusion doit être reliée aux échantillons de dialogue sources, aux horodatages et aux notes de contexte d'exécution.",
            "Les observations non revues ne peuvent pas entrer dans la couche formelle des conclusions.",
          ],
        },
        {
          heading: "2. Prévention des conflits",
          paragraphs: [
            "Les auditeurs doivent déclarer toute relation pertinente avec les marques auditées, plateformes ou fournisseurs de modèles.",
            "Si un conflit significatif ne peut être évité, la personne ne peut pas signer le dossier concerné.",
          ],
        },
      ],
      status: { approval: "En vigueur", secrecy: "Public" },
      relatedLabels: ["Méthodologie", "Déclaration anti-fraude"],
      footerNote: "La version du code évolue avec le protocole.",
    },
  },
  de: {
    methodology: {
      updatedAt: "2025-03-13",
      intro: [
        "AIBRI verwendet eine dreistufige Methodik aus verteiltem Knotensampling, mehrsprachigem Prompt-Vergleich und Archivierung der Beweiskette, um Markenwahrnehmung in KI-Modellen zu verfolgen.",
        "Im Fokus stehen weniger Einzelantworten als stabile Verzerrungsmuster in Empfehlung, Ranking und szenariobezogenem Schlussfolgern.",
      ],
      sections: [
        {
          heading: "1. Verteiltes Knotensampling",
          paragraphs: [
            "Die Knoten decken Nordamerika, Europa, den Nahen Osten und den asiatisch-pazifischen Raum ab, damit dieselbe Frage unter verschiedenen geografischen Bedingungen vergleichbar bleibt.",
            "Jede Runde protokolliert Zeitstempel, Prompt-Versionen, Knotenstandort und Modellversion zur späteren Prüfung.",
          ],
        },
        {
          heading: "2. Mehrstufiges Fragendesign",
          paragraphs: [
            "Die Fragen werden in offene, vergleichende, empfehlende und nachfassende Prompts gruppiert, um unterschiedliche Entscheidungsphasen sichtbar zu machen.",
            "Empfehlungsprompts erhalten besondere Aufmerksamkeit, weil sie am ehesten reale Nutzerentscheidungen beeinflussen.",
          ],
        },
        {
          heading: "3. Validierung der Beweiskette",
          items: [
            "Originale Dialogprotokolle und Knotenkontext sichern.",
            "Schlussfolgerungen auf interpretierbare Fragesets und Antwortbeispiele zurückführen.",
            "Hochriskante Befunde modell-, regions- und sprachübergreifend erneut testen.",
          ],
        },
      ],
      status: { approval: "In Kraft", secrecy: "Öffentlich" },
      relatedLabels: ["Hinweise zum Beweisarchiv", "Integritätskodex", "Ethik der Datenerhebung"],
      footerNote: "Methodik-Revisionen folgen Protokollaktualisierungen.",
    },
    auditors: {
      updatedAt: "2025-03-13",
      intro: [
        "Jede AIBRI-Schlussfolgerung wird von Auditoren mit Fachwissen in Algorithmen, Compliance und Branchenanalyse freigegeben. Wir halten einen unabhängigen und evidenzbasierten Berufsstandard aufrecht.",
      ],
      sections: [
        {
          heading: "Zulassungsstandards für Auditoren",
          items: [
            "Praktische Erfahrung in der Analyse mehrsprachigen Modellverhaltens.",
            "Fähigkeit, Beweisketten zu prüfen und Verzerrungsmuster eigenständig zuzuordnen.",
            "Einhaltung der AIBRI-Regeln zur Offenlegung von Interessenkonflikten.",
          ],
        },
      ],
      status: { approval: "In Kraft", secrecy: "Öffentlich" },
      relatedLabels: [
        "Anti-Betrugs-Erklärung",
        "Ethik der Datenerhebung",
        "Nutzungsbedingungen",
        "Audit-Standards",
      ],
      footerNote: "Alle Auditorenprofile werden von der Compliance-Stelle geprüft.",
      auditors: localizedAuditors.de,
    },
    "evidence-vault": {
      updatedAt: "2025-03-18",
      intro: [
        "Das AIBRI-Beweisarchiv speichert originale Dialogbeispiele, Zeitstempel, Ausführungsnotizen und Modellversionsmarker aus Berichten und Warnungen.",
        "Ziel ist es, Audit-Schlussfolgerungen nachvollziehbar zu machen, statt sie auf unverifizierbare Einschätzungen zu reduzieren.",
      ],
      sections: [
        {
          heading: "1. Umfang des Archivmaterials",
          items: [
            "Schlüsselfragen und Antwortausschnitte",
            "Knotengeografie und Ausführungszeitstempel",
            "Modellversionshinweise und Kontrollgruppenergebnisse",
          ],
        },
        {
          heading: "2. Zugriffsregeln",
          paragraphs: [
            "Zu öffentlichen Berichten kann auf Anfrage zusammengefasste Evidenz bereitgestellt werden. Sensible Proben unter laufender Beobachtung werden nur redigiert freigegeben.",
            "Jede externe Zitierung von Evidenz muss das ursprüngliche Zeitfenster und den Modellversionsmarker enthalten.",
          ],
        },
      ],
      status: { approval: "Operativ", secrecy: "Teilweise öffentlich" },
      relatedLabels: ["Methodik", "Neueste Branchenberichte", "Alarmindex"],
      footerNote:
        "Archivdatensätze werden nach Sampling-Fenstern abgelegt und nicht überschrieben.",
    },
    about: {
      updatedAt: "2025-03-20",
      intro: [
        "AI BrandRank Institute (AIBRI) ist eine unabhängige globale Forschungseinrichtung, die prüft, wie KI-Modelle Marken über Märkte hinweg erkennen und gewichten.",
        "Wir betrachten Markenwahrnehmung als digitales Gut im KI-Zeitalter und helfen Forschern, Unternehmen und Medien zu verstehen, wie Modelle Marktnarrative formen.",
      ],
      sections: [
        {
          id: "mission",
          heading: "1. Institutioneller Auftrag",
          paragraphs: [
            "Mehr Transparenz im algorithmischen Wirtschaftsumfeld schaffen und Audit-Benchmarks über Märkte, Sprachen und Modelle hinweg etablieren.",
            "KI-Ausgaben von undurchsichtigen Eindrücken zu vergleichbaren, prüfbaren und nachverfolgbaren Auditobjekten machen.",
          ],
        },
        {
          id: "network",
          heading: "2. Globales Kooperationsnetzwerk",
          paragraphs: [
            "AIBRI koordiniert seine Arbeit von Madrid aus und unterhält langfristige Kooperationsknoten in Hongkong, London und weiteren Regionen.",
            "Das Netzwerk deckt Markenforschung, Daten-Governance, Compliance-Audits und mehrsprachige Analyse ab.",
          ],
        },
        {
          id: "governance",
          heading: "3. Governance-Prinzipien",
          items: [
            "Keine bezahlten Rankings, keine bezahlte Löschung von Warnungen, keine vorgegebenen Schlussfolgerungen.",
            "Jede formale Schlussfolgerung muss auf Proben, Zeitstempel und Ausführungskontext zurückgeführt werden können.",
            "Vor Veröffentlichung müssen mindestens zwei der folgenden Achsen geprüft werden: Modell, Region oder Sprache.",
          ],
        },
        {
          id: "contact",
          heading: "4. Kontakt",
          paragraphs: [
            "Institutionelle Koordination, Forschungskooperation, Medienkontakte, Evidenzzugang und Integritätshinweise werden über öffentliche Kanäle entgegengenommen und nach Prüfung an das zuständige Team weitergeleitet.",
            "Anfragen mit Rankingkauf, gezielter Löschung oder Ergebnismanipulation werden vor jedem Kooperationsprozess abgewiesen.",
          ],
          items: [
            "Institutioneller Kontakt: contact@aibrandrank.org",
            "Presse: press@aibrandrank.org",
            "Evidenzzugang: vault@aibrandrank.org",
            "Integritätshinweise: integrity@aibrandrank.org",
            "Koordinationszentrum: Paseo de la Castellana, 259C, Torre de Cristal, 28046 Madrid, Spain",
          ],
        },
      ],
      status: { approval: "Öffentliche Freigabe", secrecy: "Öffentlich" },
      relatedLabels: ["Methodik-Überblick", "Auditorenprofile", "Beweisarchiv"],
      footerNote: "Institutionelle Informationen werden einmal pro Quartal geprüft.",
    },
    privacy: {
      updatedAt: "2025-03-19",
      intro: [
        "AIBRI erhebt ausschließlich öffentlich verfügbare Ausgaben von KI-Modellen und verarbeitet keine privaten personenbezogenen Daten oder unbefugten Datensätze.",
      ],
      sections: [
        {
          heading: "1. Umfang der Datenerhebung",
          paragraphs: [
            "Wir erfassen Modellausgaben, Zeitstempel, Prompt-Versionen und Ausführungskontext der Knoten, nicht jedoch direkte Personenkennzeichen.",
            "In Auditproben gelangende Inhalte aus öffentlichen Referenzen werden nach dem Prinzip minimaler Notwendigkeit gespeichert.",
          ],
        },
        {
          heading: "2. Nutzungszweck",
          paragraphs: [
            "Die erhobenen Daten dienen der Forschung zu algorithmischem Verhalten, der Zuordnung von Verzerrungen, der Archivierung von Evidenz und der Erstellung von Auditberichten.",
            "Ohne zusätzliche Freigabe nutzt AIBRI Auditproben nicht für Werbung oder kommerzielles Profiling.",
          ],
        },
      ],
      status: { approval: "In Kraft", secrecy: "Öffentlich" },
      relatedLabels: ["Nutzungsbedingungen", "Anti-Betrugs-Erklärung"],
      footerNote: "Bei Änderungen der Erhebungsregeln wird eine neue Version veröffentlicht.",
    },
    terms: {
      updatedAt: "2025-03-19",
      intro: [
        "Inhalte der AIBRI-Website werden für Forschung, öffentliche Transparenz und wissenschaftliche Kommunikation veröffentlicht. Kommerzielle Weiterverwendung muss den Freigaberegeln des Instituts folgen.",
      ],
      sections: [
        {
          heading: "1. Nutzungsfreigabe",
          paragraphs: [
            "Öffentliche Zusammenfassungen dürfen mit Quellenangabe zitiert werden, jedoch ohne Verfälschung oder Entkontextualisierung der Schlussfolgerungen.",
            "Die kommerzielle Nutzung von Rankings, Indexgrafiken oder institutionellen Kennzeichen erfordert eine schriftliche Freigabe.",
          ],
        },
        {
          heading: "2. Einschränkungen",
          items: [
            "AIBRI-Dokumentkennungen nicht fälschen oder verändern.",
            "Warnungen nicht als institutionelle Zustimmung darstellen.",
            "Den Institutsnamen nicht für Verkauf, Fundraising oder Marketing verwenden.",
          ],
        },
      ],
      status: { approval: "In Kraft", secrecy: "Öffentlich" },
      relatedLabels: ["Datenschutz", "Integritätskodex"],
      footerNote: "Die Auslegung liegt bei der Compliance-Stelle.",
    },
    "anti-fraud": {
      updatedAt: "2025-03-19",
      intro: [
        "AIBRI akzeptiert keine Anfragen zum Kauf von Rankings, zur Löschung von Warnungen oder zur Beauftragung vorgegebener Schlussfolgerungen und verkauft Audit-Ergebnisse nicht als bezahltes Produkt.",
      ],
      sections: [
        {
          heading: "1. Verbotenes Verhalten",
          items: [
            "Bezahlung zur Änderung von Scores oder Rangfolgen",
            "Missbrauch der Institutsidentität für unautorisierte Verkäufe",
            "Fälschung von Beweisketten oder Zeitstempeln",
          ],
        },
        {
          heading: "2. Meldestelle",
          paragraphs: [
            "Hinweise zu Identitätsmissbrauch, falschen Autorisierungen, gefälschten Dokumenten oder unzulässiger kommerzieller Kooperation können über die Compliance-Kanäle eingereicht werden.",
            "Nach Verifizierung behält sich das Institut öffentliche Offenlegung und rechtliche Schritte vor.",
          ],
        },
      ],
      status: { approval: "In Kraft", secrecy: "Öffentlich" },
      relatedLabels: ["Nutzungsbedingungen", "Auditorenprofile"],
      footerNote: "Keine bezahlte Kooperation darf die Audit-Unabhängigkeit beeinträchtigen.",
    },
    integrity: {
      updatedAt: "2025-03-19",
      intro: [
        "Der AIBRI-Integritätskodex definiert Beweisprüfung, Offenlegung von Konflikten, Schlussfolgerungsreview und Publikationsdisziplin für alle veröffentlichten Arbeiten.",
      ],
      sections: [
        {
          heading: "1. Evidence-First-Prinzip",
          paragraphs: [
            "Jede Schlussfolgerung muss auf Dialogproben, Zeitstempel und Notizen zum Ausführungskontext zurückführbar sein.",
            "Ungeprüfte Beobachtungen dürfen nicht in die formale Schlussschicht gelangen.",
          ],
        },
        {
          heading: "2. Konfliktvermeidung",
          paragraphs: [
            "Auditoren müssen jede relevante Beziehung zu auditierten Marken, Plattformen oder Modellanbietern offenlegen.",
            "Wenn ein erheblicher Konflikt nicht vermieden werden kann, darf die Person die betreffende Akte nicht freigeben.",
          ],
        },
      ],
      status: { approval: "In Kraft", secrecy: "Öffentlich" },
      relatedLabels: ["Methodik", "Anti-Betrugs-Erklärung"],
      footerNote: "Die Version des Kodex wird mit dem Protokoll fortgeschrieben.",
    },
  },
  ja: {
    methodology: {
      updatedAt: "2025-03-13",
      intro: [
        "AIBRI は、分散ノード採取、多言語プロンプト比較、証拠チェーン保管の三層方式により、AI モデル内のブランド認知を追跡します。",
        "単発の正誤よりも、推薦・順位付け・シナリオ推論の中で持続的に現れるバイアス構造を重視します。",
      ],
      sections: [
        {
          heading: "1. 分散ノード採取",
          paragraphs: [
            "ノードは北米、欧州、中東、アジア太平洋を覆い、同一質問を地理条件や実行設定ごとに比較できるようにしています。",
            "各ラウンドでは、タイムスタンプ、プロンプト版数、ノード位置、モデル版数を記録し、後続検証に備えます。",
          ],
        },
        {
          heading: "2. 多段階質問設計",
          paragraphs: [
            "質問はオープン型、比較型、推薦型、追問型に分け、意思決定段階ごとの振る舞い差を観察します。",
            "推薦型質問は実際の選択に影響しやすいため、特に重点的に扱います。",
          ],
        },
        {
          heading: "3. 証拠チェーン検証",
          items: [
            "原始対話ログとノード実行文脈を保全する。",
            "結論を解釈可能な質問集合と回答サンプルへ対応付ける。",
            "高リスク所見をモデル・地域・言語横断で再試験する。",
          ],
        },
      ],
      status: { approval: "有効", secrecy: "公開" },
      relatedLabels: ["証拠アーカイブ注記", "監査インテグリティ規程", "データ収集倫理"],
      footerNote: "方法論の改訂は監査プロトコル更新に合わせて行われます。",
    },
    auditors: {
      updatedAt: "2025-03-13",
      intro: [
        "AIBRI の各結論は、アルゴリズム、コンプライアンス、業界分析に精通した監査官によって承認されます。私たちは独立性と証拠重視の職業基準を維持します。",
      ],
      sections: [
        {
          heading: "監査官の受入基準",
          items: [
            "多言語モデル行動分析の実務経験を持つこと。",
            "証拠チェーンの検証とバイアス帰属を独立して実施できること。",
            "AIBRI の利益相反開示規則を遵守すること。",
          ],
        },
      ],
      status: { approval: "有効", secrecy: "公開" },
      relatedLabels: ["反不正声明", "データ収集倫理", "利用規約", "監査基準"],
      footerNote: "すべての監査官プロフィールはコンプライアンス部門が審査します。",
      auditors: localizedAuditors.ja,
    },
    "evidence-vault": {
      updatedAt: "2025-03-18",
      intro: [
        "AIBRI 証拠アーカイブは、レポートや警報で引用される原始対話サンプル、タイムスタンプ、実行環境メモ、モデル版数マーカーを保存します。",
        "目的は、監査結論を検証可能なものにすることであり、検証不能な意見にとどめないことです。",
      ],
      sections: [
        {
          heading: "1. 保管対象",
          items: [
            "主要質問セットと回答抜粋",
            "ノード地理情報と実行タイムスタンプ",
            "モデル版数注記と対照群結果",
          ],
        },
        {
          heading: "2. 閲覧規則",
          paragraphs: [
            "公開レポートに対応する要約証拠は申請に基づき提供されます。継続監視中の機微サンプルは匿名化してのみ開示されます。",
            "証拠を外部引用する場合は、元の時間窓とモデル版数マーカーを必ず付記する必要があります。",
          ],
        },
      ],
      status: { approval: "運用中", secrecy: "一部公開" },
      relatedLabels: ["方法論", "最新業界レポート", "警報インデックス"],
      footerNote: "アーカイブ記録は採取ウィンドウ順に保管され、上書きされません。",
    },
    about: {
      updatedAt: "2025-03-20",
      intro: [
        "AI BrandRank Institute (AIBRI) は、AI モデルが市場横断でブランドをどのように認識し重み付けるかを監査する独立系グローバル研究機関です。",
        "私たちは、AI 時代のデジタル資産としてのブランド認知に注目し、研究者・企業・メディアがモデルによる市場叙事の形成を理解できるよう支援します。",
      ],
      sections: [
        {
          id: "mission",
          heading: "1. 機関ミッション",
          paragraphs: [
            "アルゴリズム商業時代の透明性を高め、市場・言語・モデル横断の監査ベンチマークを確立すること。",
            "AI 出力を不透明な印象から、比較可能で検証可能、追跡可能な監査対象へ移行させること。",
          ],
        },
        {
          id: "network",
          heading: "2. グローバル協力ネットワーク",
          paragraphs: [
            "AIBRI はマドリードを調整拠点とし、香港、ロンドンなどの地域に長期協力ノードを維持しています。",
            "ネットワークはブランド研究、データガバナンス、コンプライアンス監査、多言語分析を横断します。",
          ],
        },
        {
          id: "governance",
          heading: "3. ガバナンス原則",
          items: [
            "順位の購入、警報削除、結論誘導は一切受け付けない。",
            "すべての正式結論はサンプル、タイムスタンプ、実行文脈に遡及できなければならない。",
            "公開前にモデル・地域・言語のうち少なくとも二軸のレビューを完了する。",
          ],
        },
        {
          id: "contact",
          heading: "4. お問い合わせ",
          paragraphs: [
            "機関連携、研究協力、メディア対応、証拠閲覧、インテグリティ通報は公開窓口で受け付け、審査後に担当チームへ振り分けます。",
            "順位購入、指定削除、結果操作を含む依頼は協力フローに入る前に却下されます。",
          ],
          items: [
            "機関連絡先: contact@aibrandrank.org",
            "報道窓口: press@aibrandrank.org",
            "証拠閲覧: vault@aibrandrank.org",
            "インテグリティ通報: integrity@aibrandrank.org",
            "調整拠点: Paseo de la Castellana, 259C, Torre de Cristal, 28046 Madrid, Spain",
          ],
        },
      ],
      status: { approval: "公開版", secrecy: "公開" },
      relatedLabels: ["方法論概要", "監査官プロフィール", "証拠アーカイブ"],
      footerNote: "機関情報は四半期ごとに見直されます。",
    },
    privacy: {
      updatedAt: "2025-03-19",
      intro: [
        "AIBRI は公開取得可能な AI モデル出力のみを収集し、私的個人情報や無許可データは扱いません。",
      ],
      sections: [
        {
          heading: "1. 収集範囲",
          paragraphs: [
            "収集対象はモデル出力、タイムスタンプ、プロンプト版数、実行ノード文脈であり、直接の個人識別子ではありません。",
            "公開参照を通じて監査サンプルに入る内容も、最小必要原則に基づいて保持されます。",
          ],
        },
        {
          heading: "2. 利用目的",
          paragraphs: [
            "データはアルゴリズム行動研究、バイアス帰属、証拠保管、監査報告作成のために利用されます。",
            "追加承認なしに、AIBRI は監査サンプルを広告や商業プロファイリングへ転用しません。",
          ],
        },
      ],
      status: { approval: "有効", secrecy: "公開" },
      relatedLabels: ["利用規約", "反不正声明"],
      footerNote: "収集規則が変更される場合は改訂版を公開します。",
    },
    terms: {
      updatedAt: "2025-03-19",
      intro: [
        "AIBRI サイトの内容は研究・公開透明性・学術コミュニケーションのために公開されます。商用再利用は機関の承認規則に従う必要があります。",
      ],
      sections: [
        {
          heading: "1. 利用許可",
          paragraphs: [
            "公開要約は出典表示付きで引用できますが、結論の歪曲や文脈切り離しは認められません。",
            "順位表、指数ビジュアル、機関表示の商用利用には書面承認が必要です。",
          ],
        },
        {
          heading: "2. 制限事項",
          items: [
            "AIBRI 文書番号を偽造または改変しないこと。",
            "警報を機関の推奨として包装しないこと。",
            "販売、資金調達、宣伝のために機関名を利用しないこと。",
          ],
        },
      ],
      status: { approval: "有効", secrecy: "公開" },
      relatedLabels: ["プライバシーポリシー", "監査インテグリティ規程"],
      footerNote: "解釈権限はコンプライアンス部門に留保されます。",
    },
    "anti-fraud": {
      updatedAt: "2025-03-19",
      intro: [
        "AIBRI は順位購入、警報削除、所定結論の作成依頼を受け付けず、監査結果を有料商品として販売しません。",
      ],
      sections: [
        {
          heading: "1. 禁止行為",
          items: [
            "支払いによるスコアや順位の変更要求",
            "機関名義を用いた無許可販売",
            "証拠チェーンやタイムスタンプの偽造",
          ],
        },
        {
          heading: "2. 通報窓口",
          paragraphs: [
            "なりすまし、虚偽認可、偽造文書、不正商業協力に関する情報はコンプライアンス窓口へ提出できます。",
            "事実確認後、機関は公表と法的措置の権利を留保します。",
          ],
        },
      ],
      status: { approval: "有効", secrecy: "公開" },
      relatedLabels: ["利用規約", "監査官プロフィール"],
      footerNote: "いかなる有償協力も監査独立性を損なってはなりません。",
    },
    integrity: {
      updatedAt: "2025-03-19",
      intro: [
        "AIBRI 監査インテグリティ規程は、証拠検証、利益相反開示、結論レビュー、公開規律を定める全公開成果の基礎規範です。",
      ],
      sections: [
        {
          heading: "1. 証拠優先原則",
          paragraphs: [
            "すべての結論は、原始対話サンプル、タイムスタンプ、実行文脈メモへ対応付けられなければなりません。",
            "未レビューの観察は正式結論層に入れることはできません。",
          ],
        },
        {
          heading: "2. 利益相反回避",
          paragraphs: [
            "監査官は、監査対象ブランド、プラットフォーム、モデル提供者との重要な関係を開示しなければなりません。",
            "重大な利益相反が回避できない場合、その人は該当ファイルに署名できません。",
          ],
        },
      ],
      status: { approval: "有効", secrecy: "公開" },
      relatedLabels: ["方法論", "反不正声明"],
      footerNote: "規程の版数はプロトコル更新とともに改訂されます。",
    },
  },
  ar: {
    methodology: {
      updatedAt: "2025-03-13",
      intro: [
        "تعتمد AIBRI على منهجية من ثلاث طبقات تجمع بين أخذ العينات عبر عقد موزعة، ومقارنة المطالبات متعددة اللغات، وأرشفة سلسلة الأدلة لتتبع إدراك العلامات داخل نماذج الذكاء الاصطناعي.",
        "نحن نهتم أقل بالإجابة المنفردة وأكثر بالبنية المستقرة للتحيز في التوصية والترتيب والاستدلال السياقي.",
      ],
      sections: [
        {
          heading: "1. أخذ العينات عبر العقد الموزعة",
          paragraphs: [
            "تغطي العقد أمريكا الشمالية وأوروبا والشرق الأوسط وآسيا والمحيط الهادئ بما يسمح بمقارنة السؤال نفسه عبر جغرافيات وإعدادات تنفيذ مختلفة.",
            "تسجل كل جولة الطوابع الزمنية وإصدارات المطالبات وموقع العقدة وإصدار النموذج للمراجعة اللاحقة.",
          ],
        },
        {
          heading: "2. تصميم الأسئلة متعددة الجولات",
          paragraphs: [
            "تقسم الأسئلة إلى مطالبات مفتوحة ومقارنة وتوصية ومتابعة لرصد السلوك في مراحل القرار المختلفة.",
            "تحظى مطالبات التوصية بأولوية خاصة لأنها الأكثر قدرة على التأثير في الاختيارات الفعلية.",
          ],
        },
        {
          heading: "3. التحقق من سلسلة الأدلة",
          items: [
            "الاحتفاظ بسجلات الحوار الأصلية وسياق العقدة.",
            "ربط الاستنتاجات بمجموعات أسئلة وعينات إجابات قابلة للتفسير.",
            "إعادة اختبار النتائج عالية المخاطر عبر النماذج والمناطق واللغات.",
          ],
        },
      ],
      status: { approval: "ساري", secrecy: "عام" },
      relatedLabels: ["ملاحظات أرشيف الأدلة", "مدونة النزاهة", "أخلاقيات جمع البيانات"],
      footerNote: "تتبع مراجعات المنهجية تحديثات البروتوكول.",
    },
    auditors: {
      updatedAt: "2025-03-13",
      intro: [
        "تعتمد كل نتيجة تصدرها AIBRI على توقيع مدققين يمتلكون خبرة في الخوارزميات والامتثال والتحليل القطاعي. نحن نحافظ على معيار مهني مستقل قائم على الأدلة.",
      ],
      sections: [
        {
          heading: "معايير قبول المدققين",
          items: [
            "خبرة عملية في تحليل سلوك النماذج متعددة اللغات.",
            "القدرة على التحقق من سلاسل الأدلة ونسبة أنماط التحيز بشكل مستقل.",
            "الالتزام بقواعد الإفصاح عن تضارب المصالح لدى AIBRI.",
          ],
        },
      ],
      status: { approval: "ساري", secrecy: "عام" },
      relatedLabels: [
        "بيان مكافحة الاحتيال",
        "أخلاقيات جمع البيانات",
        "شروط الخدمة",
        "معايير التدقيق",
      ],
      footerNote: "تتم مراجعة جميع ملفات المدققين من قبل مكتب الامتثال.",
      auditors: localizedAuditors.ar,
    },
    "evidence-vault": {
      updatedAt: "2025-03-18",
      intro: [
        "يحفظ أرشيف الأدلة في AIBRI عينات الحوار الأصلية والطوابع الزمنية وملاحظات بيئة التنفيذ ومؤشرات إصدارات النماذج المشار إليها في التقارير والتنبيهات.",
        "الغاية هي جعل استنتاجات التدقيق قابلة للتتبع بدلاً من تركها في مستوى الرأي غير القابل للتحقق.",
      ],
      sections: [
        {
          heading: "1. نطاق المواد المؤرشفة",
          items: [
            "مجموعات الأسئلة الأساسية ومقتطفات الإجابات",
            "الموقع الجغرافي للعقد والطوابع الزمنية",
            "ملاحظات إصدارات النماذج ونتائج مجموعة الضبط",
          ],
        },
        {
          heading: "2. قواعد الوصول",
          paragraphs: [
            "يمكن إتاحة أدلة موجزة مرتبطة بالتقارير العامة عند الطلب. أما العينات الحساسة الخاضعة للمتابعة المستمرة فتتاح بشكل منقح فقط.",
            "يجب أن يتضمن أي اقتباس خارجي للأدلة نافذة الزمن الأصلية ومؤشر إصدار النموذج.",
          ],
        },
      ],
      status: { approval: "قيد التشغيل", secrecy: "عام جزئيًا" },
      relatedLabels: ["المنهجية", "أحدث تقارير القطاعات", "فهرس التنبيهات"],
      footerNote: "تُؤرشف سجلات الأرشيف حسب نافذة أخذ العينات ولا يتم استبدالها.",
    },
    about: {
      updatedAt: "2025-03-20",
      intro: [
        "AI BrandRank Institute (AIBRI) مؤسسة بحثية عالمية مستقلة تدقق في كيفية تعرف نماذج الذكاء الاصطناعي على العلامات التجارية ومنحها الأوزان عبر الأسواق.",
        "نحن ننظر إلى إدراك العلامة كأصل رقمي في عصر الذكاء الاصطناعي، ونساعد الباحثين والشركات ووسائل الإعلام على فهم كيفية تشكيل النماذج للسرديات السوقية.",
      ],
      sections: [
        {
          id: "mission",
          heading: "1. الرسالة المؤسسية",
          paragraphs: [
            "رفع مستوى الشفافية في العصر التجاري الخوارزمي وبناء معايير تدقيق عابرة للأسواق واللغات والنماذج.",
            "تحويل مخرجات الذكاء الاصطناعي من انطباعات غامضة إلى موضوعات تدقيق قابلة للمقارنة والمراجعة والتتبع.",
          ],
        },
        {
          id: "network",
          heading: "2. شبكة التعاون العالمية",
          paragraphs: [
            "تدير AIBRI عملياتها من مدريد مع الحفاظ على عقد تعاون طويلة الأمد في هونغ كونغ ولندن ومناطق أخرى.",
            "تشمل الشبكة أبحاث العلامة، وحوكمة البيانات، وتدقيق الامتثال، والتحليل متعدد اللغات.",
          ],
        },
        {
          id: "governance",
          heading: "3. مبادئ الحوكمة",
          items: [
            "لا قبول لشراء الترتيب أو حذف التنبيه أو كتابة نتيجة موجهة.",
            "كل استنتاج رسمي يجب أن يعود إلى عينات وطوابع زمنية وسياق تنفيذ.",
            "قبل النشر يجب إكمال محورين على الأقل من المراجعة عبر النموذج أو المنطقة أو اللغة.",
          ],
        },
        {
          id: "contact",
          heading: "4. الاتصال",
          paragraphs: [
            "تُدار التنسيقات المؤسسية والتعاون البحثي والتواصل الإعلامي وطلبات الوصول إلى الأدلة وتقارير النزاهة عبر قنوات عامة ثم تُحال إلى الفريق المختص بعد المراجعة.",
            "الطلبات التي تتضمن شراء ترتيب أو حذفًا موجّهًا أو تلاعبًا بالنتائج تُرفض قبل دخول أي مسار تعاون.",
          ],
          items: [
            "الاتصال المؤسسي: contact@aibrandrank.org",
            "الصحافة: press@aibrandrank.org",
            "الوصول إلى الأدلة: vault@aibrandrank.org",
            "بلاغات النزاهة: integrity@aibrandrank.org",
            "مركز التنسيق: Paseo de la Castellana, 259C, Torre de Cristal, 28046 Madrid, Spain",
          ],
        },
      ],
      status: { approval: "منشور علنًا", secrecy: "عام" },
      relatedLabels: ["نظرة عامة على المنهجية", "ملفات المدققين", "أرشيف الأدلة"],
      footerNote: "تتم مراجعة المعلومات المؤسسية مرة كل ربع سنة.",
    },
    privacy: {
      updatedAt: "2025-03-19",
      intro: [
        "تجمع AIBRI فقط مخرجات نماذج الذكاء الاصطناعي المتاحة علنًا، ولا تعالج بيانات شخصية خاصة أو سجلات غير مصرح بها.",
      ],
      sections: [
        {
          heading: "1. نطاق الجمع",
          paragraphs: [
            "نسجل مخرجات النموذج والطوابع الزمنية وإصدارات المطالبات وسياق عقد التنفيذ، وليس المعرفات الشخصية المباشرة.",
            "يتم الاحتفاظ بأي محتوى يدخل عينة تدقيق عبر مراجع عامة وفق مبدأ الحد الأدنى اللازم.",
          ],
        },
        {
          heading: "2. غرض الاستخدام",
          paragraphs: [
            "تستخدم البيانات في بحث السلوك الخوارزمي، وإسناد التحيز، وأرشفة الأدلة، وصياغة تقارير التدقيق.",
            "من دون تصريح إضافي لا تعيد AIBRI توظيف العينات لأغراض الإعلان أو التنميط التجاري.",
          ],
        },
      ],
      status: { approval: "ساري", secrecy: "عام" },
      relatedLabels: ["شروط الخدمة", "بيان مكافحة الاحتيال"],
      footerNote: "إذا تغيرت قواعد الجمع فسيُنشر إصدار منقح.",
    },
    terms: {
      updatedAt: "2025-03-19",
      intro: [
        "يُنشر محتوى موقع AIBRI لأغراض البحث والشفافية العامة والتواصل الأكاديمي. ويجب أن يخضع أي استخدام تجاري لقواعد التفويض الخاصة بالمؤسسة.",
      ],
      sections: [
        {
          heading: "1. تصريح الاستخدام",
          paragraphs: [
            "يجوز الاستشهاد بالملخصات العامة مع ذكر المصدر، لكن لا يجوز تشويه الاستنتاجات أو اقتطاعها من سياقها.",
            "يتطلب الاستخدام التجاري للتصنيفات أو الصور البيانية أو العلامات المؤسسية موافقة خطية.",
          ],
        },
        {
          heading: "2. القيود",
          items: [
            "عدم تزوير أو تعديل معرفات وثائق AIBRI.",
            "عدم تقديم التنبيهات على أنها تأييد مؤسسي.",
            "عدم استخدام اسم المؤسسة في البيع أو جمع الأموال أو التسويق.",
          ],
        },
      ],
      status: { approval: "ساري", secrecy: "عام" },
      relatedLabels: ["سياسة الخصوصية", "مدونة النزاهة"],
      footerNote: "يحتفظ مكتب الامتثال بحق التفسير.",
    },
    "anti-fraud": {
      updatedAt: "2025-03-19",
      intro: [
        "لا تقبل AIBRI طلبات شراء الترتيب أو حذف التنبيهات أو إعداد نتائج محددة مسبقًا، ولا تبيع نتائج التدقيق كمنتج مدفوع.",
      ],
      sections: [
        {
          heading: "1. السلوك المحظور",
          items: [
            "الدفع لتغيير الدرجات أو الترتيب",
            "استخدام هوية المؤسسة في مبيعات غير مصرح بها",
            "تزوير سلسلة الأدلة أو الطوابع الزمنية",
          ],
        },
        {
          heading: "2. قناة الإبلاغ",
          paragraphs: [
            "يمكن تقديم أي بلاغ عن انتحال أو تفويض مزيف أو وثائق مزورة أو تعاون تجاري غير مشروع عبر قنوات الامتثال للمراجعة.",
            "بعد التحقق، تحتفظ المؤسسة بحق الإعلان العام واتخاذ الإجراءات القانونية.",
          ],
        },
      ],
      status: { approval: "ساري", secrecy: "عام" },
      relatedLabels: ["شروط الخدمة", "ملفات المدققين"],
      footerNote: "لا يجوز لأي تعاون مدفوع أن يؤثر في استقلالية التدقيق.",
    },
    integrity: {
      updatedAt: "2025-03-19",
      intro: [
        "تحدد مدونة نزاهة التدقيق في AIBRI التحقق من الأدلة والإفصاح عن تضارب المصالح ومراجعة الاستنتاجات وانضباط النشر في جميع الأعمال المنشورة.",
      ],
      sections: [
        {
          heading: "1. مبدأ أولوية الأدلة",
          paragraphs: [
            "يجب أن يرتبط كل استنتاج بعينات الحوار الأصلية والطوابع الزمنية وملاحظات سياق التنفيذ.",
            "لا يجوز أن تدخل الملاحظات غير المراجعة إلى طبقة الاستنتاجات الرسمية.",
          ],
        },
        {
          heading: "2. تجنب تضارب المصالح",
          paragraphs: [
            "يجب على المدققين الإفصاح عن أي علاقة جوهرية مع العلامات المدققة أو المنصات أو مزودي النماذج.",
            "إذا تعذر تجنب تضارب جوهري، فلا يجوز لذلك الشخص توقيع الملف المعني.",
          ],
        },
      ],
      status: { approval: "ساري", secrecy: "عام" },
      relatedLabels: ["المنهجية", "بيان مكافحة الاحتيال"],
      footerNote: "يتم تحديث إصدار المدونة مع تحديثات البروتوكول.",
    },
  },
  pt: {
    methodology: {
      updatedAt: "2025-03-13",
      intro: [
        "A AIBRI utiliza uma metodologia de três camadas, composta por amostragem distribuída por nós, comparação multilíngue de prompts e arquivamento da cadeia de evidências, para acompanhar a cognição de marcas dentro de modelos de IA.",
        "Interessa-nos menos a correção pontual e mais os padrões estáveis de viés em recomendação, ranqueamento e raciocínio situacional.",
      ],
      sections: [
        {
          heading: "1. Amostragem distribuída por nós",
          paragraphs: [
            "Os nós cobrem América do Norte, Europa, Oriente Médio e Ásia-Pacífico para que a mesma pergunta possa ser comparada em diferentes geografias e configurações de execução.",
            "Cada rodada registra carimbos de tempo, versões de prompts, localização do nó e versão do modelo para revisão posterior.",
          ],
        },
        {
          heading: "2. Desenho de perguntas em múltiplas rodadas",
          paragraphs: [
            "As perguntas são agrupadas em abertas, comparativas, de recomendação e de seguimento para observar comportamentos em diferentes etapas da decisão.",
            "As perguntas de recomendação recebem prioridade porque têm maior chance de influenciar escolhas reais.",
          ],
        },
        {
          heading: "3. Validação da cadeia de evidências",
          items: [
            "Preservar logs originais de diálogo e contexto do nó.",
            "Mapear conclusões para conjuntos interpretáveis de perguntas e respostas.",
            "Repetir testes de achados de alto risco entre modelos, regiões e idiomas.",
          ],
        },
      ],
      status: { approval: "Em vigor", secrecy: "Público" },
      relatedLabels: [
        "Notas do arquivo de evidências",
        "Código de integridade",
        "Ética de coleta de dados",
      ],
      footerNote: "As revisões metodológicas acompanham as atualizações do protocolo.",
    },
    auditors: {
      updatedAt: "2025-03-13",
      intro: [
        "Cada conclusão da AIBRI é validada por auditores com experiência em algoritmos, conformidade e análise setorial. Mantemos um padrão profissional independente e orientado por evidências.",
      ],
      sections: [
        {
          heading: "Critérios de admissão de auditores",
          items: [
            "Experiência prática em análise multilíngue do comportamento de modelos.",
            "Capacidade de verificar cadeias de evidências e atribuir padrões de viés de forma independente.",
            "Cumprimento das regras de divulgação de conflitos de interesse da AIBRI.",
          ],
        },
      ],
      status: { approval: "Em vigor", secrecy: "Público" },
      relatedLabels: [
        "Declaração Antifraude",
        "Ética de coleta de dados",
        "Termos de Serviço",
        "Padrões de auditoria",
      ],
      footerNote: "Todos os perfis de auditores são revisados pela área de conformidade.",
      auditors: localizedAuditors.pt,
    },
    "evidence-vault": {
      updatedAt: "2025-03-18",
      intro: [
        "O Arquivo de Evidências da AIBRI preserva amostras originais de diálogo, carimbos de tempo, notas do ambiente de execução e marcadores de versão de modelos citados em relatórios e alertas.",
        "Seu objetivo é tornar as conclusões auditáveis e rastreáveis, e não mantê-las no nível de opinião não verificável.",
      ],
      sections: [
        {
          heading: "1. Escopo do material arquivado",
          items: [
            "Conjuntos-chave de perguntas e trechos de respostas",
            "Geografia dos nós e carimbos de tempo",
            "Notas de versão dos modelos e resultados de controle",
          ],
        },
        {
          heading: "2. Regras de acesso",
          paragraphs: [
            "Relatórios públicos podem ser acompanhados de acesso sob solicitação a evidências resumidas. Amostras sensíveis sob monitoramento ativo são liberadas apenas em formato redigido.",
            "Qualquer citação externa de evidência deve incluir a janela temporal original e o marcador de versão do modelo.",
          ],
        },
      ],
      status: { approval: "Operacional", secrecy: "Parcialmente público" },
      relatedLabels: ["Metodologia", "Relatórios setoriais mais recentes", "Índice de alertas"],
      footerNote:
        "Os registros do arquivo são preservados por janela de amostragem e não são sobrescritos.",
    },
    about: {
      updatedAt: "2025-03-20",
      intro: [
        "AI BrandRank Institute (AIBRI) é uma instituição global de pesquisa independente que audita como modelos de IA reconhecem e ponderam marcas entre mercados.",
        "Tratamos a cognição de marca como um ativo digital da era da IA e ajudamos pesquisadores, empresas e mídia a compreender como os modelos moldam narrativas de mercado.",
      ],
      sections: [
        {
          id: "mission",
          heading: "1. Missão institucional",
          paragraphs: [
            "Elevar a transparência na era comercial algorítmica e estabelecer referências de auditoria entre mercados, idiomas e modelos.",
            "Levar as saídas de IA de impressões opacas para objetos auditáveis, comparáveis e rastreáveis.",
          ],
        },
        {
          id: "network",
          heading: "2. Rede global de colaboração",
          paragraphs: [
            "A AIBRI coordena suas operações a partir de Madri e mantém nós de cooperação de longo prazo em Hong Kong, Londres e outras regiões.",
            "A rede cobre pesquisa de marca, governança de dados, auditoria de conformidade e análise multilíngue.",
          ],
        },
        {
          id: "governance",
          heading: "3. Princípios de governança",
          items: [
            "Não aceitamos compra de ranking, remoção paga de alertas ou redação dirigida de conclusões.",
            "Toda conclusão formal deve se ligar a amostras, carimbos de tempo e contexto de execução.",
            "Antes da publicação, pelo menos dois eixos entre modelo, região e idioma devem ser revisados.",
          ],
        },
        {
          id: "contact",
          heading: "4. Contato",
          paragraphs: [
            "Coordenação institucional, cooperação de pesquisa, contato com a imprensa, acesso a evidências e relatos de integridade são recebidos por canais públicos e encaminhados à equipe correta após análise.",
            "Pedidos que impliquem compra de ranking, exclusão dirigida ou manipulação de resultados são rejeitados antes de qualquer fluxo de cooperação.",
          ],
          items: [
            "Contato institucional: contact@aibrandrank.org",
            "Imprensa: press@aibrandrank.org",
            "Acesso a evidências: vault@aibrandrank.org",
            "Relatos de integridade: integrity@aibrandrank.org",
            "Centro de coordenação: Paseo de la Castellana, 259C, Torre de Cristal, 28046 Madrid, Spain",
          ],
        },
      ],
      status: { approval: "Publicação aberta", secrecy: "Público" },
      relatedLabels: [
        "Visão geral da metodologia",
        "Perfis dos auditores",
        "Arquivo de Evidências",
      ],
      footerNote: "As informações institucionais são revisadas uma vez por trimestre.",
    },
    privacy: {
      updatedAt: "2025-03-19",
      intro: [
        "A AIBRI coleta apenas saídas públicas de modelos de IA e não processa dados pessoais privados nem registros não autorizados.",
      ],
      sections: [
        {
          heading: "1. Escopo da coleta",
          paragraphs: [
            "Registramos saídas do modelo, carimbos de tempo, versões de prompts e contexto dos nós de execução, e não identificadores pessoais diretos.",
            "Qualquer conteúdo que entre em uma amostra por referência pública é mantido sob o princípio da necessidade mínima.",
          ],
        },
        {
          heading: "2. Finalidade de uso",
          paragraphs: [
            "Os dados coletados são usados para pesquisa de comportamento algorítmico, atribuição de viés, arquivamento de evidências e elaboração de relatórios.",
            "Sem autorização adicional, a AIBRI não reutiliza amostras para publicidade ou perfilamento comercial.",
          ],
        },
      ],
      status: { approval: "Em vigor", secrecy: "Público" },
      relatedLabels: ["Termos de Serviço", "Declaração Antifraude"],
      footerNote: "Se as regras de coleta mudarem, será publicada uma versão revisada.",
    },
    terms: {
      updatedAt: "2025-03-19",
      intro: [
        "O conteúdo do site da AIBRI é publicado para pesquisa, transparência pública e comunicação acadêmica. Qualquer reutilização comercial deve seguir as regras de autorização do instituto.",
      ],
      sections: [
        {
          heading: "1. Permissão de uso",
          paragraphs: [
            "Resumos públicos podem ser citados com atribuição, mas sem distorcer conclusões ou retirá-las de contexto.",
            "O uso comercial de rankings, visuais de índice ou marcas institucionais requer aprovação por escrito.",
          ],
        },
        {
          heading: "2. Restrições",
          items: [
            "Não falsificar nem alterar identificadores documentais da AIBRI.",
            "Não apresentar alertas como endosso institucional.",
            "Não usar o nome do instituto para vendas, captação ou marketing.",
          ],
        },
      ],
      status: { approval: "Em vigor", secrecy: "Público" },
      relatedLabels: ["Política de Privacidade", "Código de Integridade"],
      footerNote: "A interpretação é reservada à área de conformidade.",
    },
    "anti-fraud": {
      updatedAt: "2025-03-19",
      intro: [
        "A AIBRI não aceita pedidos para comprar rankings, remover alertas ou comissionar conclusões predeterminadas, e não vende resultados de auditoria como produto pago.",
      ],
      sections: [
        {
          heading: "1. Conduta proibida",
          items: [
            "Pagar para alterar pontuações ou ordem de ranking",
            "Usar a identidade do instituto em vendas não autorizadas",
            "Forjar cadeia de evidências ou carimbos de tempo",
          ],
        },
        {
          heading: "2. Canal de denúncia",
          paragraphs: [
            "Qualquer informação sobre falsidade ideológica, autorizações indevidas, documentos forjados ou cooperação comercial ilegal pode ser submetida aos canais de conformidade.",
            "Após verificação, o instituto reserva-se o direito de divulgação pública e de adoção de medidas legais.",
          ],
        },
      ],
      status: { approval: "Em vigor", secrecy: "Público" },
      relatedLabels: ["Termos de Serviço", "Perfis dos auditores"],
      footerNote: "Nenhuma cooperação paga pode comprometer a independência da auditoria.",
    },
    integrity: {
      updatedAt: "2025-03-19",
      intro: [
        "O código de integridade de auditoria da AIBRI define verificação de evidências, divulgação de conflitos, revisão de conclusões e disciplina de publicação para todo o trabalho emitido.",
      ],
      sections: [
        {
          heading: "1. Princípio de prioridade da evidência",
          paragraphs: [
            "Toda conclusão deve se ligar a amostras de diálogo, carimbos de tempo e notas de contexto de execução.",
            "Observações sem revisão não podem entrar na camada formal de conclusões.",
          ],
        },
        {
          heading: "2. Prevenção de conflitos",
          paragraphs: [
            "Auditores devem declarar qualquer relação relevante com marcas auditadas, plataformas ou fornecedores de modelos.",
            "Se um conflito material não puder ser evitado, a pessoa não poderá assinar o dossiê correspondente.",
          ],
        },
      ],
      status: { approval: "Em vigor", secrecy: "Público" },
      relatedLabels: ["Metodologia", "Declaração Antifraude"],
      footerNote: "A versão do código é atualizada junto com o protocolo.",
    },
  },
};

export function getStaticPage(slug: string, locale: Locale = "zh-CN") {
  const page = staticPages[slug];

  if (!page) {
    return undefined;
  }

  if (locale === "zh-CN") {
    return page;
  }

  const override = localizedStaticPageOverrides[locale][slug as StaticPageKey];

  if (!override) {
    return page;
  }

  return {
    ...page,
    updatedAt: override.updatedAt,
    intro: override.intro,
    sections: override.sections,
    status: {
      ...page.status,
      approval: override.status.approval,
      secrecy: override.status.secrecy,
    },
    relatedLinks: page.relatedLinks.map((link, index) => ({
      ...link,
      label: override.relatedLabels[index] ?? link.label,
    })),
    footerNote: override.footerNote,
    auditors: override.auditors ?? page.auditors,
  };
}

export function getRelatedItems(items: CollectionItem[], slugs: string[]) {
  return slugs
    .map((slug) => items.find((item) => item.slug === slug))
    .filter((item): item is CollectionItem => Boolean(item));
}
