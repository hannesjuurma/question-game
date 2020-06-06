import React from 'react';

import {
    IconContext,
    IIconContext,
} from './icon-context';

export interface IIconProviderProps extends IIconContext {
    children: React.ReactNode;
}

const IconProvider: React.FC<IIconProviderProps> = (props: IIconProviderProps) => {
    const { getPath } = props;
    const contextValue: IIconContext = {
        getPath,
    };

    return (
        <IconContext.Provider value={contextValue}>
            {props.children}
        </IconContext.Provider>
    );
};

export default IconProvider;
