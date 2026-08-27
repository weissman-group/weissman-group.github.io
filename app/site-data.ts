export type ResearchArea = {
  slug: string;
  number: string;
  title: string;
  question: string;
  summary: string;
  equation: string;
  topics: string[];
  selectedTitles: string[];
};

export type Publication = {
  title: string;
  authors: string;
  venue: string;
  year: number;
  topic: "Theory" | "Learning" | "Systems" | "Science";
  href: string;
  code?: string;
  note?: string;
};

export type Person = {
  name: string;
  detail?: string;
  href?: string;
};

export const researchAreas: ResearchArea[] = [
  {
    slug: "universal-information",
    number: "I",
    title: "Universal information processing",
    question: "What can be learned or compressed without knowing the source?",
    summary:
      "We develop universal schemes that adapt to individual sequences, with guarantees that connect probability assignment, compression, prediction, filtering, and generation.",
    equation: "ℓ(xⁿ) ≈ −log Q(xⁿ)",
    topics: ["Lempel–Ziv", "sequential probability", "filtering"],
    selectedTitles: [
      "A Family of LZ78-based Universal Sequential Probability Assignments",
      "The LZ78 Source",
      "Universal Discrete Filtering With Lookahead or Delay",
    ],
  },
  {
    slug: "information-computation",
    number: "II",
    title: "Information × computation",
    question: "Which bits matter when time, memory, or compute is scarce?",
    summary:
      "We study principled trade-offs between representation, accuracy, latency, and computational cost—from nonlinear transforms and model compression to real-time decision-making.",
    equation: "utility = f(bits, time, compute)",
    topics: ["rate–distortion", "efficient AI", "latency"],
    selectedTitles: [
      "Information-computation trade-offs in non-linear transforms",
      "Win Fast or Lose Slow",
      "GaussianVision",
    ],
  },
  {
    slug: "learning-generation",
    number: "III",
    title: "Learning and generation",
    question: "Can information-theoretic structure make generative models simpler?",
    summary:
      "We bring exact likelihoods, discrete processes, and universal compression into modern learning systems, seeking models that are both theoretically grounded and practically lightweight.",
    equation: "I(X;Y) = H(X) − H(X|Y)",
    topics: ["diffusion", "symbolic music", "multimodal learning"],
    selectedTitles: [
      "ItDPDM: Information-Theoretic Discrete Poisson Diffusion Model",
      "LZMidi: Compression-Based Symbolic Music Generation",
      "GaussianVision",
    ],
  },
  {
    slug: "science",
    number: "IV",
    title: "Information in science",
    question: "How do we keep the signal when scientific data overwhelms the channel?",
    summary:
      "We apply information-theoretic ideas to genomics, neural interfaces, sensing, and other scientific settings where the data are large, structured, and expensive to move.",
    equation: "signal ≫ bandwidth",
    topics: ["genomics", "neuroscience", "sensing"],
    selectedTitles: [
      "Genomic Data Classification via Universal Compression",
      "A Framework for Compressive On-Chip Action Potential Recording",
    ],
  },
];

export const publications: Publication[] = [
  {
    title: "A Framework for Compressive On-Chip Action Potential Recording",
    authors:
      "Pumiao Yan, Dante G. Muratore, E. J. Chichilnisky, Boris Murmann, and Tsachy Weissman",
    venue: "IEEE Transactions on Biomedical Engineering 73(5)",
    year: 2026,
    topic: "Science",
    href: "https://doi.org/10.1109/TBME.2025.3615514",
    note: "Neural recording",
  },
  {
    title: "Universal Discrete Filtering With Lookahead or Delay",
    authors: "Pumiao Yan, Jiwon Jeong, Naomi Sagan, and Tsachy Weissman",
    venue: "IEEE Transactions on Information Theory 72(1)",
    year: 2026,
    topic: "Theory",
    href: "https://arxiv.org/abs/2501.10609",
    note: "Universal filtering",
  },
  {
    title: "The LZ78 Source",
    authors: "Naomi Sagan, Amir Dembo, Matthew Ho, and Tsachy Weissman",
    venue: "IEEE Transactions on Information Theory",
    year: 2026,
    topic: "Theory",
    href: "https://arxiv.org/abs/2503.10574",
    note: "Compression theory",
  },
  {
    title:
      "GaussianVision: Vision-Language Alignment from Compressed Image Representations using 2D Gaussian Splatting",
    authors: "Yasmine Omri, Connor Ding, Tsachy Weissman, and Thierry Tambe",
    venue: "CVPR · Highlight",
    year: 2026,
    topic: "Learning",
    href: "https://openaccess.thecvf.com/content/CVPR2026/html/Omri_GaussianVision_Vision-Language_Alignment_from_Compressed_Image_Representations_using_2D_Gaussian_CVPR_2026_paper.html",
    note: "Vision + compression",
  },
  {
    title: "An Information-Theoretic Perspective on LLM Tokenizers",
    authors:
      "Mete Erdogan, Abhiram Rao Gorle, Shubham Chandak, Mert Pilanci, and Tsachy Weissman",
    venue: "arXiv:2601.09039",
    year: 2026,
    topic: "Learning",
    href: "https://arxiv.org/abs/2601.09039",
    note: "Language models",
  },
  {
    title: "Information-computation trade-offs in non-linear transforms",
    authors:
      "Connor Ding, Abhiram Rao Gorle, Jiwon Jeong, Naomi Sagan, and Tsachy Weissman",
    venue: "arXiv:2506.15948",
    year: 2025,
    topic: "Systems",
    href: "https://arxiv.org/abs/2506.15948",
    note: "Representation efficiency",
  },
  {
    title: "ItDPDM: Information-Theoretic Discrete Poisson Diffusion Model",
    authors:
      "Sagnik Bhattacharya, Abhiram Gorle, Ahsan Bilal, Connor Ding, Amit Kumar Singh Yadav, and Tsachy Weissman",
    venue: "NeurIPS",
    year: 2025,
    topic: "Learning",
    href: "https://arxiv.org/abs/2505.05082",
    note: "Discrete generation",
  },
  {
    title: "Win Fast or Lose Slow: Balancing Speed and Accuracy in Latency-Sensitive Decisions of LLMs",
    authors:
      "Hao Kang, Qingru Zhang, Han Cai, Weiyuan Xu, Tushar Krishna, Yilun Du, and Tsachy Weissman",
    venue: "arXiv:2505.19481",
    year: 2025,
    topic: "Systems",
    href: "https://arxiv.org/abs/2505.19481",
    code: "https://github.com/haokang-timmy/Win-Fast-or-Lose-Slow",
    note: "Latency-aware AI",
  },
  {
    title: "LZMidi: Compression-Based Symbolic Music Generation",
    authors:
      "Connor Ding, Abhiram Gorle, Sagnik Bhattacharya, Divija Hasteer, Naomi Sagan, and Tsachy Weissman",
    venue: "arXiv:2503.17654",
    year: 2025,
    topic: "Learning",
    href: "https://arxiv.org/abs/2503.17654",
    note: "Universal generation",
  },
  {
    title: "Genomic Data Classification via Universal Compression",
    authors:
      "Yasmine Omri, Naomi Sagan, Eugene Min, Heewoong Choi, Taesup Moon, and Tsachy Weissman",
    venue: "ISMB/ECCB",
    year: 2025,
    topic: "Science",
    href: "https://doi.org/10.21203/rs.3.rs-6363017/v2",
    note: "Genomics",
  },
  {
    title: "A Family of LZ78-based Universal Sequential Probability Assignments",
    authors: "Naomi Sagan and Tsachy Weissman",
    venue: "IEEE Transactions on Information Theory 72(4)",
    year: 2026,
    topic: "Theory",
    href: "https://arxiv.org/abs/2410.06589",
    note: "Universal probability",
  },
  {
    title: "Mutual Information Upper Bounds for Uniform Inputs Through the Deletion Channel",
    authors: "Federico Pernice, Berivan Isik, and Tsachy Weissman",
    venue: "IEEE Transactions on Information Theory 70(7)",
    year: 2024,
    topic: "Theory",
    href: "https://doi.org/10.1109/TIT.2024.3389925",
    note: "Channel theory",
  },
];

publications.sort((a, b) => b.year - a.year);

export const people = {
  phd: [
    { name: "Aayush Rajesh", href: "https://aayush2003.github.io/" },
    { name: "Naomi Isabella Sagan" },
    { name: "Jiwon Jeong", detail: "Co-advised" },
    { name: "Lara Arikan", detail: "Doctoral-program advisee" },
    {
      name: "Connor Ding",
      detail: "Doctoral-program advisee",
      href: "https://www.czsding.com/",
    },
    { name: "Yiqi Jiang", detail: "Doctoral-program advisee" },
    { name: "Sahasrajit Sarmasarkar", detail: "Doctoral-program advisee" },
  ] satisfies Person[],
  affiliates: [
    { name: "Yasmine Omri", detail: "Tambe Lab collaborator" },
    { name: "Sagnik Bhattacharya", detail: "Cioffi Group collaborator" },
    { name: "Abhiram Rao Gorle", detail: "Cioffi Group collaborator" },
  ] satisfies Person[],
  students: [
    { name: "Divija Hasteer" },
    { name: "Atindra Jha", detail: "Undergraduate researcher" },
  ] satisfies Person[],
  visitors: [
    { name: "Jaeseok Byun", detail: "Seoul National University" },
    { name: "Hao Kang", detail: "Georgia Institute of Technology" },
    { name: "Szymon Kobus", detail: "Imperial College London" },
  ] satisfies Person[],
};

export const alumniHighlights: Person[] = [
  { name: "Pumiao Yan" },
  { name: "Berivan Isik" },
  { name: "Shubham Chandak" },
  { name: "Yanjun Han" },
  { name: "Jiantao Jiao" },
  { name: "Thomas Courtade" },
  { name: "Kartik Venkat" },
  { name: "Himanshu Asnani" },
  { name: "Taesup Moon" },
  { name: "Shirin Jalali" },
  { name: "Haim Permuter" },
];
