import { BadgeData, contactLink } from 'coh-content-db'
import { MenderRamiel } from '../../contact/mender-ramiel'

export const AlphaUnlocked: BadgeData = {
  type: 'accolade',
  key: 'alpha-unlocked',
  setTitleId: [1390],
  name: 'Alpha Unlocked',
  releaseDate: '2012-11-30',
  morality: 'all',
  badgeText: `You unlocked your Alpha Incarnate slot allowing you to create powerful new abilities that can be slotted there.`,
  acquisition: `Unlock the Alpha Incarnate slot.`,
  notes: `Unlock the Alpha Incarnate slot by reaching level 50 and completing ${contactLink(MenderRamiel)}'s story arc, or by earning Incarnate Experience through normal play.`,
  links: [
    { title: 'Alpha Unlocked Badge', href: 'https://homecoming.wiki/wiki/Alpha_Unlocked_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accolade/alpha-unlocked.png',
}
