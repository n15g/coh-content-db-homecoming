import { BadgeData } from 'coh-content-db'

export const AssaultAndBattery: BadgeData = {
  type: 'DEFEAT',
  key: 'assault-and-battery',
  setTitle: { id: 2446 },
  name: [
    { value: 'Assault and Battery' },
  ],
  alignment: ['H', 'V', 'P'],
  badgeText: [
    { value: `Despite their propensity for getting back up, you have taught these Freakshow a thing or two about knowing when to stay down.` },
  ],
  acquisition: 'Defeat 50 Freakshow Super Stunners.',
  links: [
    { title: 'Assault and Battery Badge', href: 'https://homecoming.wiki/wiki/Assault_and_Battery_Badge' },
  ],
  icon: [
    { value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/defeat/assault-and-battery.png' },
  ],
}
