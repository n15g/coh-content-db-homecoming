import { BadgeData } from 'coh-content-db'

export const CallOfTheVoid: BadgeData = {
  type: 'DEFEAT',
  key: 'call-of-the-void',
  setTitle: { id: 2484 },
  name: [
    { value: 'Call of the Void' },
  ],
  alignment: ['H', 'V', 'P'],
  badgeText: [
    { value: `When you stared into the void and it stared back, you demonstrated to the Nictus-empowered Void Hunters that their quarry here on Earth would not be such easy prey.` },
  ],
  acquisition: `Defeat 100 Void Hunters.`,
  links: [
    { title: 'Call of the Void Badge', href: 'https://homecoming.wiki/wiki/Call_of_the_Void_Badge' },
  ],
  icon: [
    { value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/defeat/call-of-the-void.png' },
  ],
}
