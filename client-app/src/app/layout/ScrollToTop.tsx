import { withRouter } from 'react-router-dom';
import { useEffect } from 'react';

const ScrollToTop = ({ children, location: { pathname } }: any) => {
    useEffect(() => {
        window.scroll(0, 0);
    }, [pathname]);

    return children;
};

export default withRouter(ScrollToTop);
