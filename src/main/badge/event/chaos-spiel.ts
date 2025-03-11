import { BadgeData } from 'coh-content-db'

export const ChaosSpiel: BadgeData = {
  type: 'EVENT',
  key: 'chaos-spiel',
  setTitle: { id: 2551 },
  name: [
    { value: 'Chaos Spiel' },
  ],
  alignment: ['H', 'V', 'P'],
  badgeText: [
    { value: `You think back on this moment often... Where did that chaotic impulse come from? An opportunity to test your strength? A chance to deviate from Ouroboros' timeline control? You may never find an answer for why you invoked Nemesis' name whilst time traveling.` },
  ],
  acquisition: `After earning both Best Man/Maid of Honor and Wedding Crasher, talk to Positron and choose the Nemesis option.`,
  links: [
    { title: 'Chaos Spiel', href: 'https://homecoming.wiki/wiki/Chaos_Spiel_Badge' },
  ],
  icon: [{ value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/event/chaos-spiel.png' }],
}
