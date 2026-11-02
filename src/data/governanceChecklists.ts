/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { GovernanceDomain } from '../types/glossary';

export const GOVERNANCE_DOMAINS: GovernanceDomain[] = [
  {
    id: 'economic-democracy',
    title: 'Economic Democracy & Purchasing Power Guarantee',
    subtitle: 'Constitutional Anchoring of Basic Necessities & Wealth Boundaries',
    description: 'Framework to prevent plutocratic capture and guarantee that every resident possesses the purchasing capacity to secure the five fundamental physical requirements with dignity.',
    sarkarPrinciple: 'Political democracy is a farce without economic democracy. Purchasing capacity—not misleading GDP—is the sole scientific metric of collective welfare.',
    relatedTermIds: ['economic-democracy', 'minimum-requirements', 'purchasing-capacity', 'atirikta', 'rational-distribution'],
    items: [
      {
        id: 'guaranteed-basic-necessities',
        title: 'Statutory Five-Fold Necessity Guarantee',
        directive: 'Legally enshrine the unconditional right to Food, Clothing, Housing, Education, and Medical Care through productive employment.',
        riskOfOmission: 'Without an enforceable statutory guarantee, rights remain theoretical platitudes while citizens starve or fall into medical debt, enabling vote-buying by wealthy oligarchs.',
        verificationAudit: [
          'Is the local cost of the standard 5-necessity basket calculated and published monthly?',
          'Are municipal/block jobs programs legally mandated to hire any unemployed resident within 7 days?',
          'Is public healthcare, preventive medicine, and basic pharmacology 100% accessible at zero out-of-pocket cost?',
          'Is emergency shelter and transitional housing guaranteed as an enforceable civil right?'
        ],
        sarkarWarning: 'Never deliver basic necessities through humiliating welfare doles. Doles destroy human dignity and breed psychological lethargy. Provide guaranteed productive work matching capacity.'
      },
      {
        id: 'purchasing-power-parity',
        title: 'Purchasing Capacity & Wage Indexation',
        directive: 'Tie baseline wages to the actual local cost of living and enforce dynamic parity ratios with upper-echelon surplus incentives.',
        riskOfOmission: 'Wage growth decoupled from real basic goods costs causes silent impoverishment through currency inflation while corporate executive pay skyrockets.',
        verificationAudit: [
          'Are minimum wages algorithmically pegged to outpace the local food/energy/housing inflation basket?',
          'Is the maximum executive compensation ratio capped (e.g. maximum 1:10 between lowest paid and highest compensated)?',
          'Are surplus bonuses distributed strictly as non-accumulative social incentives rather than capital equity?',
          'Is speculative hoarding of essential consumer commodities punishable by strict asset forfeiture?'
        ],
        sarkarWarning: 'Per capita income is a mathematical deception. If one billionaire earns trillions while millions go barefoot, the average looks prosperous. Focus exclusively on median purchasing power.'
      },
      {
        id: 'cooperative-production-primacy',
        title: 'Cooperative Ownership of Consumer Goods',
        directive: 'Transition all major consumer goods manufacturing and retail distribution into worker- and consumer-owned cooperatives.',
        riskOfOmission: 'Private retail monopolies extract middleman markups of 300–800%, depriving producers of fair return and squeezing consumer purchasing power.',
        verificationAudit: [
          'Do worker-members hold equal one-person-one-vote rights regardless of capital contribution?',
          'Are cooperative reserve funds shielded from private takeover or speculative financial investments?',
          'Are direct farmer-to-consumer cooperative logistics networks operational to bypass predatory middlemen?',
          'Are cooperative managers elected by workers and subject to immediate recall for corruption?'
        ],
        sarkarWarning: 'Cooperatives cannot succeed through mere legal decree; there must be moral integrity, cultural readiness, and strict economic decentralization to prevent bureaucratic capture.'
      }
    ]
  },
  {
    id: 'decentralized-planning',
    title: 'Decentralized Block-Level Planning & Samaj Architecture',
    subtitle: 'Bottom-Up Ecological Units & Regional Resource Sovereignty',
    description: 'Decentralizing economic authority to ecological and cultural blocks (Samaj) to eradicate regional disparities, metropolitan parasitic extraction, and capital flight.',
    sarkarPrinciple: 'Planning must start from the soil up. A block is the smallest viable socio-economic unit possessing common physical features, raw material availability, and cultural affinity.',
    relatedTermIds: ['block-level-planning', 'decentralized-economy', 'three-tiered-industry'],
    items: [
      {
        id: 'block-resource-audit',
        title: '100% Local Raw Material Processing Mandate',
        directive: 'Prohibit the raw, unrefined export of any agricultural or mineral resource outside the block boundary until local processing capacity is exhausted.',
        riskOfOmission: 'Allows metropolitan corporations and foreign multinationals to strip-mine raw commodities cheaply, process them elsewhere, and sell finished products back at inflated prices, creating perpetual poverty.',
        verificationAudit: [
          'Has every block conducted an exhaustive geological, agricultural, and hydrologic resource audit?',
          'Are agro-industries (post-harvest processing) and agrico-industries (farm inputs/machinery) established within the block?',
          'Is local processing infrastructure financed by regional cooperative credit at zero or near-zero speculative interest?',
          'Are environmental carrying capacity limits legally binding on all industrial permits?'
        ],
        sarkarWarning: 'Raw materials are the lifeblood of a locality. If you export jute, cotton, or minerals unprocessed, you are exporting employment and importing generational starvation.'
      },
      {
        id: 'local-capital-retention',
        title: 'Cooperative Banking & Capital Flight Prohibition',
        directive: 'Establish autonomous regional cooperative banks with a statutory barrier preventing the export of local savings into speculative global capital markets.',
        riskOfOmission: 'Megabanks siphon rural and regional deposits to finance urban real estate bubbles and foreign currency speculation, starving local enterprises of capital.',
        verificationAudit: [
          'Do regional cooperative banks maintain at least 85% of their loan portfolio within the local block / Samaj?',
          'Are high-frequency trading, derivative speculation, and usurious payday lending strictly prohibited?',
          'Is local credit directed with priority to worker cooperatives, ecological farming, and clean energy grids?',
          'Are bank board directors required to reside within the block community?'
        ],
        sarkarWarning: 'Capital generated by local labor belongs to the local soil. When capital flies away, the people are left like depleted soil after a locust storm.'
      },
      {
        id: 'watershed-and-ecological-borders',
        title: 'Ecological Samaj Boundaries vs Colonial Borders',
        directive: 'Realign administrative and economic planning borders around river basins, soil zones, and language communities rather than arbitrary colonial or partisan gerrymandering.',
        riskOfOmission: 'Arbitrary boundaries cause water wars between upstream and downstream districts, bisect natural wildlife corridors, and incite ethnic boundary conflicts.',
        verificationAudit: [
          'Are river basin authorities co-managed by all riparian communities with veto power over destructive dams?',
          'Do municipal planning boundaries respect natural groundwater recharge aquifers and topsoil zones?',
          'Are contiguous cultural and linguistic communities granted administrative autonomy within their natural eco-zone?'
        ],
        sarkarWarning: 'Artificial borders drawn by imperial rulers divide brothers and ignite chauvinism. Let nature’s rivers and hills define our harmonious socio-economic units.'
      }
    ]
  },
  {
    id: 'sadvipra-oversight',
    title: 'Sadvipra Constitutional Oversight & Moral Safeguards',
    subtitle: 'Depoliticized Ethical Watchdogs & Anti-Corruption Guardianship',
    description: 'Institutional mechanisms ensuring that political and economic power is subject to strict, incorruptible moral supervision, preventing the social cycle from degenerating into tyranny.',
    sarkarPrinciple: 'Sadvipras do not seek political power for themselves; they serve as moral sentinels, ensuring the social cycle does not stagnate in the exploitative phase of any single class.',
    relatedTermIds: ['sadvipra', 'ideal-leadership', 'samaja-cakra', 'universalism'],
    items: [
      {
        id: 'ethical-vetting-framework',
        title: 'Supreme Moral Board & Ethical Vetting',
        directive: 'Establish an independent, non-partisan Supreme Moral Board (Sadvipra Council) with constitutional power to vet candidates and audit officials against universal ethical codes (Yama & Niyama).',
        riskOfOmission: 'Unchecked electoral systems degenerate into plutocratic auctions where candidates backed by corporate donations and sensationalist media capture the state.',
        verificationAudit: [
          'Are candidates evaluated for verified histories of public service, moral integrity, and freedom from financial conflict of interest?',
          'Is the Moral Council completely barred from commercial investments or political party affiliations?',
          'Does the Council possess binding investigative authority and subpoena power over all government branches?',
          'Are Council members subject to immediate impeachment upon any breach of ethical neutrality?'
        ],
        sarkarWarning: 'A democracy that judges leaders merely by ballot counts without moral scrutiny will inevitably vote tyrants into office who then destroy democracy.'
      },
      {
        id: 'social-cycle-transition-audit',
        title: 'Social Cycle Diagnostic & Anti-Capture Metrics',
        directive: 'Implement continuous sociological and economic monitoring to detect early warning signs of class degeneration (military, clerical, or capitalist capture).',
        riskOfOmission: 'Societies fall into stagnation and violent revolutions when ruling classes consolidate unchecked hegemony over media, courts, and credit.',
        verificationAudit: [
          'Are wealth concentration indices (Gini, wealth share of top 0.1%) audited quarterly with automatic anti-trust triggers?',
          'Are media monopolies broken up to prevent single-class ideological indoctrination?',
          'Are armed forces and intelligence agencies strictly forbidden from domestic policing and commercial contracts?',
          'Is there an institutional mechanism for peaceful constitutional reset before popular fury erupts into bloody violence?'
        ],
        sarkarWarning: 'When the Vaeshya (capitalist) era reaches its terminal phase, it commodifies everything—even human conscience and the air we breathe. Sadvipras must accelerate the turnover before social suicide.'
      },
      {
        id: 'world-federation-protocol',
        title: 'Universalist Planetary Federation Roadmap',
        directive: 'Progressively transfer jurisdiction over international disarmament, planetary climate treaties, and global commons to a democratic World Federation.',
        riskOfOmission: 'National sovereignty anarchy perpetuates nuclear brinkmanship, competitive deregulation, tax haven laundering, and cross-border environmental ecocide.',
        verificationAudit: [
          'Is there an active treaty roadmap for the phased de-commissioning of all weapons of mass destruction under multilateral inspection?',
          'Are transnational tax havens and offshore shadow banking networks legally outlawed and sanctioned?',
          'Does a Planetary Environmental Court have jurisdiction to issue binding injunctions against ecocidal corporate activities?'
        ],
        sarkarWarning: 'The world is one living family. As long as nation-states hide behind sovereign border impunity, the strong will devour the weak and human survival will hang by a thread.'
      }
    ]
  },
  {
    id: 'neohumanist-ethics',
    title: 'Neohumanist Environmental & Non-Human Rights Charter',
    subtitle: 'Liberation of Flora, Fauna & Planetary Commons from Anthropocentric Exploitation',
    description: 'Transforming environmental law from resource conservation for human use into an ecological jurisprudence honoring the existential rights of all sentient beings.',
    sarkarPrinciple: 'Every creature has existential value, not merely utility value for humans. Neohumanism elevates humanism to universalism—the cult of love for all created beings.',
    relatedTermIds: ['neohumanism', 'awakened-conscience', 'geo-sentiment', 'socio-sentiment', 'cosmic-inheritance'],
    items: [
      {
        id: 'non-human-rights-charter',
        title: 'Legal Personhood for Sentient Animals & Ecosystems',
        directive: 'Grant legal standing to animal species, primeval forests, and river basins, represented by court-appointed public ecological guardians.',
        riskOfOmission: 'Non-human life is treated as mere "chattel" or natural resources, permitting mass species extinction, deforestation, and industrial slaughterhouse horrors.',
        verificationAudit: [
          'Do wild animal species have guaranteed constitutional rights to undisturbed natural habitat and migratory corridors?',
          'Is industrial concentrated animal feeding operation (CAFO) farming classified as prohibited cruelty with a phased transition to plant-based agriculture?',
          'Can court-appointed ecological guardians sue corporations and municipalities for biodiversity harm without needing to prove human economic injury?'
        ],
        sarkarWarning: 'Humans have no moral right to wipe out species that were born on this planet through millions of years of evolution. The cries of slaughtered creatures curdle human spiritual progress.'
      },
      {
        id: 'anti-sentiment-screening',
        title: 'Rationalistic Sentiment Audit for Public Policy',
        directive: 'Establish a scientific tribunal to screen all proposed laws and media campaigns against geo-sentiments, socio-sentiments, and pseudo-humanism.',
        riskOfOmission: 'Populist politicians exploit racial, national, caste, and religious grievances to win elections and pass discriminatory laws against minority populations.',
        verificationAudit: [
          'Are policies audited to ensure they do not discriminate against residents based on origin, ethnicity, gender, or religion?',
          'Are school history and civics textbooks reviewed to purge xenophobic nationalistic propaganda and colonial revisionism?',
          'Does the policy protect non-citizens and migrant laborers under the identical labor and minimum requirement standards?'
        ],
        sarkarWarning: 'Awakened conscience (Viveka) must constantly ask: "Does this measure foster universal welfare, or does it merely flatter group egoism?" Never compromise with sentimentality.'
      },
      {
        id: 'ecological-trust-charter',
        title: 'Planetary Commons Public Trust Doctrine',
        directive: 'Declare all water aquifers, atmospheric carbon sinks, oceans, and mineral deposits as inalienable public trusts incapable of private commercial deed.',
        riskOfOmission: 'Water privatization and carbon offset commodification allow billionaires to buy up the Earth’s life-support systems, creating neo-feudal resource monopolies.',
        verificationAudit: [
          'Is private corporate ownership of freshwater aquifers, municipal water supplies, and public parks explicitly barred by constitutional statute?',
          'Are commercial extraction permits issued strictly on usufructuary terms with mandatory regenerative habitat restoration bonds?',
          'Are all economic rent revenues from non-renewable resource extraction redirected 100% to clean energy transitions and public welfare?'
        ],
        sarkarWarning: 'You cannot own the sunlight or the ocean; they are cosmic property. Humans are merely tenants on this cosmic estate.'
      }
    ]
  },
  {
    id: 'quadri-dimensional-economy',
    title: 'Quadri-Dimensional Economy & Industrial Tiering',
    subtitle: 'Structural Harmonization of People’s, Psycho, Commercial, and General Economy',
    description: 'Organizing the productive apparatus into three distinct operational tiers to balance collective public necessities, worker cooperative vitality, and small private innovation.',
    sarkarPrinciple: 'To balance economic efficiency, prevent monopolies, and ensure workers’ dignity, industry must be organized into three distinct tiers: Key Public Utilities, Cooperatives, and Small Private Enterprise.',
    relatedTermIds: ['three-tiered-industry', 'quadri-dimensional-economy', 'five-fundamental-principles', 'atirikta'],
    items: [
      {
        id: 'industrial-tiering-charter',
        title: 'Strict Three-Tiered Industrial Classification',
        directive: 'Classify all enterprises into Tier 1 (Key Infrastructure: Public No-Profit), Tier 2 (Cooperative: Majority Consumer/Agro), or Tier 3 (Small Private: Artisans).',
        riskOfOmission: 'Allowing private equity into key infrastructure (energy, railways, healthcare) leads to predatory pricing, neglect of safety, and catastrophic utility failures.',
        verificationAudit: [
          'Are heavy power grids, water treatment, telecommunication backbones, and basic steel/cement mills owned and operated as non-profit public trusts?',
          'Are medium-sized factories, farms, and grocery supply chains structured strictly as democratic worker cooperatives?',
          'Are Tier 3 private businesses strictly capped by employee size (e.g. under 15–20 workers) to prevent monopolistic consolidation?'
        ],
        sarkarWarning: 'Do not allow the greed of private capitalists to contaminate public utilities. But do not make the communist mistake of nationalizing small tea shops and barbers; small enterprise thrives on personal touch.'
      },
      {
        id: 'four-tier-planning-division',
        title: 'Separation of People’s & Psycho-Economy from Commerce',
        directive: 'Create independent planning directorates for People’s Economy (survival essentials) and Psycho-Economy (mental elevation) with budgetary priority over Commercial Economy.',
        riskOfOmission: 'Commercial profit motives invariably cannibalize the production of low-margin basic necessities (cheap healthy food, public libraries) in favor of high-margin luxury vices and addictions.',
        verificationAudit: [
          'Does the People’s Economy directorate have first call on agricultural land and basic material allocations?',
          'Does the Psycho-Economy commission possess authority to restrict consumer advertisements that stimulate harmful or addictive propensities?',
          'Are public media and research institutions funded independently of commercial sponsorships?'
        ],
        sarkarWarning: 'An economic system that creates luxury yachts while children drink polluted water is dimensionally diseased. Ground the foundation before building decorative roofs.'
      },
      {
        id: 'multi-potential-utilization-audit',
        title: 'Five Fundamental Principles Dynamic Resource Audit',
        directive: 'Subject all public investment and technological deployment to the 5 Fundamental Principles of PROUT (progressive utilization of physical, mental, and spiritual potential).',
        riskOfOmission: 'Technological automation under capitalism generates mass unemployment and social despair, turning labor-saving inventions into human curses.',
        verificationAudit: [
          'When automation or AI reduces labor hours, are workweeks reduced with zero reduction in purchasing power rather than laying off workers?',
          'Are public spaces, spiritual centers, and artistic academies funded proportionally alongside physical factories?',
          'Are policies reviewed dynamically to adjust to shifts in time (Kala), space (Desa), and person (Patra)?'
        ],
        sarkarWarning: 'Technology must serve to liberate human mind from animal toil so consciousness can soar in intellectual, artistic, and spiritual pursuits. Never let a machine render a human destitute.'
      }
    ]
  },
  {
    id: 'education-and-culture',
    title: 'Universal Education, Cultural Sovereignty & Bio-Psychology',
    subtitle: 'Cultivation of Awakened Intellect, Glandular Balance & Restorative Healing',
    description: 'Transforming education, culture, and justice from instruments of capitalist conformity into catalysts for intellectual liberation, linguistic dignity, and bio-psychological harmony.',
    sarkarPrinciple: 'Education is that which liberates. Real culture elevates the mind from crude instincts toward universal consciousness.',
    relatedTermIds: ['cultural-imperialism', 'psycho-economic-exploitation', 'bio-psychology', 'proto-psycho-spirituality'],
    items: [
      {
        id: 'cultural-sovereignty-audit',
        title: 'Protection of Mother Tongues & Indigenous Arts',
        directive: 'Guarantee education in the regional mother tongue while cultivating a global lingua franca, protecting local folklore and folk arts from corporate commodification.',
        riskOfOmission: 'Cultural homogenization by global entertainment conglomerates erodes self-respect, extinguishes endangered languages, and leaves populations mentally defenseless against foreign economic drain.',
        verificationAudit: [
          'Is mother-tongue medium instruction guaranteed from primary school through higher education in every linguistic region?',
          'Are municipal arts trusts established to fund local theater, poetry, music, and dance without reliance on corporate advertisers?',
          'Is predatory commercial advertising targeted at children banned across all broadcast and digital platforms?'
        ],
        sarkarWarning: 'To destroy a nation, you do not need armies; destroy its mother tongue and cultural pride, and the people will become willing slaves to foreign masters.'
      },
      {
        id: 'neohumanist-values-curriculum',
        title: 'Neohumanist Awakened Conscience Education',
        directive: 'Integrate scientific rationalism, universal ethics (Yama/Niyama), and contemplative practices into all public schooling levels from early childhood.',
        riskOfOmission: 'Education reduced to technical skill training creates competent technocrats devoid of empathy who easily serve war machines, tobacco companies, and exploitative financial institutions.',
        verificationAudit: [
          'Do students receive training in rationalistic thinking, distinguishing between scientific facts and dogmatic taboos?',
          'Are empathy and reverence for animals, plants, and ecosystems embedded directly into science and moral curricula?',
          'Are non-dogmatic meditation and stress-reduction techniques taught as regular school subjects for emotional self-regulation?'
        ],
        sarkarWarning: 'Intellect without morality is like a sharp sword in the hands of a madman. Awaken the conscience alongside the intellect.'
      },
      {
        id: 'biopsychological-rehabilitation',
        title: 'Restorative Bio-Psychological Justice System',
        directive: 'Transform punitive prisons into bio-psychological healing and educational sanitariums that treat hormonal imbalances, psychic trauma, and nutritional deficits.',
        riskOfOmission: 'Punitive prison industrial complexes criminalize poverty, inflame violent propensities, and run for-profit detention facilities that profit from recidivism.',
        verificationAudit: [
          'Are offenders assessed by medical, psychological, and bio-spiritual professionals to diagnose underlying endocrine and emotional trauma?',
          'Are detention facilities equipped with organic agricultural gardens, yoga/meditation halls, and vocational training facilities?',
          'Are private for-profit prisons strictly outlawed and unconstitutional?'
        ],
        sarkarWarning: 'Criminals are not born devils; they are sick members of our social family afflicted by defective glands, toxic environments, or desperate poverty. Treat them with medical and loving care, not vengeance.'
      }
    ]
  }
];
