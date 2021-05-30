import { Layout as AntLayout } from 'antd';
import classNames from 'classnames';
import { Children, ReactNode } from 'react';

import './Layout.scss';

interface LayoutChildrenProps {
    children: ReactNode;
    className?: string;
}

interface HeaderProps extends LayoutChildrenProps {}

const Header = ({ children, className }: HeaderProps) => (
    <AntLayout.Header className={classNames('layout__header', className)}>
        {children}
    </AntLayout.Header>
);

interface ContentProps extends LayoutChildrenProps {}

const Content = ({ children, className }: ContentProps) => (
    <AntLayout.Content className={classNames('layout__content', className)}>
        {children}
    </AntLayout.Content>
);

interface SiderProps extends LayoutChildrenProps {
    width?: string;
    collapsed?: boolean;
}

const Sider = ({
    children,
    className,
    width = '15rem',
    collapsed = false,
}: SiderProps) => (
    <AntLayout.Sider
        collapsible
        collapsedWidth="0px"
        collapsed={collapsed}
        className={classNames('layout__sider', className)}
        width={width}
        trigger={false}
    >
        {children}
    </AntLayout.Sider>
);

interface FooterProps extends LayoutChildrenProps {}

const Footer = ({ children, className }: FooterProps) => (
    <AntLayout.Footer className={classNames('layout__footer', className)}>
        {children}
    </AntLayout.Footer>
);

interface LayoutProps {
    children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
    const childs = Children.toArray(children);

    const HeaderElem = childs.find(({ type }: any) => type.name === 'Header');
    const ContentElem = childs.find(({ type }: any) => type.name === 'Content');
    const SiderElem = childs.find(({ type }: any) => type.name === 'Sider');
    const FooterElem = childs.find(({ type }: any) => type.name === 'Footer');

    return (
        <AntLayout className="layout">
            <AntLayout>
                {HeaderElem}
                {ContentElem}
                {FooterElem}
            </AntLayout>
            {SiderElem}
        </AntLayout>
    );
};

Layout.Header = Header;
Layout.Content = Content;
Layout.Sider = Sider;
Layout.Footer = Footer;

export default Layout;
