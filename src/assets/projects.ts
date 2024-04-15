interface Project {
  title: string
  description: string
  tumbnail: string
  skills: string[]
  images: {
    path: string
    caption: string
  }[]
  link: string
}

export const projects: Project[] = [
  {
    title: 'Full stack React + Node.js restaurant delivery management system',
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
    link: 'https://deliveryshop.victorassis.eng.br',
  },
  {
    title: 'Next.js + Firebase pet adoption platform',
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
    link: 'https://adas-saquarema.vercel.app/',
  },
  {
    title: 'WordPress + React website with price simulation tool',
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
    link: 'https://www.credphone.pt/',
  },
  {
    title: 'React Coffee Delivery E-Commerce',
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
    link: 'https://victorassiso.github.io/coffee-delivery/',
  },
  {
    title: 'React Timer & Task Tracker',
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
    link: 'https://victorassiso.github.io/coffee-delivery/',
  },
]
