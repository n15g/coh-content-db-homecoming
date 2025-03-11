import { BadgeData } from 'coh-content-db'

export const TraditionalistFoil: BadgeData = {
  type: 'ACCOMPLISHMENT',
  key: 'traditionalist-foil',
  setTitle: { id: 2499 },
  name: [
    { value: 'Traditionalist Foil' },
  ],
  alignment: ['H'],
  badgeText: [
    { value: `You learned about the two core Rikti factions, Traditionalist and Restructurist, while foiling a plot to mutate humans into Traditionalist conscripts.` },
  ],
  acquisition: `Complete the Stop the Rikti assault mission from Steven Sheridan`,
  links: [
    { title: 'Traditionalist Foil Badge', href: 'https://homecoming.wiki/wiki/Traditionalist_Foil_Badge' },
  ],
  icon: [
    { value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/traditionalist-foil.png' },
  ],
}
