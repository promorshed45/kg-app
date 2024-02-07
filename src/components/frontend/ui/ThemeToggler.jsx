'use client';
import { useTheme } from 'next-themes';
import { LuMoon, LuSun } from 'react-icons/lu';

const ThemeToggler = () => {
    const { theme, setTheme } = useTheme();

    return (
        <div>
            <button
                className='flex bg-gray-200 text-primary px-2 py-2 rounded-full'
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            >
                {theme === 'dark' ? <LuSun className='text-2xl' /> : <LuMoon className='text-2xl' />}
            </button>
        </div>
    );
};

export default ThemeToggler;
