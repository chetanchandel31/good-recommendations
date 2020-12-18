import React from 'react';
import TabContent from './tabContent';

export default function TabContainer (props) {
    const animeList = [
        {
            name: 'Naruto',
            rating: '4.5/5',
            description: `This is a Japanese series written and illustrated by Masashi Kishimoto. It tells the story of Naruto Uzumaki, a young ninja who seeks recognition from his peers and dreams of becoming the Hokage, the leader of his village. The story is told in two parts – the first set in Naruto's pre-teen years, and the second in his teens. The series is based on two one-shot manga by Kishimoto: Karakuri (1995), which earned Kishimoto an honorable mention in Shueisha's monthly Hop Step Award the following year, and Naruto (1997).`
        },
        {
            name: 'One-piece',
            rating: '4.5/5',
            description: `This Japanese series written and illustrated by Eiichiro Oda has been serialized in Shueisha's Weekly Shōnen Jump magazine since July 1997, with its individual chapters compiled into 97 tankōbon volumes as of September 2020. The story follows the adventures of Monkey D. Luffy, a boy whose body gained the properties of rubber after unintentionally eating a Devil Fruit. With his crew of pirates, named the Straw Hat Pirates, Luffy explores the Grand Line in search of the world's ultimate treasure known as "One Piece" in order to become the next King of the Pirates.`
        },
        {
            name: 'Dragon Ball Z',
            rating: '4/5',
            description: `This series follows the adventures of the protagonist, Son Goku, from his childhood through adulthood as he trains in martial arts. He spends his childhood far from civilization until he meets a teen girl named Bulma, who encourages him to join her quest in exploring the world in search of the seven orbs known as the Dragon Balls, which summon a wish-granting dragon when gathered. Along his journey, Goku makes several other friends, becomes a family man, discovers his alien heritage, and battles a wide variety of villains, many of whom also seek the Dragon Balls.`
        }
    ]

    const bookList = [
        {
            name: 'The Power of Now',
            rating: '4/5',
            description: `The Power of Now has sold over 2 million copies worldwide and has been translated into over 30 foreign languages. Much more than simple principles and platitudes, the book takes readers on an inspiring spiritual journey to find their true and deepest self and reach the ultimate in personal growth and spirituality: the discovery of truth and light. In the first chapter, Tolle introduces readers to enlightenment and its natural enemy, the mind. He awakens readers to their role as a creator of pain and shows them how to have a pain-free identity by living fully in the present. The journey is thrilling, and along the way, the author shows how to connect to the indestructible essence of our Being, "the eternal, ever-present One Life beyond the myriad forms of life that are subject to birth and death."`
        },
        {
            name: 'Many lives many masters',
            rating: '5/5',
            description: `Psychiatrist Dr Brian Weiss had been working with Catherine, a young patient, for eighteen months. Catherine was suffering from recurring nightmares and chronic anxiety attacks. When his traditional methods of therapy failed, Dr Weiss turned to hypnosis and was astonished and sceptical when Catherine began recalling past-life traumas which seemed to hold the key to her problems.

            Dr Weiss's scepticism was eroded when Catherine began to channel messages from 'the space between lives', which contained remarkable revelations about his own life. Acting as a channel for information from highly evolved spirit entities called the Masters, Catherine revealed many secrets of life and death.`
        },
        {
            name: 'The autobiography of a Yogi',
            rating: '4.5/5',
            description: `Inspiring stalwarts like the Beatles, Steve Jobs and Ravi Shankar, Autobiography of a Yogi is an immensely gratifying spiritual read that has altered and enriched the lives of millions across the world, since it was first published in 1946.
            An originative text that tells the story of Paramhansa Yogananda, this book has been revered for its memorable, incisive and instructive teachings. This spiritual autobiography will take you on an incredible journey of Indian mysticism and spirituality and deliver humbling, comforting truths about life and existence.
            A book that deserves a place in every home..`
        }
    ]
    
    const gameList = [
        {
            name: 'Among us',
            rating: '3/5',
            description: `Among Us is a multiplayer game for four to ten players. One to three players (depending on what the host selected) are chosen to be the impostor(s) each round. A game can take place on one of three maps: a spaceship called "The Skeld", a headquarters building called "MIRA HQ", or a planet base called "Polus". The Crewmates win by completing all tasks, or by identifying and eliminating all Impostors. The Impostors win when the number of Impostors is equal to the number of Crewmates, or when a sabotage countdown reaches zero.`
        },
        {
            name: 'Dragonball Xenoverse 2',
            rating: '4.5/5',
            description: `Xenoverse 2 is the fourth Dragon Ball video game to feature character customization, and allows players to choose from five races: Humans, Saiyans, Majins, Namekians and Frieza's race, each with different strengths and weaknesses. The game is very similar to its predecessor in terms of gameplay. It is primarily set in 3D battle arenas modeled after notable locations in the Dragon Ball universe, with the central hub being an expanded version of Toki-Toki City, known as Conton City.  Players also have a much greater role in the story, as their choices can effect how the story unfolds. Multiplayer servers are now able to hold up to 3000 players at once.`
        },
        {
            name: 'League of Legends',
            rating: '4/5',
            description: `League of Legends (abbreviated LoL or League) is a 2009 multiplayer online battle arena video game developed and published by Riot Games. As in other multiplayer online battle arena (MOBA) games, each player in League of Legends controls a character ("champion") with a set of unique abilities. Most games involve two teams of five players, with each player using a different champion. The two teams compete to be the first to destroy the Nexus structure within the opposing base.`
        }
    ]


    return(
        <div>
            {props.tab === 'Games'? <TabContent list={gameList}/>
            :props.tab === 'Books' ? <TabContent list={bookList}/>
            :props.tab === 'Anime'? <TabContent list={animeList}/>
            : null }
        </div>
    )
}