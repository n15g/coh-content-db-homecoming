import { BadgeData } from 'coh-content-db'
import { FirebaseZulu } from '../../zone/firebase-zulu'

export const DefyingGravity: BadgeData = {
  type: 'exploration',
  key: 'defying-gravity',
  setTitleId: [1797],
  name: 'Defying Gravity',
  morality: 'paragon-city-access',
  badgeText: `Visiting alien dimensions, as the briefing told you, can be a disorienting experience.
In the Shadow Shard the rules of physics operate differently, where masses measuring in the megatonnes float unsupported in the open air.
From this vantage you can get a clear picture of the massive size of the island Firebase Zulu sits upon, and see that truly it floats unaided in the alien air.
The mind reels at the reality of it, and as the briefing warned it is best if one not contemplate this fact too deeply.`,
  notes: `Located 225 yards WNW of the Firebase Zulu marker, at the top of rock on the western edge of the floating island.`,
  links: [
    { title: 'Defying Gravity Badge', href: 'https://homecoming.wiki/wiki/Defying_Gravity_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hazard.png',
  requirements: [
    { key: 'loc-0', type: 'location', location: { zoneKey: FirebaseZulu.key, coords: [6879, 928, 1070] }, vidiotMapKey: '1' },
  ],
}
