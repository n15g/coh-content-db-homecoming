import { BadgeData } from 'coh-content-db'

export const PartyCrasher: BadgeData = {
  type: 'ACCOMPLISHMENT',
  key: 'party-crasher',
  setTitle: { id: 344 },
  name: [
    { value: 'Party Crasher' },
  ],
  alignment: ['V'],
  badgeText: [
    { value: 'You crashed a rave and stole a piece of the alloy which makes up Silver Mantis\' armor.' },
  ],
  acquisition: 'Complete the Steal Alloy from Silver Mantis mission from Dr. Forrester',
  links: [
    { title: 'Party Crasher Badge', href: 'https://homecoming.wiki/wiki/Party_Crasher_Badge' },
  ],
  icon: [
    { value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/stature-8.png' },
  ],
}
