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
      imageUrl: 'img/icons/play-circle.svg',
    description: (
      <>
        Fun 2D, multiplayer, metroidvania adventure focused on skill-based gameplay and rewarding player contributions
      </>
    ),
  },
  {
      //title: <><a href = "https://play.spacemonkey.games"> Try single player</a></>,
      title: <>Gather</>,
      //href: 'https://github.com/facebook/docusaurus',
    imageUrl: 'img/icons/key.svg',
    description: (
      <>
         Find items, parts, and mission out in the world that you can use or sell to the highest bidder
      </>
    ),
  },
  {
    title: <>Earn</>,
    imageUrl: 'img/icons/dollar-sign.svg',
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
          <h1 className="hero__title"  style="color:#0044B3;" >{siteConfig.title}</h1>
          <p className="hero__subtitle"  style="color:#0044B3;" >{siteConfig.tagline}</p>

          <div className={styles.buttons}>
            <Link
              className={classnames(
                'button button--outline button--secondary button--lg',
                styles.getStarted,
              )}
              to={useBaseUrl('docs/')}>
              Read more here!
            </Link>
          </div>
        </div>
      </header>
      <main>
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
