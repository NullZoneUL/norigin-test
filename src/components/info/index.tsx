import React, { useEffect, useRef, useState } from "react";
import ExtendedImage from "src/elements/image";
import Expandable from "src/elements/expandable";
import { getProgramInfo } from "./getProgramInfo";
import { getParsedProgramInfo } from "src/utils/programInfoParser";
import { ProgramInfoInterface } from "./programInfoInterface";
import "./_style.scss";

const InfoPage = ({ id }: { id: string }) => {
  const [programData, setProgramData] = useState<ProgramInfoInterface>();
  const dateRef = useRef(new Date());

  useEffect(() => {
    getProgramInfo(id).then((programData) =>
      setProgramData(getParsedProgramInfo(programData)),
    );
  }, [id]);

  if (!programData) {
    return <></>;
  }
  console.log(programData);
  return (
    <div className="info-page-container">
      <ExtendedImage image={{ image: programData.images.icon }} />
      <div className="info-page-data-container">
        <div className="info-page-header-data">
          <div className="info-page-header-section">
            <ExtendedImage image={{ image: programData.channelImages.logo }} />
          </div>
          <div className="info-page-header-section">
            <div>
              <span>{programData.channelTitle}</span>
              <span>{programData.parsedSchedule}</span>
              <span>{programData.parsedDate}</span>
            </div>
            <div>{programData.title}</div>
            <div>
              <span>{programData.meta.year}</span>
              {programData.meta.genres.length > 0 &&
                programData.meta.genres.map((genre) => <span>{genre}</span>)}
            </div>
          </div>
        </div>
        <Expandable height={100}>{programData.description}</Expandable>
        <div>
          <div>
            <span>Cast</span>
            {programData.meta.cast.length > 0 &&
              programData.meta.cast.map((castItem) => (
                <span>{castItem.name}</span>
              ))}
          </div>
          <div>
            <span>Creators</span>
            {programData.meta.creators.length > 0 &&
              programData.meta.creators.map((creatorItem) => (
                <span>{creatorItem.name}</span>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoPage;
