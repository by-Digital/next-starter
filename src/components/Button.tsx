import { NextComponent } from '@/lib/interfaces';

const Button = ({ children, ...props }: NextComponent) => {
    return <button {...props}>{children}</button>;
};

export default Button;
