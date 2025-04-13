import { BadgeData, zoneLink } from 'coh-content-db'
import { TheAbyss } from '../../zone/the-abyss'
import { Grandville } from '../../zone/grandville'

export const HereBeDragons: BadgeData = {
  type: 'exploration',
  key: 'here-be-dragons',
  setTitleId: [1862],
  name: 'Here Be Dragons',
  morality: 'all',
  badgeText: `This once was a place of amusement and adventure, a place for people to get up close and personal with real monsters.
What fools. The hubris on display here is staggering and you have to suppress the urge to snicker at the fate that befell them.
You deal with monsters all the time, literally and figuratively, and the last thing you'd do is treat them like some kind of side-show attraction for the kiddies.
You can't help but put yourself in the monsters' place; you'd have smashed and devoured these puny little humans too.`,
  notes: `Located 195 yards northeast of the ${zoneLink(Grandville)} transfer point, at the base of the large gate along the path leading from the submarine.`,
  links: [
    { title: 'Here Be Dragons Badge', href: 'https://homecoming.wiki/wiki/Here_Be_Dragons_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hazard.png',
  requirements: [
    { key: 'loc-0', type: 'location', location: { zoneKey: TheAbyss.key, coords: [-236, -43, 352], icon: 'badge', iconText: '3' } },
  ],
}
