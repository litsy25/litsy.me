"use client"
import dynamic from 'next/dynamic';

const SettingsClient = dynamic(() => import('./SettingsClient'), { ssr: false });

export default SettingsClient;