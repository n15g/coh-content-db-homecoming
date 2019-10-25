import {ALIGNMENT_VILLAIN, BadgeType, IBadgeData} from "coh-content-db";
import {Grandville} from "../../map/grandville";

export const ImageCrasher: IBadgeData = {
    type: BadgeType.EXPLORATION,
    key: "image-crasher",
    setTitleId: 1511,
    names: [{value: "Image Crasher"}],
    alignment: ALIGNMENT_VILLAIN,
    mapKey: Grandville.key,
    location: [2677.0, 243.0, 826.0],
    badgeText: [{
        value: `This large display screen fell off its holster after a particularly rough battle between Black Scorpion and Captain Mako.
It was supposed to be fixed, but progress kept halting as workers became too distracted by the images on the screen.`
    }],
    notes: `Located in [map:${Grandville.key}], in the Tangle neighborhood.

It is 230 yards northeast of the Tangle marker on the ledge where you can find both Shadow Spider and Viridian, approximately halfway up the tower..`,
    links: [
        {title: "Image Crasher Badge", href: "https://paragonwiki.com/wiki/Image_Crasher_Badge"}
    ],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/villain.png"}],
    vidiotMapKey: "6"
};
