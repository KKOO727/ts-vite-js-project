import React, { forwardRef } from "react";
import galleryitems from "./GallerItems";
import "./gallery.scss";

const Sequence = () => {
    const imageCount = 7;
    console.log(galleryitems);

    //   let index = Math.round(progress * 1 * (newImages.length - 1));


    //   if (galleryitems[index][1] !== undefined) {
    //     if (newImages[index][1] === "loading") {
    //       return <Skeleton width="100%" height="100%" />;
    //     } else {
    return (
        <div style={{ display: 'flex' }}>
            {galleryitems.map((item, i) => (
                <div className="listItem">
                    <img src={`${item.image}`} alt='' />
                </div>
                // <span
                //     key={i}
                //     style={{
                //         // display: i !== index ? "none" : "block",
                //         height: "100%",
                //         width: "100%",
                //         // backgroundImage: `url('${item[0] ? item[0].src : null}')`,
                //         backgroundImage: `url('${item[0] ? item[0].src : null}')`,
                //         backgroundSize: "cover",
                //         backgroundPosition: "center"
                //     }}
                // />
            ))}
        </div>
    )
    //   return galleryitems.map((item, i) => (
    //     <span
    //       key={i}
    //       style={{
    //         // display: i !== index ? "none" : "block",
    //         height: "100%",
    //         width: "100%",
    //         // backgroundImage: `url('${item[0] ? item[0].src : null}')`,
    //         backgroundSize: "cover",
    //         backgroundPosition: "center"
    //       }}
    //     />
    //   ));
    //     }
    //   }
};

export default Sequence;
