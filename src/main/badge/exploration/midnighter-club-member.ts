import { BadgeData } from 'coh-content-db'
import { MidnighterClub } from '../../map/midnighter-club'

export const MidnighterClubMember: BadgeData = {
  type: 'EXPLORATION',
  key: 'midnighter-club-member',
  setTitle: { id: 992 },
  name: [{ value: 'Midnighter Club Member' }],
  alignment: ['H', 'V', 'P'],
  mapKey: MidnighterClub.key,
  loc: [105, 0, -150],
  badgeText: [{ value: 'Within these walls rests the greatest minds of mystic, occult, and arcane magics.' }],
  notes: 'The Midnighter Club Member Badge is located just inside the circular chamber at the North end of the Midnighter Club between the inner columns.',
  links: [
    { title: 'Midnighter Club Member Badge', href: 'https://homecoming.wiki/wiki/Midnighter_Club_Member_Badge' },
  ],
  icon: [
    { alignment: 'H', value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hero.png' },
    { alignment: 'V', value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/villain.png' },
  ],
  vidiotMapKey: '1',
}
