import Image from 'next/image';

function Banner() {
	return (
		<div>
			<Image
				objectFit="cover"
				height={100}
				width={1024}
				src="https://images.pexels.com/photos/1486866/pexels-photo-1486866.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
			/>
		</div>
	);
}

export default Banner;
