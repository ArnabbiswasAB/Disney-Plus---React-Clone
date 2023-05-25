import React from "react";
import styled from "styled-components";

function Movies() {
	return (
		<Container>
			<h4>Recommended for You</h4>
			<Content>
				<Wrap>
					<img
						src="https://static.mirchi.in/thumb/imgsize-111520,msid-93918758,width-400,height-225,resizemode-1,webp-1/93918758.jpg"
						alt=""
					/>
				</Wrap>
				<Wrap>
					<img
						src="https://static.toiimg.com/thumb/msid-99336524,imgsize-109164,width-400,height-225,resizemode-1/99336524.jpg"
						alt=""
					/>
				</Wrap>
				<Wrap>
					<img
						src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/6EA416AD3B15FCC1BADC817A932A57FFF707556DB2233FFCB4CFEB7C8EEDE23C/scale?width=400&aspectRatio=1.78&format=jpeg"
						alt=""
					/>
				</Wrap>
				<Wrap>
					<img
						src="https://mcdn.wallpapersafari.com/medium/50/69/9TwgDI.jpg"
						alt=""
					/>
				</Wrap>
				<Wrap>
					<img
						src="https://mcdn.wallpapersafari.com/medium/50/69/9TwgDI.jpg"
						alt=""
					/>
				</Wrap>
				<Wrap>
					<img
						src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/6EA416AD3B15FCC1BADC817A932A57FFF707556DB2233FFCB4CFEB7C8EEDE23C/scale?width=400&aspectRatio=1.78&format=jpeg"
						alt=""
					/>
				</Wrap>
				<Wrap>
					<img
						src="https://static.toiimg.com/thumb/msid-99336524,imgsize-109164,width-400,height-225,resizemode-1/99336524.jpg"
						alt=""
					/>
				</Wrap>
				<Wrap>
					<img
						src="https://static.mirchi.in/thumb/imgsize-111520,msid-93918758,width-400,height-225,resizemode-1,webp-1/93918758.jpg"
						alt=""
					/>
				</Wrap>
			</Content>
		</Container>
	);
}

export default Movies;

const Container = styled.div``;

const Content = styled.div`
	display: grid;
	grid-gap: 25px;
	grid-template-columns: repeat(4, minmax(0, 1fr));
`;
const Wrap = styled.div`
	border-radius: 10px;
	cursor: pointer;
	overflow: hidden;
	border: 3px solid rgba(249, 249, 249, 0.1);
	box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
		rgb(0 0 0 / 73%) 0px 16px 10px -10px;
	transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;

	img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}

	&:hover {
		transform: scale(1.05);
		border-color: rgba(249, 249, 249, 0.8);
	}
`;
