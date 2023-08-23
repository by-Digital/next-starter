import React, { FC } from 'react';

export default interface NextComponent extends FC {
    children?: React.ReactNode;
}
