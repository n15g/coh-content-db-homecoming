import { BadgeData, contactLink } from 'coh-content-db'
import { MariaJenkins } from '../../contact/maria-jenkins'

export const PositronsPal: BadgeData = {
  type: 'defeat',
  key: 'positrons-pal',
  setTitleId: [2240],
  name: [
    { alignment: 'hero', value: `Positron's Pal` },
    { alignment: 'villain', value: `Positron's Nemesis` },
  ],
  morality: 'heroic',
  badgeText: [
    { alignment: 'hero', value: 'You have rescued Positron from the clutches of Praetoria.' },
    { alignment: 'villain', value: 'In the past you rescued Positron from the Praetorians. Perhaps today you might not do the same.' },
  ],
  acquisition: `Complete the "A Hero's Epic" story arc from ${contactLink(MariaJenkins)}.`,
  links: [
    { title: `Positron's Pal Badge`, href: 'https://homecoming.wiki/wiki/Positron%27s_Pal_Badge' },
    { title: `Positron's Nemesis Badge`, href: 'https://homecoming.wiki/wiki/Positron%27s_Nemesis_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/defeat/praetorians.png',
}
