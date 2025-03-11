import { BadgeData } from 'coh-content-db'

export const Confined: BadgeData = {
  type: 'ACHIEVEMENT',
  key: 'confined',
  setTitle: { id: 239, praetorianId: 1696 },
  name: [
    { value: 'Confined' },
    { alignment: 'P', value: 'Stuck' },
  ],
  alignment: ['H', 'V', 'P'],
  badgeText: [
    { value: 'You continue to be the shining example of inactivity.' },
    {
      alignment: 'P', value: 'Hanging around all those secret PPD prisons must have rubbed off on you. You certainly seem '
        + 'comfortable doing nothing for long stretches of time.',
    },
  ],
  acquisition: 'Be held for 3 hours',
  links: [
    { title: 'Confined Badge', href: 'https://homecoming.wiki/wiki/Confined_Badge' },
    { title: 'Stuck Badge', href: 'https://homecoming.wiki/wiki/Stuck_Badge' },
  ],
  icon: [
    { alignment: 'H', value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/hold-h.png' },
    { alignment: 'V', value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/hold-v.png' },
  ],
}
