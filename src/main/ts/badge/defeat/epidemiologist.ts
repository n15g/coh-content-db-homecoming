import { BadgeData, contactLink } from 'coh-content-db'
import { AgentWatkins } from '../../contact/agent-watkins'
import { DocBuzzsaw } from '../../contact/doc-buzzsaw'
import { Positron } from '../../contact/positron'

export const Epidemiologist: BadgeData = {
  type: 'defeat',
  key: 'epidemiologist',
  setTitleId: [2461],
  name: 'Epidemiologist',
  releaseDate: '2020-11-26',
  morality: 'all',
  badgeText: `You have made your name known to every notable Vahzilok leader (and their lackeys) you've encountered before, during, and after Dr. Vahzilok's incarceration, placing each of them in jail personally.`,
  acquisition: `Defeat Pathogen, Malady, Salamander, Newt, Cortex, Grey Matter, Dr. Vahzilok, Doc Buzzsaw, and Dr. Meinst.`,
  links: [
    { title: 'Epidemiologist Badge', href: 'https://homecoming.wiki/wiki/Epidemiologist_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/defeat/epidemiologist.png',
  requirements: [
    { key: 'pa', type: 'task', notes: `Pathogen - The Graveyard Shift (20-29 Hero Story Arc - ${contactLink(AgentWatkins)})` },
    { key: 'ma', type: 'task', notes: `Malady - The Graveyard Shift (20-29 Hero Story Arc - ${contactLink(AgentWatkins)})` },
    { key: 'sa', type: 'task', notes: `Salamander - The Graveyard Shift (20-29 Hero Story Arc - ${contactLink(AgentWatkins)})` },
    { key: 'ne', type: 'task', notes: `Newt - The Graveyard Shift (20-29 Hero Story Arc - ${contactLink(AgentWatkins)})` },
    { key: 'co', type: 'task', notes: `Cortex - ${contactLink(Positron)} Task Force Part Two, The Freakish Lab of Dr. Vahzilok (30-39 Villain Story Arc - ${contactLink(DocBuzzsaw)})` },
    { key: 'gm', type: 'task', notes: 'Grey Matter - The Graveyard Shift (20-29 Hero Story Arc - ${contactLink(AgentWatkins)})' },
    { key: 'dr', type: 'task', notes: `Dr. Vahzilok - ${contactLink(Positron)} Task Force Part Two` },
    { key: 'db', type: 'task', notes: `Doc Buzzsaw - ${contactLink(Positron)} Task Force Part Two` },
    { key: 'dm', type: 'task', notes: `Dr. Meinst - Death from Below, The Graveyard Shift (20-29 Hero Story Arc - ${contactLink(AgentWatkins)})` },
  ],
}
