import React from "react";
import "./header.css";
import people from "../../assets/people.png";
import ai from "../../assets/ai.png";

const Header = () => {
	return (
		<div className="gpt3__header section__padding">
			<div className="gpt3__header-content">
				<h1 className="gradient__text">
					Let's Build Something amazing with GPT-3 Open-AI
				</h1>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio
					ab, quo sed non molestiae aspernatur quisquam quod ipsa dolores
					enim veniam animi cum! Nisi repellat quas quam veniam libero.
					Perferendis excepturi cupiditate cum eum, ratione modi quaerat
					accusamus voluptatibus omnis laboriosam unde odit reprehenderit,
					consequuntur quod facilis in repellat. Unde.
				</p>

				<div className="gpt3__header-content__input">
					<input type="email" placeholder="Your email address" />
					<button type="button">Get Started</button>
				</div>

				<div className="gpt3__header-content__people">
					<img src={people} alt="people" />
					<p>1,600 people requested access to visit in the last 24hours</p>
				</div>

				<div className="gpt3__header-image">
					<img src={ai} alt="ai" />
				</div>
			</div>
		</div>
	);
};

export default Header;
