import { useLocation } from 'react-router-dom';

export const useQuery = () => {
  const location = useLocation().search;
  return new URLSearchParams(location);
};

export default useQuery;
