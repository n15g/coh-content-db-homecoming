import { BadgeData } from 'coh-content-db'

export const Shifter: BadgeData = {
  type: 'EVENT',
  key: 'shifter',
  setTitle: { id: 187 },
  name: [
    { value: 'Shifter' },
  ],
  alignment: ['H', 'V', 'P'],
  badgeText: [
    { value: 'You have defeated 15 werewolves, supernatural creatures created through the disease of lycanthropy.' },
  ],
  acquisition: 'Defeat 15 Werewolves during the Halloween event.',
  links: [
    { title: 'Shifter Badge', href: 'https://homecoming.wiki/wiki/Shifter_Badge' },
  ],
  icon: [{ value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/event/shifter.png' }],
}
