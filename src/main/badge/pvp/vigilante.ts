import { BadgeData } from 'coh-content-db'

export const Vigilante: BadgeData = {
  type: 'pvp',
  key: 'vigilante',
  setTitleId: [367],
  name: [
    { alignment: 'hero', value: 'Vigilante' },
    { alignment: 'villain', value: 'Wanted' },
  ],
  morality: 'all',
  badgeText: [
    { alignment: 'hero', value: 'Your success in PvP missions has been noticed by the media. You are being called a Vigilante.' },
    {
      alignment: 'villain', value: 'The authorities have mentioned your name in more than one report on successfully completing '
        + 'PvP missions.',
    },
  ],
  acquisition: 'Complete a debuff mission in a PvP zone (Bloody Bay, Siren\'s Call, or Warburg)',
  links: [
    { title: 'Vigilante Badge', href: 'https://homecoming.wiki/wiki/Vigilante_Badge' },
    { title: 'Wanted Badge', href: 'https://homecoming.wiki/wiki/Wanted_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/pvp/cracked.png',
}
