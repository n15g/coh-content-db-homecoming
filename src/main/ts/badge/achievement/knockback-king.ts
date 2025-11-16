import { BadgeData } from 'coh-content-db'

export const KnockbackKing: BadgeData = {
  type: 'achievement',
  key: 'knockback-king',
  setTitleId: [2580],
  name: [
    { sex: 'M', value: 'Knockback King' },
    { sex: 'F', value: 'Knockback Queen' },
  ],
  releaseDate: '2025-11-30',
  morality: 'any',
  badgeText: `While many working supers consider knockback an annoyance, you see it as an opportunity to put your opponents right where you want them. The Nemesis Army have learned a valuable lesson on why you should keep your arms and legs inside the moving train at all times.`,
  acquisition: `Defeat 50 enemies via [CRUNCH] on the final mission of Marigold 'Zoe' Langston's Task Force.`,
  links: [
    { title: 'Knockback King Badge', href: 'https://homecoming.wiki/wiki/Knockback_King_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/tf-zoe.png',

}
