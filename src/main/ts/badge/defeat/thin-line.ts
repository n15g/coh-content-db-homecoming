import { BadgeData } from 'coh-content-db'

export const ThinLine: BadgeData = {
  type: 'defeat',
  key: 'thin-line',
  setTitleId: [552],
  name: [
    { alignment: 'hero', value: 'Thin Line' },
    { alignment: 'villain', value: 'Outlaw' },
  ],
  releaseDate: '2012-11-30',
  morality: 'villainous',
  badgeText: [
    { alignment: 'hero', value: `The Paragon Police Department has an entire squad tracking you. They've let you know that you walk a Thin Line here in Paragon.` },
    { alignment: 'villain', value: `The Paragon Police Department can't come close to keeping you behind bars.` },
  ],
  acquisition: 'Defeat 1000 Paragon Police in Mayhem Missions.',
  links: [
    { title: 'Thin Line Badge', href: 'https://homecoming.wiki/wiki/Thin_Line_Badge' },
    { title: 'Outlaw Badge', href: 'https://homecoming.wiki/wiki/Outlaw_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/defeat/thin-line.png',
}
