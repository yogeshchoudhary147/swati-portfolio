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
              <div className="slider-container" style={{ width: '100%' }}>
                <Swiper
                  key={'something-swiper-' + index}
                  modules={[Navigation]}
                  navigation
                >
                  {item ? (
                    item.map((banner) => {
                      return (
                        <SwiperSlide
                          key={'something-swiper-slide-' + index + banner}
                        >
                          <img
                            src={banner}
                            style={{ width: '100%', display: 'block' }}
                          />
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
          <>
            <br />
            <br />
            <br />
            <br />
            <img width={300} src={project.banner} />
            <br />
            <h1>{project.displayName} Coming Soon!!</h1>
            <br />
            <p>{project.description}</p>
            <br />
            <br />
            <br />
          </>
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
