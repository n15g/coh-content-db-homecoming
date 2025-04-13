import { ContactData } from 'coh-content-db'
import { SharkheadIsle } from '../zone/sharkhead-isle'

export const ArchmageTarixus: ContactData = {
  key: 'archmage-tarixus',
  name: 'Archmage Tarixus',
  title: 'Ancient Sorcerer',
  morality: 'villainous',
  location: { zoneKey: SharkheadIsle.key, coords: [793, 16, 1780] },
  levelRange: [25, 29],
  links: [{ title: 'Archmage Tarixus', href: 'https://homecoming.wiki/wiki/Archmage_Tarixus' }],
}
