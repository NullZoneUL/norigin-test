import React from "react";
import ExtendedImage from "src/elements/image";
import "./_style.scss";

const EPGChannelList = ({
  channelList,
  ref_,
}: {
  channelList: { id: string; images: { logo: string } }[];
  ref_: React.ForwardedRef<HTMLDivElement>;
}) => {
  return (
    <div className="epg-channel-list-container epg-left-bar-width" ref={ref_}>
      {channelList.length > 0 &&
        channelList.map((channel) => (
          <ExtendedImage
            image={{ image: channel.images.logo }}
            className="epg-channel-list-item epg-left-bar-item-height"
            key={`EPG_CHANNEL_ITEM_${channel.id}`}
          />
        ))}
    </div>
  );
};

export default EPGChannelList;
