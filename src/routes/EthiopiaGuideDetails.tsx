import { useEffect, useState } from "react";
import { EthiopiaGuideArray } from "../Data/EthiopiaGuideArray";
import Hero from "../components/Hero";
import Intro from "../components/Intro";
import SimpleDescription from "../components/SimpleDescription";
import { useParams } from "react-router-dom";
import NotFound from "./NotFound";
import DestinationDescription from "../components/DestinationDescription";
import { Guide } from "../Data/EthiopiaGuideArray";

const EthiopiaGuideDetails = () => {
  const [guide, setGuide] = useState<Guide | null>(null);
  const { id } = useParams<{ id: string }>();
  useEffect(() => {
    const selectedGuide = EthiopiaGuideArray.find(
      (guide) => guide.id === Number(id)
    );
    if (selectedGuide) {
      setGuide(selectedGuide);
    } else {
      setGuide(null);
    }
  }, [id]);
  return (
    <div>
      {guide ? (
        <>
          {guide.title && (
            <Hero
              title={guide.title}
              background={guide.image}
              index={guide.index}
              description={guide.description}
              link={guide.link}
              linkname={guide.linkname}
            />
          )}
          {guide.intro[0] && (
            <div id="description">
              <Intro
                title={guide.intro[0].title}
                subtitle={guide.intro[0].subtitle}
                description={guide.intro[0].description}
                lr={guide.intro[0].lr}
                img1={guide.intro[0].img1}
                img2={guide.intro[0].img2}
                button={guide.intro[0].button}
                link={guide.intro[0].link}
              />
            </div>
          )}
          {guide.content && (
            <>
              {guide.content.map((content, index) => (
                <>
                  {content.destinationdescription && (
                    <DestinationDescription
                      key={index}
                      destination={content.destinationdescription.destination}
                      reasons={content.destinationdescription.reasons}
                    />
                  )}
                  {content.simpledescription && (
                    <SimpleDescription
                      key={index}
                      title={content.simpledescription.title}
                      description={content.simpledescription.description}
                    />
                  )}
                </>
              ))}
            </>
          )}

          {guide.intro &&
            guide.intro.map((intro, index) => {
              if (index !== 0) {
                return (
                  <Intro
                    key={index}
                    title={intro.title}
                    subtitle={intro.subtitle}
                    description={intro.description}
                    lr={intro.lr}
                    img1={intro.img1}
                    img2={intro.img2}
                    button={intro.button}
                    link={intro.link}
                  />
                );
              }
            })}
        </>
      ) : (
        <NotFound />
      )}
    </div>
  );
};

export default EthiopiaGuideDetails;
