import { BadgeData, missionLink, missionUri } from 'coh-content-db'
import { PraetoriasLastGasp } from '../../mission/praetorias-last-gasp'

export const AvatarSmasher: BadgeData = {
  type: 'accomplishment',
  key: 'avatar-smasher',
  setTitleId: [2270],
  name: 'Avatar Smasher',
  morality: 'all',
  badgeText: 'You faced off against the Avatars of Hamidon by yourself, showing the Hamidon that you are a force to be reckoned with.',
  acquisition: `Defeat the three Avatars of Hamidon in the "Finale: New Earth" mission of the ${missionLink(PraetoriasLastGasp)} story arc after refusing help from the Imperial Defense Force.`,
  links: [
    { title: 'Avatar Smasher Badge', href: 'https://homecoming.wiki/wiki/Avatar_Smasher_Badge' },
    { title: PraetoriasLastGasp.key, href: missionUri(PraetoriasLastGasp) },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/incarnate-challenge.png',
}
