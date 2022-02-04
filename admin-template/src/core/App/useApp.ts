import { useContext } from 'react';
import AppContex from './AppContext';

const useApp = () => useContext(AppContex);

export default useApp;
