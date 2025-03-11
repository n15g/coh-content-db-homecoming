import { BadgeData } from 'coh-content-db'

export const Warden: BadgeData = {
  type: 'DEFEAT',
  key: 'warden',
  setTitle: { id: 49 },
  name: [
    { alignment: 'H', value: 'Warden' },
    { alignment: 'V', value: 'Cruel Warden' },
  ],
  alignment: ['H'],
  badgeText: [
    {
      alignment: 'H', value: 'You have made the Ziggurat a safer place by putting the escaped convicts back on the inside, '
        + 'where they belong.',
    },
    {
      alignment: 'V', value: 'Sending escaped convicts back to the Ziggurat cuts down on the competition. It\'s only '
        + 'practical.',
    },
  ],
  acquisition: 'Defeat 500 Prisoners',
  links: [
    { title: 'Warden Badge', href: 'https://homecoming.wiki/wiki/Warden_Badge' },
    { title: 'Cruel Warden Badge', href: 'https://homecoming.wiki/wiki/Cruel_Warden_Badge' },
  ],
  icon: [
    { value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/defeat/warden.png' },
  ],
}
