import { NavLink as RouterNavLink, NavLinkProps } from "react-router-dom";
import { forwardRef } from "react";
import { cn } from "@/lib/utils";

interface NavLinkCompatProps extends Omit<NavLinkProps, "className"> {
  className?: string;
  activeClassName?: string;
  pendingClassName?: string;
}

const NavLink = forwardRef<HTMLAnchorElement, NavLinkCompatProps>(
  ({ className, activeClassName, pendingClassName, to, ...props }, ref) => {
    // Base class indicating conversion to Facebook application styling
    const baseClass = "fb-app-link text-gray-700 hover:bg-gray-100 p-2 rounded-lg transition-colors duration-150";
    
    // Default styling reflecting Facebook's typical blue color for active/selected links
    const facebookActiveDefault = "text-[#1877f2] bg-blue-50/50 font-medium";

    return (
      <RouterNavLink
        ref={ref}
        to={to}
        className={({ isActive, isPending }) =>
          cn(
            baseClass, 
            className, 
            isActive && (activeClassName || facebookActiveDefault), 
            isPending && pendingClassName
          )
        }
        {...props}
      />
    );
  },
);

NavLink.displayName = "NavLink";

export { NavLink };