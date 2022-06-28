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
        Fun 2D, multiplayer, metroidvania adventure focused on skill-based gameplay and rewarding player contributions
      </>
    ),
  },
  {
      title: <>Gather</>,
    imageUrl: 'main/gather.svg',
    description: (
      <>
         Find items, parts, and mission out in the world that you can use or sell to the highest bidder
      </>
    ),
  },
  {
    title: <>Earn</>,
    imageUrl: 'main/earn.svg',
    description: (
      <>
        Turn missions in to get Diamonds then deposit Diamonds in the Vault to collect fees from all transactions
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
            <div className="thingy">
                <img src='https://spacemonkey.games/main/info.png'  />

            </div>
            <div className="thingy">
            <img src='https://spacemonkey.games/main/preview.gif'  />
            </div>

          <div className={styles.buttons}>
            <Link
                className={classnames(
                    'button button--outline button--secondary button--lg',
                    styles.getStarted,
                )}
                to={useBaseUrl('docs/')}>
              Single Player
            </Link>
              <Link
                  className={classnames(
                      'button button--outline button--secondary button--lg',
                      styles.getStarted,
                  )}
                  to={useBaseUrl('docs/')}>
                  White Paper
              </Link>
          </div>
        </div>
      </header>
      <main>
          <h2>Multiplayer coming soon!</h2>
        {features && features.length > 0 && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
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
