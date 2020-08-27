import React from 'react';
import {TextCard} from './TextCard';
import {AudioCard} from './AudioCard';
import {ImageCard} from './ImageCard';
import {VideoCard} from './VideoCard';


const CardTypes={
  'textCard':TextCard,
  'audioCard':AudioCard,
  'imageCard':ImageCard,
  'videoCard':VideoCard
};

export class CardList extends React.Component {

  render(){
    let MyCom;
    const totalCards=this.props.cardList.map((cardItem, i)=>

      <div>
        {
          MyCom=CardTypes[cardItem.tipo]
        }


        <MyCom item={cardItem} /> <br />
      </div>
    );

    return <div>{totalCards}</div>;

  }
}
