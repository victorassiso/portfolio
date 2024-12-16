export interface Project {
  title: string
  description: string
  tumbnail: string
  skills: string[]
  images: {
    path: string
    caption: string
  }[]
  availableAt?: string[]
  repositories?: string[]
  institutionalWebsite?: string
}

export const projects: Project[] = [
  {
    title:
      "Web System With Interactive Map for Rio de Janeiro's Public Safety Initiative",
    description:
      "The Civitas web application was designed to support Rio de Janeiro's innovative public safety initiative. It enables real-time data integration, analysis, and collaboration among law enforcement and municipal agencies to combat illegal activities, urban crime, and social issues. Leveraging a network of over 3,800 cameras and 1,500 traffic radars, the app provides tools like vehicle tracking, community reporting, and social media monitoring to enhance urban security and crime prevention. Civitas exemplifies the use of technology and intelligence in fostering safer cities, combining monitoring, strategic planning, and community engagement in a user-friendly interface.",
    tumbnail: '/civitas/civitas_tumbnail.png',
    skills: [
      'React',
      'Next.js',
      'Interactive Map',
      'Deck.gl',
      'Typescript',
      'Tailwind CSS',
      'REST API',
      '',
    ],
    images: [
      {
        path: '/civitas/civitas_tumbnail.png',
        caption: 'Vehicles Search Satellite Style and macro view',
      },
      {
        path: '/civitas/civitas_print.png',
        caption: 'Vehicles Search Map Style and Tooltip',
      },
      {
        path: '/civitas/civitas_demo_vehicles.mp4',
        caption: 'Vehicles Module Demo',
      },
      {
        path: '/civitas/civitas_demo_reports.mp4',
        caption: 'Reports Module Demo',
      },
    ],
    institutionalWebsite: 'https://civitas.rio',
    repositories: ['https://github.com/prefeitura-rio/civitas-app'],
    availableAt: ['https://app.civitas.rio'],
  },
  {
    title: 'Integraded Healthcare Record',
    description:
      'The Integraded Health Record (HCI in Portuguese) web application is a comprehensive tool for healthcare professionals, such as doctors and nurses, to access and manage patient health histories. By integrating multiple municipal healthcare databases, the app provides a unified record of all treatments and services received by a patient in public health facilities. Key information, such as allergies, ongoing medications, surgery reports, and exam results, is easily accessible, allowing for more informed decision-making and improved patient care. The HCI app streamlines healthcare workflows by consolidating essential medical data in a secure, user-friendly interface.',
    tumbnail: '/hci/result_1.png',
    skills: [
      'React',
      'Next.js',
      'Shadcn UI',
      'Storybook',
      'Typescript',
      'Tailwind CSS',
      'REST API',
    ],
    images: [
      {
        path: '/hci/login.png',
        caption: 'Vehicles Search Satellite Style and macro view',
      },
      {
        path: '/hci/2fa.png',
        caption: 'Vehicles Search Map Style and Tooltip',
      },
      {
        path: '/hci/search.png',
        caption: 'Vehicles Module Demo',
      },
      {
        path: '/hci/result_1.png',
        caption: 'Patient history',
      },
      {
        path: '/hci/result_2.png',
        caption: 'Patient history',
      },
    ],
    repositories: [
      'https://github.com/prefeitura-rio/historico-clinico-integrado-app',
    ],
    availableAt: ['https://hci.dados.rio'],
  },
  {
    title:
      'Informative and Supportive Website for Women facing Domestic Violence',
    description:
      "mulher.rio is an informative and supportive website designed to assist women facing domestic violence. The platform provides a sensitive onboarding process that includes a questionnaire to assess the severity of the user's situation. Based on the results, the website delivers tailored information and resources to help the woman seek appropriate support. It also connects users to a network of specialized women’s support centers, offering a safe and confidential space for those in need of help. By combining empathy, education, and immediate action, mulher.rio empowers women to take steps toward safety and support in times of crisis.",
    tumbnail: '/mulher.rio/map.png',
    skills: ['React', 'Next.js', 'Shadcn UI', 'Typescript', 'Tailwind CSS'],
    images: [
      {
        path: '/mulher.rio/onboarding_1.png',
        caption: 'Vehicles Search Satellite Style and macro view',
      },
      {
        path: '/mulher.rio/onboarding_2.png',
        caption: 'Vehicles Search Map Style and Tooltip',
      },
      {
        path: '/mulher.rio/emergency.png',
        caption: 'Vehicles Module Demo',
      },
      {
        path: '/mulher.rio/home.png',
        caption: 'Patient history',
      },
      {
        path: '/mulher.rio/map.png',
        caption: 'Patient history',
      },
      {
        path: '/mulher.rio/units.png',
        caption: 'Patient history',
      },
      {
        path: '/mulher.rio/unit_details.png',
        caption: 'Patient history',
      },
      {
        path: '/mulher.rio/violence_types.png',
        caption: 'Patient history',
      },
    ],
    availableAt: ['https://staging.mulher.rio'],
  },
  {
    title: 'Full Stack Restaurant Delivery Management System',
    description:
      'A modern full stack web-based system for managing orders in a delivery restaurant. It features a fast and responsive interface with optimized caching and loading, a complete backend with JWT and Cookies authentication, extensive test coverage, and well-decoupled entities. The relational database is containerized with Docker and managed with Prisma ORM. It includes the option for both light and dark themes, is completely responsive to all screen sizes and has many other details that ensure the high quality of the application.',
    tumbnail: '/delivery-shop/dashboard.png',
    skills: [
      'React',
      'Node.js',
      'Typescript',
      'Docker',
      'Tailwind CSS',
      'User Authentication',
      'Fastify',
      'REST API',
      'Automated Testing',
      'CI/CD',
      'Git/GitHub',
      'Relational Database',
      'PostgreSQL',
    ],
    images: [
      {
        path: '/delivery-shop/dashboard.png',
        caption: 'Dashboard',
      },
      {
        path: '/delivery-shop/orders-table.png',
        caption: 'Orders Table',
      },
      {
        path: '/delivery-shop/new-order-dialog.png',
        caption: 'Orders Table',
      },
      {
        path: '/delivery-shop/orders-card-list.png',
        caption: 'Orders Table',
      },
      {
        path: '/delivery-shop/login.png',
        caption: 'Orders Table',
      },
      {
        path: '/delivery-shop/filter-sheet.png',
        caption: 'Orders Table',
      },
      {
        path: '/delivery-shop/update-store-dialog.png',
        caption: 'Orders Table',
      },
      {
        path: '/delivery-shop/dashboard-light-theme.png',
        caption: 'Orders Table',
      },
      {
        path: '/delivery-shop/dashboard-mobile.png',
        caption: 'Orders Table',
      },
    ],
    availableAt: ['https://deliveryshop.victorassis.dev'],
    repositories: [
      'https://github.com/victorassiso/delivery-shop-ui',
      'https://github.com/victorassiso/delivery-shop-api',
    ],
  },
  {
    title: 'Pet Adoption Platform',
    description:
      'A beautiful and modern website for displaying rescued animals available for adoption, receive donations and registrations for volunteers, promote information and campaigns. The project has an admin platform allowing the admin user to create and edit animals.',
    tumbnail: '/adas/home.png',
    skills: [
      'React',
      'Next.js',
      'Typescript',
      'Firebase',
      'Tailwind CSS',
      'CI/CD',
      'Git/GitHub',
    ],
    images: [
      {
        path: '/adas/adopt.png',
        caption: 'Adopt banner',
      },
      {
        path: '/adas/animal-description.png',
        caption: 'Animal description',
      },
      {
        path: '/adas/carousel.png',
        caption: 'Animals carousel',
      },
      {
        path: '/adas/donate.png',
        caption: 'Donation payment',
      },
      {
        path: '/adas/edit-dialog.png',
        caption: 'Edit animal dialog',
      },
      {
        path: '/adas/home.png',
        caption: 'Home banner',
      },
      {
        path: '/adas/info-dialog.png',
        caption: 'Animal details dialog',
      },
      {
        path: '/adas/mobile-adopt.jpg',
        caption: 'Adopt banner - mobile',
      },
      {
        path: '/adas/mobile-banner.jpg',
        caption: 'Home banner - mobile',
      },
      {
        path: '/adas/modile-edit-dialog.jpg',
        caption: 'Edit animal - mobile',
      },
      {
        path: '/adas/support.png',
        caption: 'How to suppoort',
      },
      {
        path: '/adas/table.png',
        caption: 'Animals table',
      },
    ],
    availableAt: [
      'https://adas-saquarema.vercel.app',
      'https://adas-admin.vercel.app',
    ],
    repositories: [
      'https://github.com/victorassiso/adas-institutional-website',
      'https://github.com/victorassiso/adas-admin',
    ],
  },
  {
    title: 'Installment Purchase Interest Calculator',
    description:
      'A simple and elegant website made in WordPress that integrates a price simulation tool made with React and Typescript.',
    tumbnail: '/credphone/price-simulator.png',
    skills: ['WordPress', 'React', 'Typescript'],
    images: [
      {
        path: '/credphone/banner1.png',
        caption: 'Banner 1',
      },
      {
        path: '/credphone/banner2.png',
        caption: 'Banner 2',
      },
      {
        path: '/credphone/price-simulator.png',
        caption: 'Price simulator tool',
      },
      {
        path: '/credphone/banner3.png',
        caption: 'Banner 3',
      },
      {
        path: '/credphone/banner4.png',
        caption: 'Banner 4',
      },
    ],
    availableAt: ['https://credphone.pt'],
    repositories: ['https://vercel.com/victorassisos-projects/price-simulator'],
  },
  {
    title: 'Coffee Delivery E-Commerce',
    description: 'A React e-commerce focused on coffee delivery.',
    tumbnail: '/coffee-delivery/banner.png',
    skills: ['React', 'Typescript'],
    images: [
      {
        path: '/coffee-delivery/banner.png',
        caption: 'Banner 1',
      },
      {
        path: '/coffee-delivery/products.png',
        caption: 'Banner 2',
      },
      {
        path: '/coffee-delivery/checkout.png',
        caption: 'Price simulator tool',
      },
    ],
    availableAt: ['https://victorassiso.github.io/coffee-delivery'],
    repositories: ['https://github.com/victorassiso/coffee-delivery'],
  },
  {
    title: 'Timer & Task Tracker',
    description: 'A timer for keeping track of your tasks.',
    tumbnail: '/timer/timer1.png',
    skills: ['React', 'Typescript'],
    images: [
      {
        path: '/timer/timer1.png',
        caption: 'Timer iddle',
      },
      {
        path: '/timer/timer2.png',
        caption: 'Timer in progress',
      },
      {
        path: '/timer/history.png',
        caption: 'Tasks history',
      },
    ],
    availableAt: ['https://victorassiso.github.io/timer'],
    repositories: ['https://github.com/victorassiso/timer'],
  },
]
