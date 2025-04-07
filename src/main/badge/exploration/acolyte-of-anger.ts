import { BadgeData } from 'coh-content-db'
import { TheStormPalace } from '../../zone/the-storm-palace'

export const AcolyteOfAnger: BadgeData = {
  type: 'exploration',
  key: 'acolyte-of-anger',
  setTitleId: [1855],
  name: 'Acolyte of Anger',
  morality: 'heroic',
  zoneKey: TheStormPalace.key,
  loc: [-2133, -27, 8644],
  badgeText: `The Shadow Shard hates you. You can feel its anger pulsing in the air around you and the very ground you stand upon, throbbing up through your feet.
The wind is a roar of anger at your very presence, echoed by the Shadow Shard's twisted inhabitants.
You steel yourself against this emotional onslaught, unbowed by this world's hostility.
You will turn its hate and anger back upon itself; you will be an Acolyte of Anger who wields rage as a weapon against it.`,
  notes: `Located at the Lock of Anger marker.`,
  links: [
    { title: 'Acolyte of Anger Badge', href: 'https://homecoming.wiki/wiki/Acolyte_of_Anger_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hazard.png',
  vidiotMapKey: '2',
}
