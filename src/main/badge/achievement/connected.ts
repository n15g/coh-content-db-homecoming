import { BadgeData } from 'coh-content-db'

export const Connected: BadgeData = {
  type: 'ACHIEVEMENT',
  key: 'connected',
  setTitle: { id: 1896 },
  name: [
    { value: 'Connected' },
  ],
  alignment: ['V'],
  badgeText: [
    {
      value: 'You\'ve worked together with a contact in Sharkhead on the side while investigating the secrets '
        + 'of the Blood Coral.',
    },
  ],
  acquisition: 'Work with one of the helping contacts in the story arc from Vincent Ross',
  links: [
    { title: 'Connected Badge', href: 'https://homecoming.wiki/wiki/Connected_Badge' },
  ],
  icon: [
    { value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/connected.png' },
  ],
}
