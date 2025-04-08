import { BadgeData } from 'coh-content-db'
import { FirstWard } from '../../zone/first-ward'

export const ShellShocked: BadgeData = {
  type: 'exploration',
  key: 'shell-shocked',
  setTitleId: [2051],
  name: 'Shell Shocked',
  morality: 'all',
  badgeText: `
First Ward is a terrifying, dangerous place, but there is no other location within the ruins that can evoke such powerful feelings of fear and dread.
Here, on an island left undisturbed by any of the forces vying for control, is the shell of a defeated Seed of Hamidon.
As a gentle breeze blows across the island from the nearby sunken city, one could be left feeling cold and alone, staring at the corpse of an alien monster that is a harbinger of a vastly
more powerful creature waiting just beyond the walls....`,
  notes: `Located in the The Fallen Seed neighborhood, almost perfectly equidistant between the Forbidden Crags and Sunken City markers,
on the north end of a series of biomass beneath the shell of the destroyed Seed of Hamidon.`,
  links: [
    { title: 'Shell Shocked Badge', href: 'https://homecoming.wiki/wiki/Shell_Shocked_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/praetorian.png',
  requirements: [
    { key: 'loc-0', type: 'location', location: { zoneKey: FirstWard.key, coords: [829, 23, 1955] }, vidiotMapKey: '4' },
  ],
}
