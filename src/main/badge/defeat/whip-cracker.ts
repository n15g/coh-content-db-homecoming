import { BadgeData } from 'coh-content-db'

export const WhipCracker: BadgeData = {
  type: 'defeat',
  key: 'whip-cracker',
  setTitleId: [1436],
  name: 'Whip Cracker',
  morality: 'all',
  badgeText: [
    { alignment: 'hero', value: `You defeated Desdemona and her demons, however you saw a glimmer of good within her heart. Perhaps there's hope for her yet.` },
    { alignment: 'villain', value: `Desdemona was no match for you. Her will was weak, and she appeared to have second thoughts on being a villain.` },
  ],
  acquisition: 'Defeat Desdemona in an Alignment Mission or a Morality Mission.',
  links: [
    { title: 'Whip Cracker Badge', href: 'https://homecoming.wiki/wiki/Whip_Cracker_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/defeat/whip-cracker.png',
}
