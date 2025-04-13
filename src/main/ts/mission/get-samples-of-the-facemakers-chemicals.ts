import { MissionData } from 'coh-content-db'
import { DrShellyPercey } from '../contact/dr-shelly-percey'

export const GetSamplesOfTheFacemakersChemicals: MissionData = {
  key: 'get-samples-of-the-facemakers-chemicals',
  name: `Get samples of the Facemaker's chemicals`,
  type: 'mission',
  morality: 'villainous',
  contactKeys: DrShellyPercey.key,
  levelRange: [10, 14],
  links: [
    { title: `Get samples of the Facemaker's chemicals`, href: `https://homecoming.wiki/wiki/Dr._Shelly_Percey#Get_samples_of_the_Facemaker's_chemicals` },
  ],
  flashback: {
    id: '6.19',
    name: `Steal Facemaker's Reanimation Chemicals`,
    levelRange: [10, 14],
  },
}
