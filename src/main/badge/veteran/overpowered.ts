import { BadgeData } from 'coh-content-db'

export const Overpowered: BadgeData = {
  type: 'veteran',
  key: 'overpowered',
  setTitleId: [2027],
  name: [
    { value: 'Overpowered' },
  ],
  morality: 'all',
  badgeText: [
    {
      alignment: 'hero',
      value: `The greatest threats of the universe have risen to challenge you, and you have prevailed. Any foe that dares threaten what is under your watchful vigil can be certain of what is coming for them. You have survived a thousand trials, quashed evil and ascended to ranks few can even comprehend. You are truly overpowered.`,
    },
    {
      alignment: 'villain',
      value: `Worlds have burned, people have bent to your will and it seems as if no mortal or god can end your dominion. You've eradicated more foes than could ever be counted, forged a trail of fear throughout the world and beyond and ascended to levels few can even comprehend. You are truly overpowered.`,
    },
  ],
  icon: [{ value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/veteran/overpowered.png' }],
  acquisition: 'Reach Veteran level 99',
}
