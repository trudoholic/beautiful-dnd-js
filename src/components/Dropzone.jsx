// import React from 'react';
// import { Droppable, Draggable } from 'react-beautiful-dnd';
import { Droppable, Draggable } from '@hello-pangea/dnd';
import PropTypes from 'prop-types';

const Dropzone = ({ isDropDisabled, heroes, id }) => (
  <div className="column col-4">
    <div className="divider" data-content={id.toUpperCase()} />
    <Droppable droppableId={id} isDropDisabled={isDropDisabled}>
      {provided => {
        return (
          <div className="menu hero-list" {...provided.droppableProps} ref={provided.innerRef}>
            {heroes.map(({ name }, index) => (
              <Hero key={name} name={name} index={index} />
            ))}
            {provided.placeholder}
          </div>
        );
      }}
    </Droppable>
  </div>
);

Dropzone.propTypes = {
  isDropDisabled: PropTypes.bool.isRequired,
  heroes: PropTypes.array.isRequired,
  id: PropTypes.string.isRequired,
}

const Hero = ({ name, index }) => (
  <Draggable draggableId={name} index={index}>
    {provided => {
      return (
        <div
          className="menu-item tile tile-centered"
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <figure style={{ backgroundColor: 'transparent' }} className="avatar tile-icon">
            <img src={`./hero_icons/${name.toLowerCase().replace(' ', '-')}.svg`} alt={name} />
          </figure>
          <div className="tile-content">{name}</div>
        </div>
      );
    }}
  </Draggable>
);

Hero.propTypes = {
  name: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
}

export default Dropzone;
