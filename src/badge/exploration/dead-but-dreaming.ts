import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";
import {NightWard} from "../../map/night-ward";

export const DeadButDreaming: IBadgeData = {
    type: BadgeType.EXPLORATION,
    key: "dead-but-dreaming",
    setTitleId: 2230,
    names: [{value: "Dead but Dreaming"}],
    alignment: ALIGNMENT_ANY,
    mapKey: NightWard.key,
    location: [901.0, 23.0, 1997.0],
    badgeText: [{
        value: `The final resting place of the Seed of Hamidon radiates a chill that permeates even Night Ward.
In spite of this you take comfort in knowing that Night Ward is beyond Hamidon's reach.
But to those denizens unfamiliar with the events leading to the fall of First Ward, this skull-shaped husk is an object of superstition and trepidation.
It seems that even in death the Seed continues to spread its influence.`
    }],
    notes: `Located in [map:${NightWard.key}], in the The Sleeping Beast neighborhood, 403 yards NNE of the Howling Vale map marker; inside the husk of the fallen Seed of Hamidon.`,
    links: [
        {title: "Dead But Dreaming Badge", href: "https://hcwiki.cityofheroes.dev/wiki/Dead_But_Dreaming_Badge"}
    ],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/praetorian.png"}],
    vidiotMapKey: "5"
};
