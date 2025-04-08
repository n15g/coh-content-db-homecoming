import { BadgeData, contactLink } from 'coh-content-db'
import { NullTheGull } from '../../contact/null-the-gull'

export const Gullible: BadgeData = {
  type: 'accomplishment',
  key: 'gullible',
  setTitleId: [2326],
  name: 'Gullible',
  morality: 'all',
  badgeText: 'Your time spent as a seagull has given you better insights into the nature of reality. One insight in particular comes to mind: be careful what you wish for.',
  acquisition: `Make ${contactLink(NullTheGull)} turn you into a seagull after asking to be more powerful.`,
  links: [
    { title: 'Gullible Badge', href: 'https://homecoming.wiki/wiki/Gullible_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/gullible.png',
}
