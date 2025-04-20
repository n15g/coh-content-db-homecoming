import { BadgeData } from 'coh-content-db'
import { RiktiWarZone } from '../../zone/rikti-war-zone'

export const Luscious: BadgeData = {
  type: 'exploration',
  key: 'luscious',
  setTitleId: [754],
  name: 'Luscious',
  releaseDate: '2012-11-30',
  morality: 'all',
  badgeText: 'The Devouring Earth have chosen this spot to start bringing paradise back to a war-torn city.',
  notes: `Located in Bloody Lane neighborhood, 90 yds west of the Bloody Lane neighborhood marker.`,
  links: [
    { title: 'Luscious Badge', href: 'https://homecoming.wiki/wiki/Luscious_Badge' },
    { title: 'Updated RWZ Vidiot Map', href: 'https://forums.homecomingservers.com/topic/969-rikti-war-zone-badges-missing/?do=findComment&comment=27161' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hazard.png',
  requirements: [
    { key: 'loc-0', type: 'location', location: { zoneKey: RiktiWarZone.key, coords: [4243, -24, -1862], icon: 'badge', iconText: '6' } },
  ],
}
