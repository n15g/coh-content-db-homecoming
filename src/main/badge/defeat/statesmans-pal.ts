import { BadgeData, contactLink } from 'coh-content-db'
import { MariaJenkins } from '../../contact/maria-jenkins'

export const StatesmansPal: BadgeData = {
  type: 'defeat',
  key: 'statesmans-pal',
  setTitleId: [58],
  name: [
    { alignment: 'hero', value: `Statesman's Pal` },
    { alignment: 'villain', value: `Praetoria's Bane` },
  ],
  morality: 'heroic',
  badgeText: [
    { alignment: 'hero', value: 'You have rescued Statesman from the clutches of Praetoria.' },
    { alignment: 'villain', value: `In the past you rescued Statesman from the Praetorians. Perhaps today you might not do the same.` },
  ],
  acquisition: `Defeat Tyrant in the "Free Statesman" mission of the "A Hero's Hero" arc from ${contactLink(MariaJenkins)}.`,
  links: [
    { title: `Statesman's Pal Badge`, href: 'https://homecoming.wiki/wiki/Statesman%27s_Pal_Badge' },
    { title: `Praetoria's Bane Badge`, href: 'https://homecoming.wiki/wiki/Praetoria%27s_Bane_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/defeat/praetorians.png',
}
