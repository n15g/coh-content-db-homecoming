import { BadgeData, mapLink } from 'coh-content-db'
import { FirebaseZulu } from '../../map/firebase-zulu'

export const DefyingGravity: BadgeData = {
  type: 'EXPLORATION',
  key: 'defying-gravity',
  setTitle: { id: 1797 },
  name: [{ value: 'Defying Gravity' }],
  alignment: ['H'],
  mapKey: FirebaseZulu.key,
  loc: [6879, 928, 1070],
  badgeText: [{
    value: 'Visiting alien dimensions, as the briefing told you, can be a disorienting experience.'
      + ' In the Shadow Shard the rules of physics operate differently, where masses measuring in the megatonnes float unsupported in the open air.'
      + ' From this vantage you can get a clear picture of the massive size of the island Firebase Zulu sits upon, and see that truly it floats unaided in the alien air.'
      + ' The mind reels at the reality of it, and as the briefing warned it is best if one not contemplate this fact too deeply.',
  }],
  notes: `Located in ${mapLink(FirebaseZulu)} 225 yards WNW of the Firebase Zulu marker, at the top of rock on the western edge of the floating island.`,
  links: [
    { title: 'Defying Gravity Badge', href: 'https://homecoming.wiki/wiki/Defying_Gravity_Badge' },
  ],
  icon: [{ value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hazard.png' }],
  vidiotMapKey: '1',
}
