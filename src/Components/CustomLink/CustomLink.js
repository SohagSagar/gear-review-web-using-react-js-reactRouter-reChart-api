import React from 'react';
import { Link, useMatch, useResolvedPath } from 'react-router-dom';

function CustomLink({ children, to, ...props }) {
    let resolved = useResolvedPath(to);
    let match = useMatch({ path: resolved.pathname, end: true });
  
    return (
      <div>
        <Link
          style={{fontWeight: match ? '600': '600',borderBottom: match ? '2px solid #3A5199': 'none' ,color: match ? '#3A5199': 'grey',padding: match ? '20px': '20px', textDecoration: match ? "none" : "none" }}
          to={to}
          {...props}
        >
          {children}
        </Link>
      </div>
    );
  }

export default CustomLink;