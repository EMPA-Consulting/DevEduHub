import UseState from '../hooks/most-known-hooks/UseState';
import UseEffect from '../hooks/most-known-hooks/UseEffect';
import UseContext from '../hooks/most-known-hooks/useContext/UseContext';
import UseRef from '../hooks/lesser-used-hooks/UseRef';
import UseMemo from '../hooks/lesser-used-hooks/UseMemo';
import UseCallback from '../hooks/lesser-used-hooks/useCallback/UseCallback';
import UseReducer from '../hooks/lesser-used-hooks/useReducer/UseReducer';
import UseTransitionHook from '../hooks/lesser-used-hooks/UseTransition';
import UseDeferredValueHook from '../hooks/lesser-used-hooks/useDeferredValue/UseDeferredValue';
import UseLayoutEffectHook from '../hooks/optional-hooks/useLayoutEffect/UseLayoutEffect';
import UseDebugValueHook from '../hooks/optional-hooks/useDebugValue/UseDebugValue';
import UseImperativeHandleHook from '../hooks/optional-hooks/useImperativeHandle/UseImperativeHandle';
import UseId from '../hooks/optional-hooks/useId/UseId';
import CustomHook from '../hooks/custom-hooks/CustomHook';
import ExperimentalHooks from '../hooks/experimental-hooks/ExperimentalHooks';

export const categories = [
  {
    name: 'Must Known Hooks',
    hooks: [
      { name: 'useState', component: UseState },
      { name: 'useEffect', component: UseEffect },
      { name: 'useContext', component: UseContext },
    ],
  },
  {
    name: 'Lesser Used Hooks',
    hooks: [
      { name: 'useRef', component: UseRef },
      { name: 'useMemo', component: UseMemo },
      { name: 'useCallback', component: UseCallback },
      { name: 'useReducer', component: UseReducer },
      { name: 'useTransition', component: UseTransitionHook },
      { name: 'useDeferredValue', component: UseDeferredValueHook },
    ],
  },
  {
    name: 'Optional Hooks',
    hooks: [
      { name: 'useLayoutEffect', component: UseLayoutEffectHook },
      { name: 'useDebugValue', component: UseDebugValueHook },
      { name: 'useImperativeHandle', component: UseImperativeHandleHook },
      { name: 'useId', component: UseId },
    ],
  },
  {
    name: 'Custom Hooks',
    hooks: [
      { name: 'Custom Hooks', component: CustomHook },
    ],
  },
  {
    name: 'Experimental Hooks',
    hooks: [
      { name: 'Experimental Hooks', component: ExperimentalHooks },
    ],
  },
];