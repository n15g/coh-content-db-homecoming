import { BadgeData } from 'coh-content-db'

export const RedeemedBlackguard: BadgeData = {
  type: 'pvp',
  key: 'redeemed-blackguard',
  setTitleId: [585],
  name: [
    { alignment: 'hero', value: 'Redeemed Blackguard' },
    { alignment: 'villain', value: 'Blackguard' },
  ],
  morality: 'villainous',
  badgeText: [
    {
      alignment: 'hero', value: 'Despite defeating all the Signature Heroes in Recluse\'s Victory, you are now considered a '
        + 'Redeemed Blackguard.',
    },
    { alignment: 'villain', value: 'You have helped defeat all the Signature Heroes in Recluse\'s Victory, making you a Blackguard.' },
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
