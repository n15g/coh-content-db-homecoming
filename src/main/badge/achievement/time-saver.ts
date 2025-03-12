import { BadgeData } from 'coh-content-db'

export const TimeSaver: BadgeData = {
  type: 'ACHIEVEMENT',
  key: 'time-saver',
  setTitle: { id: 2200 },
  name: [
    { value: 'Time Saver' },
  ],
  alignment: ['H', 'V', 'P'],
  badgeText: [
    {
      value: 'You were able to save Kadabra Kill and Sigil by defeating all the members of the Knives of '
        + 'Vengeance within two minutes.',
    },
  ],
  acquisition: 'Save both Sigil and Kadabra Kill within two minutes of starting the final fight in the final mission from Heather Townshend',
  links: [
    { title: 'Time Saver Badge', href: 'https://homecoming.wiki/wiki/Time_Saver_Badge' },
  ],
  icon: [
    { value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/da-zone.png' },
  ],
}
