import React from 'react';

export default function ErrroMessage({ error }) {
  if (error) {
    switch (error.type) {
      case 'required':
        return <p>This is required</p>;
      case 'minLength':
        return <p>This field needs a minimum of two characters</p>;
      case 'maxLength':
        return <p>This field has a maximum of twenty characters</p>;
      default:
        return null;
    }
  }

  return null;
}
