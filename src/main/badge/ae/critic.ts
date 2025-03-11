import { BadgeData } from 'coh-content-db'

export const Critic: BadgeData = {
  type: 'AE',
  key: 'critic',
  setTitle: { id: 1187 },
  name: [
    { value: 'Critic' },
  ],
  alignment: ['H', 'V', 'P'],
  badgeText: [{ value: 'You\'ve completed your first Hall of Fame mission earning yourself the Critic Badge.' }],
  acquisition: 'Complete one Hall of Fame story arc.',
  links: [
    { title: 'Critic Badge', href: 'https://homecoming.wiki/wiki/Critic_Badge' },
  ],
  icon: [{ value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/ae/critic.png' }],
}
