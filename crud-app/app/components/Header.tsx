"use client";

import React from 'react';

export default function Header() {
    const headerStyle: React.CSSProperties = {
        backgroundColor: '#333',
        color: '#fff',
    };

    return (
        <header style={headerStyle}>
            <h1 style={{ margin: 0, padding: '20px', textAlign: 'center' }}>CRUD App</h1>
        </header>
    );

}