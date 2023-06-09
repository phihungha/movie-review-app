import React from 'react';
import {VerticalProfileDisplay} from '../Display/VerticalProfileDisplay';

/**
 * Item for list of actors working on a film.
 */
export function ActorListItem(): JSX.Element {
  return (
    <VerticalProfileDisplay
      imageUrl="https://image.tmdb.org/t/p/w440_and_h660_face/wXqWR7dHncNRbxoEGybEy7QTe9h.jpg"
      name="John Smith"
      role="Director"
    />
  );
}
