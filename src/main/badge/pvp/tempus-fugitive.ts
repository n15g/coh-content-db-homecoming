import { BadgeData } from 'coh-content-db'

export const TempusFugitive: BadgeData = {
  type: 'PVP',
  key: 'tempus-fugitive',
  setTitle: { id: 372 },
  name: [
    { alignment: 'H', value: 'Tempus Fugitive' },
    { alignment: 'V', value: 'Destroyer of Worlds' },
  ],
  alignment: ['H', 'V', 'P'],
  badgeText: [
    { alignment: 'H', value: `You have battled Arachnos in a possible future and prevented Recluse's Victory.` },
    { alignment: 'V', value: `You have fought the future and won, making Recluse's Victory that much more likely.` },
  ],
  icon: [{ value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/pvp/tempus-fugitive.png' }],
  acquisition: '(Issue 25) Win Recluse\'s Victory with 1000 temporal points.',
  links: [
    { title: 'Tempus Fugitive Badge', href: 'https://homecoming.wiki/wiki/Tempus_Fugitive_Badge' },
    { title: 'Destroyer of Worlds Badge', href: 'https://homecoming.wiki/wiki/Destroyer_of_Worlds_Badge' },
  ],
}
