import { BadgeData } from 'coh-content-db'

export const GrassIsMeaner: BadgeData = {
  type: 'achievement',
  key: 'grass-is-meaner',
  setTitleId: [1465],
  name: [
    { alignment: 'hero', value: 'Grass Is Meaner' },
    { alignment: 'villain', value: 'Grass Is Greener' },
  ],
  morality: 'all',
  badgeText: [
    { alignment: 'hero', value: 'You have traveled from the relative safety of Paragon City to the rough and tumble Rogue Isles, where it seems even the grass is meaner.' },
    { alignment: 'villain', value: 'You have traveled from the cutthroat Rogue Isles to the relative calm and prosperity of Paragon City, where it definitely seems the grass is greener.' },
  ],
  acquisition: 'Travel to the Rogue Isles as a Vigilante / Travel to Paragon City as a Rogue.',
  links: [
    { title: 'Grass Is Meaner Badge', href: 'https://homecoming.wiki/wiki/Grass_Is_Meaner_Badge' },
    { title: 'Grass Is Greener Badge', href: 'https://homecoming.wiki/wiki/Grass_Is_Greener_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/grass-is-meaner.png',
}
