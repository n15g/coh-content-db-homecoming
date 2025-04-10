import { BadgeData } from 'coh-content-db'
import { TalosIsland } from '../../zone/talos-island'

export const SpankysCompetitor: BadgeData = {
  type: 'exploration',
  key: 'spankys-competitor',
  setTitleId: [1550],
  name: `Spanky's Competitor`,
  morality: 'paragon-city-access',
  badgeText: `This boardwalk was started some time ago by Robert Cooling, who was seeking to create an alternative to Spanky's Boardwalk on the other end of Talos,
mainly because he hated the name 'Spanky's Boardwalk'. He was mentioned in the news for some time before he mysteriously 'disappeared.'
The PPD closed the case after years of research when no sign of Robert Cooling could be found.`,
  notes: `Located in in the New Troy neighborhood, in the top landing of the boardwalk steps 152 yards southeast of the Tech store.`,
  links: [
    { title: `Spanky's Competitor Badge`, href: 'https://homecoming.wiki/wiki/Spanky%27s_Competitor_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hero.png',
  requirements: [
    { key: 'loc-0', type: 'location', location: { zoneKey: TalosIsland.key, coords: [-2417, 161, 7963], icon: 'badge', iconText: '8' } },
  ],
}
