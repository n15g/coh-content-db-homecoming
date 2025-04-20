import { BadgeData, missionLink } from 'coh-content-db'
import { AHerosHero } from '../../mission/a-heros-hero'

export const StatesmansPal: BadgeData = {
  type: 'defeat',
  key: 'statesmans-pal',
  setTitleId: [58],
  name: [
    { alignment: 'hero', value: `Statesman's Pal` },
    { alignment: 'villain', value: `Praetoria's Bane` },
  ],
  releaseDate: '2012-11-30',
  morality: 'heroic',
  badgeText: [
    { alignment: 'hero', value: 'You have rescued Statesman from the clutches of Praetoria.' },
    { alignment: 'villain', value: `In the past you rescued Statesman from the Praetorians. Perhaps today you might not do the same.` },
  ],
  acquisition: `Defeat Tyrant in the "Free Statesman" mission of the ${missionLink(AHerosHero)} story arc Flashback.`,
  notes: 'This mission is only available via Flashback.',
  links: [
    { title: `Statesman's Pal Badge`, href: 'https://homecoming.wiki/wiki/Statesman%27s_Pal_Badge' },
    { title: `Praetoria's Bane Badge`, href: 'https://homecoming.wiki/wiki/Praetoria%27s_Bane_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/defeat/praetorians.png',
}
