import { FC } from 'react';

import ImgGallery from '../components/ImgGallery';

export const HomePage: FC = (): JSX.Element => {
    return (
        <div className="absolute h-screen inset-0 ">
            <ImgGallery />
        </div> 
    );
};