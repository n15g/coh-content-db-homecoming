import { BadgeData } from 'coh-content-db'

export const GreenMachine: BadgeData = {
  type: 'DEFEAT',
  key: 'green-machine',
  setTitle: { id: 2443 },
  name: [
    { value: 'Green Machine' },
  ],
  alignment: ['H', 'V', 'P'],
  badgeText: [
    { value: `You have gone above and beyond to obliterate the Warhulks of the Nemesis army, keeping the streets safe from their steam-powered terror. Amongst the Nemesis Army, you are often deemed 'Unpopular When Irritated'.` },
  ],
  acquisition: 'Defeat 100 Nemesis Warhulks.',
  links: [
    { title: 'Green Machine Badge', href: 'https://homecoming.wiki/wiki/Green_Machine_Badge' },
  ],
  icon: [
    { value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/defeat/green-machine.png' },
  ],
}
