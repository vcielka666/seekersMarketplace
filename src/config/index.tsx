export const PRODUCT_CATEGORIES = [
    {
      label: 'In-game Items',
      value: 'ui_kits' as const,
      featured: [
        {
          name: 'Golden Key',
          href: `/products?category=ui_kits`,
          imageSrc: '/seekersTheme/gameItems/item_key.png',
        },
        {
          name: 'Summoner Wand',
          href: '/products?category=ui_kits&sort=desc',
          imageSrc: '/seekersTheme/gameItems/item_wand.gif',
        },
        {
          name: 'Prospect Rune',
          href: '/products?category=ui_kits',
          imageSrc: '/seekersTheme/gameItems/item_rune.png',
        },
      ],
    },
    {
      label: 'Token RELICS',
      value: 'icons' as const,
      featured: [
        {
          name: 'Favorite Icon Picks',
          href: `/products?category=icons`,
          imageSrc: '/nav/icons/picks.jpg',
        },
        {
          name: 'New Arrivals',
          href: '/products?category=icons&sort=desc',
          imageSrc: '/nav/icons/new.jpg',
        },
        {
          name: 'Bestselling Icons',
          href: '/products?category=icons',
          imageSrc: '/nav/icons/bestsellers.jpg',
        },
      ],
    },
  ]