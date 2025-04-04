import { BadgeData, contactLink, zoneLink } from 'coh-content-db'
import { Ouroboros } from '../../zone/ouroboros'
import { LordRecluse } from '../../contact/lord-recluse'

export const WorthyOpponent: BadgeData = {
  type: 'accomplishment',
  key: 'worthy-opponent',
  setTitleId: [2472],
  name: 'Worthy Opponent',
  morality: 'villainous',
  badgeText: `You have taken advantage of the Pillar of Ice and Flame to defeat Statesman and the Freedom Phalanx at their strongest.`,
  acquisition: `Complete the original ${contactLink(LordRecluse)}'s Strike Force in ${zoneLink(Ouroboros)} (called 'Future of Freedom') using the Old School Challenge.`,
  notes: `This is the original unnerfed version of Lord Recluse Strike Force, with the Old School Challenge disabling Incarnate powers, Super Inspirations and Enhancement Set Bonuses.`,
  links: [
    { title: 'Worthy Opponent Badge', href: 'https://homecoming.wiki/wiki/Worthy_Opponent_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/worthy-opponent.png',
}
