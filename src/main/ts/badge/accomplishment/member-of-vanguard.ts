import { BadgeData, missionLink, missionUri } from 'coh-content-db'
import { WelcomeToVanguard } from '../../mission/welcome-to-vanguard'

export const MemberOfVanguard: BadgeData = {
  type: 'accomplishment',
  key: 'member-of-vanguard',
  setTitleId: [832],
  name: 'Member of Vanguard',
  morality: 'all',
  badgeText: 'You are now a member of Vanguard and can earn Merits for defeating Rikti.',
  acquisition: `Complete the "Join the Vanguard" mission of the ${missionLink(WelcomeToVanguard)} story arc.`,
  links: [
    { title: 'Member of Vanguard Badge', href: 'https://homecoming.wiki/wiki/Member_of_Vanguard_Badge' },
    { title: WelcomeToVanguard.name, href: missionUri(WelcomeToVanguard) },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/member-of-vanguard.png',
}
