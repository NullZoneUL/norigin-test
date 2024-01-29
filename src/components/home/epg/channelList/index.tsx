import React from "react";
import ExtendedImage from "src/elements/image";
import "./_style.scss";

const EPGChannelList = ({
  channelList,
}: {
  channelList: { images: { logo: string } }[];
}) => {
  return (
    <div className="epg-channel-list-container epg-left-bar-width">
      {channelList.length > 0 &&
        channelList.map((channel) => (
          <ExtendedImage
            image={{ image: channel.images.logo }}
            className="epg-channel-list-item epg-left-bar-item-height"
            key={`EPG_CHANNEL_ITEM_${channel.images.logo}`}
          />
        ))}
    </div>
  );
};

export default EPGChannelList;
