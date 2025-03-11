import { BadgeData } from 'coh-content-db'

export const EyeOfVengeance: BadgeData = {
  type: 'ACCOMPLISHMENT',
  key: 'eye-of-vengeance',
  setTitle: { id: 2188 },
  name: [
    { value: 'Eye of Vengeance' },
  ],
  alignment: ['H', 'V', 'P'],
  badgeText: [
    {
      value: 'You fought the Knives of Vengeance within Dark Astoria and discovered that they plan to hunt '
        + 'down and kill whoever they deem \'worthy\' for their justice. It appears that, coincidentally, '
        + 'that\'s just about everyone on Primal Earth.',
    },
  ],
  acquisition: 'Complete the story arc from Heather Townshend',
  links: [
    { title: 'Eye of Vengeance Badge', href: 'https://homecoming.wiki/wiki/Eye_of_Vengeance_Badge' },
  ],
  icon: [
    { value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/da-arc.png' },
  ],
}
