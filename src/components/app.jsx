import { fetchSinglePlayer, fetchAllPlayers, addNewPlayer, removePlayer } from './api';

const PuppyContainers = (props) => {
    < div id='all-player-container' className="App" >
        Puppy Container
        <div className="single-player-card">
            <div className="header-info">
                <p className="pup-title">{fakePlayers[0].name}</p>
                <p className="pup-number">#{.id}</p>
            </div>
            <img src={fakePlayers[0].imageUrl} />
            <button className="detail-button" data-id={fakePlayers[0]}>
                See details
            </button>
            <button className="delete-button" data-id={fakePlayers[0]}>
                Remove from roster
            </button>
        </div>
    </div >
};

export default PuppyContainers;