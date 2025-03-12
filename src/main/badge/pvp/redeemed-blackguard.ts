import { BadgeData } from 'coh-content-db'

export const RedeemedBlackguard: BadgeData = {
  type: 'PVP',
  key: 'redeemed-blackguard',
  setTitle: { id: 585 },
  name: [
    { alignment: 'H', value: 'Redeemed Blackguard' },
    { alignment: 'V', value: 'Blackguard' },
  ],
  alignment: ['V'],
  badgeText: [
    {
      alignment: 'H', value: 'Despite defeating all the Signature Heroes in Recluse\'s Victory, you are now considered a '
        + 'Redeemed Blackguard.',
    },
    { alignment: 'V', value: 'You have helped defeat all the Signature Heroes in Recluse\'s Victory, making you a Blackguard.' },
  ],
  acquisition: 'Defeat all six Signature Heroes in Recluse\'s Victory',
  links: [
    { title: 'Redeemed Blackguard Badge', href: 'https://homecoming.wiki/wiki/Redeemed_Blackguard_Badge' },
    { title: 'Blackguard Badge', href: 'https://homecoming.wiki/wiki/Blackguard_Badge' },
  ],
  icon: [
    { value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/pvp/defeatstatesman.png' },
  ],
}
