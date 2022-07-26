import React from 'react';
import { Controller, Scene } from "react-scrollmagic";
import styled from 'styled-components';
import { Tween } from 'react-gsap';
import Sequence from "./Sequence";
import "./gallery.scss";

export const Gallery = () => {
    let fixedClassName = '';
    return (
        <>
            <p className='adaptable-center-text text-base lg:text-lg font-semibold'>
                Symbol
            </p>
            <p className='adaptable-center-text text-base lg:text-lg font-semibold'>
                Price
            </p>

            <Controller>
                {/* <Scene duration={1200} offset={0} reverse={false} classToggle={[".gallery-section .gallery", "animate"]} > */}
                <Scene duration={1200} pin >
                    {/* {(event: any) => {
                            if (event.type === 'leave') {
                                fixedClassName = 'animate';
                                event.target.removeClassToggle(true);
                            } */}
                    {/* return ( */}
                    <Tween to={{ x: '-100%' }}>
                        <div className='overflow-wrapper'>
                            <div className='width-wide-sec'>
                                <div className='the-content-side'>
                                    <div className='galleryContainer'>
                                        <Sequence />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Tween>
                    {/* ) */}
                    {/* }} */}

                </Scene>
            </Controller>
        </>
    );
};