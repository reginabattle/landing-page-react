import React from 'react';

const Banner = () => {
	return (
		<section className="banner">
			<figure className="banner-image" role="img" aria-label="Three kids sitting ona couch playing video games">
				<figcaption className="banner-caption">
				  <div className="banner-caption-content">
						<p>New games and accessories</p>
						<h2>Monthly packages. <br/> Excitement delivered daily.</h2>
						<p>What&rsquo;s the best way to shop for the latest video games and peripherals? How about never shopping at all? You’ll get new stuff on your doorstep &mdash; every month.</p>
						<button className="button">Get started</button>
					</div>
				</figcaption>
			</figure>
	  </section>
	)
}

export default Banner;