import { BadgeData, missionLink, missionUri } from 'coh-content-db'
import { PraetoriasHiddenTreasure } from '../../mission/praetorias-hidden-treasure'

export const HamidonsEnemy: BadgeData = {
  type: 'accomplishment',
  key: 'hamidons-enemy',
  setTitleId: [2266],
  name: `Hamidon's Enemy`,
  releaseDate: '2012-11-30',
  morality: 'villainous',
  badgeText: `You went back to Imperial City to find anything useful, but while you were there, you decided to send the Hamidon a message about who it shouldn't mess with.`,
  acquisition: `Defeat a total combination of 40 Devouring Earth or The Infested in the ${missionLink(PraetoriasHiddenTreasure)} story arc.`,
  links: [
    { title: `Hamidon's Enemy Badge`, href: 'https://homecoming.wiki/wiki/Hamidon%27s_Enemy_Badge' },
    { title: PraetoriasHiddenTreasure.name, href: missionUri(PraetoriasHiddenTreasure) },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/st-martial-challenge.png',
}
