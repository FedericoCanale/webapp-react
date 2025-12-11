function Layout({ children }) {
    return (
        <div>
            <header>
                <h1>Webapp Film</h1>
            </header>

            <main>{children}</main>
        </div>
    );
}

export default Layout;