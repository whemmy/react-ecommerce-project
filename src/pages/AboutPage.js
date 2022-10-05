import React from 'react'
import styled from 'styled-components'
import { PageHero } from '../components'
import aboutImg from '../assets/hero-bcg.jpeg'

const AboutPage = () => {
  return (
    <main>
      <PageHero title="about" />
      <Wrapper className="page section section-center">
        <img src={aboutImg} alt="cool" />
        <article>
          <div className="title">
            <h2>our values</h2>
            <div className="underline"></div>
          </div>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit facere
            sunt, unde sapiente voluptate ullam earum eveniet blanditiis magnam
            commodi incidunt fuga eligendi possimus temporibus quis omnis sint
            in. Mollitia asperiores consequatur quisquam. Beatae ad fugiat omnis
            dolorum quae quod esse, illum nesciunt porro libero aliquam totam
            voluptatum unde dolore eum praesentium nemo magnam placeat. Nihil
            tenetur nam a doloribus doloremque, quia voluptatum illum
            perferendis aliquam aperiam, consequatur fugit eaque eum minus
            laborum, iure provident. Asperiores quis aspernatur, blanditiis
            nemo, officiis, dignissimos pariatur accusantium ipsam deleniti
            inventore nam ad earum?
          </p>
        </article>
      </Wrapper>
    </main>
  )
}

const Wrapper = styled.section`
  display: grid;
  gap: 4rem;
  img {
    width: 100%;
    display: block;
    border-radius: var(--radius);
    height: 500px;
    object-fit: cover;
  }
  p {
    line-height: 2;
    max-width: 45em;
    margin: 0 auto;
    margin-top: 2rem;
    color: var(--clr-grey-5);
  }
  .title {
    text-align: left;
  }
  .underline {
    margin-left: 0;
  }
  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
  }
`
export default AboutPage
