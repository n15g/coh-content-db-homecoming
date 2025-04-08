import { BadgeData, contactLink } from 'coh-content-db'
import { HeatherTownshend } from '../../contact/heather-townshend'

export const TimeSaver: BadgeData = {
  type: 'achievement',
  key: 'time-saver',
  setTitleId: [2200],
  name: 'Time Saver',
  morality: 'all',
  badgeText: 'You were able to save Kadabra Kill and Sigil by defeating all the members of the Knives of Vengeance within two minutes.',
  acquisition: `Save both Sigil and Kadabra Kill within two minutes of starting the final fight in the final mission from ${contactLink(HeatherTownshend)}.`,
  links: [
    { title: 'Time Saver Badge', href: 'https://homecoming.wiki/wiki/Time_Saver_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/da-zone.png',
}
