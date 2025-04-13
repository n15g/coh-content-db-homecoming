import { BadgeData, badgeLink } from 'coh-content-db'
import { BestMan } from './best-man'
import { WeddingCrasher } from './wedding-crasher'

export const ChaosSpiel: BadgeData = {
  type: 'event',
  key: 'chaos-spiel',
  setTitleId: [2551],
  name: 'Chaos Spiel',
  morality: 'all',
  badgeText: `You think back on this moment often... Where did that chaotic impulse come from? An opportunity to test your strength?
A chance to deviate from Ouroboros' timeline control? You may never find an answer for why you invoked Nemesis' name whilst time traveling.`,
  acquisition: `After earning both ${badgeLink(BestMan)} and ${badgeLink(WeddingCrasher)}, talk to Positron and choose the Nemesis option.`,
  links: [
    { title: 'Chaos Spiel', href: 'https://homecoming.wiki/wiki/Chaos_Spiel_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/event/chaos-spiel.png',
}
