import { BadgeData } from 'coh-content-db'
import { FirebaseZulu } from '../../zone/firebase-zulu'

export const Stormwatcher: BadgeData = {
  type: 'exploration',
  key: 'stormwatcher',
  setTitleId: [1799],
  name: 'Stormwatcher',
  morality: 'paragon-city-access',
  badgeText: `It was here that Earth's explorers first encountered the mysterious entities of the Shadow Shard.
Their threat was implicit and the need to keep them contained became a driving force in the establishment of Tempest Sector.
As a representative of Paragon City, you have joined the fight to prevent the denizens of the Shadow Shard from extending their range into your home dimension.
Some see their discovery of Primal Earth's dimension as inevitable; a "coming storm" which could rival the Rikti Invasion in destructive potential.`,
  notes: `Located 133 yards SW of the Tempest Sector marker, at the base of the ramp leading into the base.`,
  links: [
    { title: 'Stormwatcher Badge', href: 'https://homecoming.wiki/wiki/Stormwatcher_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hazard.png',
  requirements: [
    { key: 'loc-0', type: 'location', location: { zoneKey: FirebaseZulu.key, coords: [4872, 865, 992] }, vidiotMapKey: '3' },
  ],
}
