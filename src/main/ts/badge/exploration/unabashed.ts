import { BadgeData } from 'coh-content-db'
import { RiktiWarZone } from '../../zone/rikti-war-zone'

export const Unabashed: BadgeData = {
  type: 'exploration',
  key: 'unabashed',
  setTitleId: [758],
  name: 'Unabashed',
  releaseDate: '2020-11-26',
  morality: 'all',
  badgeText: `If you've made it onto the Rikti Ship, under the defensive shields, you're either very brave or.....`,
  notes: `Located in the center of the Rikti ship when the shields have been taken down by destroying all 20 Rikti Pylons.`,
  links: [
    { title: 'Unabashed Badge', href: 'https://homecoming.wiki/wiki/Unabashed_Badge' },
    { title: 'Updated RWZ Vidiot Map', href: 'https://forums.homecomingservers.com/topic/969-rikti-war-zone-badges-missing/?do=findComment&comment=27161' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hazard.png',
  requirements: [
    { key: 'loc-0', type: 'location', location: { zoneKey: RiktiWarZone.key, coords: [2947, -18, -5638], icon: 'badge', iconText: '8' } },
  ],
}
