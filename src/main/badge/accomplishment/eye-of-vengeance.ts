import { BadgeData } from 'coh-content-db'
import { HeatherTownshend } from '../../contact/heather-townshend'

export const EyeOfVengeance: BadgeData = {
  type: 'accomplishment',
  key: 'eye-of-vengeance',
  setTitleId: [2188],
  name: 'Eye of Vengeance',
  morality: 'all',
  badgeText: `You fought the Knives of Vengeance within Dark Astoria and discovered that they plan to hunt down and kill whoever they deem 'worthy' for their justice.
It appears that, coincidentally, that's just about everyone on Primal Earth.`,
  acquisition: 'Complete the story arc from Heather Townshend',
  links: [
    { title: 'Eye of Vengeance Badge', href: 'https://homecoming.wiki/wiki/Eye_of_Vengeance_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/da-arc.png',
  requirements: [
    { key: 'burden-of-the-past', type: 'ARC', missionName: 'Burden of the Past', contactKey: HeatherTownshend.key },
  ],
}
