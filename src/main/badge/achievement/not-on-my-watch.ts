import { BadgeData } from 'coh-content-db'

export const NotOnMyWatch: BadgeData = {
  type: 'ACHIEVEMENT',
  key: 'not-on-my-watch',
  setTitle: { id: 1975 },
  name: [
    { value: 'Not On My Watch' },
  ],
  alignment: ['H', 'V', 'P'],
  badgeText: [
    {
      value: 'Not a single Mindwashed Resistance member was allowed to escape the Behavioral Adjustment '
        + 'Facility on your watch.',
    },
  ],
  acquisition: 'Allow no Mindwashed Prisoners to escape during a Behavioral Adjustment Facility Incarnate Trial',
  links: [
    { title: 'Not On My Watch Badge', href: 'https://homecoming.wiki/wiki/Not_On_My_Watch_Badge' },
  ],
  icon: [
    { value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/it-baf.png' },
  ],
}
