import { BadgeData } from 'coh-content-db'

export const WentOffScript: BadgeData = {
  type: 'ACCOMPLISHMENT',
  key: 'went-off-script',
  setTitle: { id: 2436 },
  name: [
    { value: 'Went Off Script' },
  ],
  alignment: ['H'],
  badgeText: [
    { value: `You chose to defy your contact and risk the lives of countless innocents to put a firm end to the Vahzilok civil war.` },
  ],
  acquisition: 'Refuse to quarantine during The Graveyard Shift story arc.',
  links: [
    { title: 'Went Off Script Badge', href: 'https://homecoming.wiki/wiki/Went_Off_Script_Badge' },
  ],
  icon: [
    { value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/went-off-script.png' },
  ],
}
