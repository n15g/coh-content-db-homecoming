import {ALIGNMENT_HERO, BadgeType, IBadgeData} from "coh-content-db";
import {TerraVolta} from "../../map/terra-volta";
import {IndependencePort} from "../../map/independence-port";

export const ConjunctionJunction: IBadgeData = {
    type: BadgeType.EXPLORATION,
    key: "conjunction-junction",
    setTitleId: 131,
    names: [{value: "Conjunction Junction"}],
    alignment: ALIGNMENT_HERO,
    mapKey: TerraVolta.key,
    location: [2222.0, 0.0, -7102.0],
    badgeText: [{
        value: `This junction was the first target of the Freakshow when they started their campaign of mayhem.
Statesman and the rest of the Freedom Phalanx were able to stop their plan before it could be fulfilled.`
    }],
    notes: `Located in the Northwest corner of Coroman Manufacturing in a culvert.
Head west from the entrance to [map:${IndependencePort.key}] and it can be located under pipes along the north war wall.`,
    links: [
        {title: "Conjunction Junction Badge", href: "https://homecoming.wiki/wiki/Conjunction_Junction_Badge"}
    ],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hazard.png"}],
    vidiotMapKey: "1"
};
