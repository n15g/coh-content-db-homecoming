import { BadgeData } from 'coh-content-db'

export const Unveiler: BadgeData = {
  type: 'defeat',
  key: 'unveiler',
  setTitleId: [47],
  name: 'Unveiler',
  morality: 'all',
  badgeText: 'You have shown great endurance in tackling the Fake Nemesis robots time and time again in your search for the real Nemesis.',
  acquisition: 'Defeat 100 Fake Nemesis robots.',
  notes: `Fake Nemesis only spawn at or above level 40.

A Prototype False Nemesis appears in the Take on the false Nemesis mission from Anton Sampson, but it **does not** count towards the number required for the Unveiler badge.`,
  links: [
    { title: 'Unveiler Badge', href: 'https://homecoming.wiki/wiki/Unveiler_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/defeat/unveiler.png',
}
