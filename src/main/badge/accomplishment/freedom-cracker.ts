import { BadgeData } from 'coh-content-db'

export const FreedomCracker: BadgeData = {
  type: 'ACCOMPLISHMENT',
  key: 'freedom-cracker',
  setTitle: { id: 2013 },
  name: [
    { value: 'Freedom Cracker' },
  ],
  alignment: ['V'],
  badgeText: [
    {
      value: 'You\'ve kicked Longbow out of Fort Darwin, showing them that they don\'t belong in the Rogue '
        + 'Isles!',
    },
  ],
  acquisition: 'Complete Lt. Harris\' story arc in Mercy Island',
  links: [
    { title: 'Freedom Cracker Badge', href: 'https://homecoming.wiki/wiki/Freedom_Cracker_Badge' },
  ],
  icon: [
    { value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/freedom-cracker.png' },
  ],
}
