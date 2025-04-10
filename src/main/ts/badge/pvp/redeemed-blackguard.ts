import { BadgeData, zoneLink } from 'coh-content-db'
import { ReclusesVictory } from '../../zone/recluses-victory'

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
    { alignment: 'hero', value: `Despite defeating all the Signature Heroes in Recluse's Victory, you are now considered a Redeemed Blackguard.` },
    { alignment: 'villain', value: `You have helped defeat all the Signature Heroes in Recluse's Victory, making you a Blackguard.` },
  ],
  acquisition: `Defeat all six Signature Heroes in ${zoneLink(ReclusesVictory)}.`,
  links: [
    { title: 'Redeemed Blackguard Badge', href: 'https://homecoming.wiki/wiki/Redeemed_Blackguard_Badge' },
    { title: 'Blackguard Badge', href: 'https://homecoming.wiki/wiki/Blackguard_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/pvp/defeatstatesman.png',
  requirements: [
    { key: 'ml', type: 'task', notes: 'Ms. Liberty' },
    { key: 'mc', type: 'task', notes: 'Manticore' },
    { key: 'bb', type: 'task', notes: 'Back Alley Brawler' },
    { key: 'po', type: 'task', notes: 'Positron' },
    { key: 'sy', type: 'task', notes: 'Synapse' },
    { key: 'py', type: 'task', notes: 'Penelope Yin' },
  ],
}
