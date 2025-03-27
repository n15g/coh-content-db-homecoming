import { BadgeData, mapLink } from 'coh-content-db'
import { MonsterIsland } from '../../map/monster-island'
import { Grandville } from '../../map/grandville'

export const TheRoarOfTheBeast: BadgeData = {
  type: 'EXPLORATION',
  key: 'the-roar-of-the-beast',
  setTitle: { id: 1869 },
  name: [{ value: 'The Roar of the Beast' }],
  alignment: ['V'],
  mapKey: MonsterIsland.key,
  loc: [-1938, -17, -7960],
  badgeText: [{
    value: `Once this island was abuzz with human inhabitants and all the noise pollution they produce, but now, as you turn your ear to the wind, the only sounds are the collection of
            screeches, howls, and bellowing roars of the monsters that now call this place home.
            Arching your back you add your roar to theirs and for a moment they are quiet. What is this new monster who walks among them, invading their hunting grounds? You will show them.`,
  }],
  notes: `Located in ${mapLink(MonsterIsland)}, 265 yards southwest of the ${mapLink(Grandville)} transfer point, on the northernmost beach of the Cutlass Isles.`,
  links: [
    { title: 'The Roar of the Beast Badge', href: 'https://homecoming.wiki/wiki/The_Roar_of_the_Beast_Badge' },
  ],
  icon: [{ value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hazard.png' }],
  vidiotMapKey: '2',
}
