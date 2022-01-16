import React from 'react';
import '../../index.css';
import './index.css';

const Info = () => {
  return (
    <>
      <main id="info">
        <div>
          <section className="s1">
            <h3>Our innovations</h3>
            <ul>
              <li>isten-and-repeat playlists – perfect during commuting</li>
              <li>RepeateTillYouSucceed® wordlists</li>
              <li>recordings only from native speakers</li>
            </ul>
          </section>
          <section className="s2">
            <h3>Ideal for</h3>
            <ul>
              <li>students</li>
              <li>people working a lot</li>
              <li>travellers</li>
            </ul>
          </section>
          <section className="s3">
            <p>
              Listen-and-repeat playlists – no time through a busy day? Repeat
              while driving a car or sitting in a public transport. Our native
              speakers will let you learn perfect pronunciation.
            </p>
          </section>
        </div>
      </main>
    </>
  );
};

export default Info;
