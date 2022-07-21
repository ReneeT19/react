import React from 'react'
import styles from './Sidebar.module.scss';
import samanthaImg from '../../assets/png/samantha.png';
import {Link, useLocation} from 'react-router-dom';

const sidebarNavLinks = [
    "dashboard",
    "expenses",
    "wallets",
    "summary",
    "accounts",
    "settings"
]
// module.scss is more composible than regular .scss/css file; it's scoped locally, avoids name conflict, and more secure
const Sidebar = () => {
    const location = useLocation();

  return (
    // <aside> tag is often used for sidebars or a sticky note
    <aside className={styles.sidebar}>
        <div className={styles.sidebarContent}>
            {/* first part of sidebarContent contains profile image, notification, name, email */}
            <div className={styles.profileDetails}>
                <div className={styles.profileImageDiv}>
                    {/* The alt attribute provides alternative information for an image if a user for some reason cannot view it  */}
                    <img src={samanthaImg} alt="samantha" />
                    <p className={styles.notifications}>3</p>
                </div>
                <p className={styles.userName}>Samantha</p>
                <p className={styles.userEmail}>samantha@email.com</p>
            </div>
            {/* second part of sidebarContent contains navigation links */}
            
            <nav className={styles.sidebarNav}>
                <ul>
                    {/* map the array created above so it's not hard coded */}
                    {sidebarNavLinks.map(sidebarNavLink =>
                    // The key attribute in the <li> tag is necessary to remove bug/error in console
                        <li className={styles.sidebarNavItems} key={sidebarNavLink}> 
                        {/* The NavLink is used when you want to highlight a link as active. So, on every routing to a page, the link is highlighted according to the activeClassName . Link is for links that need no highlighting. And a is for external links. */}
                        <Link 
                        className={
                            location.pathname === `/${sidebarNavLink}`
                            ? styles.sidebarNavLinkActive 
                            : styles.sidebarNavLink
                        }
                        to={`/${sidebarNavLink}`}
                        >
                        {/* to change the first letter to uppercase and slice at the index 1 e.g. ashboard to cut of the lowercase d  */}
                        {sidebarNavLink.charAt(0).toUpperCase() + sidebarNavLink.slice(1)}    
                        </Link>
                         </li>
                        )}
                </ul>
            </nav>
        </div>
    </aside>
  )
}

export default Sidebar;