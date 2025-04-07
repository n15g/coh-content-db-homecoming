import { BadgeData, zoneLink } from 'coh-content-db'
import { AtlasPark } from '../../zone/atlas-park'
import { Brickstown } from '../../zone/brickstown'
import { FoundersFalls } from '../../zone/founders-falls'
import { IndependencePort } from '../../zone/independence-port'
import { KallistiWharf } from '../../zone/kallisti-wharf'
import { KingsRow } from '../../zone/kings-row'
import { PeregrineIsland } from '../../zone/peregrine-island'
import { PerezPark } from '../../zone/perez-park'
import { SkywayCity } from '../../zone/skyway-city'
import { SteelCanyon } from '../../zone/steel-canyon'
import { TalosIsland } from '../../zone/talos-island'
import { TerraVolta } from '../../zone/terra-volta'
import { TheHollows } from '../../zone/the-hollows'

export const Bicentennial: BadgeData = {
  type: 'history',
  key: 'bicentennial',
  setTitleId: [2515],
  name: 'Bicentennial',
  morality: 'heroic',
  badgeText: `Whether love, fascination or obsession, none can deny your powerful feelings for Paragon City, as evidenced by your efforts to explore the city's 200-year history. You've taken the time to learn about everything from infrastructure to some of the greatest crises and heroes of the city's rich legacy.`,
  links: [
    { title: 'Bicentennial Badge', href: 'https://homecoming.wiki/wiki/Bicentennial_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/history/bicentennial.png',
  requirements: [
    {
      key: 'bicn-0',
      type: 'PLAQUE',
      zoneKey: AtlasPark.key,
      plaqueType: 'MONUMENT',
      loc: [330.45, 3.93, 397.33],
      plaqueInscription: `On February 3, 1931, Rudolph Augustus Seifert arrived at Central Station near City Park - now Atlas Park. A Swiss foreigner, the architect found himself in Paragon City by chance, and by some miracle our city had found one of its most gifted artists in turn. Rudolph loved Paragon dearly and dedicated his life's work to uplifting the city in its darkest days.

      Rudolph collaborated with architectural firm Ashburn and Cross to build a new vision of Paragon under the Paragon City Architectural Commision. This partnership was most notably responsible for such incredible sights as Independence Port's Valor Bridge and, most famously, the iconic statue of Atlas dominating the Atlas Park skyline ever since its completion and inauguration in April 1946. This plaque lies outside Hotel Geneva, Seifert's very first project within the city and the beginning of a quiet but deeply impactful legacy. Rudolph Augustus Seifert passed away in 1981, aged 83, survived only by the city he loved so very dearly.`,
      notes: `This plaque is in ${zoneLink(AtlasPark)}, roughly 258 yards south-southwest of the Atlas Plaza neighborhood marker.`,
      vidiotMapKey: '8',
    },
    {
      key: 'bicn-1',
      type: 'PLAQUE',
      zoneKey: AtlasPark.key,
      plaqueType: 'MONUMENT',
      loc: [1003.35, 4.08, -603.9],
      plaqueInscription: `Beside this plaque lies a piece of the original Spirit of Freedom. Piloted by Captain Finney of the Narragansett Airship Company, the Spirit of Freedom was the famous blimp that made its home in the skies of Paragon City. Damaged beyond repair by the Rikti in the 2002 invasion after trafficking numerous wounded civilians out of the battlefield, a replacement was constructed by the American Blimp Corporation in Oregon in 2003.

      Both the original and current Spirit of Freedom have been an iconic installation above Paragon's skyline for over 30 years, with the original blimp taking to the skies in 1990. All this time, Captain Finney has remained its Chief Pilot, leading a crew of 18. Throughout the Spirit of Freedom's dual lifetimes, it has performed such duties as medical transport, law enforcement assistant, radio and television broadcaster, research facility, weather balloon, and surveillance blimp. Whatever its role, the Spirit of Freedom has always served Paragon as an icon of progress and safety.`,
      notes: `This plaque is in ${zoneLink(AtlasPark)}, roughly 85 yards southeast of the Prometheus Park neighborhood marker.`,
      vidiotMapKey: '9',
    },
    {
      key: 'bicn-2',
      type: 'PLAQUE',
      zoneKey: AtlasPark.key,
      plaqueType: 'MONUMENT',
      loc: [-1588, 3.8, -1954.7],
      plaqueInscription: `The Vietnam War was the start of a national shift in perspective on international conflict and anti-war ideologies. This plaque marks the location of the largest protest during the war, taking place on August 3, 1969. Paragon's people amassed here, before marching down the streets en masse towards City Hall.

      The protest was led first and foremost by the hero Elementar, a founding member of the Freedom Phalanx, who quit the supergroup in order to lead the protest after Statesman and Maiden Justice declared that it would not become involved in politics. With him at the lead, tens of thousands of people - heroes, veterans, office employees, construction workers, students, teachers, and all walks of life - marched in unity against the costs of war and the U.S. involvement.

      Elementar remained a strong face for the anti-war movement for the rest of his hero career until he became one with the storm to save the city from the entity known as the Broodcloud in 1978. Symbolism featuring his name and costume is still used in Paragon's anti-war protests and movements to this day.`,
      notes: `This plaque is in ${zoneLink(AtlasPark)}, roughly 502 yards north-northeast of the Hyperion Way neighborhood marker.`,
      vidiotMapKey: '10',
    },
    {
      key: 'bicn-3',
      type: 'PLAQUE',
      zoneKey: Brickstown.key,
      plaqueType: 'MONUMENT',
      loc: [-238.33, 3.81, 881.67],
      plaqueInscription: `The 1950's marked the beginning of a tense and difficult time for the people of Paragon City with the initiation of the Cold War between the United States of America and the U.S.S.R. Anti-communist concerns began to grow in dominance in America, and with it, distrust of one's peers, with fear that anyone could be a secret spy for the Russian military.

      Paragon City was not immune to this - if anything, fear was more pronounced, and concern was turned towards the power imbalance inherent in our heavily powered society. Civilian concerns rose regarding the risks of heroes, and registration laws grew increasingly strict and decreasingly tolerant of those who decided to work around them. The most egregious example of this was the 'hero draft', or the Might for Right act, forcing heroes to work for the CIA, FBI, and Department of Defense in anti-Russian operations. Many of those who refused were locked up within Zigursky Penitentiary, the colossal prison complex that looms above over Brickstown. This theater was later revealed to be a location that protected and hid some of the most vulnerable.

      Here we acknowledge those heroes - many of whom were minority demographics - that were forced into the dangerous and quiet war against the Soviets.`,
      notes: `This plaque is in ${zoneLink(Brickstown)}, roughly 53 yards southeast of the Seven Gates neighborhood marker.`,
      vidiotMapKey: '6',
    },
    {
      key: 'bicn-4',
      type: 'PLAQUE',
      zoneKey: FoundersFalls.key,
      plaqueType: 'MONUMENT',
      loc: [4911.8, 3.8, 4544],
      plaqueInscription: `On March 8, 2003, a grave new threat to Paragon City arose via the bold, dangerous, and unhinged action of one man and his followers: Hamidon Pasalima. In the name of his ecoactivism, Hamidon led an ecoterrorist raid on Paragon City University. On the premises they created a new mutagenic mold - the Will of the Earth. In a cruel twist of fate, Hamidon used the mold on himself in desperation when his raid on an animal testing facility was interrupted by the notorious invisible hero Refactor. There were no survivors amidst the lab's ravaged rooms, and Hamidon escaped justice. The monstrous 'Devouring Earth' showed up weeks later claiming Hamidon as their leader, abducting citizens and heroes in brazen attacks. One only needs to gaze upon what remains of Woodvale beyond this gate to know that few threats in this world are as dangerous as being betrayed by the very ground you stand on.

      It is only by the diligent actions of Paragon's heroes that the spread of the Devouring Earth was halted. It is said that the hero known as Woodsman is the counterbalance to this ecological threat, but those who know are not forward with the details.`,
      notes: `This plaque is in ${zoneLink(FoundersFalls)}, roughly 271 yards west-southwest of the Hutchinson Park neighborhood marker.`,
      vidiotMapKey: '3',
    },
    {
      key: 'bicn-5',
      type: 'PLAQUE',
      zoneKey: FoundersFalls.key,
      plaqueType: 'WALL_PLAQUE',
      loc: [1835.88, 5.23, 2568],
      plaqueInscription: `4:30pm, May 23, 2002: Our world was changed forever.

      The events that transpired that day marked the beginning of the Rikti threat and the start of the first Rikti Invasion. Lights appeared all over the world, which, four hours later, proved to be portals as legions of Rikti invasion forces came streaming out of them. It was the most horrific and devastating event in the history of the human race, with a death toll of hundreds of thousands in the very first 24 hours. For another six months the Rikti War raged between the heroes of Paragon City, in collaboration with Vanguard, and the alien menace. During that time, entire portions of the city were decimated, with damage costs in the trillions. In an attempt to preserve what remained of our city, the War Walls were built. Of note, a Rikti Mothership crash landed in the area of White Plains, destroying it in an instant and reducing whole neighborhoods to dust in its wake. The shields of the ship remained intact, but the ship remained inert - leading to the decree of the region as a Hazard Zone for further surveillance, research, and potential threat response plans.

      It was only thanks to the selfless sacrifice of the Alpha and Omega Teams that humanity stood a chance, as they mobilized to take down the primary Rikti portal. Though successful, it was not without many sacrifices, including the loss of most of the Omega Team.

      However, it was not over. Again, on July 24, 2007, the Rikti invasion resumed, with aliens streaming out of the ship in White Plains, now dubbed the Rikti War Zone. This invasion was far more targeted at Paragon City. Dropships flew over the city, their bombs plunging to the ground. Shortly afterwards, portals opened and troops streamed out - but this time the heroes of Paragon were prepared. Damage caused by the alien threat has been successfully minimized ever since.

      The Rikti have not given up on their plans, whatever they may be. Continued small-scale attacks are directed at Paragon City to this day, but heroes are always at the ready, prepared to take on the duty of defending our great city.`,
      notes: `This plaque is in ${zoneLink(FoundersFalls)}, roughly 204 yards east of The Red River neighborhood marker.`,
      vidiotMapKey: '4',
    },
    {
      key: 'bicn-6',
      type: 'PLAQUE',
      zoneKey: IndependencePort.key,
      plaqueType: 'WALL_PLAQUE',
      loc: [-2143, 6.1, 3651.15],
      plaqueInscription: `This plaque marks the location of the South End Rail Riot of 1911, a fundamental moment in the history of transport in Paragon City. The open violence of this event was a direct result of the conflict between the three companies vying for control over Paragon City's newly budding transport network. The disruption and loss of life caused would lead to the Railway Consolidation Act, ending private ownership of the city's railways and the formation of the Paragon Rail Company.

      Over the course of the next century, the Green, Red, and Yellow lines would become significantly overhauled and then automated via the PTA: the Paragon Transit Authority. The Red line would later be destroyed in the events of the Rikti war, and in 2010 the Green and Yellow lines would be merged into one unified network, marking the conclusive end of a tumultuous and bloody story, and a new chapter in the history of Paragon City.`,
      notes: `This plaque is in ${zoneLink(IndependencePort)}, roughly 406 yards northeast of the Justice Quay neighborhood marker, near the bottom of the ramp into the tram station.`,
      vidiotMapKey: '5',
    },
    {
      key: 'bicn-7',
      type: 'PLAQUE',
      zoneKey: IndependencePort.key,
      plaqueType: 'MONUMENT',
      loc: [-1398.45, 19.35, -4908.45],
      plaqueInscription: `Paragon's involvement in World War 2 began on December 7th, 1941, when Nazi German supersoldiers struck Independence Port. The hero Atlas held them there, sacrificing his life for our great city, allowing the Freedom Phalanx time to assemble and drive the invaders back.

      From there on, the heroes of Paragon played an instrumental role in the War and ultimately contributed significantly to victory against the Axis forces.

      This plaque memorializes the citizens of Paragon City, whether powered or not, who fought in the War, especially those who lost their lives. Their legacy will be forever remembered.`,
      notes: `This plaque is in ${zoneLink(IndependencePort)}, roughly 353 yards north of the Crey Cove neighborhood marker.`,
      vidiotMapKey: '6',
    },
    {
      key: 'bicn-8',
      type: 'PLAQUE',
      zoneKey: KallistiWharf.key,
      plaqueType: 'WALL_PLAQUE',
      loc: [5337.95, 50.95, 4543.9],
      plaqueInscription: `On June 28, 1969, American police raided the gay bar known as the Stonewall Inn in Lower Manhattan, NYC. This would trigger a violent riot that would spark the flame of progress all across the United States of America. Paragon City was not excluded from this sweeping push for progress, with both civilians and heroes making a stand side-by-side and campaigning for equal rights for gay, lesbian, bisexual, and transgender individuals across the nation. It was here on this street, marked by these rainbow-painted benches, that the very first annual Paragon Pride Parade was held on July 4, 1969, with future Pride events being held on the day of the Riots, June 28.

      One of the lead organizers of the event was the hero Captain Indomitable, who took it upon himself at this location to publicly reveal his name and identity as Wayne Evans (1943-2004), thus coming out as Paragon City's first openly gay registered hero. Wayne would go on to campaign heavily in the public forum for better representation and true acceptance of queer minorities. We remember his important legacy in paving the way as a role model for many more members of the LGBTQ+ community to feel comfortable to be open and true to themselves. You are welcome here, you are home, and you are loved.`,
      notes: `This plaque is in ${zoneLink(KallistiWharf)}, roughly 106 yards northeast of the Blackwing Headquarters neighborhood marker.`,
      vidiotMapKey: '1',
    },
    {
      key: 'bicn-9',
      type: 'PLAQUE',
      zoneKey: KingsRow.key,
      plaqueType: 'WALL_PLAQUE',
      loc: [-767.95, 33.58, 1272.05],
      plaqueInscription: `In 1823, during the 'Era of Good Feelings' that followed the War of 1812, the town of Smithport united with neighboring villages to create a large and bustling port city. The first mayor of the city, George Maylor, named the region after his desire to build a city to represent the pinnacle of virtue, justice, freedom, and prosperity within the United States: Paragon City. The city that would one day become known as the birthplace of the modern hero. As guardian and champion of the people, the Hero remains the truest symbol of those noble, defiant ideals; the exalted spirit of Paragon made manifest.

      This plaque was placed in 2023, alongside a number of others, to celebrate the 200th anniversary of the birth of the city. These streets have changed in many ways since that first union, and the people have been through many trials, but those ideals remain true within us, and we remain victorious.`,
      notes: `This plaque is in ${zoneLink(KingsRow)}, roughly 237 yards north of the Freedom Plaza neighborhood marker, on a short wall in front of Blue Steel.`,
      vidiotMapKey: '6',
    },
    {
      key: 'bicn-10',
      type: 'PLAQUE',
      zoneKey: KingsRow.key,
      plaqueType: 'MONUMENT',
      loc: [-239.35, 4.1, 2273.7],
      plaqueInscription: `On June 6, 1896, a young man by the name of Marcus Cole was born in this hospital. Marcus Cole would go on to don the title of Statesman, future leader of the Freedom Phalanx and one of the greatest heroes in history. A man with an immense legacy spanning over a century, with an impact felt in Paragon to this very day, Marcus served in the American military as early as the first World War and served Paragon as its most loyal defender. His watch continued all the way through into the 21st century, when he tragically lost his life to a madman that was bent on using his powers for evil. Even in his death, the world rallied to honor him and delivered justice to the terrorist before it was too late.

      This plaque recognizes one man's incredible impact, devotion, and loyalty to his city and a legacy that goes unrivaled by any among us. May we all strive to change as many lives as Marcus Cole.`,
      notes: `This plaque is in ${zoneLink(KingsRow)}, roughly 190 yards north-northwest of the Industrial Avenue neighborhood marker, in front of Crowne Memorial Hospital.`,
      vidiotMapKey: '7',
    },
    {
      key: 'bicn-11',
      type: 'PLAQUE',
      zoneKey: KingsRow.key,
      plaqueType: 'MONUMENT',
      loc: [-203.14, 3.81, -2228.36],
      plaqueInscription: `The Great Depression was an incredibly difficult time for the citizens of Paragon City. Like in most of the western world, thousands and thousands of Paragon's people found themselves without jobs, without homes, without food on their tables to feed their families. Here in Kings Row, low income occupants were hit the hardest, with the area finding itself an intense hotbed of crime.

      When Statesman, the Dark Watcher, and Maiden Justice formed the Freedom Phalanx to counter the rise in crime in the city, it was Kings Row that was tackled first and foremost, with the nascent supergroup taking the fight directly to the region's crime bosses: the 'Kings'. With the dismantling of their operations, peace was brought to Kings Row.

      To this day, the Row remains a home for the disadvantaged and those among us in need. It is up to us to do what we can to uplift one another, so that the world knows that Kings Row deserves its name.`,
      notes: `This plaque is in ${zoneLink(KingsRow)}, roughly 246 yards southeast of the High Park neighborhood marker.`,
      vidiotMapKey: '8',
    },
    {
      key: 'bicn-12',
      type: 'PLAQUE',
      zoneKey: PeregrineIsland.key,
      plaqueType: 'MONUMENT',
      loc: [1707.3, 4.12, -841.7],
      plaqueInscription: `For citizens living and working on the Peregrine Island, the Melody, also known as the Paragon City Ferry, is a lifeline.

      Since first starting its route between Peregrine and Talos Island in 1983, the Melody has maintained a spotless record even until now on its 40th anniversary. Through the darkest times of Paragon City's history, this vessel has maintained its course without failure. First commanded by Captain Alfred Walker, the Melody's leadership was passed down to Captain Erika Janssen in 1988, who has been at the helm ever since.

      "This ship's the one true queen of Paragon City's waters. I couldn't be prouder to have been by her side all these years. It is a privilege and an honor," said Captain Janssen. Looking towards retirement after her long tenure, the Captain is now seeking out her future successor for her position.

      "The Melody will go on, however turbulent the tide."`,
      notes: `This plaque is in ${zoneLink(PeregrineIsland)}, roughly 433 yards west-southwest of the Bayside Docks neighborhood marker, near the entrance ramp to the ferry.`,
      vidiotMapKey: '2',
    },
    {
      key: 'bicn-13',
      type: 'PLAQUE',
      zoneKey: PerezPark.key,
      plaqueType: 'WALL_PLAQUE',
      loc: [348.1, 7.3, 1774],
      plaqueInscription: `Formerly known as Paragon Heights, Galaxy City was renamed after Kelly Graham, aka Galaxy Girl, as a tribute to her immense impact on Paragon City over her years as a hero.

      Galaxy City was once a place of beauty, featuring a wide array of statues paying tribute to some of the greatest heroes that Paragon has ever had to offer. It was a relatively small, but deeply beloved part of the city by visitors, as well as those who lived there - cozy and remarkably quiet for being so close to the city's center and Atlas Park. It was notably home to iconic hero Back Alley Brawler, who could be seen patrolling the streets on a daily basis, working diligently to keep Galaxy City as safe as could be.

      On September 13, 2011, Galaxy City was destroyed. Meteorites poured from the sky, devastating almost every part of the city zone. Strange, terrifying creatures emerged from these meteorites, now known as 'Neo-Shivans'. Their origins remain unknown, as does their purpose. From the focused nature of the impacts, experts assume that there was a deliberate reason for targeting Galaxy City. The area remains in ruins to this day, with the city gates being shut for over a decade after evacuation.`,
      notes: `This plaque is in ${zoneLink(PerezPark)}, roughly 349 yards south-southwest of the Boneyard neighborhood marker, on the wall next to the sealed Galaxy City gate.`,
      vidiotMapKey: '6',
    },
    {
      key: 'bicn-14',
      type: 'PLAQUE',
      zoneKey: SkywayCity.key,
      plaqueType: 'MONUMENT',
      loc: [104.1, -38.2, -5499.8],
      plaqueInscription: `So often, our thanks ends up going to the heroes flying through the skies of Atlas Park, speeding through Skyway City, or leaping from building to building in Steel Canyon. This plaque represents a moment of thanks given by Mayor Ignacio Morales alongside City Representative Brighid Moreira to those heroes among us who help our citizens through the more subtle ways - the charitable humanitarians and good samaritans of Paragon City.

      "To the landmark community services like the Graham Soup Kitchen, the Chipman Comedy Company, the Hagen Children's Hospital Foundation, Meadows Mobile Prosthetics, and to all the many other brave souls who dedicate their lives to make our suffering and needy both happy and safe, we owe the greatest of debts. Thank you for all of your service."`,
      notes: `This plaque is in ${zoneLink(SkywayCity)}, roughly 100 yards north-northeast of the Aerie Plaza neighborhood marker.`,
      vidiotMapKey: '5',
    },
    {
      key: 'bicn-15',
      type: 'PLAQUE',
      zoneKey: SteelCanyon.key,
      plaqueType: 'WALL_PLAQUE',
      loc: [-3085, 4.9, 2575.9],
      plaqueInscription: `This plaque marks the location of the heritage-listed historical home of Paragon Times, constructed in 1935 in Steel Canyon for the Times' 50th anniversary. Designed by the city-renowned architect Rudolph Augustus Seifert, this structure stood as a 'symbol of journalistic excellence' and a 'marvel of modern architecture'.

      After suffering some significant damage in the Rikti invasions of 2002, Paragon Times headquarters went abandoned due to a lack of funds to repair the structure for many years. Finally, thanks to a huge influx of support both locally and internationally, and with the help of The Committee for the Restoration of Paragon City, renovations were completed in late 2006 and the iconic structure's doors were finally reopened.

      Paragon Times is Paragon City's oldest concurrent journalistic entity, reporting local, national, and international news with integrity since 1885.`,
      notes: `This plaque is in ${zoneLink(SteelCanyon)}, roughly 390 yards east-southeast of the Gimry Ridge neighborhood marker.`,
      vidiotMapKey: '5',
    },
    {
      key: 'bicn-16',
      type: 'PLAQUE',
      zoneKey: SteelCanyon.key,
      plaqueType: 'MONUMENT',
      loc: [-3664, -81.08, 137.65],
      plaqueInscription: `On Monday July 11, 1932, this marked the location of the events that would later be dubbed 'Brass Monday'.

      Through the course of the 1920's, Paragon City was dominated by a monopolous organization named the Southern United Manufacturing Company, with its headquarters placed here in Steel Canyon. The company had an incredible amount of control over the political landscape of the city and would resort to underhanded tactics and coercion to achieve its goals.

      First sparked by investigating thugs peddling bootleg liquor, the hero Statesman was the one to truly expose the corruption running through the veins of the SUMC. He had discovered that the one leading the operation was none other than the Prussian Prince of Automatons himself, Nemesis.

      It was here in 1932 that this conflict came to a peak, when Nemesis's forces flooded Steel Canyon with troops and weaponry. It was only thanks to Statesman that the villain's forces were finally taken down, solidifying the hero as an icon in Paragon City's eyes and a representative of who we were on a global scale. This would only be the first of many great deeds committed by Paragon City's Greatest Hero.`,
      notes: `This plaque is in ${zoneLink(SteelCanyon)}, roughly 273 yards southeast of the Blyde Square neighborhood marker.`,
      vidiotMapKey: '6',
    },
    {
      key: 'bicn-17',
      type: 'PLAQUE',
      zoneKey: TalosIsland.key,
      plaqueType: 'MONUMENT',
      loc: [-3707.3, 99.8, 8692],
      plaqueInscription: `Dark Astoria. A part of Paragon City that only the bravest dare visit. Considered haunted for many years, it was only on March 6, 2012 that we came to understand the true terrors that lurked within. Deep beneath the graves to the north-east of the city zone lay an ancient, horrible evil - a god of death, known simply as Mot.

      On that dark day, the god burst forth from the rotten dirt of the cemetery, a mass of flesh and teeth, extending its reach throughout the area. At once, standard access to the zone was shut down, with only incarnate-level heroes being deemed capable enough to even come close to the behemoth's gaping maw.

      With the aid of the mysterious Dream Doctor, the heroes were able to band together and put an end to Mot once and for all - but the monster's rotting corpse still looms within Dark Astoria, and its forces persist. It is unlikely that that portion of the city will ever truly be safe again. We may only pray that Mot truly is gone.`,
      notes: `This plaque is in ${zoneLink(TalosIsland)}, roughly 761 yards southwest of the Eleusis neighborhood marker.`,
      vidiotMapKey: '6',
    },
    {
      key: 'bicn-18',
      type: 'PLAQUE',
      zoneKey: TerraVolta.key,
      plaqueType: 'WALL_PLAQUE',
      loc: [1188.25, 189.6, -7148.5],
      plaqueInscription: `On this ground lies the electric heart of Paragon City: Terra Volta Power Plant. Construction began on this facility in 1955 and was completed in 1959. To this day, it remains one of the most impressive technical achievements in Paragon's history.

      The Terra Volta complex has undergone many trials and tribulations throughout the years, but has never been truly successfully captured and held by any villainous group. This is not only due to the heroes of Paragon City, but also to the enterprising security personnel of the complex, who are in a constant, thankless arms race to maximize the security of Paragon's most vital non-human resource. This plaque pays homage to their tireless work.`,
      notes: `This plaque is in ${zoneLink(TerraVolta)}, roughly 174 yards north of the Coroman Manufacturing neighborhood marker, along the wall near the gate to Independence Port.`,
      vidiotMapKey: '5',
    },
    {
      key: 'bicn-19',
      type: 'PLAQUE',
      zoneKey: TheHollows.key,
      plaqueType: 'MONUMENT',
      loc: [-703.95, 4.06, -4777.45],
      plaqueInscription: `April 28, 2004: This date marks the beginning of what has since been referred to as 'The Outbreak Incident'. On this day, the neighborhood of Rivera Heights was placed into immediate and sudden quarantine, following the distribution of an illicit drug containing a powerful mutagen believed to be of Rikti origin. While at first seemingly harmless, the drug caused significant increases in strength amongst those who imbibed it, as well as blind aggression and a lack of regard for one's own life. Identifiable by a powerful green glow in the eyes, individuals ingesting the drug turned Rivera Heights into an outright warzone, requiring Paragon City to call in a multitude of heroes to help round up the villains. The day marked the largest organized effort by heroes since the Rikti invasion two years prior.

      Due to the sheer numbers of infected, Rivera Heights remained in total quarantine past the efforts to suppress the riots, when it was discovered that the effects of the drug were viral in nature and had mutated to become highly transmissible via skin-to-skin contact or bodily fluids. Only a small number of occupants had been allowed to leave, after rigorous testing determined they were clean of the virus. This quarantine lasted for a number of years as cures and vaccines were researched by Vanguard scientists, with the Hazard Doors to Rivera Heights only being opened again to limited civilian entry in 2013. Tragically, most of those infected in the first incident of the Outbreak did not live to see the day.`,
      notes: `This plaque is in ${zoneLink(TheHollows)}, about 239 yards north of the Four Seasons neighborhood marker.`,
      vidiotMapKey: '5',
    },
  ],
}
