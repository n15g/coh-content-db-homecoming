import { BadgeData, zoneLink } from 'coh-content-db'
import { MonsterIsland } from '../../zone/monster-island'
import { Grandville } from '../../zone/grandville'

export const TheRoarOfTheBeast: BadgeData = {
  type: 'exploration',
  key: 'the-roar-of-the-beast',
  setTitleId: [1869],
  name: 'The Roar of the Beast',
  morality: 'villainous',
  zoneKey: MonsterIsland.key,
  loc: [-1938, -17, -7960],
  badgeText: `
Once this island was abuzz with human inhabitants and all the noise pollution they produce, but now, as you turn your ear to the wind, the only sounds are the collection of
screeches, howls, and bellowing roars of the monsters that now call this place home.
Arching your back you add your roar to theirs and for a moment they are quiet. What is this new monster who walks among them, invading their hunting grounds? You will show them.`,
  notes: `Located in ${zoneLink(MonsterIsland)}, 265 yards southwest of the ${zoneLink(Grandville)} transfer point, on the northernmost beach of the Cutlass Isles.`,
  links: [
    { title: 'The Roar of the Beast Badge', href: 'https://homecoming.wiki/wiki/The_Roar_of_the_Beast_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hazard.png',
  vidiotMapKey: '2',
}
