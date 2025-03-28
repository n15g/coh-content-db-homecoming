import { BadgeData } from 'coh-content-db'

export const Justiciar: BadgeData = {
  type: 'PVP',
  key: 'justiciar',
  setTitle: { id: 586 },
  name: [
    { alignment: 'H', value: 'Justiciar' },
    { alignment: 'V', value: 'Fallen Justiciar' },
  ],
  alignment: ['H'],
  badgeText: [
    { alignment: 'H', value: 'You have helped defeat all the Signature Villains in Recluse\'s Victory, making you a Justiciar.' },
    {
      alignment: 'V', value: 'Defeating all the Signature Villains in Recluse\'s Victory has made your fall to villainy only '
        + 'that much sweeter. Now Recluse and his group won\'t even think about crossing you.',
    },
  ],
  acquisition: 'Defeat all five Signature Villains in Recluse\'s Victory',
  links: [
    { title: 'Justiciar Badge', href: 'https://homecoming.wiki/wiki/Justiciar_Badge' },
    { title: 'Fallen Justiciar Badge', href: 'https://homecoming.wiki/wiki/Fallen_Justiciar_Badge' },
  ],
  icon: [
    { value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/pvp/defeatrecluse.png' },
  ],
}
