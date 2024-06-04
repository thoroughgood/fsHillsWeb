// button.tsx
'use client';
import React, { Children, useState } from 'react';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from './ui/navigation-menu';

export default function NavigationBar() {
  return (
    <>
      <NavigationMenu className="absolute w-full max-w-full min-w-full top-0 left-0 bg-black/70 py-4">
        <NavigationMenuList className="container mx-auto flex justify-between items-center">
          <NavigationMenuItem className="flex space-x-4 items-center">
            <NavigationMenuTrigger>Item One</NavigationMenuTrigger>
            <NavigationMenuContent>
              <NavigationMenuLink>This is a</NavigationMenuLink>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem className="flex space-x-4 items-center">
            <NavigationMenuTrigger>Item One</NavigationMenuTrigger>
            <NavigationMenuContent>
              <NavigationMenuLink>This is a</NavigationMenuLink>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </>
  );
}
