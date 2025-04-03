import { BadgeData } from 'coh-content-db'
import { DeputyAssistantOfInformation } from '../../contact/deputy-assistant-of-information'
import { Warrant } from '../../contact/warrant'
import { Reese } from '../../contact/reese'
import { MrGPraetorian } from '../../contact/mr-g-praetorian'
import { Transmuter } from '../../contact/transmuter'
import { TamiBaker } from '../../contact/tami-baker'
import { PraetorSinclair } from '../../contact/praetor-sinclair'
import { DrHetzfeld } from '../../contact/dr-hetzfeld'
import { Bobcat } from '../../contact/bobcat'
import { Neuron } from '../../contact/neuron'

export const Tyrant: BadgeData = {
  type: 'ACCOMPLISHMENT',
  key: 'tyrant',
  setTitle: { id: 2354 },
  name: 'Tyrant',
  alignment: ['H', 'V', 'P'],
  badgeText: `You ruthlessly took advantage of the Praetorian Loyalists in your pursuit of power, fame, and glory.`,
  acquisition: 'Complete every story arc in the Praetorian [Power Storyline](https://homecoming.wiki/wiki/Power_Storyline).',
  links: [
    { title: 'Tyrant Badge', href: 'https://homecoming.wiki/wiki/Tyrant_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/accomp_prae_loyal.png',
  requirements: [
    { key: 'sl', type: 'ARC', missionName: 'Shrewd Lessons', contactKey: DeputyAssistantOfInformation.key },
    { key: 'gam', type: 'ARC', missionName: 'Guns and Money', contactKey: Warrant.key },
    { key: 'rtp', type: 'ARC', missionName: 'Rise to Power', contactKey: Reese.key },
    { key: 'tss', type: 'ARC', missionName: 'The Strong Survive', contactKey: Reese.key },
    { key: 'pm', type: 'ARC', missionName: 'Personal Monster', contactKey: MrGPraetorian.key },
    { key: 'lg', type: 'ARC', missionName: 'Letting Go', contactKey: Transmuter.key },
    { key: 'dtd', type: 'ARC', missionName: 'Destroying the Destroyers', contactKey: TamiBaker.key },
    { key: 'tptc', type: 'ARC', missionName: 'The Power to Control', contactKey: PraetorSinclair.key },
    { key: 'ftt', type: 'ARC', missionName: 'For The Taking', contactKey: DrHetzfeld.key },
    { key: 'bff', type: 'ARC', missionName: 'Best Friends Forever', contactKey: Bobcat.key },
    { key: 'agam', type: 'ARC', missionName: 'A God Amongst Men', contactKey: Neuron.key },
    { key: 'piyw', type: 'ARC', missionName: 'Pride in Your Work', contactKey: Neuron.key },
  ],
}
