import { BadgeData, badgeLink } from 'coh-content-db'
import { PocketDVipGoldClubMember } from '../achievement/pocket-d-vip-gold-club-member'

export const Passport: BadgeData = {
  type: 'ACCOLADE',
  key: 'passport',
  setTitle: { id: 2433 },
  name: 'Passport',
  alignment: ['H', 'V', 'P'],
  badgeText: 'Your travels have taken you to mysterious and exotic places. You have faced many dangers, but now you have returned to the place you call home.',
  acquisition: `Acquire any ten exploration badges, or earn the ${badgeLink(PocketDVipGoldClubMember)} badge.`,
  effect: 'Awards the Long Range Teleporter power.',
  links: [
    { title: 'Passport Badge', href: 'https://homecoming.wiki/wiki/Passport_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accolade/passport.png',
}
