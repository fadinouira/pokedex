import { useLocation, useNavigate } from 'react-router';

/**
 * Custom hook to handle navigation logic, specifically managing the "go back" behavior.
 * It determines whether to navigate back in history or move to a parent route based on state.

 */
const useSmartGoBack = () => {
  const location = useLocation();

  const state = location?.state as { navigateToRoot?: boolean };
  const navigateToRoot = state?.navigateToRoot;

  const navigate = useNavigate();

  /**
   * Handles the "go back" action based on navigation history.
   * If there is a previous history entry and `navigateToRoot` is false, it navigates back.
   * Otherwise, it navigates to the parent route.
   */
  const handleGoBack = () => {
    const previousPath = window.history.state?.key || '';

    if (previousPath && !navigateToRoot) {
      navigate(-1);
    } else {
      navigate('..');
    }
  };

  return { handleGoBack };
};

export default useSmartGoBack;
