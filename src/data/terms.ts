/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { GlossaryTerm } from '../types/glossary';

export const GLOSSARY_TERMS: GlossaryTerm[] = [
  {
    id: 'atirikta',
    term: 'Atirikta (Surplus Wealth)',
    sanskritOrBengali: 'অতিরিক্ত (Atirikta)',
    phonetic: 'Ah-tee-rik-tah',
    domain: 'prout',
    categoryLabel: 'Proutist Economics',
    shortDefinition: 'The surplus collective wealth remaining after all citizens receive guaranteed minimum necessities, distributed strictly as incentives based on social contribution.',
    sarkarExactDefinition: 'After meeting the minimum necessities of all, the remaining surplus wealth should be distributed among meritorious persons according to the degree of their service to society. This surplus is not an absolute ownership right, but a dynamic incentive designed to elevate collective purchasing power without hoarding.',
    canonicalSource: 'Idea and Ideology (1959) & Prout in a Nutshell Part 13',
    semanticAxioms: [
      'Surplus distribution is subordinate to the absolute universal guarantee of minimum requirements.',
      'Incentives are awarded according to merit and social contribution, but can never breach the ceiling where it enables financial oligarchy or labor exploitation.',
      'As collective societal productivity expands, the base minimum requirements floor must continuously rise toward the level previously enjoyed only as surplus.'
    ],
    governanceImplication: 'Fiscal governance must legally decouple surplus bonuses from private monopolization. Regulators enforce a dynamic parity ratio between the lowest guaranteed purchasing power and the highest allowed surplus compensation.',
    comparisons: [
      {
        framework: 'Capitalism / Neoliberalism',
        perspective: 'Surplus value is privatized as corporate profit and concentrated through capital ownership, compound interest, and speculative rents without any systemic ceiling.',
        sarkarDivergence: 'Capitalism treats surplus as private entitlement derived from capital ownership. Sarkar insists surplus belongs to the cosmic collective and must serve exclusively as a non-accumulative social incentive.',
        keyContrastPoint: 'Private capital accumulation vs. Socially capped incentive fund.'
      },
      {
        framework: 'Marxism / State Socialism',
        perspective: 'Attempts uniform wage leveling or state-appropriated surplus, where the bureaucratic state apparatus dictates quotas and suppresses individualized merit incentives.',
        sarkarDivergence: 'Marxist mechanical egalitarianism destroys work initiative and creates bureaucratic apathy. Sarkar recognizes natural diversity in human capability and preserves merit incentives while capping maximum accumulation.',
        keyContrastPoint: 'Mechanical equal distribution vs. Dynamic merit incentives tied to rising base floors.'
      },
      {
        framework: 'Western Psychology (Maslow)',
        perspective: 'Surplus material resources are viewed as individual self-actualization enablers within a consumerist or individualistic framework.',
        sarkarDivergence: 'Sarkar ties surplus utilization directly to psycho-spiritual service (Seva); surplus resources granted to leaders must be expended in elevating the collective, not hedonic consumption.',
        keyContrastPoint: 'Individualistic consumption vs. Service-oriented psycho-spiritual stewardship.'
      }
    ],
    relatedTermIds: ['minimum-requirements', 'purchasing-capacity', 'rational-distribution', 'five-fundamental-principles'],
    governanceLinks: [
      {
        domainId: 'economic-democracy',
        checklistId: 'purchasing-power-parity',
        rationale: 'Surplus wage ceilings must be indexed directly to the minimum guaranteed basket of necessities.'
      }
    ],
    tags: ['Economics', 'Incentives', 'Wealth Distribution', 'PROUT Core', 'Surplus']
  },
  {
    id: 'awakened-conscience',
    term: 'Awakened Conscience (Viveka)',
    sanskritOrBengali: 'বিবেক (Viveka)',
    phonetic: 'Vee-veh-kah',
    domain: 'neohumanism',
    categoryLabel: 'Neohumanist Epistemology',
    shortDefinition: 'The state of rational discrimination between the eternal and transient, benevolent and exploitative, freeing the intellect from dogma and sentimentalism.',
    sarkarExactDefinition: 'Awakened conscience is the intellect liberated from the bondages of geo-sentiment and socio-sentiment through rationalistic mentality and devotion to the Supreme. It is the faculty that fearlessly asks: "Is this policy conducive to the all-round welfare of all sentient beings, or does it merely flatter group egoism?"',
    canonicalSource: 'The Liberation of Intellect: Neohumanism (1982)',
    semanticAxioms: [
      'Intellect without conscience degenerates into shrewdness and intellectual exploitation.',
      'Rationalistic mentality requires studying all sides of an issue, evaluating its welfare impact on humans, animals, and plants, and acting upon the benevolent decision.',
      'Awakened conscience acts as an incorruptible psychological firewall against political demagogues and communal polarization.'
    ],
    governanceImplication: 'Constitutional bodies and judicial tribunals must be insulated from majoritarian populism by requiring ethical vetting and rationalistic impact assessments that account for vulnerable human and non-human beings.',
    comparisons: [
      {
        framework: 'Enlightenment Humanism & Liberalism',
        perspective: 'Conscience is framed as individualistic moral autonomy and subjective utilitarian calculation, frequently prioritizing human economic development over ecosystems.',
        sarkarDivergence: 'Classical humanism is anthropocentric and vulnerable to imperialist bias. Sarkar expands Viveka into Neohumanist cosmic responsibility embracing flora and fauna.',
        keyContrastPoint: 'Anthropocentric subjective rationality vs. Universal cosmic benevolence.'
      },
      {
        framework: 'Western Psychology (Freud & Kohlberg)',
        perspective: 'Conscience is explained as the "Superego" formed by internalizing parental and societal taboos, or progressive stages of conventional moral reasoning.',
        sarkarDivergence: 'Freud’s Superego is often conditioned by dogmatic cultural complexes. Sarkar defines Viveka not as repressive social conditioning, but as the awakening of transpersonal intuition (Ati-Manasa and Vijnanamaya Kosa).',
        keyContrastPoint: 'Repressive societal Superego vs. Intuitive transpersonal liberation.'
      },
      {
        framework: 'Vedic / Classical Vedantic Philosophy',
        perspective: 'Viveka is classically defined as discrimination between the real (Brahman) and the unreal (Maya) strictly for ascetic personal liberation (Moksha).',
        sarkarDivergence: 'Sarkar repudiates world-negating asceticism. In Neohumanism, Viveka must be applied aggressively to rectify socio-economic injustice and protect living beings in the empirical world.',
        keyContrastPoint: 'Ascetic withdrawal from Maya vs. Active social revolution and cosmic protection.'
      }
    ],
    relatedTermIds: ['neohumanism', 'geo-sentiment', 'socio-sentiment', 'devotional-sentiment'],
    governanceLinks: [
      {
        domainId: 'neohumanist-ethics',
        checklistId: 'anti-sentiment-screening',
        rationale: 'Screening legislation against tribal or geo-sentimental dogmas using rationalistic audit protocols.'
      }
    ],
    tags: ['Epistemology', 'Ethics', 'Neohumanism', 'Rationality', 'Discrimination']
  },
  {
    id: 'bio-psychology',
    term: 'Bio-Psychology & Cakras',
    sanskritOrBengali: 'জৈব মনোবিজ্ঞান (Jaeva Manovijnana)',
    phonetic: 'Jye-vuh Muh-noh-vig-nyahn',
    domain: 'psycho-spirituality',
    categoryLabel: 'Psycho-Biological Science',
    shortDefinition: 'The scientific correlation between hormonal secretions of endocrine glands, sub-glands, nerve plexuses (cakras), and mental propensities (vrttis).',
    sarkarExactDefinition: 'Human thought and behavior are intimately connected with biological secretions. The 50 fundamental propensities (vrttis) of the human mind are expressed through hormones secreted by endocrine glands associated with the six physical nerve plexuses (cakras). By balancing glandular secretion through meditation, proper diet, asanas, and righteous socio-economic environments, negative propensities like greed and fear are sublimated into benevolence.',
    canonicalSource: 'Bio-Psychology & Yoga Psychology (1987)',
    semanticAxioms: [
      'Socio-economic crime and political tyranny have physiological and bio-psychological triggers aggravated by malnutrition, toxic diets, chronic stress, and dogmatic stimulation.',
      'Economic deprivation disrupts glandular equilibrium, inflaming base survival propensities (Muladhara / Svadhisthana vrttis).',
      'True governance must design habitats, work schedules, diets, and cultural spaces that foster higher glandular and psychic balance (Anahata and Vishuddha).'
    ],
    governanceImplication: 'Criminal justice and rehabilitation must transition from punitive prison systems to bio-psychological clinics that treat endocrine imbalances, psychological traumas, and nutritional deficiencies.',
    comparisons: [
      {
        framework: 'Behaviorism & Neurobiology',
        perspective: 'Human behavior is governed by stimulus-response conditioning, neurotransmitter balances (serotonin, dopamine), and prefrontal cortex regulation.',
        sarkarDivergence: 'Western neurobiology focuses predominantly on the brain and synapses, ignoring the subtle endocrine plexus (cakra) nodes and psychic propensities (vrttis) that interface between mind and physical hormones.',
        keyContrastPoint: 'Brain-centric neurochemistry vs. Subtle multi-plexus cakra endocrine integration.'
      },
      {
        framework: 'Freudian Psychoanalysis',
        perspective: 'Mental disturbances stem from unconscious sexual repressions (Id vs. Ego/Superego conflicts) stored in repressed childhood complexes.',
        sarkarDivergence: 'Sarkar rejects pan-sexualism. He explains mental propensities through 50 specific vrttis controlled by glandular secretions that can be systematically rebalanced via physical posturing (asanas), diet, and cosmic ideation.',
        keyContrastPoint: 'Unconscious sexual trauma vs. 50 distinct cakra-glandular propensities.'
      },
      {
        framework: 'Marxist Dialectical Materialism',
        perspective: 'Human consciousness is purely a reflection of material relations and economic modes of production.',
        sarkarDivergence: 'While acknowledging economic environments heavily impact psychology, Sarkar demonstrates that internal biological glands and spiritual yearnings possess independent causative vitality that cannot be reduced to crude economics.',
        keyContrastPoint: 'Pure economic determinism vs. Bio-psychological and psycho-spiritual multidimensionality.'
      }
    ],
    relatedTermIds: ['psycho-economic-exploitation', 'sadvipra', 'proto-psycho-spirituality'],
    governanceLinks: [
      {
        domainId: 'education-and-culture',
        checklistId: 'biopsychological-rehabilitation',
        rationale: 'Reforming penal systems into restorative glandular and psychological healing sanctuaries.'
      }
    ],
    tags: ['Bio-Psychology', 'Chakras', 'Mind Science', 'Endocrine', 'Restorative Justice']
  },
  {
    id: 'block-level-planning',
    term: 'Block-Level Planning (Socio-Economic Units)',
    sanskritOrBengali: 'ব্লক-ভিত্তিক পরিকল্পনা (Block-bhittik Parikalpana)',
    phonetic: 'Block Bheet-teek Puh-ree-kul-puh-nah',
    domain: 'governance',
    categoryLabel: 'Decentralized Administration',
    shortDefinition: 'Decentralized bottom-up economic planning organized around ecologically and culturally coherent local blocks rather than arbitrary geopolitical boundaries.',
    sarkarExactDefinition: 'Planning must begin from the bottom, at the block level. A block is the smallest viable socio-economic unit possessing common physical features, raw material availability, agricultural potential, and cultural affinity. The primary aim of block-level planning is to achieve 100% full employment and complete self-sufficiency in basic requirements within the unit.',
    canonicalSource: 'A Few Problems Solved Part 9 & Prout in a Nutshell Part 12',
    semanticAxioms: [
      'Top-down national planning creates regional disparities, capital flight, and metropolitan parasitic exploitation of rural hinterlands.',
      'Raw materials produced in a block must never be exported unprocessed; secondary agro-industries and agrico-industries must be established locally.',
      'Socio-economic units (Samaj) are determined by ecological and economic self-reliance, transcending communal or artificial colonial administrative lines.'
    ],
    governanceImplication: 'Administrative authority shifts to Block Development Boards comprising local agriculturalists, engineers, educators, and cooperative managers with budgetary sovereignty.',
    comparisons: [
      {
        framework: 'Centralized State Socialism (Soviet Gosplan)',
        perspective: 'Central planning boards in capital cities dictate production targets, resource quotas, and price controls for vast heterogeneous territories.',
        sarkarDivergence: 'Centralized planning leads to colossal inefficiencies, supply bottlenecks, and total disenfranchisement of local populations. Sarkar demands autonomous block-level planning boards.',
        keyContrastPoint: 'Bureaucratic central planning vs. Ecological bottom-up block sovereignty.'
      },
      {
        framework: 'Neoliberal Free Trade Globalization',
        perspective: 'Advocates Ricardian comparative advantage, encouraging regions to monocrop or export unrefined raw materials while importing finished consumer goods from multinationals.',
        sarkarDivergence: 'Sarkar proves this causes perpetual economic drainage and neo-colonial dependency. Every block must develop balanced agricultural and industrial sectors to retain local purchasing power.',
        keyContrastPoint: 'Global supply chain extraction vs. Local raw material processing and self-reliance.'
      },
      {
        framework: 'Gandhian Village Swaraj',
        perspective: 'Envisions self-sufficient cottage-based agrarian villages rejecting modern mechanized industry and central infrastructure.',
        sarkarDivergence: 'Sarkar praises Gandhi’s decentralization ethos but rejects anti-technology asceticism. Sarkar advocates maximum modern technology, electrification, and cooperative automation to eliminate physical drudgery.',
        keyContrastPoint: 'Anti-industrial village autarky vs. High-tech cooperative block planning.'
      }
    ],
    relatedTermIds: ['decentralized-economy', 'economic-democracy', 'purchasing-capacity', 'three-tiered-industry'],
    governanceLinks: [
      {
        domainId: 'decentralized-planning',
        checklistId: 'block-resource-audit',
        rationale: 'Mandatory inventory of local raw materials, labor capacity, and industrial processing within block borders.'
      }
    ],
    tags: ['Governance', 'Planning', 'Decentralization', 'Local Economy', 'Samaj']
  },
  {
    id: 'cosmic-inheritance',
    term: 'Cosmic Inheritance (Universal Patrimony)',
    sanskritOrBengali: 'বিশ্ব ভ্রাতৃত্ব ও সার্বজনীন সম্পত্তি (Visva Bhratrtva)',
    phonetic: 'Koz-mik In-hair-ih-tuns',
    domain: 'prout',
    categoryLabel: 'Cosmological Jurisprudence',
    shortDefinition: 'The foundational axiom that the universe and all planetary wealth are the common heritage of all living beings, with humans having only usufructuary rights.',
    sarkarExactDefinition: 'This entire universe is the thought projection of the Cosmic Entity (Parama Purusa). All created beings—humans, animals, birds, insects, and plants—are children of the same Supreme Consciousness. Hence, the wealth of this universe is our common paternal property. No individual, corporation, or nation has an absolute private ownership title to any land, water, or mineral; all possess only the right of usufruct (use without destruction).',
    canonicalSource: 'Idea and Ideology (1959) & Neohumanism in a Nutshell',
    semanticAxioms: [
      'Absolute private ownership of natural resources is philosophical and legal fraud.',
      'Every living being possesses an inalienable birthright to nourishment, habitat, and developmental opportunity.',
      'Human societies serve as trustees for non-human flora and fauna, not sovereign exploiters.'
    ],
    governanceImplication: 'All natural monopolies—waterways, mineral reserves, forests, airspace, electromagnetic spectrum, and planetary orbits—are removed from private equity and held in perpetual public trust.',
    comparisons: [
      {
        framework: 'Lockean Liberal Property Theory',
        perspective: 'An individual acquires absolute private ownership over unowned nature by "mixing one’s labor" with it, establishing sovereign alienation rights.',
        sarkarDivergence: 'Locke justifies colonial land grabs and perpetual resource monopolization. Sarkar states humans cannot own what they did not create; mixing labor entitles one to compensation, never to exclusive deed of the Earth.',
        keyContrastPoint: 'Absolute private land deed vs. Usufructuary cosmic leasehold.'
      },
      {
        framework: 'Marxist Public / State Ownership',
        perspective: 'Natural resources belong to "the people" managed collectively by the proletarian state apparatus.',
        sarkarDivergence: 'Marxist state ownership remains strictly anthropocentric, treating animals and nature as raw production assets. Sarkar’s cosmic inheritance grants intrinsic rights to non-human species.',
        keyContrastPoint: 'State industrial asset vs. Multi-species cosmic kinship.'
      },
      {
        framework: 'Indigenous Customary Land Rights',
        perspective: 'Earth is sacred and held collectively across past, present, and future generations of a tribal lineage.',
        sarkarDivergence: 'Sarkar shares this reverence but expands it beyond clan or tribe into a rigorous universalist planetary constitution encompassing all living beings.',
        keyContrastPoint: 'Clan-based sacred stewardship vs. Universal cosmic constitutional jurisprudence.'
      }
    ],
    relatedTermIds: ['neohumanism', 'five-fundamental-principles', 'economic-democracy'],
    governanceLinks: [
      {
        domainId: 'neohumanist-ethics',
        checklistId: 'ecological-trust-charter',
        rationale: 'Legal codification of natural ecosystems as non-ownable common patrimony with guardian legal standing.'
      }
    ],
    tags: ['Jurisprudence', 'Cosmology', 'Property Rights', 'Ecology', 'PROUT Core']
  },
  {
    id: 'cultural-imperialism',
    term: 'Cultural Imperialism & Pseudo-Culture',
    sanskritOrBengali: 'অপসংস্কৃতি ও সাংস্কৃতিক আগ্রাসন (Apasamskrti)',
    phonetic: 'Ah-puh-sung-skree-tee',
    domain: 'neohumanism',
    categoryLabel: 'Neohumanist Cultural Critique',
    shortDefinition: 'The strategic imposition of degraded, consumerist, or vulgar cultural products by dominant powers to paralyze the critical intellect and self-respect of local peoples.',
    sarkarExactDefinition: 'Pseudo-culture is not genuine culture; it is an artificial, vulgar stimulation of crude physical and mental appetites marketed by imperialists and capitalists. By destroying indigenous languages, traditional arts, and moral restraint through debased entertainment and consumerism, they paralyze the collective psychic backbone of the people, making them docile subjects for economic plunder.',
    canonicalSource: 'The Liberation of Intellect: Neohumanism (1982) & Talks on Prout',
    semanticAxioms: [
      'Economic colonization is invariably preceded and reinforced by cultural subjugation.',
      'Genuine culture elevates the mind from crude instincts toward universal aesthetic and spiritual consciousness.',
      'Defending indigenous languages, folklore, and local arts is an indispensable front in anti-exploitation struggle.'
    ],
    governanceImplication: 'Public cultural policy must support local regional languages, independent community arts, and non-commercial public media while banning predatory commercial advertising aimed at children and psychological manipulation.',
    comparisons: [
      {
        framework: 'Frankfurt School Critical Theory (Adorno & Horkheimer)',
        perspective: 'The "Culture Industry" commodifies art into mass deception, producing standardized, escapist entertainment that pacifies the working class.',
        sarkarDivergence: 'While sharing Adorno’s critique of mass commodification, Sarkar goes deeper by connecting pseudo-culture to bio-psychological glandular degradation and providing spiritual and linguistic practices to actively counteract it.',
        keyContrastPoint: 'Pessimistic critique of culture industry vs. Actionable neohumanist cultural renaissance.'
      },
      {
        framework: 'Neoliberal Free Market Culture',
        perspective: 'Cultural production is subject to consumer choice and market efficiency; entertainment that sells best is democratic expression of customer preference.',
        sarkarDivergence: 'Sarkar exposes that profit-driven media deliberately stimulates lower cakra vrttis (lust, fear, greed) because crude sensations generate the most addictive commercial revenues.',
        keyContrastPoint: 'Market consumer sovereignty vs. Bio-psychological exploitation via commercial vulgarity.'
      },
      {
        framework: 'Post-Colonial Theory (Said & Spivak)',
        perspective: 'Examines hegemonic discourses, orientalism, and epistemic violence perpetuated by colonial metropoles.',
        sarkarDivergence: 'Sarkar incorporates anti-colonial linguistic preservation but warns against reactionary revivalism or xenophobic fundamentalism, advocating universal Neohumanist synthetic culture.',
        keyContrastPoint: 'Post-structuralist critique vs. Moral-spiritual universalist cultural defense.'
      }
    ],
    relatedTermIds: ['psycho-economic-exploitation', 'geo-sentiment', 'socio-sentiment', 'awakened-conscience'],
    governanceLinks: [
      {
        domainId: 'education-and-culture',
        checklistId: 'cultural-sovereignty-audit',
        rationale: 'Protecting linguistic diversity, community arts trusts, and restricting predatory psychological marketing.'
      }
    ],
    tags: ['Culture', 'Neohumanism', 'Media', 'Imperialism', 'Linguistics']
  },
  {
    id: 'decentralized-economy',
    term: 'Decentralized Economy (Arthik Vikendriikarana)',
    sanskritOrBengali: 'আর্থিক বিকেন্দ্রীকরণ (Arthik Vikendriikarana)',
    phonetic: 'Ahr-theek Vee-ken-dree-kuh-ruh-nah',
    domain: 'prout',
    categoryLabel: 'Proutist Economic Architecture',
    shortDefinition: 'An economic framework where decision-making power, production facilities, capital retention, and planning are distributed directly to local ecological communities.',
    sarkarExactDefinition: 'Decentralized economy means that the economic destiny of a region is in the hands of its local people. There must be no economic drain from any region. The raw materials of a block must be converted into finished products locally, local purchasing capacity must be systematically increased, and planning must prioritize regional self-sufficiency before trade.',
    canonicalSource: 'Prout in a Nutshell Part 15 & A Few Problems Solved Part 9',
    semanticAxioms: [
      'Centralized capital inevitably breeds political authoritarianism and regional underdevelopment.',
      'The wealth generated in a locality must circulate within that locality to multiply local purchasing capacity.',
      'Outsiders who extract profits without reinvesting in local welfare must not control regional production.'
    ],
    governanceImplication: 'Banking and financial credit must be decentralized into regional cooperative banks forbidden from channeling local savings into distant speculative capital markets.',
    comparisons: [
      {
        framework: 'Capitalist Financial Globalization',
        perspective: 'Capital flows frictionlessly across international borders seeking the highest rate of return, resulting in the abandonment of industrial rust belts.',
        sarkarDivergence: 'Sarkar outlaws speculative capital flight. Capital formed by local labor must remain anchored to the development of that local community.',
        keyContrastPoint: 'Hyper-mobile global speculative capital vs. Locally rooted non-drainable cooperative capital.'
      },
      {
        framework: 'Anarcho-Syndicalism & Libertarian Socialism',
        perspective: 'Worker-controlled syndicates manage individual enterprises autonomously without state interference.',
        sarkarDivergence: 'Sarkar supports worker cooperative control but incorporates coordinated multi-tier planning (key heavy industries managed publicly, small private enterprises) with moral constitutional guidance (Sadvipras) to prevent inter-syndicate rivalry.',
        keyContrastPoint: 'Autonomous worker syndicates vs. Coordinated three-tiered decentralized planning.'
      },
      {
        framework: 'Regionalism & Protectionism (Autarky)',
        perspective: 'Nationalist tariff walls designed to protect domestic capitalist corporations from foreign competitors.',
        sarkarDivergence: 'Sarkar opposes nationalistic xenophobia. Decentralization is not chauvinistic isolationism; it is socio-economic empowerment allowing all regions to achieve parity before engaging in equitable planetary federation.',
        keyContrastPoint: 'Chauvinist national protectionism vs. Universalist balanced regional empowerment.'
      }
    ],
    relatedTermIds: ['block-level-planning', 'economic-democracy', 'purchasing-capacity', 'three-tiered-industry'],
    governanceLinks: [
      {
        domainId: 'decentralized-planning',
        checklistId: 'local-capital-retention',
        rationale: 'Enforcing localized banking reserve mandates and preventing profit siphon to financial centers.'
      }
    ],
    tags: ['Economics', 'Decentralization', 'PROUT Core', 'Self-Reliance', 'Cooperative']
  },
  {
    id: 'devotional-sentiment',
    term: 'Devotional Sentiment (Bhaktibhavana)',
    sanskritOrBengali: 'ভক্তিভাবনা (Bhaktibhavana)',
    phonetic: 'Bhuk-tee-bhah-vah-nah',
    domain: 'neohumanism',
    categoryLabel: 'Neohumanist Spiritual Philosophy',
    shortDefinition: 'Universal cosmic love directed toward the Supreme Entity, recognized as the only permanent psychological safeguard against human selfishness and exploitation.',
    sarkarExactDefinition: 'Devotional sentiment is the highest, sweetest, and most refined expression of human consciousness. When devotion is established in the mind, all created beings are perceived as expressions of the one Supreme Father/Mother. It transforms narrow human sentiments into an all-embracing universal love that shields humanity from degradation into geo-sentiment and socio-sentiment.',
    canonicalSource: 'The Liberation of Intellect: Neohumanism (1982)',
    semanticAxioms: [
      'Intellectual arguments and legal treaties are fragile and easily broken by self-interest during crises.',
      'Only the deep emotional realization of cosmic familyhood can generate selfless, sacrifice-ready moral courage.',
      'Devotional sentiment must be preserved and guarded through regular psycho-spiritual meditation (Sadhana).'
    ],
    governanceImplication: 'Public education must integrate universal spiritual ethics and contemplative practices, entirely separate from sectarian religious dogma or superstitious ritualism.',
    comparisons: [
      {
        framework: 'Secular Scientific Rationalism',
        perspective: 'Emotions and devotion are irrational or subjective liabilities; governance and ethics should rely exclusively on empirical data and game theory.',
        sarkarDivergence: 'Sarkar demonstrates that cold intellect without love degenerates into ruthless technocracy and cynical manipulation. Devotion provides the vital moral gasoline that powers benevolent intellect.',
        keyContrastPoint: 'Detached technocratic utilitarianism vs. Loving cosmic sentiment guiding reason.'
      },
      {
        framework: 'Sectarian Institutional Religion',
        perspective: 'Devotion is channeled toward a jealous tribal deity, holy book, or exclusive prophet, often branding non-believers as infidels.',
        sarkarDivergence: 'Sarkar denounces religious dogma as an insidious socio-sentiment. Neohumanist devotion recognizes the Divine within every particle, plant, animal, and sinner equally without intermediaries.',
        keyContrastPoint: 'Exclusivist dogmatic theism vs. Universalist non-dogmatic cosmic love.'
      },
      {
        framework: 'Carl Jung’s Analytical Psychology',
        perspective: 'Religious devotion is an archetypal expression of the collective unconscious, integrating the individuation process.',
        sarkarDivergence: 'Jung treats spiritual experience as psychological psychic projection. Sarkar presents devotional experience as an objective ontological resonance with Cosmic Consciousness (Brahma).',
        keyContrastPoint: 'Archetypal psychic projection vs. Ontological union with Cosmic Source.'
      }
    ],
    relatedTermIds: ['neohumanism', 'awakened-conscience', 'proto-psycho-spirituality'],
    governanceLinks: [
      {
        domainId: 'education-and-culture',
        checklistId: 'neohumanist-values-curriculum',
        rationale: 'Curricula structured on universal cosmic empathy rather than competitive egoism or national chauvinism.'
      }
    ],
    tags: ['Spirituality', 'Neohumanism', 'Cosmic Love', 'Bhakti', 'Ethics']
  },
  {
    id: 'economic-democracy',
    term: 'Economic Democracy (Arthik Gańatantra)',
    sanskritOrBengali: 'আর্থিক গণতন্ত্র (Arthik Gańatantra)',
    phonetic: 'Ahr-theek Guh-nuh-tun-truh',
    domain: 'prout',
    categoryLabel: 'Proutist Constitutionalism',
    shortDefinition: 'The socio-political doctrine that economic decision-making and resource ownership must reside directly with the local populace, rendering political democracy meaningful.',
    sarkarExactDefinition: 'Political democracy is a cruel hoax without economic democracy. Economic democracy means that: (1) The minimum requirements of life must be guaranteed to all; (2) Increasing purchasing capacity must be the primary metric of economic success; (3) Economic decisions must be decentralized to the local people; and (4) The local raw materials must not be drained away by outside monopolists.',
    canonicalSource: 'Prout in a Nutshell Part 21 & Problem of the Day (1958)',
    semanticAxioms: [
      'In a capitalist political democracy, money power buys votes, media, and legislative agendas, reducing freedom to a plutocratic farce.',
      'A hungry person will sell their ballot for a bag of grain; universal suffrage requires universal economic security.',
      'Control over food, clothing, housing, medical care, and education must be democratically managed through worker and consumer cooperatives.'
    ],
    governanceImplication: 'Constitutions must enshrine an enforceable economic bill of rights guaranteeing employment and baseline purchasing capacity, superseding speculative property claims.',
    comparisons: [
      {
        framework: 'Liberal Representative Democracy',
        perspective: 'Focuses strictly on procedural political rights (voting, freedom of speech, regular elections) while preserving unconstrained private capital ownership.',
        sarkarDivergence: 'Sarkar argues this produces oligarchic rule disguised as democracy. Real freedom is impossible when 1% of the population owns 90% of the productive wealth.',
        keyContrastPoint: 'Procedural political voting vs. Substantive democratic control of economic sustenance.'
      },
      {
        framework: 'Marxist "Dictatorship of the Proletariat"',
        perspective: 'A vanguard party seizes political and economic apparatus in the name of the working class, abolishing multi-party bourgeois democracy.',
        sarkarDivergence: 'Sarkar warns that vanguard statism merely replaces private capitalists with bureaucratic party despots. True economic democracy disperses power directly to decentralized cooperatives, not state apparatchiks.',
        keyContrastPoint: 'Totalitarian state monopoly vs. Decentralized cooperative workplace democracy.'
      },
      {
        framework: 'Workplace Democracy / Co-determination (Nordic Model)',
        perspective: 'Allows employee representatives on corporate boards within a market capitalist framework.',
        sarkarDivergence: 'Co-determination is easily co-opted or diluted by international financial markets. Economic democracy mandates systemic transformation of key industries into cooperatives and public trusts.',
        keyContrastPoint: 'Minority board seats under capitalism vs. Complete structural cooperative ownership.'
      }
    ],
    relatedTermIds: ['purchasing-capacity', 'minimum-requirements', 'decentralized-economy', 'sadvipra'],
    governanceLinks: [
      {
        domainId: 'economic-democracy',
        checklistId: 'guaranteed-basic-necessities',
        rationale: 'Constitutional enforcement of 100% employment and purchasing power indexed to cost of living.'
      }
    ],
    tags: ['Democracy', 'Economics', 'PROUT Core', 'Human Rights', 'Decentralization']
  },
  {
    id: 'five-fundamental-principles',
    term: 'Five Fundamental Principles of PROUT (Panca Tattva)',
    sanskritOrBengali: 'প্রাউটের পাঁচটি মৌলিক নীতি (Prout-er Panca Maulik Niti)',
    phonetic: 'Pahn-chuh Tuht-tvuh',
    domain: 'prout',
    categoryLabel: 'Proutist Foundational Axioms',
    shortDefinition: 'The five socio-economic axioms formulated by P.R. Sarkar in 1959 governing the progressive utilization, conservation, and distribution of cosmic potentials.',
    sarkarExactDefinition: 'The five fundamental principles: (1) No individual should be allowed to accumulate any physical wealth without the clear permission or approval of the collective body; (2) There should be maximum utilization and rational distribution of all crude, subtle, and spiritual potentials of the universe; (3) There should be maximum utilization of the physical, metaphysical, and spiritual potentialities of unit and collective beings; (4) There should be a well-balanced adjustment among the utilization of physical, metaphysical, and spiritual potentialities; (5) The method of utilization should vary in accordance with the changes in time, space, and person, and the utilization should be of a progressive nature.',
    canonicalSource: 'Idea and Ideology (1959)',
    semanticAxioms: [
      'Wealth accumulation is not an absolute individual liberty; it requires collective societal consent and transparent justification.',
      'Development encompasses more than material GDP; mental, artistic, scientific, and spiritual potentials are of equal or higher priority.',
      'Policies must never freeze into dogmatic orthodoxy; methods must evolve dynamically according to Desa (space), Kala (time), and Patra (person).'
    ],
    governanceImplication: 'All macro-economic policies and legislation must pass a multi-dimensional impact analysis verifying compliance with these five dynamic principles.',
    comparisons: [
      {
        framework: 'Classical Capitalist Utility Maximization',
        perspective: 'Focuses entirely on maximizing financial profitability, consumption, and shareholder wealth via market pricing.',
        sarkarDivergence: 'Capitalism optimizes only crude physical accumulation, neglecting subtle mental and spiritual development and depleting the planet’s finite resources.',
        keyContrastPoint: 'Monetary profit maximization vs. Multi-dimensional progressive physical/mental/spiritual utilization.'
      },
      {
        framework: 'Marxist Dialectical Dogmatism',
        perspective: 'Subordinates all human development to the class struggle and historic stages governed by rigid dialectical laws.',
        sarkarDivergence: 'Principle 5 explicitly warns against rigid dogmatism: methods of utilization must adapt dynamically to time, space, and person, preventing ideological ossification.',
        keyContrastPoint: 'Fixed historicist dogma vs. Dynamic, progressive, context-aware policy adaptation.'
      },
      {
        framework: 'Contemporary Sustainable Development Goals (SDGs)',
        perspective: '17 global goals targeting poverty reduction, clean energy, and gender equality within an existing nation-state and market framework.',
        sarkarDivergence: 'SDGs lack an enforcement mechanism against wealth hoarding (Principle 1) and treat human spirituality as outside the scope of governance. PROUT integrates spiritual cultivation with resource caps.',
        keyContrastPoint: 'Voluntary market-friendly targets vs. Mandatory wealth ceilings and holistic utilization.'
      }
    ],
    relatedTermIds: ['atirikta', 'rational-distribution', 'cosmic-inheritance', 'quadri-dimensional-economy'],
    governanceLinks: [
      {
        domainId: 'quadri-dimensional-economy',
        checklistId: 'multi-potential-utilization-audit',
        rationale: 'Auditing state budgets to guarantee balanced investments in mental and spiritual cultivation alongside material infrastructure.'
      }
    ],
    tags: ['PROUT Core', 'Foundational', 'Principles', 'Sustainability', 'Progressive Utilization']
  },
  {
    id: 'geo-sentiment',
    term: 'Geo-Sentiment (Territorial Chauvinism)',
    sanskritOrBengali: 'দেশপ্রীতি ও ভূ-ভাবপ্রবণতা (Bhu-bhavapravanata)',
    phonetic: 'Jee-oh Sen-tih-ment',
    domain: 'neohumanism',
    categoryLabel: 'Neohumanist Social Pathology',
    shortDefinition: 'An irrational, sentimental attachment to a specific geographic territory, river, or nation that breeds xenophobia, border idolatry, and war.',
    sarkarExactDefinition: 'Geo-sentiment is the attachment of human sentiment to a specific piece of geography. It expresses itself as geo-religion, geo-economics, and geo-patriotism (narrow nationalism). It leads people to believe that their land, race, or religion rooted in that territory is superior to all others, inciting aggressive wars, border disputes, and economic exploitation of neighboring lands.',
    canonicalSource: 'The Liberation of Intellect: Neohumanism (1982)',
    semanticAxioms: [
      'National borders are temporary administrative conveniences, not sacred ontological divisions.',
      'Geo-sentiment is deliberately stoked by military-industrial complexes and corrupt politicians to distract the public from domestic economic crises.',
      'The antidote to geo-sentiment is rationalistic study of geography, planetary migration history, and the cultivation of universal world citizenship.'
    ],
    governanceImplication: 'Abolition of discriminatory nationalist immigration laws; establishment of a progressive World Government with a planetary bill of human and animal rights.',
    comparisons: [
      {
        framework: 'Westphalian Nation-State Sovereignty',
        perspective: 'The nation-state is the supreme, inviolable unit of international law with sovereign jurisdiction over its territory and populace.',
        sarkarDivergence: 'Westphalian sovereignty legitimizes state tyranny within borders and perpetual international anarchy. Sarkar advocates a unified World Federal Government with constitutional safeguards.',
        keyContrastPoint: 'Absolute national border sovereignty vs. Planetary federation and universal citizenship.'
      },
      {
        framework: 'Right-Wing Blood-and-Soil Nationalism',
        perspective: 'A people’s collective identity and moral superiority are indelibly linked to their ancestral ethnic homeland and borders.',
        sarkarDivergence: 'Sarkar identifies this as a primitive psychological disease (geo-sentiment) that stunts mental expansion and inevitably leads to fascism and war.',
        keyContrastPoint: 'Ethnic territorial idolatry vs. Neohumanist universal familyhood.'
      },
      {
        framework: 'Liberal Cosmopolitanism (Kant / Habermas)',
        perspective: 'Advocates global treaties, League of Nations / UN frameworks, and perpetual peace through international commerce.',
        sarkarDivergence: 'Liberal cosmopolitanism fails because it relies on voluntary pacts between unequal nation-states dominated by imperialist vetos (e.g. UN Security Council). Sarkar insists on dismantling economic exploitation first.',
        keyContrastPoint: 'Toothless UN diplomatic pacts vs. Democratic World Federal Government.'
      }
    ],
    relatedTermIds: ['socio-sentiment', 'neohumanism', 'universalism', 'awakened-conscience'],
    governanceLinks: [
      {
        domainId: 'neohumanist-ethics',
        checklistId: 'anti-sentiment-screening',
        rationale: 'Eliminating chauvinistic geopolitical biases in trade, migration, and educational curricula.'
      }
    ],
    tags: ['Neohumanism', 'Nationalism', 'Xenophobia', 'Peace', 'World Government']
  },
  {
    id: 'ideal-leadership',
    term: 'Ideal Leadership & Sadvipra Governance',
    sanskritOrBengali: 'সদ্বিপ্র নেতৃত্ব (Sadvipra Netrtva)',
    phonetic: 'Sud-vee-pruh Leh-der-ship',
    domain: 'governance',
    categoryLabel: 'Proutist Political Philosophy',
    shortDefinition: 'Leadership exercised by morally grounded, selfless individuals who embody the positive traits of all four social classes without identifying with any single interest group.',
    sarkarExactDefinition: 'An ideal leader is a Sadvipra—one who has developed moral courage (Ksattriya), intellectual clarity (Vipra), administrative and productive dynamism (Vaeshya), and a heart of selfless physical service (Shudra). Sadvipras seek neither wealth nor administrative power for self-aggrandizement; their sole function is to serve as moral sentinels, ensuring the social cycle does not stagnate in the exploitative phase of any single class.',
    canonicalSource: 'Idea and Ideology (1959) & Human Society Part 2',
    semanticAxioms: [
      'Elections based purely on popularity, money power, or party patronage elevate demagogues, sociopaths, and lobbyists into power.',
      'Political power must be subject to moral oversight; the moral caliber of representatives is more important than their party loyalty.',
      'Sadvipras possess the moral right to exercise revolutionary corrective action if an exploitative regime refuses to reform.'
    ],
    governanceImplication: 'Establishment of an independent Supreme Moral Council (Sadvipra Board) with veto power over policies that violate universal rights or fundamental economic guarantees.',
    comparisons: [
      {
        framework: 'Plato’s "Philosopher King"',
        perspective: 'Rule by an aristocratic intellectual elite educated in the forms and metaphysics, ruling paternalistically without democratic check.',
        sarkarDivergence: 'Plato’s guardians were detached aristocrats supported by slave labor. Sadvipras are actively working servants (Shudra spirit) embedded among the working people, subjected to stringent moral codes (Yama & Niyama).',
        keyContrastPoint: 'Aristocratic intellectual guardian vs. Selfless grassroots servant-sentinel.'
      },
      {
        framework: 'Modern Party Parliamentary / Electoral Systems',
        perspective: 'Anyone who can win a majority of votes through party machinery and campaign financing is legitimate to rule.',
        sarkarDivergence: 'Sarkar criticizes electoralism without moral qualification as a popularity contest funded by oligarchy. Governance requires verified moral rectitude, spirit of service, and ethical discernment.',
        keyContrastPoint: 'Unqualified majoritarian popularity contests vs. Ethically vetted moral leadership.'
      },
      {
        framework: 'Leninist Vanguard Party',
        perspective: 'A disciplined professional revolutionary party acts as the ideological vanguard to seize state power.',
        sarkarDivergence: 'Lenin’s vanguard absorbed state power and became a monstrous totalitarian bureaucracy. Sadvipras do not seek to monopolize the state bureaucracy; they act as external moral watchdogs.',
        keyContrastPoint: 'Totalitarian vanguard party state vs. Non-monopolistic moral oversight council.'
      }
    ],
    relatedTermIds: ['sadvipra', 'samaja-cakra', 'economic-democracy'],
    governanceLinks: [
      {
        domainId: 'sadvipra-oversight',
        checklistId: 'ethical-vetting-framework',
        rationale: 'Institutional criteria for vetting constitutional overseers based on lifelong ethical conduct and public service.'
      }
    ],
    tags: ['Leadership', 'Governance', 'Sadvipra', 'Ethics', 'Political Theory']
  },
  {
    id: 'minimum-requirements',
    term: 'Minimum Requirements of Life (Panca Prayojaniiya)',
    sanskritOrBengali: 'মৌলিক প্রয়োজন (Maulik Prayojaniiya)',
    phonetic: 'Pahn-chuh Prah-yoh-juh-nee-yuh',
    domain: 'prout',
    categoryLabel: 'Proutist Socio-Economics',
    shortDefinition: 'The unconditional guarantee of five essential necessities—food, clothing, housing, education, and medical care—provided through universal productive employment.',
    sarkarExactDefinition: 'The primary duty of any civilized society is to guarantee the five fundamental requirements of human existence: food, clothing, housing, education, and medical treatment. This guarantee must not be delivered through humiliating welfare doles, but through guaranteed employment with sufficient purchasing capacity, ensuring every person can procure these necessities with dignity.',
    canonicalSource: 'Problem of the Day (1958) & Prout in a Nutshell Part 1',
    semanticAxioms: [
      'The right to work with adequate purchasing power is a fundamental constitutional birthright, not a privilege granted by market employers.',
      'Doles and passive basic income without work cause psychic degeneration and social parasitic decay; work must be provided matching human aptitude.',
      'The qualitative standard of these five necessities must continuously improve as technological productivity increases.'
    ],
    governanceImplication: 'State planning boards must calculate local consumer baskets annually and mandate public and cooperative projects to absorb 100% of available labor.',
    comparisons: [
      {
        framework: 'Neoliberal Free Market Capitalism',
        perspective: 'Basic necessities are commodities bought and sold on the market; those unable to afford them rely on charity or private philanthropy.',
        sarkarDivergence: 'Sarkar rejects treating food, healthcare, and housing as speculative profit commodities. Access to these five is an inalienable birthright that society must unconditionally ensure.',
        keyContrastPoint: 'Market commodities for profit vs. Inalienable guaranteed human birthright.'
      },
      {
        framework: 'Universal Basic Income (UBI)',
        perspective: 'Distributing unconditional cash transfers to all citizens regardless of work status within existing market economies.',
        sarkarDivergence: 'Sarkar warns that cash transfers without guaranteed local production trigger rampant inflation and psychic lethargy. PROUT guarantees the *physical availability* of necessities through *meaningful employment*.',
        keyContrastPoint: 'Passive monetary cash handouts vs. Guaranteed employment with indexed purchasing power.'
      },
      {
        framework: 'Nordic Welfare State',
        perspective: 'High-tax welfare safety nets provide state healthcare, subsidized tuition, and unemployment insurance.',
        sarkarDivergence: 'While closer than neoliberalism, the Nordic model remains vulnerable to capitalist capital strikes, globalization pressures, and tax flight. PROUT anchors the guarantee in cooperative decentralized production.',
        keyContrastPoint: 'Tax-funded safety net under capitalism vs. Structurally integrated cooperative economy.'
      }
    ],
    relatedTermIds: ['purchasing-capacity', 'economic-democracy', 'atirikta', 'block-level-planning'],
    governanceLinks: [
      {
        domainId: 'economic-democracy',
        checklistId: 'guaranteed-basic-necessities',
        rationale: 'Statutory obligation to deliver 100% access to food, shelter, clothes, school, and clinics.'
      }
    ],
    tags: ['Human Rights', 'Basic Needs', 'Employment', 'PROUT Core', 'Welfare']
  },
  {
    id: 'neohumanism',
    term: 'Neohumanism (Nava Manavatavada)',
    sanskritOrBengali: 'নবমানবতাবাদ (Nava Manavatavada)',
    phonetic: 'Neh-oh-hyoo-muh-nih-zum',
    domain: 'neohumanism',
    categoryLabel: 'Philosophical Worldview',
    shortDefinition: 'The philosophical expansion of humanism to embrace all living beings—animals, plants, and the inanimate universe—rooted in universal cosmic benevolence.',
    sarkarExactDefinition: 'When the underlying spirit of humanism is extended to everything, animate and inanimate, in this universe—I have designated this as "Neohumanism". This Neohumanism will elevate humanism to universalism, the cult of love for all created beings of this universe. It breaks the shackles of geo-sentiment and socio-sentiment through awakened conscience and devotional ideation.',
    canonicalSource: 'The Liberation of Intellect: Neohumanism (1982)',
    semanticAxioms: [
      'Classical humanism is speciesist and anthropocentric, treating the Earth and non-human creatures as expendable instruments for human convenience.',
      'Every creature has existential value (the right to exist for its own sake), not merely utility value (usefulness to humans).',
      'True civilization is measured by how humans treat the most defenseless members of the ecological family.'
    ],
    governanceImplication: 'Ecological jurisprudence granting legal rights to non-human species, rivers, and forests; phase-out of industrial slaughterhouses and habitat destruction.',
    comparisons: [
      {
        framework: 'Classical Renaissance Humanism',
        perspective: 'Protagorean "Man is the measure of all things." Centered on human dignity, rational inquiry, and secular flourishing.',
        sarkarDivergence: 'Classical humanism made humans the tyrant of the planet, justifying environmental devastation and animal slaughter for human luxury. Neohumanism dethrones human anthropocentrism.',
        keyContrastPoint: 'Anthropocentric human-only dignity vs. Cosmic kinship of all living beings.'
      },
      {
        framework: 'Deep Ecology (Arne Naess)',
        perspective: 'Biocentric equality: all living organisms have intrinsic value independent of human utility.',
        sarkarDivergence: 'Deep ecology lacks a comprehensive spiritual epistemology and socio-economic model. Neohumanism grounds biocentric ethics in the Supreme Consciousness and pairs it with PROUT’s practical economic plan.',
        keyContrastPoint: 'Secular biocentrism without economic framework vs. Psycho-spiritual cosmic love paired with PROUT.'
      },
      {
        framework: 'Utilitarian Animal Liberation (Peter Singer)',
        perspective: 'Sentience-based ethics: suffering of animals must be counted in utilitarian moral calculus.',
        sarkarDivergence: 'Singer’s preference utilitarianism is vulnerable to trade-offs and excludes plant and inanimate ecosystems. Neohumanism recognizes existential value in plants and the physical cosmos as expressions of Brahma.',
        keyContrastPoint: 'Suffering-calculus utilitarianism vs. Universal cosmic existential rights.'
      }
    ],
    relatedTermIds: ['awakened-conscience', 'geo-sentiment', 'socio-sentiment', 'cosmic-inheritance'],
    governanceLinks: [
      {
        domainId: 'neohumanist-ethics',
        checklistId: 'non-human-rights-charter',
        rationale: 'Legal codification of wildlife habitat protection, anti-cruelty enforcement, and river personhood.'
      }
    ],
    tags: ['Neohumanism', 'Philosophy', 'Animal Rights', 'Ecology', 'Universal Love']
  },
  {
    id: 'proto-psycho-spirituality',
    term: 'Proto-Psycho-Spirituality',
    sanskritOrBengali: 'মানস-আধ্যাত্মিক ভাবনা (Proto-Psycho-Spirituality)',
    phonetic: 'Proh-toh Sye-koh Speer-ih-choo-al-ih-tee',
    domain: 'psycho-spirituality',
    categoryLabel: 'Spiritual Psychology',
    shortDefinition: 'The preparatory mental ideation where the individual consciously directs every thought, action, and social deed toward the welfare of the Cosmic Entity.',
    sarkarExactDefinition: 'Proto-psycho-spirituality is the stage of mental practice where one thinks: "Whatever I think, whatever I do, is for the pleasure and satisfaction of the Supreme Consciousness." By constantly maintaining this ideation, the crude mind is progressively refined, freeing it from petty self-interest, fear, and sentimental attachments.',
    canonicalSource: 'The Liberation of Intellect: Neohumanism (1982)',
    semanticAxioms: [
      'Selfish mental thoughts contract the mind, causing psychic micro-lesions and neurotic anxieties.',
      'Cosmic ideation expands the mental wavelength, aligning individual propensities with collective evolution.',
      'It acts as the psychological prerequisite for incorruptible ethical leadership.'
    ],
    governanceImplication: 'Leaders and public administrators must cultivate contemplative mental habits to inoculate themselves against ego-inflation and corrupt material inducements.',
    comparisons: [
      {
        framework: 'Cognitive Behavioral Therapy (CBT)',
        perspective: 'Identifies cognitive distortions and reframes negative self-talk to restore functional emotional equilibrium.',
        sarkarDivergence: 'CBT remains confined to adjusting the individual to adapt to existing social norms. Proto-psycho-spirituality fundamentally transcends the ego by connecting the mind to the Cosmic Whole.',
        keyContrastPoint: 'Ego adaptation to societal reality vs. Ego transcendence through Cosmic ideation.'
      },
      {
        framework: 'Kantian Deontology ("Duty for Duty’s Sake")',
        perspective: 'Moral action is motivated strictly by adherence to the categorical imperative derived through pure reason.',
        sarkarDivergence: 'Kant’s deontology is dry, intellectual, and vulnerable to emotional exhaustion. Proto-psycho-spirituality infuses duty with cosmic love and emotional warmth.',
        keyContrastPoint: 'Cold categorical imperative vs. Loving spiritual ideation.'
      },
      {
        framework: 'Nietzschean "Will to Power"',
        perspective: 'Life is driven by the instinct to overcome, dominate, and express self-affirming power against herd morality.',
        sarkarDivergence: 'Sarkar agrees that life is struggle and vitality, but redirects the will not toward dominating others, but toward mastering one’s own animal instincts in service to the collective.',
        keyContrastPoint: 'Individualistic domination vs. Spiritual self-mastery in cosmic service.'
      }
    ],
    relatedTermIds: ['devotional-sentiment', 'awakened-conscience', 'sadvipra'],
    governanceLinks: [
      {
        domainId: 'education-and-culture',
        checklistId: 'neohumanist-values-curriculum',
        rationale: 'Contemplative self-reflection modules in leadership training academies.'
      }
    ],
    tags: ['Mind Science', 'Spiritual Practice', 'Psychology', 'Ideation', 'Consciousness']
  },
  {
    id: 'psycho-economic-exploitation',
    term: 'Psycho-Economic Exploitation',
    sanskritOrBengali: 'মনস্তাত্ত্বিক-অর্থনৈতিক শোষণ (Manastattvik Arthik Shoshan)',
    phonetic: 'Sye-koh Ee-kuh-nom-ik Ex-ploy-tay-shun',
    domain: 'prout',
    categoryLabel: 'Proutist Critical Sociology',
    shortDefinition: 'The insidious process of paralyzing a population’s psychic confidence, self-respect, and culture first, so they surrender their economic resources without resistance.',
    sarkarExactDefinition: 'Psycho-economic exploitation is the most dangerous form of exploitation. First, the exploiters inject an inferiority complex into the minds of the exploited people through education, media, and religion, convincing them that their own language, culture, and traditions are backward. Once the collective mind is psychologically enslaved, the exploiters effortlessly loot their natural resources and labor with the active collaboration of the victims.',
    canonicalSource: 'Human Society Part 1 & Prout in a Nutshell Part 7',
    semanticAxioms: [
      'Physical exploitation can be sustained only when the victim’s psychological resistance has been broken.',
      'Cultural self-contempt is the greatest victory of imperialist capitalism.',
      'Liberation requires a dual revolution: psycho-cultural decolonization coupled with physical restructuring of the economy.'
    ],
    governanceImplication: 'Anti-trust regulations targeting media conglomerates, psychological marketing algorithms, and neo-colonial educational curricula that promote consumerism and self-hate.',
    comparisons: [
      {
        framework: 'Gramsci’s Cultural Hegemony',
        perspective: 'The ruling capitalist class maintains power not merely by force (police/army), but by manufacturing cultural consent through civil society institutions.',
        sarkarDivergence: 'Sarkar confirms Gramsci’s insight and deepens it by revealing the bio-psychological mechanism (inferiority complexes and glandular paralysis) and showing how this operates globally between imperial metropoles and colonies.',
        keyContrastPoint: 'Sociological cultural consent vs. Deep bio-psychological paralysis and economic drain.'
      },
      {
        framework: 'Classical Marxist Economic Base/Superstructure',
        perspective: 'The economic base unilaterally determines the cultural/ideological superstructure; change the base, and ideology follows.',
        sarkarDivergence: 'Sarkar demonstrates that psychological exploitation is often the primary driver that enables the economic base to be captured in the first place; psychic warfare cannot be treated as a mere secondary superstructure.',
        keyContrastPoint: 'Secondary ideological reflection vs. Primary psycho-cultural weapon of conquest.'
      },
      {
        framework: 'Frantz Fanon’s "Black Skin, White Masks"',
        perspective: 'The colonized internalize the colonizer’s racist gaze, developing severe psychological neuroses and alienation.',
        sarkarDivergence: 'Sarkar and Fanon share profound common ground; Sarkar integrates this insight directly into PROUT’s comprehensive strategy for decentralized economic autonomy.',
        keyContrastPoint: 'Psychiatric critique of colonization vs. Integrated psycho-economic liberation doctrine.'
      }
    ],
    relatedTermIds: ['cultural-imperialism', 'decentralized-economy', 'awakened-conscience'],
    governanceLinks: [
      {
        domainId: 'education-and-culture',
        checklistId: 'cultural-sovereignty-audit',
        rationale: 'Legislation preventing foreign or corporate psychological capture of indigenous education and press.'
      }
    ],
    tags: ['Exploitation', 'Sociology', 'Imperialism', 'Psychology', 'PROUT Core']
  },
  {
    id: 'purchasing-capacity',
    term: 'Purchasing Capacity (Kraya Shamata)',
    sanskritOrBengali: 'ক্রয়ক্ষমতা (Kraya Shamata)',
    phonetic: 'Kruh-yuh Shuh-muh-tah',
    domain: 'prout',
    categoryLabel: 'Proutist Macro-Economics',
    shortDefinition: 'The real purchasing power of the common citizen, established by Sarkar as the true scientific metric of an economy’s health, rather than GDP or per capita income.',
    sarkarExactDefinition: 'The real standard of living does not depend on per capita income, but on purchasing capacity. Per capita income is a mathematical deception: if one billionaire earns billions while millions starve, the per capita income appears high. In PROUT, the primary indicator of economic progress is the continuous and uninterrupted increase in the purchasing capacity of the common people.',
    canonicalSource: 'Prout in a Nutshell Part 12 & Proutist Economics',
    semanticAxioms: [
      'Gross Domestic Product (GDP) hides severe poverty, extreme inequality, and resource plundering.',
      'Inflation erodes purchasing capacity; wage increases must outpace the actual cost of the basic necessity basket.',
      'Increasing purchasing power requires producing consumer goods locally to match local demand and eliminating middleman speculation.'
    ],
    governanceImplication: 'Monetary and fiscal policy must prioritize purchasing power stabilization and real basket parity over stock market indices or national GDP figures.',
    comparisons: [
      {
        framework: 'Orthodox Neoclassical Economics (GDP / Per Capita Income)',
        perspective: 'Measures economic growth via Gross Domestic Product (total monetary value of all goods and services produced) and average per capita figures.',
        sarkarDivergence: 'Sarkar exposes per capita income as a mathematical lie that conceals gross inequality. If an economy grows 10% but 90% goes to oligarchs, the common people suffer reduced purchasing capacity.',
        keyContrastPoint: 'Aggregate monetary output (GDP) vs. Actual median purchasing power for basic necessities.'
      },
      {
        framework: 'Keynesian Aggregate Demand Management',
        perspective: 'Uses deficit spending and interest rate adjustments to stimulate consumer demand and maintain employment.',
        sarkarDivergence: 'Keynesian stimulus often fuels asset bubbles, currency devaluation, and corporate bailouts. Sarkar demands direct structural alignment between local production of essentials and worker wages.',
        keyContrastPoint: 'Macro stimulus via debt and money printing vs. Decentralized physical production matched to real wages.'
      },
      {
        framework: 'Amartya Sen’s Capability Approach',
        perspective: 'Evaluates development through "freedoms to achieve" and capabilities (health, education, longevity) rather than pure income.',
        sarkarDivergence: 'Sarkar’s purchasing capacity concept anticipated Sen’s critique by decades, but provides an actionable systemic architecture (cooperatives, resource caps, block planning) that Sen’s liberal framework avoids.',
        keyContrastPoint: 'Philosophical capability metrics vs. Concrete constitutional economic machinery.'
      }
    ],
    relatedTermIds: ['minimum-requirements', 'atirikta', 'rational-distribution', 'economic-democracy'],
    governanceLinks: [
      {
        domainId: 'economic-democracy',
        checklistId: 'purchasing-power-parity',
        rationale: 'Mandatory indexing of minimum wage to the local real cost of the 5 basic requirements.'
      }
    ],
    tags: ['Economics', 'Purchasing Power', 'Macroeconomics', 'PROUT Core', 'Indicators']
  },
  {
    id: 'quadri-dimensional-economy',
    term: 'Quadri-Dimensional Economics',
    sanskritOrBengali: 'চতুর্মুখী অর্থনীতি (Caturmukhi Arthaniti)',
    phonetic: 'Kwah-dree Dih-men-shun-ul Ee-kuh-nom-iks',
    domain: 'prout',
    categoryLabel: 'Proutist Economic Architecture',
    shortDefinition: 'Sarkar’s comprehensive four-tier economic model integrating: People’s Economy, Psycho-Economy, Commercial Economy, and General Economy.',
    sarkarExactDefinition: 'Economic science has historically remained one-sided, focusing only on commercial profits. Proutist economics is four-dimensional: (1) People’s Economy: dealing with the production and distribution of minimum requirements; (2) Psycho-Economy: eradicating psychological exploitation and sublimating crude tendencies; (3) Commercial Economy: ensuring efficiency and non-exploitative distribution; (4) General Economy: macroeconomic planning and structural coordination.',
    canonicalSource: 'Quadridimensional Economics (1986)',
    semanticAxioms: [
      'An economy that produces luxury cars while citizens lack clean drinking water is suffering from dimensional collapse.',
      'Psycho-economy prevents corporations from manufacturing false consumer appetites that waste resources and degrade human consciousness.',
      'Commercial profit must never be generated by compromising the People’s Economy.'
    ],
    governanceImplication: 'Economic planning ministries must be bifurcated into autonomous commissions for each of the four dimensions to prevent commercial interests from cannibalizing people’s basic sustenance.',
    comparisons: [
      {
        framework: 'Classical & Neoliberal Economics',
        perspective: 'Single-dimensional commercial focus: supply, demand, price mechanism, and capital returns dictate resource allocation.',
        sarkarDivergence: 'Sarkar proves commercial economics alone leads to predatory destruction of ecosystems and moral decay. People’s economy must sit supreme above commercial transactions.',
        keyContrastPoint: 'Single-dimensional commercial profit vs. Integrated four-dimensional holistic welfare.'
      },
      {
        framework: 'Ecological Economics (Herman Daly / Kate Raworth)',
        perspective: 'Doughnut Economics: balancing social foundation (human needs) within planetary ecological ceilings.',
        sarkarDivergence: 'Raworth addresses social and ecological boundaries, but omits the Psycho-Economic dimension—the psychological and bio-spiritual engineering needed to emancipate minds from consumerism.',
        keyContrastPoint: 'Socio-ecological biophysical limits vs. Four-dimensional integration including psycho-spiritual health.'
      },
      {
        framework: 'Marxist Political Economy',
        perspective: 'Analyzes class relations of production, surplus value extraction, and labor exploitation.',
        sarkarDivergence: 'Marx concentrated on the physical relations of production, failing to develop a psycho-economy or a decentralized commercial mechanism, resulting in dysfunctional state distribution.',
        keyContrastPoint: 'Materialist labor theory of value vs. Quadri-dimensional systemic planning.'
      }
    ],
    relatedTermIds: ['five-fundamental-principles', 'decentralized-economy', 'purchasing-capacity'],
    governanceLinks: [
      {
        domainId: 'quadri-dimensional-economy',
        checklistId: 'four-tier-planning-division',
        rationale: 'Structuring government economic ministries into separate People’s, Psycho, Commercial, and General bureaus.'
      }
    ],
    tags: ['Economics', 'Quadri-Dimensional', 'PROUT Core', 'Holistic Planning', 'System Design']
  },
  {
    id: 'rational-distribution',
    term: 'Rational Distribution & Wealth Capping',
    sanskritOrBengali: 'যৌক্তিক বণ্টন (Yauktika Vantana)',
    phonetic: 'Rash-un-ul Dis-trih-byoo-shun',
    domain: 'prout',
    categoryLabel: 'Proutist Distributive Justice',
    shortDefinition: 'The dynamic limitation of individual wealth accumulation coupled with merit-based incentive distribution, preventing both oligarchy and demoralizing uniform leveling.',
    sarkarExactDefinition: 'Absolute equality in the physical world is an impossibility; it goes against the law of nature. Yet, unconstrained accumulation is a crime against humanity. PROUT advocates rational distribution: first, guarantee the basic necessities to all; second, provide surplus incentives to meritorious and hardworking contributors; third, set a dynamic ceiling on maximum individual wealth accumulation that scales with collective societal productivity.',
    canonicalSource: 'Idea and Ideology (1959) & Prout in a Nutshell Part 2',
    semanticAxioms: [
      'Unconstrained wealth hoarding by a few deprives millions of the basic means of physical survival.',
      'Mechanical egalitarianism destroys human initiative and reduces all to a uniform mediocrity.',
      'The ratio between the minimum guaranteed livelihood and the maximum permissible surplus must be narrowed as collective wealth grows.'
    ],
    governanceImplication: 'Statutory maximum income and wealth ratio (e.g. 1:10 or dynamic formula) enforced through progressive taxation and cooperative dividend caps.',
    comparisons: [
      {
        framework: 'Libertarian Anarcho-Capitalism (Nozick / Rand)',
        perspective: 'Any forced redistribution or wealth ceiling violates self-ownership and property rights; billionaires have the right to hoard infinite wealth if acquired legally.',
        sarkarDivergence: 'Sarkar characterizes unbridled wealth hoarding as societal cannibalism. Earth’s resources are finite; hoarded wealth directly starves living beings.',
        keyContrastPoint: 'Sacrosanct infinite accumulation vs. Moral and physical imperative of dynamic wealth ceilings.'
      },
      {
        framework: 'Strict Marxist Wage Leveling (War Communism)',
        perspective: 'Aims to eliminate wage differentials and enforce uniform compensation regardless of individual merit or productivity.',
        sarkarDivergence: 'Sarkar criticizes this as unscientific and psychologically unviable: when hard workers and shirkers receive the exact same reward, productivity collapses.',
        keyContrastPoint: 'Uniform mechanical leveling vs. Dynamic merit incentives within bounded ceilings.'
      },
      {
        framework: 'Rawlsian Difference Principle',
        perspective: 'Inequalities are permissible only if they benefit the least-advantaged members of society.',
        sarkarDivergence: 'Rawls provides a philosophical justification but provides no ceiling on wealth, allowing extreme disparities to persist. Sarkar establishes concrete wealth caps and cooperative ownership.',
        keyContrastPoint: 'Abstract difference principle vs. Concrete maximum ratio ceilings and guaranteed physical necessities.'
      }
    ],
    relatedTermIds: ['atirikta', 'minimum-requirements', 'five-fundamental-principles', 'economic-democracy'],
    governanceLinks: [
      {
        domainId: 'economic-democracy',
        checklistId: 'purchasing-power-parity',
        rationale: 'Legislative caps on executive-to-worker compensation ratios within all enterprises.'
      }
    ],
    tags: ['Wealth Cap', 'Distribution', 'Inequality', 'PROUT Core', 'Incentives']
  },
  {
    id: 'sadvipra',
    term: 'Sadvipra (Integrated Moral Executive)',
    sanskritOrBengali: 'সদ্বিপ্র (Sadvipra)',
    phonetic: 'Sud-vee-pruh',
    domain: 'governance',
    categoryLabel: 'Proutist Political Philosophy',
    shortDefinition: 'A morally integrated, spiritually elevated individual possessing the virtues of all four social classes who steers the social cycle to prevent class exploitation.',
    sarkarExactDefinition: 'A Sadvipra is one who is established in morality (Yama and Niyama) and whose life is dedicated to the selfless service of the universe. A Sadvipra is a Shudra in service, a Ksattriya in bravery, a Vipra in intellect, and a Vaeshya in administrative and economic efficiency. When any ruling class becomes exploitative, Sadvipras unite and wage revolutionary struggle to rotate the social cycle into its next healthy phase.',
    canonicalSource: 'Idea and Ideology (1959) & To the Sadvipras',
    semanticAxioms: [
      'A true leader cannot be manufactured by political advertising or purchased by corporate funding.',
      'Sadvipras do not seek political office for power; they serve as constitutional moral trustees of society.',
      'Without Sadvipras at the helm, the social cycle degenerates into cycles of violent military or capitalist exploitation.'
    ],
    governanceImplication: 'Creation of an autonomous Supreme Judicial and Moral Board composed of vetted Sadvipras with constitutional powers to impeach corrupt officials and strike down exploitative laws.',
    comparisons: [
      {
        framework: 'Max Weber’s "Charismatic Leader"',
        perspective: 'Leadership legitimized by exceptional personal sanctity, heroism, or exemplary character, often destabilizing and short-lived.',
        sarkarDivergence: 'Weber’s charismatic leader is often a demagogue (like fascist dictators). A Sadvipra must be anchored in universal moral principles (Yama/Niyama) and spiritual discipline, immune to egotistical self-worship.',
        keyContrastPoint: 'Unstable, potentially tyrannical charisma vs. Systemically disciplined, humble moral service.'
      },
      {
        framework: 'Nietzsche’s Übermensch (Superman)',
        perspective: 'The solitary superior individual who creates their own values and transcends herd morality through will to power.',
        sarkarDivergence: 'Nietzsche’s Übermensch is elitist, indifferent to the suffering of the weak, and rejects universal morality. Sadvipras are the champions of the oppressed and embody universal cosmic love.',
        keyContrastPoint: 'Aristocratic self-aggrandizing superman vs. Compassionate universal moral servant-sentinel.'
      },
      {
        framework: 'Confucian Junzi (The Exemplary Person)',
        perspective: 'The cultivated gentleman who embodies benevolence (Ren) and ritual propriety (Li) to maintain harmonious state hierarchy.',
        sarkarDivergence: 'The Junzi historically upheld imperial authority, patriarchy, and status-quo hierarchy. Sadvipras are bold revolutionaries who dismantle oppressive state structures when they exploit the people.',
        keyContrastPoint: 'Conservative court advisor upholding hierarchy vs. Revolutionary moral catalyst protecting the weak.'
      }
    ],
    relatedTermIds: ['ideal-leadership', 'samaja-cakra', 'awakened-conscience'],
    governanceLinks: [
      {
        domainId: 'sadvipra-oversight',
        checklistId: 'ethical-vetting-framework',
        rationale: 'Criteria for identifying, vetting, and maintaining independence of Sadvipra constitutional councils.'
      }
    ],
    tags: ['Sadvipra', 'Leadership', 'Ethics', 'Social Cycle', 'Revolution', 'PROUT Core']
  },
  {
    id: 'samaja-cakra',
    term: 'Samaja Cakra (The Social Cycle)',
    sanskritOrBengali: 'সমাজ চক্র (Samaja Cakra)',
    phonetic: 'Suh-mahj Chuh-kruh',
    domain: 'prout',
    categoryLabel: 'Proutist Historical Sociology',
    shortDefinition: 'Sarkar’s law of historical evolution: society perpetually rotates through four psychological epochs: Shudra (worker), Ksattriya (warrior), Vipra (intellectual), and Vaeshya (capitalist).',
    sarkarExactDefinition: 'Human society moves in a continuous cyclic order: the Shudra era (anarchy/survival) is followed by the Ksattriya era (martial rule), followed by the Vipra era (intellectual and religious domination), followed by the Vaeshya era (capitalist and commercial exploitation). At the end of the Vaeshya era, capitalist exploitation becomes unbearable, leading to a Shudra revolution (worker rebellion) that resets the cycle. The duty of Sadvipras is to shorten the exploitative tail of each era and accelerate positive transition without bloody collapses.',
    canonicalSource: 'Human Society Part 2 (1967)',
    semanticAxioms: [
      'Each psychological collective mindset (varna) possesses both an evolutionary constructive phase and a degenerated exploitative phase.',
      'Capitalism (Vaeshya era) represents the most degenerate phase, where human life, art, culture, and nature are commodified for monetary accumulation.',
      'History does not end with communism or liberal democracy; it continues its relentless rotation through the four collective mindsets.'
    ],
    governanceImplication: 'Policy design must anticipate which collective mentality is currently in ascendance to prevent institutional capture by that class’s degenerated phase.',
    comparisons: [
      {
        framework: 'Marxist Historical Materialism',
        perspective: 'History is driven by class struggle between economic owners and workers, terminating in a final stateless, classless communist utopia.',
        sarkarDivergence: 'Marx posits a linear end to history. Sarkar shows history is cyclic and psychological: collective mindsets rotate eternally. Communism cannot prevent the rise of a new warrior or intellectual ruling caste.',
        keyContrastPoint: 'Linear end of history via classless state vs. Eternal cyclic rotation of four psychic archetypes.'
      },
      {
        framework: 'Fukuyama’s "End of History"',
        perspective: 'Western liberal democracy and market capitalism constitute the final, definitive form of human socio-political governance.',
        sarkarDivergence: 'Sarkar anticipated the profound collapse of the late Vaeshya (capitalist) era into oligarchy, environmental destruction, and social alienation, proving history cannot freeze in capitalism.',
        keyContrastPoint: 'Permanent capitalist triumph vs. Terminal crisis of late Vaeshya exploitation.'
      },
      {
        framework: 'Oswald Spengler’s "Decline of the West"',
        perspective: 'Civilizations are biological organisms that undergo inevitable cycles of birth, youth, maturity, decay, and death.',
        sarkarDivergence: 'Spengler is fatalistic and pessimistic. Sarkar proves that conscious human intervention through Sadvipras can prevent civilizational death and guide the cycle into renewed flourishing.',
        keyContrastPoint: 'Fatalistic civilizational extinction vs. Proactive moral steering of the social cycle.'
      }
    ],
    relatedTermIds: ['sadvipra', 'ideal-leadership', 'five-fundamental-principles'],
    governanceLinks: [
      {
        domainId: 'sadvipra-oversight',
        checklistId: 'social-cycle-transition-audit',
        rationale: 'Assessing societal indicators to diagnose late-stage capitalist breakdown and manage peaceful transition.'
      }
    ],
    tags: ['Social Cycle', 'History', 'Sociology', 'Varna', 'PROUT Core', 'Class Struggle']
  },
  {
    id: 'socio-sentiment',
    term: 'Socio-Sentiment (Tribal & Group Chauvinism)',
    sanskritOrBengali: 'সমাজ-ভাবপ্রবণতা (Samaja-bhavapravanata)',
    phonetic: 'Soh-shee-oh Sen-tih-ment',
    domain: 'neohumanism',
    categoryLabel: 'Neohumanist Social Pathology',
    shortDefinition: 'An irrational emotional attachment to a specific caste, race, religion, tribe, or class that justifies the exploitation of other social groups and non-human beings.',
    sarkarExactDefinition: 'Socio-sentiment is the attachment of human sentiment to a particular social group—caste, tribe, linguistic community, religious denomination, or social class. While larger than individual selfishness, it is fundamentally exclusionary: it divides humanity into "us" versus "them". Socio-sentiment leads to communal riots, racial persecution, caste apartheid, and the ruthless exploitation of other societies and species.',
    canonicalSource: 'The Liberation of Intellect: Neohumanism (1982)',
    semanticAxioms: [
      'Socio-sentiment is more dangerous than geo-sentiment because it crosses geographic boundaries and poisons global human solidarity.',
      'It creates artificial moral dualism: virtues applied to one’s own tribe become permissible crimes when inflicted on outside groups.',
      'Socio-sentiment can be dismantled only through universalist education, inter-group cultural integration, and Neohumanist cosmic devotion.'
    ],
    governanceImplication: 'Anti-discrimination laws with criminal penalties for hate speech, elimination of caste/religious preferences in civil administration, and universal secular human rights education.',
    comparisons: [
      {
        framework: 'Tribalism & Identity Politics',
        perspective: 'Organizing political mobilization and moral status around specific group identities (ethnic, racial, religious, or gender affinity).',
        sarkarDivergence: 'While acknowledging historic oppression, Sarkar warns that enshrining group identity as supreme perpetuates division and resentment. True liberation requires advancing from group grievance to universal Neohumanist solidarity.',
        keyContrastPoint: 'Fragmented identity politics vs. Universal Neohumanist familyhood.'
      },
      {
        framework: 'Social Dominance Theory (Sidanius & Pratto)',
        perspective: 'Human societies naturally organize into group-based social hierarchies supported by legitimizing myths (racism, casteism).',
        sarkarDivergence: 'Sidanius treats social dominance as an evolutionary adaptation. Sarkar exposes it as a pathological socio-sentiment that can be eradicated through spiritual awakening and moral education.',
        keyContrastPoint: 'Evolutionary psychological inevitability vs. Curable socio-pathological sentiment.'
      },
      {
        framework: 'Marxist Proletarian Class Chauvinism',
        perspective: 'Elevating the working class as the sole virtuous historical agent and demonizing all non-proletarians as enemies of history.',
        sarkarDivergence: 'Sarkar warns that class chauvinism is also a socio-sentiment; once victorious, it breeds terror and revenge. Neohumanism seeks the elevation of all human souls into universal consciousness.',
        keyContrastPoint: 'Vindictive class hatred vs. Benevolent transformation of all beings.'
      }
    ],
    relatedTermIds: ['geo-sentiment', 'neohumanism', 'awakened-conscience', 'devotional-sentiment'],
    governanceLinks: [
      {
        domainId: 'neohumanist-ethics',
        checklistId: 'anti-sentiment-screening',
        rationale: 'Reviewing public policies and textbooks to eradicate communal, caste, and xenophobic biases.'
      }
    ],
    tags: ['Neohumanism', 'Discrimination', 'Tribalism', 'Communalism', 'Human Rights']
  },
  {
    id: 'three-tiered-industry',
    term: 'Three-Tiered Industrial Structure',
    sanskritOrBengali: 'ত্রিস্তরীয় শিল্প কাঠামো (Tri-stariya Shilpa Kathamo)',
    phonetic: 'Three Teerd In-dus-tree',
    domain: 'prout',
    categoryLabel: 'Proutist Production Model',
    shortDefinition: 'PROUT’s structural division of industry: Key heavy industries run as non-profit public utilities, medium industries run as cooperatives, and small non-essential businesses run privately.',
    sarkarExactDefinition: 'To balance economic efficiency, prevent monopolies, and ensure workers’ dignity, industry must be organized into three distinct tiers: (1) Key Industries: Heavy infrastructure, energy, defense, railways, and basic raw materials must be managed by local autonomous public bodies on a "no-profit, no-loss" basis; (2) Cooperative Industries: The vast majority of production and consumer goods enterprises must be managed as worker-producer cooperatives; (3) Small-Scale Private Enterprise: Small businesses, artisans, individual restaurants, and family cottage industries may operate privately to foster innovation, subject to labor and wage standards.',
    canonicalSource: 'Prout in a Nutshell Part 1 & Talks on Prout',
    semanticAxioms: [
      'Key industries essential to public life must never be privatized for speculative shareholder profit.',
      'Cooperatives form the democratic backbone of the economy, ensuring workers own their tools and share collective surpluses.',
      'Small private enterprise prevents bureaucratic stagnation in consumer niches where personal creativity flourishes.'
    ],
    governanceImplication: 'Monopoly busting, complete de-privatization of healthcare/water/energy grids, and legal charters establishing 1-worker-1-vote cooperative ownership.',
    comparisons: [
      {
        framework: 'Laissez-Faire Capitalism',
        perspective: 'All industries, including electricity, water, railways, healthcare, and prisons, should be privatized and traded on the stock exchange.',
        sarkarDivergence: 'Sarkar proves this privatizes public wealth, creates exploitative monopolies, and extracts predatory rents from human survival necessities.',
        keyContrastPoint: 'Total privatization of natural monopolies vs. Public key utilities & worker cooperatives.'
      },
      {
        framework: 'State Monopolistic Socialism (Soviet Model)',
        perspective: 'The central state owns and operates 100% of all enterprises, down to small barber shops, corner groceries, and bakeries.',
        sarkarDivergence: 'Sarkar shows total state nationalization creates bureaucratic inefficiency, kills personal initiative, and produces severe shortages in daily consumer goods. Small niches belong to private artisans.',
        keyContrastPoint: 'Total state ownership of every enterprise vs. Three balanced tiers matching scale and function.'
      },
      {
        framework: 'Mixed Economy (Keynesian / Post-War Britain)',
        perspective: 'State-owned nationalized corporations coexisting with private capitalist corporations.',
        sarkarDivergence: 'The British post-war model allowed private corporations to dominate the consumer sector and eventually lobby to re-privatize public assets. PROUT makes worker *cooperatives*, not capitalist firms, the primary dominant tier.',
        keyContrastPoint: 'State capitalism plus private corporate oligopoly vs. Public utilities anchored to dominant worker cooperatives.'
      }
    ],
    relatedTermIds: ['economic-democracy', 'decentralized-economy', 'block-level-planning'],
    governanceLinks: [
      {
        domainId: 'quadri-dimensional-economy',
        checklistId: 'industrial-tiering-charter',
        rationale: 'Auditing market sectors to classify them strictly into Tier 1 (Public), Tier 2 (Cooperative), or Tier 3 (Small Private).'
      }
    ],
    tags: ['Industry', 'Cooperatives', 'Public Utilities', 'PROUT Core', 'Economic Structure']
  },
  {
    id: 'universalism',
    term: 'Universalism (Cosmopolitan World Government)',
    sanskritOrBengali: 'সার্বজনীনতাবাদ ও বিশ্ব সরকার (Sarvajaninatavada)',
    phonetic: 'Yoo-nih-ver-sal-ih-zum',
    domain: 'governance',
    categoryLabel: 'Proutist Global Politics',
    shortDefinition: 'The vision of an integrated planetary federation with a unified World Constitution, common global lingua franca, and progressive disarmament under moral governance.',
    sarkarExactDefinition: 'Humanity is one and indivisible. Just as individual members form a family and families form a society, all human societies must unite into a single world society. A World Government must be established through gradual stages: first, a World Federation with legislative powers over global disarmament and environmental protection, evolving into a unified constitutional body guaranteeing fundamental rights to every inhabitant on Earth.',
    canonicalSource: 'Idea and Ideology (1959) & To the Sadvipras',
    semanticAxioms: [
      'Planetary problems—climate change, nuclear proliferation, oceanic degradation, global financial speculation—cannot be solved by fragmented nation-states.',
      'World Government must be decentralized economically (through socio-economic units) while united politically to protect human rights.',
      'Cultural and linguistic diversity must be celebrated and safeguarded under the unified universal banner.'
    ],
    governanceImplication: 'Transitioning the United Nations into a democratic World Parliament with an elected lower house and an ethically vetted moral upper house, eliminating the five-member veto oligopoly.',
    comparisons: [
      {
        framework: 'United Nations / Modern Inter-State Diplomacy',
        perspective: 'Voluntary assembly of sovereign states dominated by the veto power of 5 nuclear powers in the UN Security Council.',
        sarkarDivergence: 'Sarkar criticizes the UN as an impotent diplomatic talk-shop where imperialist powers maintain hegemony. World governance requires genuine legislative and judicial authority without imperialist vetoes.',
        keyContrastPoint: 'Veto-paralyzed diplomatic treaty system vs. Enforceable democratic World Federal Constitution.'
      },
      {
        framework: 'Corporate Globalism (Davos / WTO / IMF)',
        perspective: 'Economic integration driven by multinational corporate interests, structural adjustment programs, and free movement of capital.',
        sarkarDivergence: 'Corporate globalism concentrates wealth in Western metropoles and impoverishes the Global South. Sarkar demands decentralized economic self-reliance paired with political and cultural universalism.',
        keyContrastPoint: 'Corporate-driven predatory globalization vs. Benevolent human-centered universal federation.'
      },
      {
        framework: 'Imperial Hegemony (Pax Americana / Pax Britannica)',
        perspective: 'A single superpower acts as global hegemon and policeman, maintaining world order through military primacy.',
        sarkarDivergence: 'Hegemony is disguised geo-sentiment and imperial exploitation. Universalism rejects all national hegemony in favor of collective planetary governance by moral leaders (Sadvipras).',
        keyContrastPoint: 'Superpower imperial policing vs. Multi-regional democratic world federation.'
      }
    ],
    relatedTermIds: ['geo-sentiment', 'neohumanism', 'cosmic-inheritance', 'ideal-leadership'],
    governanceLinks: [
      {
        domainId: 'sadvipra-oversight',
        checklistId: 'world-federation-protocol',
        rationale: 'Step-by-step roadmap for dismantling national military borders in favor of global peacekeepers.'
      }
    ],
    tags: ['World Government', 'Universalism', 'Peace', 'Global Federation', 'Governance']
  }
];
