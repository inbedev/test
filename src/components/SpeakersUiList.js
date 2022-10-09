import React from "react";
import SpeakerUi from "./SpeakerUi";
import {data} from '../data';

function SpeakersUiList() {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '50px' }}>
{/*parcourir les data et afficher les speakerUi*/}
{
  data.map((speaker)=> {
    return <SpeakerUi name={speaker.first}
    company={speaker.company}
    prenom={speaker.last}
    bio={speaker.bio}
    twit={speaker.twitterHandle}/>;
  })
}

      {/* <SpeakerUi
        img="./images/gery.jpg"
        name="Regis Atemengue"
        details="Developpeur Fullstack JAvascript"
        user="Regis"
        home="Yaoundé"
        twit="@regis"
      />

      <SpeakerUi
        img="./images/herve.jpg"
        name="Herve"
        details="Developpeur Fullstack "
        user="Hever"
        home="Yaoundé"
        twit="@hever"
      />

      <SpeakerUi
        img="./images/speaker-1124.jpg"
        name="Gery"
        details="Developpeur Backend"
        user="Gery"
        home="Yaoundé"
        twit="@gery"
      />

      <SpeakerUi
        img="./images/speaker-1124.jpg"
        name="Gery"
        details="Developpeur Backend"
        user="Gery"
        home="Yaoundé"
        twit="@gery"
      />

      <SpeakerUi
        img="./images/speaker-1124.jpg"
        name="Gery"
        details="Developpeur Backend"
        user="Gery"
        home="Yaoundé"
        twit="@gery"
      />

      <SpeakerUi
        img="./images/speaker-1124.jpg"
        name="Gery"
        details="Developpeur Backend"
        user="Gery"
        home="Yaoundé"
        twit="@gery"
/>*/ }
    </div>
  );
}

export default SpeakersUiList;
