import { BadgeData } from 'coh-content-db'
import { MidnighterClub } from '../../zone/midnighter-club'

export const MidnighterClubMember: BadgeData = {
  type: 'exploration',
  key: 'midnighter-club-member',
  setTitleId: [992],
  name: 'Midnighter Club Member',
  releaseDate: '2012-11-30',
  morality: 'all',
  badgeText: 'Within these walls rests the greatest minds of mystic, occult, and arcane magics.',
  notes: 'Located just inside the circular chamber at the North end of the Midnighter Club between the inner columns.',
  links: [
    { title: 'Midnighter Club Member Badge', href: 'https://homecoming.wiki/wiki/Midnighter_Club_Member_Badge' },
  ],
  icon: [
    { alignment: 'hero', value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hero.png' },
    { alignment: 'villain', value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/villain.png' },
  ],
  requirements: [
    { key: 'loc-0', type: 'location', location: { zoneKey: MidnighterClub.key, coords: [105, 0, -150], icon: 'badge', iconText: '1' } },
  ],
}
