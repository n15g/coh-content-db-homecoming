import { BadgeData } from 'coh-content-db'

export const Confined: BadgeData = {
  type: 'achievement',
  key: 'confined',
  setTitleId: [239, 1696],
  name: [
    { value: 'Confined' },
    { alignment: 'praetorian', value: 'Stuck' },
  ],
  releaseDate: '2012-11-30',
  morality: 'all',
  badgeText: [
    { value: 'You continue to be the shining example of inactivity.' },
    { alignment: 'praetorian', value: 'Hanging around all those secret PPD prisons must have rubbed off on you. You certainly seem comfortable doing nothing for long stretches of time.' },
  ],
  acquisition: 'Be held for 3 hours.',
  links: [
    { title: 'Confined Badge', href: 'https://homecoming.wiki/wiki/Confined_Badge' },
    { title: 'Stuck Badge', href: 'https://homecoming.wiki/wiki/Stuck_Badge' },
  ],
  icon: [
    { alignment: 'hero', value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/hold-h.png' },
    { alignment: 'villain', value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/hold-v.png' },
  ],
}
