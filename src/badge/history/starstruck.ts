import {ALIGNMENT_ANY, BadgePartialType, BadgeType, IBadgeData, PlaqueType} from "coh-content-db";
import {NovaPraetoria} from "../../map/nova-praetoria";

export const Starstruck: IBadgeData = {
    type: BadgeType.HISTORY,
    key: "starstruck",
    setTitleId: 1408,
    names: [
        {value: "Starstruck"}
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {value: `Seeing the statues of the rulers of Praetoria is awe-inspiring, truly a must for any loyal citizen.`}
    ],
    links: [
        {title: "Starstruck Badge", href: "https://paragonwiki.com/wiki/Starstruck_Badge"}
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/history/history-p.png"}
    ],
    partials: [
        {
            key: "star-0",
            type: BadgePartialType.PLAQUE,
            mapKey: NovaPraetoria.key,
            plaqueType: PlaqueType.MONUMENT,
            location: [-5220.0, 44.0, -257.0],
            inscription: `Emperor Cole - Our Mighty and Most Beneficent Leader - Look now upon the face of your benefactor. His eyes cast always to the horizon of our collective prosperity, Emperor Marcus Cole bravely stands at the vanguard to vouchsafe our security. "I call upon you, people of Praetoria, to cast aside all doubt and fear, to carry up your brothers and sisters so that all may stand tall and proud. Hold your head up high and challenge the darkness to cloud our growing dawn, for it is the fires of our righteous cause that shall carry the day."`,
            notes: `This plaque is in front of the statue of Emperor Cole in Magisterium, 117 yards E of the Magisterium marker.`,
            vidiotMapKey: "1"
        },
        {
            key: "star-1",
            type: BadgePartialType.PLAQUE,
            mapKey: NovaPraetoria.key,
            plaqueType: PlaqueType.MONUMENT,
            location: [-4125.0, 33.0, -807.0],
            inscription: `Praetor Barry - Better living through chemistry - Praetoria stands as a shining example of mankind's technological prowess. Without it our enemies, envious of our prosperity and embittered by our success, would have long ago made slaves of us all. Under the masterful direction of our most enlightened Emperor Marcus Cole, Praetoria's leading scientist has devoted himself to the betterment of the State and its people. Only through the guiding intellect of our august Emperor Marcus Cole, Praetor Barry has brought peace, comfort, ease, and relief from toil enjoyed by all Praetorians everywhere.`,
            notes: `This plaque is in front of the statue of Neuron in Magisterium, 308 yards NW of the Magisterium marker.`,
            vidiotMapKey: "2"
        },
        {
            key: "star-2",
            type: BadgePartialType.PLAQUE,
            mapKey: NovaPraetoria.key,
            plaqueType: PlaqueType.MONUMENT,
            location: [-3836.0, 36.0, -257.0],
            inscription: `Praetor Duncan - The pursuit of liberty requires sacrifice - What are you prepared to lose? Our masterful leader Emperor Marcus Cole has taught us that history is one of our greatest tools. A tool we use to build the foundation of our present and the framework of our future. Praetor Duncan stands as an example of the power of history carrying into the present day, as the daughter of Miss Liberty she bears that proud heritage forward, continuing the tradition of service and sacrifice so that we may all have lives of comfort and safety without fear of destruction at the hand of our implacable enemies.`,
            notes: `This plaque is in front of the statue of Dominatrix in Magisterium, 344 yards W of the Magisterium marker.`,
            vidiotMapKey: "3"
        },
        {
            key: "star-3",
            type: BadgePartialType.PLAQUE,
            mapKey: NovaPraetoria.key,
            plaqueType: PlaqueType.MONUMENT,
            location: [-5602.0, 41.0, 316.0],
            inscription: `Praetor Sinclair - Only through social engineering can we keep the sheep from becoming the wolves - Few can match the love and devotion our masterful general and benefactor Emperor Marcus Cole feels for every last citizen of Praetoria, but of that few Praetor Sinclair is at the forefront. Our tireless guardian is ever watchful for threats to the peace and security of Praetoria and its people. There are none to whom the magnanimous Emperor Marcus Cole would entrust such an important task as this but the hunter without equal: Praetor Sinclair.`,
            notes: `This plaque is in front of the statue of Chimera in Magisterium, 309 yards SE of the Magisterium marker.`,
            vidiotMapKey: "4"
        },
        {
            key: "star-4",
            type: BadgePartialType.PLAQUE,
            mapKey: NovaPraetoria.key,
            plaqueType: PlaqueType.MONUMENT,
            location: [-4133.0, 33.0, 296.0],
            inscription: `Praetor Tilman: "Mother" - Mother is here for you. She will keep you safe. - As our loving and protective Emperor Marcus Cole is the father of our great nation, so Praetor Tilman is the comforting mother who nurtures her many children: the people of Praetoria for who's welfare she has dedicated her life. Her piercing gaze sweeps aside the veils of deception that hide the enemies of our glorious nation, securing a lasting peace for all Praetorians. So devoted is she, that she has given to us her daughters, our dedicated Seers, so that impure thoughts are never given a chance to become unlawful deeds.`,
            notes: `This plaque is in front of the statue of Mother Mayhem in Magisterium, 306 yards SW of the Magisterium marker.`,
            vidiotMapKey: "5"
        },
        {
            key: "star-5",
            type: BadgePartialType.PLAQUE,
            mapKey: NovaPraetoria.key,
            plaqueType: PlaqueType.MONUMENT,
            location: [-5649.0, 33.0, -843.0],
            inscription: `Praetor White - Maintain the order and conformity of Praetoria - Praetor White is the mailed fist of Praetoria, throttling the life from its enemies. Our most mighty Emperor Marcus Cole's greatest weapon against injustice and tyranny. All people everywhere do justly praise their warrior protector, who's sacrifice of flesh, bone, and blood has ensured our continued prosperity. Under the unerring generalship of our great and dear master Emperor Marcus Cole, Praetor White will forever stand steadfast against all threats to our national prosperity. Beloved warrior and selfless soldier, Praetor White shall never falter in the face of our enemies.`,
            notes: `This plaque is in front of the statue of Marauder in Magisterium, 326 yards NE of the Magisterium marker.`,
            vidiotMapKey: "6"
        }
    ]
};
