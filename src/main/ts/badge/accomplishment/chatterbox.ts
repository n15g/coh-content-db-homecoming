import { BadgeData, contactLink, missionLink, missionUri, zoneLink } from 'coh-content-db'
import { FirstWard } from '../../zone/first-ward'
import { Nadia } from '../../contact/nadia'
import { BlindMakwa } from '../../contact/blind-makwa'
import { Palatine } from '../../contact/palatine'
import { KatieDouglas } from '../../contact/katie-douglas'
import { ANewDimensionANewTeam } from '../../mission/a-new-dimension-a-new-team'

export const Chatterbox: BadgeData = {
  type: 'accomplishment',
  key: 'chatterbox',
  setTitleId: [2263],
  name: 'Chatterbox',
  morality: 'heroic',
  badgeText: `You were sent in to handle things on Refugee Island, but you decided to catch up with some old friends from ${zoneLink(FirstWard)}.`,
  acquisition: `Speak to ${contactLink(Nadia)}, ${contactLink(BlindMakwa)}, ${contactLink(Palatine)} and ${contactLink(KatieDouglas)} from First Ward in the "Refugees" mission of the ${missionLink(ANewDimensionANewTeam)} story arc.`,
  links: [
    { title: 'Chatterbox Badge', href: 'https://homecoming.wiki/wiki/Chatterbox_Badge' },
    { title: ANewDimensionANewTeam.name, href: missionUri(ANewDimensionANewTeam) },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/brickstown-challenge.png',
  requirements: [
    { key: Nadia.key, type: 'task', notes: `${contactLink(Nadia)}`, location: { coords: [-1447, -3, -7093] } },
    { key: BlindMakwa.key, type: 'task', notes: `${contactLink(BlindMakwa)}`, location: { coords: [-1498, 0, -6365] } },
    { key: Palatine.key, type: 'task', notes: `${contactLink(Palatine)}`, location: { coords: [-2033, 0, -6569] } },
    { key: KatieDouglas.key, type: 'task', notes: `${contactLink(KatieDouglas)}`, location: { coords: [-1949, 0, -6486] } },
  ],
}
