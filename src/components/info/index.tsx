import React, { useEffect, useState } from "react";
import ExtendedImage from "src/elements/image";
import Expandable from "src/elements/expandable";
import { getProgramInfo } from "./getProgramInfo";
import { getParsedProgramInfo } from "src/utils/programInfoParser";
import { ProgramInfoInterface } from "./programInfoInterface";
import literals from "@assets/literals/eng.json";
import "./_style.scss";

/**
 * Detailed program page
 */
const InfoPage = ({ id }: { id: string }) => {
  const [programData, setProgramData] = useState<ProgramInfoInterface>();
  const [requestError, setRequestError] = useState(false);

  useEffect(() => {
    setRequestError(false);
    const getProgramInfo_ = async () => {
      try {
        const programData = await getProgramInfo(id);
        setProgramData(getParsedProgramInfo(programData));
      } catch {
        setRequestError(true);
      }
    };
    /**
     * Get the selected program data each time the received id change
     */
    getProgramInfo_();
  }, [id]);

  useEffect(() => {
    document.body.style.backgroundColor = "rgb(0 ,0 ,0)";

    return () => {
      document.body.style.backgroundColor = "";
    };
  }, []);

  /**
   * In case of having any error with the request,
   * an error message is displayed
   */
  if (requestError) {
    return <div className="request-error">{literals.infoError}</div>;
  }

  if (!programData) {
    return <></>;
  }

  return (
    <div className="info-page-container">
      <ExtendedImage image={{ image: programData.images.icon }} />
      <div className="info-page-data-container">
        <div className="info-page-header-data">
          <div className="info-page-header-section info-page-header-channel-logo">
            <ExtendedImage image={{ image: programData.channelImages.logo }} />
          </div>
          <div className="info-page-header-section info-page-header-tv-info">
            <div className="info-tv-info-section">
              <span className="info-page-header-white">
                {programData.channelTitle}
              </span>
              <span>{programData.parsedSchedule}</span>
              <span>{programData.parsedDate}</span>
            </div>
            <div className="info-page-header-white info-tv-info-section">
              {programData.title}
            </div>
            <div className="info-tv-info-section">
              <span>{programData.meta.year}</span>
              {programData.meta.genres.length > 0 &&
                programData.meta.genres.map((genre, index) => (
                  <span key={`INFO_PAGE_GENRE_${genre}_${index}`}>{genre}</span>
                ))}
            </div>
          </div>
        </div>
        <Expandable height={100}>{programData.description}</Expandable>
        <div className="info-page-cast-container">
          <div className="info-page-cast-section">
            <span className="info-page-cast-title-section">
              {literals.cast}
            </span>
            {programData.meta.cast.length > 0 &&
              programData.meta.cast.map((castItem, index) => (
                <span key={`INFO_PAGE_CAST_${castItem.name}_${index}`}>
                  {castItem.name}
                </span>
              ))}
          </div>
          <div className="info-page-cast-section">
            <span className="info-page-cast-title-section">
              {literals.creator}
            </span>
            {programData.meta.creators.length > 0 &&
              programData.meta.creators.map((creatorItem, index) => (
                <span key={`INFO_PAGE_CREATOR_${creatorItem.name}_${index}`}>
                  {creatorItem.name}
                </span>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoPage;
