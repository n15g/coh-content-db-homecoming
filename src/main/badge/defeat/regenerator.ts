import { BadgeData } from 'coh-content-db'

export const Regenerator: BadgeData = {
  type: 'DEFEAT',
  key: 'regenerator',
  setTitle: { id: 53 },
  name: [
    { value: 'Regenerator' },
  ],
  alignment: ['H', 'V', 'P'],
  badgeText: [
    {
      value: 'You have shown tenaciousness in taking down the leadership of the Trolls... over and over '
        + 'again.',
    },
  ],
  acquisition: 'Defeat 100 Trolls bosses',
  links: [
    { title: 'Regenerator Badge', href: 'https://homecoming.wiki/wiki/Regenerator_Badge' },
  ],
  icon: [
    { value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/defeat/regenerator.png' },
  ],
}
