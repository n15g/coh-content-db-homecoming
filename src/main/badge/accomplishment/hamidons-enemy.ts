import { BadgeData, contactLink, zoneLink } from 'coh-content-db'
import { Ouroboros } from '../../zone/ouroboros'
import { InsideInformation } from '../../contact/inside-information'

export const HamidonsEnemy: BadgeData = {
  type: 'ACCOMPLISHMENT',
  key: 'hamidons-enemy',
  setTitle: { id: 2266 },
  name: `Hamidon's Enemy`,
  alignment: ['V'],
  badgeText: `You went back to Imperial City to find anything useful, but while you were there, you decided to send the Hamidon a message about who it shouldn't mess with.`,
  acquisition: `Defeat a total combination of 40 Devouring Earth or The Infested in the story arc from ${contactLink(InsideInformation)}.`,
  notes: `To get this badge in ${zoneLink(Ouroboros)}, a villain can select the "Praetoria's Hidden Treasure" entry with number 24.10 at level 50.`,
  links: [
    { title: `Hamidon's Enemy Badge`, href: 'https://homecoming.wiki/wiki/Hamidon%27s_Enemy_Badge' },
    { title: `Praetoria's Hidden Treasure`, href: `https://homecoming.wiki/wiki/Inside_Information#Praetoria's_Hidden_Treasure` },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/st-martial-challenge.png',
}
