import React from 'react';
import classnames from 'classnames';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';


const features = [
  {
    title: <>Play</>,
      imageUrl: 'main/play.svg',
    description: (
      <>
        Fun 2D, multiplayer, adventure focused on skill-based gameplay and rewarding player contributions.
      </>
    ),
  },
  {
      title: <>Gather</>,
    imageUrl: 'main/gather.svg',
    description: (
      <>
         Find items, parts, and mission out in the world that you can use or sell to the highest bidder.
      </>
    ),
  },
  {
    title: <>Earn</>,
    imageUrl: 'main/earn.svg',
    description: (
      <>
        Complete missions in to get Diamonds, then deposit in the Vault to collect transaction fees.
      </>
    ),
  },
];

function Feature({imageUrl, title, description}) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={classnames('col col--4', styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

function Home() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Chaotic P2E Adventure">
      <header className={classnames('hero hero--primary', styles.heroBanner)}>
        <div className="container">
            <Link>
                <img src='https://spacemonkey.games/main/info.png'  />
        </Link>
            <Link>
                <iframe
                    src="https://player.vimeo.com/video/725442859?h=26040decf5&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
                    width="449" height="253" frameBorder="0" allow="autoplay; fullscreen; picture-in-picture"
                    allowFullScreen title="Level 2 Teaser"></iframe>
               
      </Link>
            <p></p>
            <div className={styles.buttons}>
            <Link
                className={classnames(
                    'button button--outline button--secondary button--lg',
                    styles.getStarted,
                )}
                to={useBaseUrl('docs/')}>
              Play Now!
            </Link>
          </div>
        </div>
      </header>
      <main>
          <div className="thing">
           Multiplayer features coming soon:
          </div>
        {features && features.length > 0 && (
          <section className={styles.features}>
            <div className="container">
              <div className="row" >
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout>
  );
}

export default Home;
