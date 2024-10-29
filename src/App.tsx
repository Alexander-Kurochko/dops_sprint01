import React, {useState} from 'react';
import './App.css';
import {Modal} from './components/modal/Modal';
import {Button} from './components/Button';
import s from './components/Button.module.css'
import {Croses} from './components/Croses';


function App() {

    const croses = [
        {id: 1, model: 'ADIDAS', size: 'XXX'},
        {id: 2, model: 'ABIBAS', size: 'YYY'},
        {id: 3, model: 'PUMA', size: 'ZZZ'}
    ]

    return (
        <div>
            {/*<Button onClick={() => {}}
                    backGround={'red'}
                    className={s.redForSuperButton}
            >Red Button
            </Button>
            <Button onClick={() => {}}
                    backGround={'blue'}
                    className={s.blueForSuperButton}
            >Blue Button
            </Button>*/}

            {/*            <Button onClick={() => {}} color={'red'}>Red Button</Button>
            <Button onClick={() => {}} color={'secondary'}>Secondary Button</Button>
            <Button onClick={() => {}}>Default Button</Button>
            <Button onClick={() => {}} disabled>Disabled Button</Button>*/}

            {/*<Croses croses={croses}>lalala</Croses>
            <Croses croses={croses}><input type="text"/></Croses>
            <Croses croses={croses}>
                <Button onClick={() => {}} color={'red'}>Red Button</Button>
                <Button onClick={() => {}} color={'secondary'}>Secondary Button</Button>
                <Button onClick={() => {}}>Default Button</Button>
                <Button onClick={() => {}} disabled>Disabled Button</Button>
            </Croses>*/}

{/*            <Modal>
                <input type="email" placeholder={'email'}/>
                <input type="password" placeholder={'pass'}/>
                <button>send</button>
            </Modal>*/}

            <Modal>
                <p>Confidient Information</p>
                <input type="email" placeholder={'email'}/>
                <input type="pass" placeholder={'pass'}/>
                <input type="pass" placeholder={'pass'}/>
                <input type="checkbox"/>
                <button>send</button>
            </Modal>

        </div>
    );
}


export default App;
