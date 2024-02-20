'use client';
import { ThemeProvider } from 'next-themes';
import React from 'react';
import { Toaster } from 'react-hot-toast';
import { NextSSRPlugin } from "@uploadthing/react/next-ssr-plugin";
import { extractRouterConfig } from "uploadthing/server";
import { ourFileRouter } from './api/uploadthing/core';



const Provider = ({children}) => {
    return (
        <ThemeProvider attribute='class' defaultTheme='dark'>
            <NextSSRPlugin
          routerConfig={extractRouterConfig(ourFileRouter)}
        />
           <Toaster position='top-right' reverseOrder={false}/>
           {children}
        </ThemeProvider>
    );
};

export default Provider;