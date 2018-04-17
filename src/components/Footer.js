import React from 'react';
import PropTypes from 'prop-types';
import { VisibilityFilters } from '../actions';

const {SHOW_ALL, SHOW_ACTIVE, SHOW_COMPLETED} = VisibilityFilters;

function Footer({ visibility, todosCount, onFilterClick }) {
   return (
      <footer className="footer">
         <span className="todo-count">
            <strong>{todosCount}</strong><span> item{todosCount !== 1 && "s"}</span>
         </span>
         <ul className="filters">
            <li>
               <a className={visibility === SHOW_ALL ? "selected" : undefined}
                  onClick={() => onFilterClick(SHOW_ALL)}>
                  All
               </a>
            </li>
            <li>
               <a className={visibility === SHOW_ACTIVE ? "selected" : undefined}
                  onClick={() => onFilterClick(SHOW_ACTIVE)}>
                  Active
               </a>
            </li>
            <li>
               <a className={visibility === SHOW_COMPLETED ? "selected" : undefined}
                  onClick={() => onFilterClick(SHOW_COMPLETED)}>
                  Completed
               </a>
            </li>
         </ul>
      </footer>
   );
}

Footer.propTypes = {
   visibility: PropTypes.string.isRequired,
   todosCount: PropTypes.number.isRequired,
   onFilterClick: PropTypes.func.isRequired
};

export default Footer;
