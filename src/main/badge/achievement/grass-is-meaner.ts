import { BadgeData } from 'coh-content-db'

export const GrassIsMeaner: BadgeData = {
  type: 'ACHIEVEMENT',
  key: 'grass-is-meaner',
  setTitle: { id: 1465 },
  name: [
    { alignment: 'H', value: 'Grass Is Meaner' },
    { alignment: 'V', value: 'Grass Is Greener' },
  ],
  alignment: ['H', 'V', 'P'],
  badgeText: [
    {
      alignment: 'H', value: 'You have traveled from the relative safety of Paragon City to the rough and tumble Rogue '
        + 'Isles, where it seems even the grass is meaner.',
    },
    {
      alignment: 'V', value: 'You have traveled from the cutthroat Rogue Isles to the relative calm and prosperity of '
        + 'Paragon City, where it definitely seems the grass is greener.',
    },
  ],
  acquisition: 'Travel to the Rogue Isles as a Vigilante / Travel to Paragon City as a Rogue',
  links: [
    { title: 'Grass Is Meaner Badge', href: 'https://homecoming.wiki/wiki/Grass_Is_Meaner_Badge' },
    { title: 'Grass Is Greener Badge', href: 'https://homecoming.wiki/wiki/Grass_Is_Greener_Badge' },
  ],
  icon: [
    { value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/grass-is-meaner.png' },
  ],
}
