import { BadgeData } from 'coh-content-db'
import { RiktiWarZone } from '../../zone/rikti-war-zone'

export const Unabashed: BadgeData = {
  type: 'exploration',
  key: 'unabashed',
  setTitleId: [758],
  name: 'Unabashed',
  morality: 'all',
  zoneKey: RiktiWarZone.key,
  loc: [2947, -18, -5638],
  badgeText: [{ value: 'If you\'ve made it onto the Rikti Ship, under the defensive shields, you\'re either very brave or.....' }],
  notes: 'The Unabashed Badge is located in the center of the Rikti ship in both the instanced and normal versions of the ${zoneLink(RiktiWarZone)}.\n'
    + '\n'
    + 'The badge marker only be found when the shields have been taken down by destroying all 20 Rikti Pylons.',
  links: [
    { title: 'Unabashed Badge', href: 'https://homecoming.wiki/wiki/Unabashed_Badge' },
    { title: 'Updated RWZ Vidiot Map', href: 'https://forums.homecomingservers.com/topic/969-rikti-war-zone-badges-missing/?do=findComment&comment=27161' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hazard.png',
  vidiotMapKey: '8',
}
