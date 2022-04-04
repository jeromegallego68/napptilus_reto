import useBreadcrumbs from 'use-react-router-breadcrumbs';
import { NavLink } from 'react-router-dom';

import './breadcrumbs.css'

const baseClass = "breadcrumbs"

const Breadcrumbs = () => {
    const breadcrumbs = useBreadcrumbs();

    return (
        <div className={baseClass}>
            {breadcrumbs.length > 1 && breadcrumbs.map(({
                match,
                breadcrumb
            }) => (
                <span key={match.pathname}>
                    <NavLink to={match.pathname}>{breadcrumb}</NavLink>
                </span>
            ))}
        </div>
    )
}

export default Breadcrumbs
