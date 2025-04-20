import { BadgeData } from 'coh-content-db'
import { TheStormPalace } from '../../zone/the-storm-palace'

export const CourtingMadness: BadgeData = {
  type: 'exploration',
  key: 'courting-madness',
  setTitleId: [1854],
  name: 'Courting Madness',
  releaseDate: '2012-11-30',
  morality: 'paragon-city-access',
  badgeText: `As humanity has begun expanding its interests into extra-dimensional spaces, particularly the Shadow Shard, peculiar psychological disorders have begun to infect those
spending a large amount of time away from their home dimension.
New categories of mental illness have been coined to give shape to the odd manias and delusions creeping into the minds of the people staffing the outposts in Firebase Zulu,
and you too have had strange thoughts emerging unbidden from your own psyche.
Yet you continue to engage this strange place in a race against time: either you will stand triumphant against the Shadow Shard's many challenges, or you will succumb to the madness
that has claimed lesser minds.`,
  notes: `Located 34 feet north of the Path of Madness marker.`,
  links: [
    { title: 'Courting Madness Badge', href: 'https://homecoming.wiki/wiki/Courting_Madness_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hazard.png',
  requirements: [
    { key: 'loc-0', type: 'location', location: { zoneKey: TheStormPalace.key, coords: [1630, -65, 10_144], icon: 'badge', iconText: '1' } },
  ],
}
