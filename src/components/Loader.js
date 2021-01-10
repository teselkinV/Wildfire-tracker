import spiner from './spinner.gif'

const Loader = () => {
    return (
        <div className='spinner'>
            <img src={spiner} alt='loader'/>
            <h1>Fetching data</h1>
        </div>
    )
}

export default Loader
