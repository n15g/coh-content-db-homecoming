import { BadgeData } from 'coh-content-db'
import { KallistiWharf } from '../../zone/kallisti-wharf'

export const FlagtownMemorialist: BadgeData = {
  type: 'history',
  key: 'flagtown-memorialist',
  setTitleId: [2557],
  name: 'Flagtown Memorialist',
  releaseDate: '2025-06-17',
  morality: 'all',
  badgeText: `You are now considered an academic in the history of Flagtown in Kallisti Wharf.`,
  links: [
    { title: 'Flagtown Memorialist Badge', href: 'https://homecoming.wiki/wiki/Flagtown_Memorialist_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/history/history-h.png',
  requirements: [
    {
      key: 'flag-0',
      type: 'monument',
      location: { zoneKey: KallistiWharf.key, coords: [6642.4, 71, 1663.6], icon: 'plaque', iconText: '11' },
      monumentText: `This hospital is dedicated to Dr. Padma Wadkar, a.k.a. Brightshield. Her glowing shield was often seen as a beacon of hope in a dark world.
During the Rikti bombing of Flagtown, Brightshield ushered as many people as she could through a portal that she opened to a safer area of the city.
The Rikti first tried to destroy her with ordnance from their dropships, and when they failed, they sent ground troops after her amidst the carnage.
In solemn remembrance and gratitude for her sacrifice, Emil Christie dedicated the new hospital to her memory, so that we may never forget her.`,
    },
    {
      key: 'flag-1',
      type: 'monument',
      location: { zoneKey: KallistiWharf.key, coords: [6083.7, 47, 2714.6], icon: 'pedestal', iconText: '12' },
      monumentText: `Flagtown is the metropolitan area that once took up most of the West Bank.
Like its East Bank counterpart, it was built up heavily in the 1910s and 1920s as a major commercial shipping port, and fell into decline during the 1930s.
It saw some revitalization during the war as factories popped up and replaced many of its warehouses, but it's one constant throughout all of that was Fort Steuben, which took up the lower third of the area, where the Paragon Trade Center now stands.`,
    },
    {
      key: 'flag-2',
      type: 'monument',
      location: { zoneKey: KallistiWharf.key, coords: [7286.4, 55.5, 3581.4], icon: 'plaque', iconText: '13' },
      monumentText: `Fort Steuben was closed in the 1970s, however it was reactivated during the Rikti War as a forward base of operations, flying the flag once again outside its gates.
When the base proved itself to be a more serious threat than much of the rest of the city, the Rikti utilized drop ships to bomb the entire West Bank into dust, annihilating Fort Steuben and the rest of Flagtown along with it.
On the morning of the second Rikti assault wave, the flagpole came down at 7:34 A.M., a time that most residents remember as the time hope faltered.`,
    },
    {
      key: 'flag-3',
      type: 'monument',
      location: { zoneKey: KallistiWharf.key, coords: [6977, 65, 3917.7], icon: 'pedestal', iconText: '15' },
      monumentText: `Before the park was built, a military base proudly stood here for almost a hundred years.
Fort Steuben was named for Baron Friedrich Wilhelm von Steuben, a Prussian-American who served in the continental army during the revolutionary war and taught basic military drills and tactics.
Appropriately, Fort Steuben was a training base founded in the late 19th century by the US Army.
It trained many of the men who fought during both World Wars. Its chief landmark was an immense 300 foot high flag pole that could be seen from anywhere in the Wharf, from which Flagtown got its name.`,
    },
    {
      key: 'flag-4',
      type: 'monument',
      location: { zoneKey: KallistiWharf.key, coords: [6930.1, 66.8, 4279.7], icon: 'plaque', iconText: '16' },
      monumentText: `Flagtown Memorial Park was built on the site of the former gates to Fort Steuben, where the eponymous flag once stood.
Enshrined there is an eternal flame and a memorial wall with the names of all the dead and missing that were lost when Flagtown was destroyed.
Many residents who still remember the recovery efforts call this time the 'Sleepless Nights', an homage to a popular song sung by an unnamed street performer from Theatre Row who would sing to the survivors and the rescue crews every night for three weeks to keep their morale high.`,
    },
    {
      key: 'flag-5',
      type: 'monument',
      location: { zoneKey: KallistiWharf.key, coords: [6404.9, 70, 3917.6], icon: 'pedestal', iconText: '14' },
      monumentText: `This section of the city, New Flagtown, is a dedicated residential complex consisting largely of high-rise apartments that can house thousands.
When Emil Christie sold off the various properties in the area, he made sure that the new owners were bound by contracts which ensured the housing was affordable, and that anyone who previously lived in Flagtown prior to its destruction and survived could move back.
Very few took the offer, as the scars of the Rikti War and the destruction of Flagtown ran deep, but there are some who live among its towers of steel and glass that remember.`,
    },
  ],
}
