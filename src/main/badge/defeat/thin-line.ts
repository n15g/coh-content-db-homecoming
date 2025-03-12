import { BadgeData } from 'coh-content-db'

export const ThinLine: BadgeData = {
  type: 'DEFEAT',
  key: 'thin-line',
  setTitle: { id: 552 },
  name: [
    { alignment: 'H', value: 'Thin Line' },
    { alignment: 'V', value: 'Outlaw' },
  ],
  alignment: ['V'],
  badgeText: [
    {
      alignment: 'H', value: 'The Paragon Police Department has an entire squad tracking you. They\'ve let you know that you '
        + 'walk a Thin Line here in Paragon.',
    },
    { alignment: 'V', value: 'The Paragon Police Department can\'t come close to keeping you behind bars.' },
  ],
  acquisition: 'Defeat 1000 Paragon Police (all kinds) in Mayhem Missions',
  links: [
    { title: 'Thin Line Badge', href: 'https://homecoming.wiki/wiki/Thin_Line_Badge' },
    { title: 'Outlaw Badge', href: 'https://homecoming.wiki/wiki/Outlaw_Badge' },
  ],
  icon: [
    { value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/defeat/thin-line.png' },
  ],
}
