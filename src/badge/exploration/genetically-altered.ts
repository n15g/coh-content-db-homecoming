import {ALIGNMENT_HERO, BadgeType, IBadgeData} from "coh-content-db";
import {PeregrineIsland} from "../../map/peregrine-island";

export const GeneticallyAltered: IBadgeData = {
    type: BadgeType.EXPLORATION,
    key: "genetically-altered",
    setTitleId: 1574,
    names: [{value: "Genetically Altered"}],
    alignment: ALIGNMENT_HERO,
    mapKey: PeregrineIsland.key,
    location: [-1510.0, 0.0, -6335.0],
    badgeText: [{
        value: "Scientists still aren't sure what exactly these massive bones belong to." +
            " Crey refuses to comment, claiming that the bones are from ancient dinosaurs, though paleontologists refute the claim, saying it looks like no dinosaur they have on record." +
            " Despite a lack of evidence, signs point to some sort of genetic shenanigans on Crey's part."
    }],
    notes: "Located in the Cutlass Isles neighborhood of [map:peregrine-island].\n" +
        "\n" +
        "It is under the large skeleton 277 yards southwest of the neighborhood marker.",
    links: [
        {title: "Genetically Altered Badge", href: "https://paragonwiki.com/wiki/Genetically_Altered_Badge"}
    ],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hero.png"}],
    vidiotMapKey: "4"
};
