
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="w-full py-4 bg-white/95 backdrop-blur-sm border-b sticky top-0 z-50">
      <div className="container flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <span className="text-2xl font-bold text-primary">Easy English</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                {/* Исправлено: используем просто NavigationMenuLink вместо вложенного Link */}
                <NavigationMenuLink
                  className={navigationMenuTriggerStyle()}
                  asChild
                >
                  <Link to="/">Главная</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger>О курсе</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4">
                    <li className="row-span-3">
                      <NavigationMenuLink asChild>
                        <a
                          className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-purple-600/20 to-purple-800/20 p-6 no-underline outline-none focus:shadow-md"
                          href="/#"
                        >
                          <div className="mb-2 mt-4 text-lg font-medium">
                            Особенности курса
                          </div>
                          <p className="text-sm leading-tight text-muted-foreground">
                            Современная методика обучения английскому языку для быстрого прогресса
                          </p>
                        </a>
                      </NavigationMenuLink>
                    </li>
                    <ListItem href="/#программа" title="Программа обучения">
                      Подробная программа курса по уровням
                    </ListItem>
                    <ListItem href="/#преподаватели" title="Преподаватели">
                      Познакомьтесь с нашими опытными преподавателями
                    </ListItem>
                    <ListItem href="/#отзывы" title="Отзывы студентов">
                      Узнайте, что говорят наши выпускники
                    </ListItem>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                {/* Исправлено: используем просто NavigationMenuLink вместо вложенного Link */}
                <NavigationMenuLink
                  className={navigationMenuTriggerStyle()}
                  asChild
                >
                  <Link to="/#тарифы">Тарифы</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                {/* Исправлено: используем просто NavigationMenuLink вместо вложенного Link */}
                <NavigationMenuLink
                  className={navigationMenuTriggerStyle()}
                  asChild
                >
                  <Link to="/#контакты">Контакты</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
          <Button size="lg" className="bg-purple-600 hover:bg-purple-700">
            Записаться на курс
          </Button>
        </div>

        {/* Mobile Navigation Toggle */}
        <button
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 bg-white border-b shadow-lg z-50">
          <nav className="container py-4 flex flex-col gap-4">
            <Link
              to="/"
              className="px-4 py-2 hover:bg-slate-100 rounded-lg"
              onClick={() => setIsMenuOpen(false)}
            >
              Главная
            </Link>
            <Link
              to="/#программа"
              className="px-4 py-2 hover:bg-slate-100 rounded-lg"
              onClick={() => setIsMenuOpen(false)}
            >
              Программа обучения
            </Link>
            <Link
              to="/#тарифы"
              className="px-4 py-2 hover:bg-slate-100 rounded-lg"
              onClick={() => setIsMenuOpen(false)}
            >
              Тарифы
            </Link>
            <Link
              to="/#отзывы"
              className="px-4 py-2 hover:bg-slate-100 rounded-lg"
              onClick={() => setIsMenuOpen(false)}
            >
              Отзывы
            </Link>
            <Link
              to="/#контакты"
              className="px-4 py-2 hover:bg-slate-100 rounded-lg"
              onClick={() => setIsMenuOpen(false)}
            >
              Контакты
            </Link>
            <Button
              size="lg"
              className="bg-purple-600 hover:bg-purple-700 mt-2"
            >
              Записаться на курс
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";

export default Header;
