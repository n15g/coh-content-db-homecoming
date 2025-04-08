import { BadgeData, contactLink } from 'coh-content-db'
import { DreamDoctor } from '../../contact/dream-doctor'

export const BailoutHero: BadgeData = {
  type: 'achievement',
  key: 'bailout-hero',
  setTitleId: [2206],
  name: [
    { alignment: 'hero', value: 'Bailout Hero' },
    { alignment: 'villain', value: 'Bailout Villain' },
  ],
  morality: 'all',
  badgeText: `The Freedom Phalanx and Vindicators were absorbed by Mot in their efforts to free Praetor Duncan.
You worked together with a team of super powered individuals and Dream Doctor to save them and Praetor Duncan, while also destroying Diabolique once and for all.`,
  acquisition: `Awarded after completing the ${contactLink(DreamDoctor)} mission to complete the Dilemma Diabolique trial.`,
  links: [
    { title: 'Bailout Hero Badge', href: 'https://homecoming.wiki/wiki/Bailout_Hero_Badge' },
    { title: 'Bailout Villain Badge', href: 'https://homecoming.wiki/wiki/Bailout_Villain_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/da-zone.png',
}
