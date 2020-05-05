import React, { Component } from 'react';

import FadeIn from '../fade-in/fade-in';
import CharacterBox from './characterBox';
import ScoreDisplay from './score';

const shuffleArray = arr => (
    arr
      .map(a => [Math.random(), a])
      .sort((a, b) => a[0] - b[0])
      .map(a => a[1]) 
);

const initialChars = [
    {
        name: 'Albus Percival Wulfric Brian Dumbledore',
        img: 'img/characters/Albus_Percival_Wulfric_Brian_Dumbledore.jpg',
        clicked: false
    },
    {
        name: 'Arthur Weasley',
        img: 'img/characters/Arthur_Weasley.jpg',
        clicked: false
    },
    {
        name: 'Bellatrix Lestrange',
        img: 'img/characters/Bellatrix_Lestrange.png',
        clicked: false
    },
    {
        name: 'Cedric Diggory',
        img: 'img/characters/Cedric_Diggory.png',
        clicked: false
    },
    {
        name: 'Cho Chang',
        img: 'img/characters/Cho_Chang.jpg',
        clicked: false
    },
    {
        name: 'Craco Lucius Malfoy',
        img: 'img/characters/Draco_Lucius_Malfoy.png',
        clicked: false
    },
    {
        name: 'Dudley Dursley',
        img: 'img/characters/Dudley_Dursley.png',
        clicked: false
    },
    {
        name: 'Filius Flitwick',
        img: 'img/characters/Filius_Flitwick.png',
        clicked: false
    },
    {
        name: 'Fred Weasley',
        img: 'img/characters/Fred_Weasley.jpg',
        clicked: false
    },
    {
        name: 'George Weasley',
        img: 'img/characters/George_Weasley.jpg',
        clicked: false
    },
    {
        name: 'Ginevra Molly Weasley',
        img: 'img/characters/Ginevra_Molly_Weasley.jpg',
        clicked: false
    },
    {
        name: 'Harry James Potter',
        img: 'img/characters/Harry_James_Potter.jpg',
        clicked: false
    },
    {
        name: 'Hermione Jean Granger',
        img: 'img/characters/Hermione_Jean_Granger.jpg',
        clicked: false
    },
    {
        name: 'James Potter',
        img: 'img/characters/James_Potter.jpg',
        clicked: false
    },
    {
        name: 'Lavendar Brown',
        img: 'img/characters/Lavender_Brown.jpg',
        clicked: false
    },
    {
        name: 'Lily James Potter',
        img: 'img/characters/Lily_James_Potter.jpg',
        clicked: false
    },
    {
        name: 'Lucius Malfoy',
        img: 'img/characters/Lucius_Malfoy.png',
        clicked: false
    },
    {
        name: 'Luna Lovegood',
        img: 'img/characters/Luna_Lovegood.jpg',
        clicked: false
    },
    {
        name: 'Minerva McGonagall',
        img: 'img/characters/Minerva_McGonagall.jpg',
        clicked: false
    },
    {
        name: 'Molly Weasley',
        img: 'img/characters/Molly_Weasley.jpg',
        clicked: false
    },
    {
        name: 'Myrtle Elizabeth Warren',
        img: 'img/characters/Myrtle_Elizabeth_Warren.png',
        clicked: false
    },
    {
        name: 'Neville Longbottom',
        img: 'img/characters/Neville_Longbottom.jpg',
        clicked: false
    },
    {
        name: 'Percy Ignatius Weasley',
        img: 'img/characters/Percy_Ignatius_Weasley.jpg',
        clicked: false
    },
    {
        name: 'Peter Pettigrew',
        img: 'img/characters/Peter_Pettigrew.jpg',
        clicked: false
    },
    {
        name: 'Petunia Dursley',
        img: 'img/characters/Petunia_Dursley.png',
        clicked: false
    },
    {
        name: 'Pomona Sprout',
        img: 'img/characters/Pomona_Sprout.jpg',
        clicked: false
    },
    {
        name: 'Remus John Lupin',
        img: 'img/characters/Remus_John_Lupin.jpg',
        clicked: false
    },
    {
        name: 'Rita Skeeter',
        img: 'img/characters/Rita_Skeeter.jpg',
        clicked: false
    },
    {
        name: 'Ronald Bilius Weasley',
        img: 'img/characters/Ronald_Bilius_Weasley.jpg',
        clicked: false
    },
    {
        name: 'Severus Snape',
        img: 'img/characters/Severus_Snape.jpg',
        clicked: false
    },
    {
        name: 'Sirius Black',
        img: 'img/characters/Sirius_Black.jpg',
        clicked: false
    },
    {
        name: 'Tom Marvolo Riddle (Voldemort)',
        img: 'img/characters/Tom_Marvolo_Riddle.png',
        clicked: false
    },
    {
        name: 'Vernon Dursley',
        img: 'img/characters/Vernon_Dursley.jpg',
        clicked: false
    },
    {
        name: 'William Arthur Weasley',
        img: 'img/characters/William_Arthur_Weasley.png',
        clicked: false
    }
]

export default class Board extends Component {

    constructor(props){
        super(props);

        this.state = {
            user: {
                score: 0 
            },
            characters: shuffleArray( initialChars )
        };
    }

    onCharacterClick = ( index ) =>{
        if( !this.state.characters[index].clicked ){
            this.setState({
                characters: shuffleArray( this.state.characters.map( (character, current) =>  {
                    return ( current === index ) ? { ...character, clicked:true } : character
                })),
                user: {
                    ...this.state.user,
                    score: this.state.user.score + 1
                }
            });
            //and shuffle
        } else {
            this.setState({
                characters: shuffleArray(this.state.characters.map( character => { return { ...character, clicked : false } })),
                user: {
                    ...this.state.user,
                    score: 0
                }
            });
            //and shuffle
        }
        
    }

    render(){
        return (
            <div className="Board">
                <FadeIn 
                    in={true}
                    duration={450}
                    length={'30px'}
                    direction={'bottom'}
                    delay={'1s'}>
                    <h4>Try to click on every Harry Potter character once. Once you click a character the grid will shuffle.<br/>Try not to click the same character twice or the game will start all over!</h4>
                </FadeIn>
                <FadeIn 
                    in={true}
                    duration={500}
                    direction={'bottom'}
                    delay={'1.5s'}>
                    <ScoreDisplay
                        score={this.state.user.score} />
                </FadeIn>
                <CharacterBox 
                    characters={this.state.characters} 
                    onCharacterClick={this.onCharacterClick} />
            </div>
        )
    }

}