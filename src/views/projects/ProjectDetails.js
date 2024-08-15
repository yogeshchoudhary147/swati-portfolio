import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import PROJECTS_CONFIG from './config';

export default function ProjectDetails() {
  const project = useLoaderData();
  return (
    <div className="project-container">
      <div className="main-container">
        {project.content ? (
          project.content.map((item, index) => {
            return (
              <div key={'swiper-' + index} className="slider-container">
                <Swiper modules={[Navigation]} navigation>
                  {item &&
                    item.banners &&
                    item.banners.map((banner, innerIndex) => {
                      const dimensions = Object.keys(banner);
                      const srcset = dimensions.reduce((acc, curr, index) => {
                        return (
                          acc +
                          banner[curr] +
                          ' ' +
                          curr +
                          (index === dimensions.length - 1 ? '' : ', ')
                        );
                      }, '');
                      return (
                        <SwiperSlide
                          zoom={true}
                          key={index + '-child-swiper-' + innerIndex}
                        >
                          <img
                            loading="lazy"
                            srcSet={srcset}
                            src={banner['1x']}
                            width={item.width}
                            height={item.height}
                          />
                        </SwiperSlide>
                      );
                    })}
                </Swiper>
              </div>
            );
          })
        ) : (
          <div className="coming-up-container">
            <h1>Coming Soon!!</h1>
            <br />
            <br />
            <img
              loading="lazy"
              src={project.banner.link}
              alt={project.description}
            />
            <br />
            <br />
            <h2>{project.displayName}</h2>
            <br />
            <p>{project.description}</p>
          </div>
        )}
      </div>
    </div>
  );
}

//loader function
export const projectDetailsLoader = ({ params }) => {
  const { id } = params;
  const project = PROJECTS_CONFIG.find((project) => project.id === id);
  if (project === undefined) {
    throw Error('Could not find that project');
  }
  return project;
};
