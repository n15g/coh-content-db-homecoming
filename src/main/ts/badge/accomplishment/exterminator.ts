import { BadgeData, missionLink, missionUri } from 'coh-content-db'
import { LostAndFoundTimothyRaymond } from '../../mission/lost-and-found-timothy-raymond'

export const Exterminator: BadgeData = {
  type: 'accomplishment',
  key: 'exterminator',
  setTitleId: [341],
  name: 'Exterminator',
  morality: 'villainous',
  badgeText: `The Rikti are like vermin. Good thing you were around to clean 'em out.`,
  acquisition: `Complete the "Eliminate Kit'Vul" mission during the ${missionLink(LostAndFoundTimothyRaymond)} story arc.`,
  links: [
    { title: 'Exterminator Badge', href: 'https://homecoming.wiki/wiki/Exterminator_Badge' },
    { title: LostAndFoundTimothyRaymond.name, href: missionUri(LostAndFoundTimothyRaymond) },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/stature-6.png',
}
