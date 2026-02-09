export const projects = [
  {
    id: "01",
    title: "Search Engine News",
    category: "INFORMATION RETRIEVAL",
    filterCategory: "ml", // Kategori besar untuk tab filter
    image:
      "https://res.cloudinary.com/ddtmmrvk3/image/upload/v1770519585/opwnpoirsbylz1kl1t8l_zevlyh.webp",
    description:
      "Similarity-based search engine for effective information retrieval. Uses similarity algorithms to deliver relevant search results matching user queries. Built with Python and Streamlit for an interactive and user-friendly interface.",
    tech: ["Python", "Streamlit", "NLP", "Scikit-Learn"],
    client: "Academic Project",
    year: 2025,
    challenge:
      "Implementing accurate similarity algorithms to deliver the most relevant search results for user queries.",
    featured: true,
    slug: "search-engine-similarity",
    links: {
      live: "https://searchengineberbasissimilarity.streamlit.app/",
      github: "https://github.com/Aryhnr/SearchEngineBerbasisSimilarity",
    },
  },
  {
    id: "02",
    title: "Brain Tumor AI",
    category: "MACHINE LEARNING",
    filterCategory: "ml",
    image:
      "https://res.cloudinary.com/ddtmmrvk3/image/upload/v1770519587/ou1seklqwhhbqvtj68ib_dyhshf.webp",
    description:
      "Brain tumor classification system using deep learning techniques. Implements medical image preprocessing with auto-cropping, ensemble CNN using ResNet50 and DenseNet121 architectures, and model evaluation based on accuracy metrics for medical diagnosis.",
    tech: ["TensorFlow", "Keras", "Python", "Computer Vision"],
    client: "Final Project",
    year: 2025,
    challenge:
      "Achieving high classification accuracy on medical images with limited dataset using ensemble models.",
    featured: true,
    slug: "brain-tumor-classification",
    links: {
      live: "https://aryhnr-deteksi-tumor-otak-mri.hf.space/",
      github: "",
    },
  },
  {
    id: "03",
    title: "SBFM Radio Streaming",
    category: "MEDIA PLATFORM",
    filterCategory: "web",
    image:
      "https://res.cloudinary.com/ddtmmrvk3/image/upload/v1770519583/xykglckib11mspj6mc6w_h7epce.webp",
    description:
      "Online radio streaming platform with real-time live audio player. Features admin dashboard for content and broadcast schedule management, plus news module with CRUD functionality and pagination.",
    tech: ["Laravel", "JavaScript", "Icecast", "Bootstrap"],
    client: "SBFM Radio / Diskominfo Bangkalan",
    year: 2024,
    challenge:
      "Implementing stable live audio streaming with low latency accessible to multiple listeners simultaneously.",
    featured: false,
    slug: "radio-streaming",
    links: {
      live: "https://sbfm.bangkalankab.go.id/",
      github: "",
    },
  },
  {
    id: "04",
    title: "Point Of Sale",
    category: "BUSINESS SYSTEM",
    filterCategory: "web",
    image:
      "https://res.cloudinary.com/ddtmmrvk3/image/upload/v1770519583/eflkrbgfxolu5zpxb4fb_sykfmu.webp",
    description:
      "Point of Sale system for managing retail business operations. Features include structured product data management, automated sales processing, and performance reports.",
    tech: ["Laravel", "Tailwind CSS", "MySQL", "JavaScript"],
    client: "Personal Project",
    year: 2025,
    challenge:
      "Developing a fast and accurate cashier system with a user-friendly interface for cashiers.",
    featured: false,
    slug: "point-of-sale",
    links: {
      live: "",
      github: "",
    },
  },
  {
    id: "05",
    title: "Village Website",
    category: "PUBLIC SERVICE",
    filterCategory: "web",
    image:
      "https://res.cloudinary.com/ddtmmrvk3/image/upload/v1770519582/mizlmpbstg0o9v1vcldj_nbfbvp.webp",
    description:
      "Comprehensive village information portal providing news, public complaint system, development tracking, and event schedules. Features admin dashboard for content management and public transparency.",
    tech: ["Laravel", "Bootstrap", "MySQL", "JavaScript"],
    client: "Batah Timur Village - KKN",
    year: 2024,
    challenge:
      "Building an accessible platform for all community members with complaint features and village information transparency.",
    featured: true,
    slug: "village-website",
    links: {
      live: "https://batahtimurmakmur.my.id/",
      github: "",
    },
  },
  {
    id: "06",
    title: "Company Profile",
    category: "WEBSITE",
    filterCategory: "web",
    image:
      "https://res.cloudinary.com/ddtmmrvk3/image/upload/v1770519588/z4vx1jcew8cnjlxvddfo_vkgvxu.webp",
    description:
      "Company profile website for CV Multi Karya Rahayu. Showcasing services and project portfolio with a responsive and modern interface using Alpine.js.",
    tech: ["Laravel", "Tailwind CSS", "Alpine.js", "Framer Motion"],
    client: "CV Multi Karya Rahayu",
    year: 2026,
    challenge:
      "Building a website that represents the professionalism of a fabrication company with modern design.",
    featured: true,
    slug: "company-profile-mkr",
    links: {
      live: "https://cvmultikaryarahayu.co.id/",
      github: "",
    },
  },
  {
    id: "07",
    title: "E-Commerce Website",
    category: "WEB APPLICATION",
    filterCategory: "web",
    image:
      "https://res.cloudinary.com/ddtmmrvk3/image/upload/v1770519583/hz9ugi61yzx715mhxf1z_wxipzp.webp",
    description:
      "Laravel-based e-commerce system with React frontend using Inertia.js. Features include user authentication, account management, and checkout process.",
    tech: ["React", "Inertia.js", "Laravel", "Tailwind CSS"],
    client: "Personal Project",
    year: 2026,
    challenge:
      "Integrating Laravel backend with React frontend using Inertia.js for a seamless SPA experience.",
    featured: true,
    slug: "e-commerce-web",
    links: {
      live: "",
      github: "https://github.com/Aryhnr/toko-online-laravel-react",
    },
  },
  {
    id: "08",
    title: "Hospital Cashier",
    category: "HEALTHCARE SYSTEM",
    filterCategory: "web",
    image:
      "https://res.cloudinary.com/ddtmmrvk3/image/upload/v1770519584/fznnx4nmxghqb777by5x_o6aa6a.webp",
    description:
      "Comprehensive hospital cashier management system with multi-role access and insurance API integration for real-time pricing.",
    tech: ["Laravel", "Tailwind CSS", "PostgreSQL", "REST API"],
    client: "RS Delta Project",
    year: 2026,
    challenge:
      "Integrating multiple external APIs while maintaining fast transaction processing and data consistency.",
    featured: false,
    slug: "hospital-cashier-system",
    links: {
      live: "",
      github: "",
    },
  },
];
