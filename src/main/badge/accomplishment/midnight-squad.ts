import { BadgeData, badgeLink, contactLink } from 'coh-content-db'
import { MontagueCastanella } from '../../contact/montague-castanella'
import { AshleyMcKnight } from '../../contact/ashley-mcknight'
import { HouseHunter } from '../exploration/house-hunter'

export const MidnightSquad: BadgeData = {
  type: 'ACCOMPLISHMENT',
  key: 'midnight-squad',
  setTitle: { id: 987 },
  name: 'Midnight Squad',
  alignment: ['H', 'V', 'P'],
  badgeText: 'You have proven yourself a worthy ally to the secretive order of mystics, magicians and scholars known as the Midnight Squad. Because of this, they have granted you access to their exclusive Midnighter Club.',
  acquisition: `Complete the "Lost and Found" story arc from ${contactLink(MontagueCastanella)}, "Midnight's Hand" from ${contactLink(AshleyMcKnight)}, or visit the ${badgeLink(HouseHunter)} exploration badge.`,
  links: [
    { title: 'Midnight Squad Badge', href: 'https://homecoming.wiki/wiki/Midnight_Squad_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/midnight-squad.png',
  requirements: [
    { key: 'lost-and-found', type: 'ARC', missionName: 'Lost and Found', contactKey: MontagueCastanella.key },
    { key: 'midnights-hand', type: 'ARC', missionName: `Midnight's Hand`, contactKey: AshleyMcKnight.key },
    { key: HouseHunter.key, type: 'BADGE', badgeKey: HouseHunter.key },
  ],
}
