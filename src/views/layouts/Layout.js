/*
External dependencies.
*/
import React from "react";

export default function Layout ({ children, slug }) {
    return (
        <div className="container">
            <section className="page-section" id={slug}>
                <div className="container">
                    {children}
                </div>
            </section>
        </div>
    )
};
