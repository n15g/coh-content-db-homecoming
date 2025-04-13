import { BadgeData, missionLink, missionUri } from 'coh-content-db'
import { LostAndFoundMontagueCastanella } from '../../mission/lost-and-found-montague-castanella'

export const LostSavior: BadgeData = {
  type: 'accomplishment',
  key: 'lost-savior',
  setTitleId: [988],
  name: 'Lost Savior',
  morality: 'heroic',
  badgeText: `With the help of the Midnight Squad, Dawn Patrol and even a Rikti scientist, you've done the impossible. You've found a cure for the Lost.`,
  acquisition: `Complete the "Cure Lost" mission of the ${missionLink(LostAndFoundMontagueCastanella)} story arc.`,
  links: [
    { title: 'Lost Savior Badge', href: 'https://homecoming.wiki/wiki/Lost_Savior_Badge' },
    { title: LostAndFoundMontagueCastanella.name, href: missionUri(LostAndFoundMontagueCastanella) },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/lost-savior.png',
}
