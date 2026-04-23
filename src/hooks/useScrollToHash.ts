import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Hook to handle scrolling to a hash anchor on page load or hash change.
 * This is useful for SPAs where standard browser hash navigation might not work
 * correctly with client-side routing.
 */
export const useScrollToHash = () => {
    const { hash, pathname } = useLocation();

    useEffect(() => {
        if (hash) {
            // Remove the # from the hash
            const id = hash.replace('#', '');
            const element = document.getElementById(id);

            if (element) {
                // If element exists, scroll to it
                element.scrollIntoView({ behavior: 'smooth' });
            } else {
                // If element doesn't exist yet (e.g., page still loading), 
                // wait a bit and try again
                const timer = setTimeout(() => {
                    const el = document.getElementById(id);
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                }, 100);
                return () => clearTimeout(timer);
            }
        }
    }, [hash, pathname]); // Re-run when hash or pathname changes
};
