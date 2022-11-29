import Header from './components/Header';
import Cards from './components/Cards';

function App() {
    const info = [
        {
            id: '0',
            caption: 'Caption',
            text: 'Qvel illum, qui dolorem ipsum, quia dolor sit, amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt, ut labore et dolore magnam aliquam quaerat voluptatem.',
        },
        {
            id: '1',
            caption: 'Caption',
            text: 'Quis autem vel eum iure reprehenderit, qui in ea voluptate velit esse, quam nihil molestiae consequatur, vel illum, qui dolorem ipsum, quia dolor sit, amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt, ut labore et dolore magnam aliquam quaerat voluptatem.',
        },
        {
            id: '2',
            caption: 'Caption',
            text: 'Quis autem vel eum iure reprehenderit, qui in ea voluptate. Quis autem vel eum iure reprehenderit, qui in ea voluptate velit esse, quam nihil molestiae consequatur, vel illum, qui dolorem ipsum, quia dolor sit, amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt, ut labore et dolore magnam aliquam quaerat voluptatem.',
        },
    ];

    return (
        <div>
            <Header/>
            <Cards
                info={info}
            />
        </div>
    );
}

export default App;
