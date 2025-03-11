import { BadgeData } from 'coh-content-db'

export const Deincarnated: BadgeData = {
  type: 'OUROBOROS',
  key: 'deincarnated',
  setTitle: { id: 2475 },
  name: [
    { value: 'Deincarnated' },
  ],
  alignment: ['H', 'V', 'P'],
  badgeText: [
    { value: `You have completed a Flashback at level 50 while not using any Incarnate Powers.` },
  ],
  acquisition: `Complete a Flashback at level 50 without using any Incarnate Powers.`,
  links: [
    { title: 'Deincarnated Badge', href: 'https://homecoming.wiki/wiki/Deincarnated_Badge' },
  ],
  icon: [{ value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/ouroboros/deincarnated.png' }],
}
