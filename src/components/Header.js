

const Header = () => {
    return (
        <header className='header'>
            <h1>California Fire Map & Tracker </h1> 
            <h2>Powered by <span className='nasa'>NASA</span></h2>
            <p className='header-text'>An interactive map of wildfires burning across the Bay Area and California, 
                including the Silverado Fire in Orange County and the Glass Fire in Napa.
                <a className='link' href='https://www.sfchronicle.com/california-wildfires/article/fires-live-updates-Santa-Rosa-Napa-Glass-Shady-15495508.php'> 
                Get breaking news and live updates including on evacuation orders and PG&E outages here.</a>
                </p>
        </header>
    )
}

export default Header
