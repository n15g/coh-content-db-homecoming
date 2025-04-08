import { BadgeData, zoneLink } from 'coh-content-db'
import { Ouroboros } from '../../zone/ouroboros'
import { OliviaChung } from '../../contact/olivia-chung'
import { DrAnnMarieEngles } from '../../contact/dr-ann-marie-engles'
import { JulianaNehring } from '../../contact/juliana-nehring'
import { PavelGarnier } from '../../contact/pavel-garnier'

export const PlagueStopper: BadgeData = {
  type: 'accomplishment',
  key: 'plague-stopper',
  setTitleId: [73],
  name: [
    { alignment: 'hero', value: 'Plague Stopper' },
    { alignment: 'villain', value: 'Deadly Virus' },
  ],
  morality: 'heroic',
  badgeText: 'You were key in stopping a plague from overtaking Paragon City.',
  notes: `To get this badge in ${zoneLink(Ouroboros)}, a hero can select the "Vahzilok Wasting Disease" entry with number 0.07 in the 15-19 level range.`,
  links: [
    { title: 'Plague Stopper Badge', href: 'https://homecoming.wiki/wiki/Plague_Stopper_Badge' },
    { title: 'Deadly Virus Badge', href: 'https://homecoming.wiki/wiki/Deadly_Virus_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/plague-stopper.png',
  requirements: [
    { key: 'fadtc', type: 'ARC', missionName: `Find and Destroy the Containers the Vahzilok are Using to Store the Disease`, contactKey: [OliviaChung.key, DrAnnMarieEngles.key, JulianaNehring.key, PavelGarnier.key] },
  ],
}
