import { BadgeData } from 'coh-content-db'

export const HamidonsEnemy: BadgeData = {
  type: 'ACCOMPLISHMENT',
  key: 'hamidons-enemy',
  setTitle: { id: 2266 },
  name: [
    { value: 'Hamidon\'s Enemy' },
  ],
  alignment: ['V'],
  badgeText: [
    {
      value: `You went back to Imperial City to find anything useful, but while you were there, you decided to send the Hamidon a message about who it shouldn't mess with.`,
    },
  ],
  acquisition: 'Defeat a total combination of 40 Devouring Earth or The Infested in the Inside Information mission',
  links: [
    { title: 'Hamidon\'s Enemy Badge', href: 'https://homecoming.wiki/wiki/Hamidon%27s_Enemy_Badge' },
  ],
  icon: [
    { value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/st-martial-challenge.png' },
  ],
}
