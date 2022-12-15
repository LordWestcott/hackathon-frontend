import React from 'react';


export interface ProfileContextInterface {
    user: string;
    currentStreak: number;
    streakPeriodFulFilled: boolean;
}

export const ProfileContext = React.createContext<ProfileContextInterface | null>(null); 