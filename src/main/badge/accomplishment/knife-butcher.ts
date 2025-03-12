import { BadgeData } from 'coh-content-db'

export const KnifeButcher: BadgeData = {
  type: 'ACCOMPLISHMENT',
  key: 'knife-butcher',
  setTitle: { id: 2190 },
  name: [
    { value: 'Knife Butcher' },
  ],
  alignment: ['H', 'V', 'P'],
  badgeText: [
    {
      value: 'You destroyed the source of the Knives of Vengeance, ending both their reign and also whatever '
        + 'was left of the Knives of Artemis.',
    },
  ],
  acquisition: 'Complete the story arc from Max',
  links: [
    { title: 'Knife Butcher Badge', href: 'https://homecoming.wiki/wiki/Knife_Butcher_Badge' },
  ],
  icon: [
    { value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/da-arc.png' },
  ],
}
