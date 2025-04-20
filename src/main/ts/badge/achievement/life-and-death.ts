import { BadgeData } from 'coh-content-db'

export const LifeAndDeath: BadgeData = {
  type: 'achievement',
  key: 'life-and-death',
  setTitleId: [2167],
  name: 'Life and Death',
  releaseDate: '2012-11-30',
  morality: 'all',
  badgeText: `For a woman so obsessed with becoming Death Incarnate, Diabolique sure spent a lot of energy making sure that she had a ready supply of Lifegiving Essences to keep her alive during your final battle in Dilemma Diabolique.
In the end, though, they proved to be little more than an inconvenience for your league, as you did not allow a single one to successfully be used to heal her.`,
  acquisition: 'Defeat Diabolique without allowing her to heal from a single Lifegiving Essence during the final battle of the Dilemma Diabolique Trial.',
  links: [
    { title: 'Life and Death Badge', href: 'https://homecoming.wiki/wiki/Life_and_Death_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/it-dea.png',
}
