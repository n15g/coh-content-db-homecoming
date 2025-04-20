import { BadgeData, zoneLink } from 'coh-content-db'
import { ReclusesVictory } from '../../zone/recluses-victory'

export const Justiciar: BadgeData = {
  type: 'pvp',
  key: 'justiciar',
  setTitleId: [586],
  name: [
    { alignment: 'hero', value: 'Justiciar' },
    { alignment: 'villain', value: 'Fallen Justiciar' },
  ],
  releaseDate: '2012-11-30',
  morality: 'heroic',
  badgeText: [
    { alignment: 'hero', value: `You have helped defeat all the Signature Villains in Recluse's Victory, making you a Justiciar.` },
    { alignment: 'villain', value: `Defeating all the Signature Villains in Recluse's Victory has made your fall to villainy only that much sweeter. Now Recluse and his group won't even think about crossing you.` },
  ],
  acquisition: `Defeat all five Signature Villains in ${zoneLink(ReclusesVictory)}.`,
  links: [
    { title: 'Justiciar Badge', href: 'https://homecoming.wiki/wiki/Justiciar_Badge' },
    { title: 'Fallen Justiciar Badge', href: 'https://homecoming.wiki/wiki/Fallen_Justiciar_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/pvp/defeatrecluse.png',
  requirements: [
    { key: 'lr', type: 'task', notes: 'Lord Recluse' },
    { key: 'gw', type: 'task', notes: 'Ghost Widow' },
    { key: 'cm', type: 'task', notes: 'Captain Mako' },
    { key: 'bs', type: 'task', notes: 'Black Scorpion' },
    { key: 'sc', type: 'task', notes: 'Scirocco' },
  ],
}
