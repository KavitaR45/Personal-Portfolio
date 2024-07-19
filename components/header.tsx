"use client";;
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";

const Header = () => {
    const { theme, setTheme } = useTheme();
    const toggleTheme = () => {
      setTheme(theme === 'dark' ? 'light' : 'dark');
    };
    return (
        <div className=" top-0 right-0  left-0 p-7 flex items-center justify-between z-30">
            <aside className="flex items-center gap-2">
                <span className="text-xl font-bold"> KR.</span>
            </aside>
            <aside className="flex gap-2 items-center">
                <Switch
                    checked={theme == 'dark'}
                    onCheckedChange={toggleTheme} id='toggle-theme'
                    className="bg-gray-200 dark:bg-gray-700"
                />
                <Button variant="outline" size="icon">
                    <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                    <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                </Button>
            </aside>
        </div>
    );
};

export default Header;
