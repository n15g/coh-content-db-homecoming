import { BadgeData } from 'coh-content-db'

export const AlphaStruck: BadgeData = {
  type: 'ACCOMPLISHMENT',
  key: 'alpha-struck',
  setTitle: { id: 1938 },
  name: [
    { value: 'Alpha Struck' },
  ],
  alignment: ['H', 'V', 'P'],
  badgeText: [
    {
      value: 'You took the fight to the Praetorians and stopped their plans for a large-scale invasion into '
        + 'the heart of Atlas Park and Grandville!',
    },
  ],
  acquisition: 'Complete the Tin Mage Task Force',
  links: [
    { title: 'Alpha Struck Badge', href: 'https://homecoming.wiki/wiki/Alpha_Struck_Badge' },
  ],
  icon: [
    { value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/alpha-struck.png' },
  ],
}
