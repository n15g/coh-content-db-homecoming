import { BadgeData } from 'coh-content-db'

export const FreezerBurn: BadgeData = {
  type: 'DEFEAT',
  key: 'freezer-burn',
  setTitle: { id: 2496 },
  name: [
    { value: 'Freezer Burn' },
  ],
  alignment: ['H', 'V', 'P'],
  badgeText: [
    { value: `Despite not having their intended Incarnate-power batteries, the 5th Column's twin Aereus Colossi Dextro and Laeva were formidable displays of engineering.` },
  ],
  acquisition: `Defeat the 5th Column colossi Dextro and Laeva during the Imperious Task Force`,
  links: [
    { title: 'Freezer Burn Badge', href: 'https://homecoming.wiki/wiki/Freezer_Burn_Badge' },
  ],
  icon: [
    { value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/defeat/freezer-burn.png' },
  ],
}
