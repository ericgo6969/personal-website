import React from 'react';
import AppHead from '../components/AppHead';
import { Contact } from '../components/elements';

function contact() {
    return (
        <div>
            <AppHead />
            <main className="h-screen w-screen bg-black flex justify-center items-center py-2">
                <Contact />
            </main>
        </div>
    );
}

export default contact;
