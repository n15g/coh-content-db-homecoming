import { BadgeData } from 'coh-content-db'

export const Vigilante: BadgeData = {
  type: 'PVP',
  key: 'vigilante',
  setTitle: { id: 367 },
  name: [
    { alignment: 'H', value: 'Vigilante' },
    { alignment: 'V', value: 'Wanted' },
  ],
  alignment: ['H', 'V', 'P'],
  badgeText: [
    { alignment: 'H', value: 'Your success in PvP missions has been noticed by the media. You are being called a Vigilante.' },
    {
      alignment: 'V', value: 'The authorities have mentioned your name in more than one report on successfully completing '
        + 'PvP missions.',
    },
  ],
  acquisition: 'Complete a debuff mission in a PvP zone (Bloody Bay, Siren\'s Call, or Warburg)',
  links: [
    { title: 'Vigilante Badge', href: 'https://homecoming.wiki/wiki/Vigilante_Badge' },
    { title: 'Wanted Badge', href: 'https://homecoming.wiki/wiki/Wanted_Badge' },
  ],
  icon: [
    { value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/pvp/cracked.png' },
  ],
}
