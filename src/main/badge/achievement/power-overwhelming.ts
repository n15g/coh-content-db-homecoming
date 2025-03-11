import { BadgeData } from 'coh-content-db'

export const PowerOverwhelming: BadgeData = {
  type: 'ACHIEVEMENT',
  key: 'power-overwhelming',
  setTitle: { id: 2480 },
  name: [
    { value: 'Power Overwhelming' },
  ],
  alignment: ['V'],
  badgeText: [
    { value: `You like to make demonstrations of your power, it's what makes you a cut above the rest. You didn't bat an eye in letting Ripplesurge consume environmental ripple energy, and empowering himself to his absolute limit before showing him why no degree of overwhelming power can stand against your own might.` },
  ],
  acquisition: `Defeat Ripplesurge while it is empowered from standing in the residual energy left behind from consuming a Shimmering Effusion while on Hard Mode in Dr. Aeon's Strike Force.`,
  links: [
    { title: 'Power Overwhelming Badge', href: 'https://homecoming.wiki/wiki/Power_Overwhelming_Badge' },
  ],
  icon: [
    { value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/sf-aeon.png' },
  ],
}
