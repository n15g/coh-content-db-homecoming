import { BadgeData } from 'coh-content-db'

export const FireChief: BadgeData = {
  type: 'defeat',
  key: 'fire-chief',
  setTitleId: [213],
  name: [
    { alignment: 'hero', value: 'Fire Chief' },
    { alignment: 'villain', value: 'Asbestos' },
  ],
  morality: 'heroic',
  badgeText: [
    { alignment: 'hero', value: `The Hellions arsonists fear your name and the people of Paragon City look to you for their fire safety tips.` },
    { alignment: 'villain', value: `You're pretty much made of Asbestos as far as the Hellions arsonists are concerned. If anyone's going to burn this town down, it's going to be you.` },
  ],
  acquisition: 'Defeat 100 Fires and 100 Hellion Arsonists during a Hellion Arson event.',
  links: [
    { title: 'Fire Chief Badge', href: 'https://homecoming.wiki/wiki/Fire_Chief_Badge' },
    { title: 'Asbestos Badge', href: 'https://homecoming.wiki/wiki/Asbestos_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/defeat/firefighter.png',
}
