import {ALIGNMENT_HERO, BadgeType, IBadgeData} from "coh-content-db";
import {SewerNetwork} from "../../map/sewer-network";
import {SkywayCity} from "../../map/skyway-city";
import {AtlasPark} from "../../map/atlas-park";
import {KingsRow} from "../../map/kings-row";

export const TerrorOfTheVahzilok: IBadgeData = {
    type: BadgeType.EXPLORATION,
    key: "terror-of-the-vahzilok",
    setTitleId: 1835,
    names: [{value: "Terror of the Vahzilok"}],
    alignment: ALIGNMENT_HERO,
    mapKey: SewerNetwork.key,
    location: [320.0, -576.0, 1536.0],
    badgeText: [{
        value: `They hunt the innocent and violate the dead.
They are the name used by mothers to terrify misbehaving children.
They are deserving of every ounce of punishment visited upon them.
In the sewers they congregate in large numbers, believing they are safe from judgment.
But you are here to prove them wrong.
You will hunt them down and extract your vengeance upon every Reaper and Mortificator you find.
You will make them know fear.`
    }],
    notes: `Located in [map:${SewerNetwork.key}] 362 yards northwest of the [map:${SkywayCity.key}] marker, in the middle of the junction that connects [map:${AtlasPark.key}] Sector,
     [map:${KingsRow}] Sector, [map:${SkywayCity.key}] Sector and Underworld.`,
    links: [
        {title: "Terror of the Vahzilok Badge", href: "https://paragonwiki.com/wiki/Terror_of_the_Vahzilok_Badge"}
    ],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hazard.png"}],
    vidiotMapKey: "7"
};
