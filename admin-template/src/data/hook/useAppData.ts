import { useContext } from 'react';
import AppContex from '../context/AppContext';

const useAppData = () => useContext(AppContex);

export default useAppData;
