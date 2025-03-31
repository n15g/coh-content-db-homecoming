import { BadgeData } from 'coh-content-db'
import { CrystalKeeper } from '../accomplishment/crystal-keeper'
import { LastStand } from '../exploration/last-stand'
import { Strikebreaker } from '../accomplishment/strikebreaker'
import { Triumphant } from '../exploration/triumphant'
import { ManInBlack } from '../defeat/man-in-black'

export const InTherapy: BadgeData = {
  type: 'ACCOLADE',
  key: 'in-therapy',
  setTitle: { id: 537 },
  name: [
    { alignment: 'H', value: 'In Therapy' },
    { alignment: 'V', value: 'Megalomaniac' },
  ],
  alignment: ['V'],
  badgeText: [
    { alignment: 'H', value: `In order to get along with the heroes of Paragon City, you've started to see a professional about your desires for world domination.` },
    { alignment: 'V', value: `You've wanted more control and now you have it. Activating this power increases the power of all of your Sleeps, Holds, Immobilize, and Confuse for 60 seconds.` },
  ],
  effect: `Awards the Megalomaniac power.`,
  links: [
    { title: 'In Therapy Badge', href: 'https://homecoming.wiki/wiki/In_Therapy_Badge' },
    { title: 'Megalomaniac Badge', href: 'https://homecoming.wiki/wiki/Megalomaniac_Badge' },
  ],
  icon: [
    { value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accolade/in-therapy.png' },
  ],
  requirements: [[
    { key: CrystalKeeper.key, type: 'BADGE', badgeKey: CrystalKeeper.key },
    { key: LastStand.key, type: 'BADGE', badgeKey: LastStand.key },
    { key: ManInBlack.key, type: 'BADGE', badgeKey: ManInBlack.key },
    { key: Strikebreaker.key, type: 'BADGE', badgeKey: Strikebreaker.key },
    { key: Triumphant.key, type: 'BADGE', badgeKey: Triumphant.key },
  ]],
}
