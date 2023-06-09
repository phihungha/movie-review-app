import React from 'react';
import {VerticalProfileDisplay} from '../Display/VerticalProfileDisplay';

/**
 * Item for a list of non-actor crew members working on a film.
 */
export function CrewListItem(): JSX.Element {
  return (
    <VerticalProfileDisplay
      imageUrl="https://image.tmdb.org/t/p/w440_and_h660_face/wXqWR7dHncNRbxoEGybEy7QTe9h.jpg"
      name="John Smith"
      role="Director"
    />
  );
}
