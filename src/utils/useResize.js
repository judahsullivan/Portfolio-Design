import { useEffect, useReducer } from 'react';

// Define action types
const RESIZE = 'RESIZE';
const TOGGLE_VIEW_MODE = 'TOGGLE_VIEW_MODE';

// Reducer function
function reducer(state, action) {
  switch (action.type) {
    case RESIZE:
      const { width, height } = action.payload;
      let viewMode = state.viewMode;

      if (width <= 1008) {
        viewMode = 'grid';
      } else {
        viewMode = width === 1010 ? 'list' : 'list'; // Condition for 1010 pixels, defaulting to 'list' for wider screens
      }
      return {
        ...state,
        width,
        height,
        viewMode
      };
    case TOGGLE_VIEW_MODE:
      return {
        ...state,
        viewMode: action.payload.mode
      };
    default:
      return state;
  }
}

export function useResize() {
  const initialState = {
    width: undefined,
    height: undefined,
    viewMode: undefined
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  const handleResize = () => {
    if (typeof window !== 'undefined') {
      dispatch({
        type: RESIZE,
        payload: {
          width: window.innerWidth,
          height: window.innerHeight
        }
      });
    }
  };

  const toggleViewMode = (mode) => {
    if (typeof window !== 'undefined') {
      dispatch({
        type: TOGGLE_VIEW_MODE,
        payload: {
          mode
        }
      });
    }
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      handleResize();
      window.addEventListener('resize', handleResize);
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }
  }, []);

  return { ...state, toggleViewMode };
}
