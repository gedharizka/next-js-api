import headerStyle from '../styles/Header.module.css'
const Header = () => {
 
    return (
        <div>
            <h1 className={headerStyle.title}>
                <span>Web dev</span> News
            </h1>
            <p className={headerStyle.description}>Keep up to date with date with the lates dev news</p>
        </div>
    )
}

export default Header
