import { BadgeData } from 'coh-content-db'

export const MayhemsCreator: BadgeData = {
  type: 'ACCOMPLISHMENT',
  key: 'mayhems-creator',
  setTitle: { id: 2260 },
  name: [
    { value: 'Mayhem\'s Creator' },
  ],
  alignment: ['V'],
  badgeText: [
    {
      value: 'You were personally responsible for the creation of a new villainess, Penelope Mayhem. What '
        + 'she will do now is anyone\'s guess.',
    },
  ],
  acquisition: 'Complete the third story arc from Mr. G (Primal Earth)',
  links: [
    { title: 'Mayhem\'s Creator Badge', href: 'https://homecoming.wiki/wiki/Mayhem%27s_Creator_Badge' },
  ],
  icon: [
    { value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/st-martial-arc.png' },
  ],
}
