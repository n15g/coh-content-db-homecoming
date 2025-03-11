import { BadgeData } from 'coh-content-db'

export const Firefighter: BadgeData = {
  type: 'DEFEAT',
  key: 'firefighter',
  setTitle: { id: 212 },
  name: [
    { alignment: 'H', value: 'Firefighter' },
    { alignment: 'V', value: 'Firestomper' },
  ],
  alignment: ['H'],
  badgeText: [
    {
      alignment: 'H', value: 'Once again, you have risen to the call of duty and put an end to the evil arsonists that '
        + 'plague Paragon City.  Smokey would be proud!',
    },
    {
      alignment: 'V', value: 'Once again, the Hellions have tried to set the town ablaze and you have stepped in to stomp '
        + 'them and the fires out. Killjoy.',
    },
  ],
  acquisition: 'Defeat 25 Fires and 25 Hellion Arsonists during a Hellion Arson event',
  links: [
    { title: 'Firefighter Badge', href: 'https://homecoming.wiki/wiki/Firefighter_Badge' },
    { title: 'Firestomper Badge', href: 'https://homecoming.wiki/wiki/Firestomper_Badge' },
  ],
  icon: [
    { value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/defeat/firefighter.png' },
  ],
}
