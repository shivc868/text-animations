export interface SpotlightEntry {
  title: string
  category: string
  description: string
  link: string
  status?: string
}

export const spotlightEntries: SpotlightEntry[] = [
  {
    title: 'Studio Kinfolk Residency',
    category: 'Design',
    description:
      'An immersive residency equipping Black designers with resources to prototype ideas within community-owned spaces.',
    link: 'https://example.com/kinfolk',
    status: 'New',
  },
  {
    title: 'Circuit Breaker Festival',
    category: 'Music',
    description:
      'A pop-up series championing experimental Black sound designers through spatial audio installations.',
    link: 'https://example.com/circuit-breaker',
  },
  {
    title: 'North Star Venture Lab',
    category: 'Tech',
    description:
      'Micro-grants and mentorship for founders building equitable tools for creative economies.',
    link: 'https://example.com/north-star',
  },
  {
    title: 'Garden District Archive',
    category: 'Storytelling',
    description:
      'A grassroots archive digitizing family narratives to preserve regional histories for future makers.',
    link: 'https://example.com/garden-district',
  },
]
