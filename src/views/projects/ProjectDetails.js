import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { PROJECTS_CONFIG } from './config';

export default function ProjectDetails() {
  const project = useLoaderData();
  return (
    <div className="project-container">
      <div className="main-container">
        {project.content ? (
          project.content.map((item, index) => {
            return (
              <div className="slider-container">
                <Swiper
                  key={'swiper-' + index}
                  modules={[Navigation]}
                  navigation
                >
                  {item ? (
                    item.map((banner) => {
                      return (
                        <SwiperSlide key={'swiper-slide-' + index}>
                          <img src={banner} />
                        </SwiperSlide>
                      );
                    })
                  ) : (
                    <></>
                  )}
                </Swiper>
              </div>
            );
          })
        ) : (
          <div className="coming-up-container">
            <h1>Coming Soon!!</h1>
            <br />
            <br />
            <img width={'100%'} src={project.banner} />
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
