import { BadgeData, badgeLink, missionLink } from 'coh-content-db'
import { HouseHunter } from '../exploration/house-hunter'
import { LostAndFoundMontagueCastanella } from '../../mission/lost-and-found-montague-castanella'
import { MidnightsHand } from '../../mission/midnights-hand'

export const MidnightSquad: BadgeData = {
  type: 'accomplishment',
  key: 'midnight-squad',
  setTitleId: [987],
  name: 'Midnight Squad',
  morality: 'all',
  badgeText: 'You have proven yourself a worthy ally to the secretive order of mystics, magicians and scholars known as the Midnight Squad. Because of this, they have granted you access to their exclusive Midnighter Club.',
  acquisition: `Complete either the ${missionLink(LostAndFoundMontagueCastanella)} or ${missionLink(MidnightsHand)} story arc, or collect the ${badgeLink(HouseHunter)} exploration badge.`,
  links: [
    { title: 'Midnight Squad Badge', href: 'https://homecoming.wiki/wiki/Midnight_Squad_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/midnight-squad.png',
  requirements: [
    { key: LostAndFoundMontagueCastanella.key, type: 'mission', missionKey: LostAndFoundMontagueCastanella.key },
    { key: MidnightsHand.key, type: 'mission', missionKey: MidnightsHand.key },
    { key: HouseHunter.key, type: 'badge', badgeKey: HouseHunter.key },
  ],
}
