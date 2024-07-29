import classNames from 'classnames';
import styles from './use-me.module.scss';

export interface UseMeProps {
    className?: string;
    children: React.ReactNode;
    strProp?: string;
    compProp?: () => JSX.Element;
}

export const UseMe = ({ className, children, strProp, compProp }: UseMeProps) => {
    const asasas=0;
    return (
        <div className={classNames(styles.root, className)}>
            <div>{asasas}</div>
            <>{compProp}</>
            <div>{strProp}</div>
            {children}
        </div>
    );
};
