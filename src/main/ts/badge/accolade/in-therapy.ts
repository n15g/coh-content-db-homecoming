import { BadgeData } from 'coh-content-db'
import { CrystalKeeper } from '../accomplishment/crystal-keeper'
import { LastStand } from '../exploration/last-stand'
import { Strikebreaker } from '../accomplishment/strikebreaker'
import { Triumphant } from '../exploration/triumphant'
import { ManInBlack } from '../defeat/man-in-black'

export const InTherapy: BadgeData = {
  type: 'accolade',
  key: 'in-therapy',
  setTitleId: [537],
  name: [
    { alignment: 'hero', value: 'In Therapy' },
    { alignment: 'villain', value: 'Megalomaniac' },
  ],
  releaseDate: '2012-11-30',
  morality: 'villainous',
  badgeText: [
    { alignment: 'hero', value: `In order to get along with the heroes of Paragon City, you've started to see a professional about your desires for world domination.` },
    { alignment: 'villain', value: `You've wanted more control and now you have it. Activating this power increases the power of all of your Sleeps, Holds, Immobilize, and Confuse for 60 seconds.` },
  ],
  effect: `Awards the Megalomaniac power.`,
  links: [
    { title: 'In Therapy Badge', href: 'https://homecoming.wiki/wiki/In_Therapy_Badge' },
    { title: 'Megalomaniac Badge', href: 'https://homecoming.wiki/wiki/Megalomaniac_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accolade/in-therapy.png',
  requirements: [
    { key: CrystalKeeper.key, type: 'badge', badgeKey: CrystalKeeper.key },
    { key: LastStand.key, type: 'badge', badgeKey: LastStand.key },
    { key: ManInBlack.key, type: 'badge', badgeKey: ManInBlack.key },
    { key: Strikebreaker.key, type: 'badge', badgeKey: Strikebreaker.key },
    { key: Triumphant.key, type: 'badge', badgeKey: Triumphant.key },
  ],
}
