import React from "react";
import { connect } from "frontity";

const Link = ({
  state,
  actions,
  link,
  className,
  children,
  "aria-current": ariaCurrent
}) => {
  
  const handleClick = event => {
    
    if (link.startsWith("http")) return;
    event.preventDefault();

    actions.router.set(link);
    window.scrollTo(0, 0);

    if (state.theme.isMobileMenuOpen) actions.theme.closeMobileMenu();
  };

  return (
    <a
      href={link}
      onClick={handleClick}
      className={className}
      aria-current={ariaCurrent}
    >
      {children}
    </a>
  );
};

export default connect(Link);
