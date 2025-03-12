import { BadgeData } from 'coh-content-db'

export const LifeAndDeath: BadgeData = {
  type: 'ACHIEVEMENT',
  key: 'life-and-death',
  setTitle: { id: 2167 },
  name: [
    { value: 'Life and Death' },
  ],
  alignment: ['H', 'V', 'P'],
  badgeText: [
    {
      value: 'For a woman so obsessed with becoming Death Incarnate, Diabolique sure spent a lot of energy '
        + 'making sure that she had a ready supply of Lifegiving Essences to keep her alive during your '
        + 'final battle in Dilemma Diabolique. In the end, though, they proved to be little more than an '
        + 'inconvenience for your league, as you did not allow a single one to successfully be used to '
        + 'heal her.',
    },
  ],
  acquisition: 'Defeat Diabolique without allowing her to heal from a single Lifegiving Essence during the final battle of the Dilemma Diabolique Trial',
  links: [
    { title: 'Life and Death Badge', href: 'https://homecoming.wiki/wiki/Life_and_Death_Badge' },
  ],
  icon: [
    { value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/it-dea.png' },
  ],
}
