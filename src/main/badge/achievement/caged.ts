import { BadgeData } from 'coh-content-db'

export const Caged: BadgeData = {
  type: 'ACHIEVEMENT',
  key: 'caged',
  setTitle: { id: 240, praetorianId: 1697 },
  name: [
    { value: 'Caged' },
    { alignment: 'P', value: 'Can\'t Do That' },
  ],
  alignment: ['H', 'V', 'P'],
  badgeText: [
    { value: 'In your efforts to be a perfect statue, your skills are unmatched.' },
    {
      alignment: 'P', value: 'For most, each day brings a million new things they can do. In your case, it seems to be the '
        + 'opposite.',
    },
  ],
  acquisition: 'Be held for 6 hours',
  links: [
    { title: 'Caged Badge', href: 'https://homecoming.wiki/wiki/Caged_Badge' },
    { title: 'Can\'t Do That Badge', href: 'https://homecoming.wiki/wiki/Can%27t_Do_That_Badge' },
  ],
  icon: [
    { alignment: 'H', value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/hold-h.png' },
    { alignment: 'V', value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/hold-v.png' },
  ],
}
